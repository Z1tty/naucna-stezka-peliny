/* Naučná stezka Peliny — service worker
   Strategies:
   - HTML navigation:        network-first, fallback to cache, final fallback to /
   - data/*.json:            stale-while-revalidate
   - images/audio/css/js:    cache-first
   Versioned cache bucket — bump VERSION to force clients to rebuild on next open.
*/
const VERSION = 'v5';
const PRECACHE = 'peliny-precache-' + VERSION;
const RUNTIME  = 'peliny-runtime-'  + VERSION;

const PRECACHE_URLS = [
  './',
  './index.html',
  './stanoviste/',
  './stanoviste/index.html',
  './qr/',
  './qr/index.html',
  './certifikat/',
  './certifikat/index.html',
  './manifest.json',
  './favicon.svg',
  './favicon.ico',
  './assets/css/style.css',
  './assets/js/app.js',
  './assets/audio/demo.mp3',
  './assets/images/hero-peliny.jpg',
  './assets/images/opukove-pilire.jpg',
  './assets/images/peliny-udoli.jpg',
  './assets/images/mapy-com-logo.svg',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-maskable-512.png',
  './assets/icons/apple-touch-icon.png',
  './data/stations.json',
  './data/stations.en.json',
  './data/redirects.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => !k.endsWith(VERSION))
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // HTML navigation → network-first
  if (req.mode === 'navigate' || (req.destination === '' && url.pathname.endsWith('/'))
      || url.pathname.endsWith('.html')) {
    event.respondWith(networkFirst(req));
    return;
  }

  // data/*.json → stale-while-revalidate
  if (url.pathname.startsWith('/') && url.pathname.includes('/data/') && url.pathname.endsWith('.json')) {
    event.respondWith(staleWhileRevalidate(req));
    return;
  }

  // Everything else (assets) → cache-first
  event.respondWith(cacheFirst(req));
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const resp = await fetch(request);
    if (resp && resp.ok) {
      const cache = await caches.open(RUNTIME);
      cache.put(request, resp.clone());
    }
    return resp;
  } catch (e) {
    return new Response('', { status: 503, statusText: 'offline' });
  }
}

async function networkFirst(request) {
  try {
    const resp = await fetch(request);
    if (resp && resp.ok) {
      const cache = await caches.open(RUNTIME);
      cache.put(request, resp.clone());
    }
    return resp;
  } catch (e) {
    const cached = await caches.match(request);
    if (cached) return cached;
    const fallback = await caches.match('./');
    return fallback || new Response('Offline', { status: 503, statusText: 'offline' });
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME);
  const cached = await cache.match(request);
  const fetchPromise = fetch(request).then((resp) => {
    if (resp && resp.ok) cache.put(request, resp.clone());
    return resp;
  }).catch(() => cached);
  return cached || fetchPromise;
}
