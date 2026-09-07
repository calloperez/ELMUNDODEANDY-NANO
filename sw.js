// Service Worker — El Mundo de Andy&Nano
// Estrategia: cache-first para todos los archivos propios de la app
// (no hay llamadas a servicios externos en tiempo de ejecución,
// así que no hace falta distinguir por dominio).

// Nueva versión para que las tablets con la PWA instalada descarguen app.js
// actualizado en vez de seguir sirviendo la copia anterior desde caché.
const CACHE_NAME = "andynano-cache-v4";
const APP_SHELL = [
  "./",
  "./index.html",
  "./app.js",
  "./data.js",
  "./music.js",
  "./illustrations.js",
  "./photos.js",
  "./sports.js",
  "./audio.js",
  "./manifest.webmanifest",
  "./icon.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => cached); // sin red y sin cache: no hay más que ofrecer
    })
  );
});
