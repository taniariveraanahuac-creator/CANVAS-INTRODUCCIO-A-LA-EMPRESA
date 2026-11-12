# Canvas Lab · ADM1401 Introducción a la Empresa

Laboratorio interactivo para aprender y aplicar el **Modelo Canvas** (Temas 9 y 10) con casos reales
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

## Equipos y claves
Cada equipo entra con su clave (la docente las entrega por separado), registra a sus integrantes
(máximo 5) y ya tiene un caso asignado por defecto. Las claves se guardan cifradas (hash) en `index.html`.

## Panel docente
Pestaña 🍎 Docente. La clave está guardada cifrada (hash) en `index.html`.

## Notas
- La página ya no incluye la lista de alumnos: cada quien se registra con su nombre.
- La Hoja de Google es tuya; en ella puedes ver y respaldar todos los datos.
