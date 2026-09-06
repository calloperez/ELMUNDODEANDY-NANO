# 🖼️ Image Prompt Templates — El Mundo de Andy&Nano

Plantillas reutilizables para generar cualquier asset de cualquier país. Todas parten del bloque base de `MASTER_VISUAL_STYLE.md` — acá solo se definen las variables por tipo de asset.

Variables comunes a todas las plantillas: `{country}`, `{subject}`, `{context}`.

---

## 1. Animal

```
A {subject}, native to {country}, in its natural habitat ({context}).
Alert, natural posture, looking gently toward camera or in profile.
Full body or three-quarter view, clearly identifiable species —
do not invent or alter the animal's real features.

[+ bloque base de MASTER_VISUAL_STYLE.md]
```

## 2. Monumento / lugar (landmark)

```
{subject}, the real and iconic landmark of {country}, photographed
from its most recognizable angle. Accurate architectural/geographic
representation — no invented structures, no impossible combinations.

[+ bloque base de MASTER_VISUAL_STYLE.md]
```

## 3. Comida (food)

```
A traditional plate of {subject} from {country}, simply plated on a
plain neutral surface or traditional tableware appropriate to the
culture. Appetizing, professional food-photography look, but not
over-styled. No text, no flags, no country symbols added artificially.

[+ bloque base de MASTER_VISUAL_STYLE.md]
```

## 4. Paisaje / naturaleza (nature)

```
{subject}, a real and geographically accurate landscape of {country}
({context} — e.g. desert, mountains, rainforest, coast, fjord,
savanna). Wide shot, natural light, no people needed unless the
landscape requires human scale for context.

[+ bloque base de MASTER_VISUAL_STYLE.md]
```

## 5. Hero (imagen principal de descubrimiento)

```
{subject}, the single most iconic and unmistakable image associated
with {country} — wide establishing shot with a clear focal point.
This is the FIRST image a child sees for this country, so it must be
immediately recognizable even without a caption.

[+ bloque base de MASTER_VISUAL_STYLE.md]
```

---

## Cómo completar las variables

`{subject}` y `{context}` salen directo del catálogo (`photos.js` →
`COUNTRY_ASSETS[id][tipo].subject`), que a su vez viene del plan
editorial de 195 países. Si el campo `subject` de un país no es
claro o parece dudoso, revisar contra una fuente antes de generar
la imagen (ver `verify_before_publication` en el plan original).

## Después de generar una imagen

1. Guardarla en `assets/countries/<id>/<tipo>.webp`.
2. En `photos.js`, actualizar esa entrada: `source_type` pasa a
   `"AI_GENERATED"`, `verified: true`, y agregar el campo `prompt`
   con el prompt final usado (para poder regenerar/auditar después).
3. No hace falta tocar nada de `app.js` — el resolver ya busca ese
   path automáticamente.
