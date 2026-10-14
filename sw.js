// Offline-Speicher: liefert sofort aus dem Cache und aktualisiert im Hintergrund.
const CACHE = 'spieleabend-v1';
const DATEIEN = ['./', 'index.html', 'spiele.js', 'manifest.webmanifest', 'icon.svg', 'icon-180.png', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(DATEIEN)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const netz = fetch(req).then(async r => {
    if (r.ok) { const kopie = r.clone(); const c = await caches.open(CACHE); await c.put(req, kopie); }
    return r;
  });
  e.respondWith(caches.match(req, { ignoreSearch: true })
    .then(treffer => treffer || netz)
    .catch(() => caches.match('./')));
  e.waitUntil(netz.catch(() => {}));
});
