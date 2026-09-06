# 🔧 Asset Pipeline — cómo agregar contenido sin tocar la lógica

## 1. Cómo agregar un país nuevo
Ya no aplica — los 195 países están cargados desde el inicio en `data.js` (datos) y `photos.js` (catálogo de assets). No hace falta "agregar" un país, solo completar su contenido.

## 2. Cómo agregar una imagen definitiva
1. Generar la imagen siguiendo `MASTER_VISUAL_STYLE.md` + `IMAGE_PROMPT_TEMPLATES.md`.
2. Guardarla como `assets/countries/<id>/<tipo>.webp` (ej: `assets/countries/jp/animal.webp`).
3. En `photos.js`, en la entrada de ese país y tipo, cambiar:
   - `source_type: "AI_GENERATED"`
   - `verified: true`
   - (opcional) agregar `prompt: "..."` con el prompt final usado, para poder auditar/regenerar después.
4. Nada más. La app la va a mostrar automáticamente.

## 3. Dónde colocarla
`assets/countries/<id>/<tipo>.webp`, donde `<id>` es el código de 2 letras interno (ej. `jp`, `ar`, `us` — el mismo `id` que ya usa `data.js`) y `<tipo>` es uno de: `hero`, `animal`, `landmark`, `food`, `nature`.

## 4. Cómo la detecta la app
`getCountryAsset(id, tipo)` en `app.js` busca la entrada en `COUNTRY_ASSETS` (definido en `photos.js`). `mountAssetImage()` intenta cargar, en orden:
1. `path` (el archivo local `assets/countries/...`)
2. `url` (una foto real verificada de Wikimedia, si existe — hoy hay 21 países con esto)
3. El dibujo SVG ilustrado (`illustrations.js`), si existe para ese país
4. Un placeholder elegante genérico (degradado + ícono + "Imagen en camino")

Ningún paso rompe la pantalla ni bloquea la navegación.

## 5. Qué ocurre si falta un asset
Se muestra el placeholder elegante (paso 4 de arriba). El niño puede seguir jugando con total normalidad — el chip funciona igual, solo que en vez de una imagen aparece el placeholder al tocarlo.

## 6. Cómo marcar un asset como verificado
Cambiar `verified: true` y `source_type` a `"AI_GENERATED"` (imagen generada por IA ya revisada) o `"WIKIMEDIA_CC"` (foto real, como las 21 que ya están). Los assets con `verified: false` y `source_type: "AI_GENERATED_PENDING"` son los que todavía faltan generar — se puede filtrar el catálogo por ese campo para saber exactamente qué falta en cualquier momento.
