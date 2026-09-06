# 🎨 Master Visual Style — El Mundo de Andy&Nano

Guía única de estilo para generar (con IA, externamente) todas las imágenes de la app. El objetivo: que 20 imágenes de 20 países distintos se vean como parte de la MISMA aplicación.

Usar este bloque como base de **todos** los prompts, cambiando solo el sujeto:

---

## Prompt base (agregar el sujeto específico al principio)

```
[SUJETO ESPECÍFICO], photographed in the style of a premium educational
children's app. Professional documentary-style photography, natural
cinematic lighting, golden-hour warmth without being oversaturated.
Vivid but natural colors, not artificially boosted. Clean, uncluttered
composition with the main subject clearly centered and in sharp focus,
soft natural background blur (shallow depth of field). Shot on a
high-end mirrorless camera, 85mm lens look, high resolution, photorealistic,
no visible AI artifacts, no distortion, anatomically correct.

STRICT EXCLUSIONS: no embedded text, no watermarks, no logos, no brand
names, no visible human faces unless absolutely necessary to the subject,
no violence, no disturbing or scary elements, no clutter, no busy
backgrounds, nothing that looks like a stock-photo cliché.

Aspect ratio: 4:3. Style consistent with a nature/travel documentary aimed
at young children.
```

## Por tipo de asset, agregar antes del sujeto:

- **hero** (imagen principal/portada del país): *"A single iconic, unmistakably recognizable landmark of [PAÍS], wide establishing shot, taken from a flattering angle that shows its full silhouette..."*
- **animal**: *"A [NOMBRE DEL ANIMAL], native to [PAÍS], in its natural habitat, alert and looking gently toward camera, full body or three-quarter view..."*
- **landmark**: *"[NOMBRE DEL LUGAR], in [PAÍS], from its most iconic and recognizable angle..."*
- **food**: *"A traditional plate of [NOMBRE DEL PLATO] from [PAÍS], simply plated on a plain neutral surface, appetizing but not overly styled..."*

## Ejemplo completo (Japón, animal)

```
A Japanese macaque (snow monkey), native to Japan, in its natural
habitat, alert and looking gently toward camera, full body view.
Photographed in the style of a premium educational children's app.
Professional documentary-style photography, natural cinematic lighting...
[resto del prompt base]
```

## Reglas de consistencia entre países
- Misma proporción de encuadre (4:3) en todos los assets del mismo tipo.
- Mismo nivel de saturación y temperatura de color (cálido, natural — no filtros llamativos).
- Siempre un solo sujeto principal, nunca una escena recargada.
- Evitar cualquier bandera, texto o símbolo nacional dentro de la imagen (eso ya lo muestra la app aparte).

## Verificación antes de aceptar una imagen generada
1. ¿Se identifica el sujeto sin leer el país al lado? (test de reconocibilidad)
2. ¿Se ve como si perteneciera a la misma colección que las demás? (test de consistencia)
3. ¿Un niño de 5 años lo entendería sin explicación? (test de simplicidad)
4. ¿No tiene texto, logos ni artefactos raros de IA? (test de limpieza)

Si una imagen no pasa estos 4 puntos, se descarta y se regenera — no se "arregla" editándola.
