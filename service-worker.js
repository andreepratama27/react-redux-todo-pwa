// Set this to true for production

var doCache = false

// Name our cache
var CACHE_NAME = 'my-pwa-cache-v1'

// Delete old caches that are not our current
self.addEventListener('active', event => {
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys()
      .then(keyList => 
        Promise.all(keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            console.log('deleting cache: ' + key)
            return caches.delete(key)
          }
        }))
      )
  )
})

// The first time the user starts up the PWA, 'install' is trigerred
self.addEventListener('install', function(event) {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {

          fetch('asset-manifest.json')
            .then(response => {
              response.json()
            })
            .then(assets => {

              const urlsToCache = [
                "/",
                assets["dist/bundle.js"]
              ]
              cache.addAll(urlsToCache)
              console.log('cached')
            })
        })
    )
  }
})

self.addEventListener('fetch', function(event) {
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request)
      })
    )
  }
})