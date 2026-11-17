# Canvas Lab · ADM1401 Introducción a la Empresa

Laboratorio interactivo para aprender y aplicar el **Modelo Canvas** (Tema 10) con casos reales
de la Península de Yucatán. Incluye tutorial paso a paso, ejemplo resuelto, encuesta, números,
rúbrica y reporte para subir a **Brightspace → Actividad 10**.

Profesora: Tania Rivera Lozano · Universidad Anáhuac Cancún · Escuela Internacional de Negocios.

Liga: https://taniariveraanahuac-creator.github.io/CANVAS-INTRODUCCIO-A-LA-EMPRESA/

## Cómo se guarda el avance
- **Siempre**: en el navegador de cada alumno (si cierra y vuelve, sigue donde se quedó).
- **Compartido para todo el grupo** (equipos en vivo y panel docente con todos los equipos):
  cuando `sync.json` tiene la URL del Apps Script, todo se guarda en una Hoja de Google.

### Activar el guardado compartido (una sola vez)
1. Crea una Hoja de Google nueva (por ejemplo «Canvas Lab ADM1401 · datos»).
2. Menú **Extensiones → Apps Script**. Borra lo que aparece y pega el contenido de `apps-script-Code.gs`. Guarda.
3. **Implementar → Nueva implementación** → tipo **Aplicación web**.
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier usuario**
4. Autoriza los permisos y copia la **URL de la aplicación web** (termina en `/exec`).
5. Pega esa URL en `sync.json`: `{ "url": "https://script.google.com/macros/s/…/exec" }`.

### ¿Qué pasa con lo que los alumnos ya capturaron?
**No se borra nada.** Mientras no hay hoja conectada, cada avance vive en el navegador de cada alumno.
Al conectar la hoja, la primera vez que cada alumno vuelve a abrir la página:
1. Se guarda una **versión de respaldo** de su trabajo («Respaldo antes de sincronizar · Nombre»).
2. Su trabajo se **combina** con el de sus compañeros: se suman integrantes, ideas, encuestas y justificaciones (no gana uno sobre otro).
3. Después todo se sincroniza normal (si alguien borra una idea, queda borrada).

Importar respaldos (.json) también combina sin borrar.

## Equipos y claves
Cada equipo entra con su clave (la docente las entrega por separado), registra a sus integrantes
(máximo 5) y ya tiene un caso asignado por defecto. Las claves se guardan cifradas (hash) en `index.html`.

## Reporte completo por caso (por estudiante)
En **📖 El caso**, cada estudiante elige cualquier caso, escribe su nombre y descarga el reporte con
**todas las actividades** (caso, preguntas detonadoras, equipo, encuesta, Canvas, justificaciones,
números, patrón, conclusión y rúbrica):
- **Con las respuestas de mi equipo** (solo para el caso de su equipo ⭐): lo que falte sale con espacios para llenar.
- **En blanco**: plantilla para llenar a mano o estudiar.

También en **📄 Reporte** → «📚 Descargar con todas las secciones (contestadas o no)».

## 🙋 Registros por alumno
Pestaña **🙋 Alumnos** (arriba a la derecha):
- **Docente:** todos los alumnos inscritos por grupo y equipo, con ideas aportadas al Canvas, encuestas capturadas,
  movimientos, bloques que coordina y última actividad. Botones 👁️ Ver (detalle) y ⬇️ Reporte individual. Lista en CSV.
- **Alumnos:** ven los registros de los integrantes de su equipo (su fila marcada con 👤) y descargan su reporte.

## Panel docente
Pestaña 🍎 Docente. La clave está guardada cifrada (hash) en `index.html`.

## Notas
- La página ya no incluye la lista de alumnos: cada quien se registra con su nombre.
- La Hoja de Google es tuya; en ella puedes ver y respaldar todos los datos.
