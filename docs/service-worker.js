const CACHE_NAME = 'shinylive-app-cache';
const urlsToCache = [
  '/',
  '/index.html',
  '/shinylive/',
  '/edit/',
  '/shinylive-sw.js',
  '/app.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
