// service-worker.js
const CACHE_NAME = 'risto-pwa-cache-v1';
const ASSETS_TO_CACHE = ['index.html', 'style.css', 'app.js', 'manifest.json'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
