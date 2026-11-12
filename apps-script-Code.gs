/**
 * Canvas Lab ADM1401 · Guardado compartido
 * Guarda el avance de todos los equipos en esta Hoja de Google.
 * Publicar: Implementar → Nueva implementación → Aplicación web
 *   - Ejecutar como: Yo
 *   - Quién tiene acceso: Cualquier usuario
 * Copia la URL que termina en /exec y pásala para ponerla en sync.json.
 */
const SHEET_NAME = 'datos';
const CHUNK = 45000; // una celda admite hasta 50,000 caracteres

function hoja_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['ruta', 'actualizado', 'borrado', 'json']);
    sh.setFrozenRows(1);
  }
  return sh;
}

function salida_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// Lee los documentos cambiados desde "since" (milisegundos)
function doGet(e) {
  try {
    const since = Number((e && e.parameter && e.parameter.since) || 0);
    const sh = hoja_();
    const last = sh.getLastRow();
    const docs = [];
    if (last > 1) {
      const vals = sh.getRange(2, 1, last - 1, sh.getLastColumn()).getValues();
      vals.forEach(function (r) {
        if (!r[0]) return;
        const ts = Number(r[1]) || 0;
        if (ts >= since) {
          docs.push({ path: String(r[0]), ts: ts, deleted: r[2] === true, json: r.slice(3).join('') });
        }
      });
    }
    return salida_({ ok: true, docs: docs, now: Date.now() });
  } catch (err) {
    return salida_({ ok: false, error: String(err) });
  }
}

// Escribe o borra un documento: { op: 'set' | 'del', path, json }
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(25000);
    const b = JSON.parse(e.postData.contents);
    if (!b || !b.path || !/^[A-Za-z0-9_\-.~:@+\/]{1,500}$/.test(b.path)) throw new Error('ruta inválida');
    const sh = hoja_();
    const last = sh.getLastRow();
    let row = -1;
    if (last > 1) {
      const rutas = sh.getRange(2, 1, last - 1, 1).getValues();
      for (let i = 0; i < rutas.length; i++) { if (rutas[i][0] === b.path) { row = i + 2; break; } }
    }
    if (row < 0) row = last + 1;
    const ts = Date.now();
    const json = b.op === 'del' ? '' : String(b.json || '');
    const partes = [];
    for (let i = 0; i < json.length; i += CHUNK) partes.push("'" + json.slice(i, i + CHUNK));
    if (!partes.length) partes.push('');
    const ancho = Math.max(sh.getLastColumn(), 3 + partes.length);
    const fila = [b.path, ts, b.op === 'del'].concat(partes);
    while (fila.length < ancho) fila.push('');
    sh.getRange(row, 1, 1, ancho).setValues([fila]);
    return salida_({ ok: true, ts: ts });
  } catch (err) {
    return salida_({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}
