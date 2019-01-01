

var dataCacheName = 'sotm-v1.3';


self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets - 4');
  event.waitUntil(
    caches.open(dataCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    }).catch(function(err) {
      console.log("ERROR!?");
      console.log(err);
    })
  );
});


var addOutput = function(wds) {
  var opt = document.querySelectorAll(".output")[0];
  opt.appendChild("<p>" + wds + "</p>");
  //$(".output").append("<p>" + wds + "</p>");
};

self.addEventListener('fetch', event => {
  //console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        //console.log('Found ', event.request.url, ' in cache');
        //addOutput('Found ', event.request.url, ' in cache');
        return response;
      }
      //console.log('Network request for ', event.request.url);
      return fetch(event.request);

      // TODO 4 - Add fetched files to the cache

    }).catch(error => {

      // TODO 6 - Respond with custom offline page

    })
  );
});


self.addEventListener('activate', event => {
  console.log('Clearing Cashe if required');

  const cacheWhitelist = [dataCacheName];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});




var filesToCache = [
'/index.php',
'/css/styles.css',
'/css/images/leaflet-search.jpg',
'/css/images/loader.gif',
'/css/images/search-icon-mobile.png',
'/css/images/back.png',
'/css/images/search-icon.png',
'/css/vendor/leaflet.css',
'/css/vendor/leaflet.search.css',
'/css/vendor/leaflet.label.css',
'/images/twitter-round.png',
'/images/markers/boat_marker.png',
'/images/markers/xmarkthespot_marker.png',
'/images/markers/chicken_marker.png',
'/images/markers/crate_marker.png',
'/images/markers/snake_marker.png',
'/images/markers/beacon_marker.png',
'/images/markers/throne_marker.png',
'/images/markers/compass.png',
'/images/markers/pig_marker.png',
'/images/about_icon.png',
'/images/sotm_logo-192.png',
'/images/toggle_pigs.png',
'/images/fullscreen_icon.png',
'/images/docs/point_at_share.jpg',
'/images/toggle_crates.png',
'/images/info_icon.png',
'/images/downloadicon.png',
'/images/toggle_snakes.png',
'/images/share_link_icon.png',
'/images/sotm_logo.png',
'/images/icon-w.png',
'/images/toggle_beacons.png',
'/images/github-round.png',
'/images/toggle_chickens.png',
'/images/toggle_thrones.png',
'/images/sotm_logo-512.png',
'/js/sotm.js',
'/js/vendor/jquery-3.3.1.min.js',
'/js/vendor/leaflet.js',
'/js/vendor/leaflet-hash.js',
'/js/vendor/leaflet-search.min.js',
'/js/vendor/L.SimpleGraticule-sot.js',
'/includes/gtm.php',
'/includes/globals.php',
'/fonts/sot-icons.ttf',
'/fonts/sot-icons.eot',
'/fonts/sot-icons.svg',
'/fonts/sot-icons.woff',
'/fonts/sot-icons.woff2',
'/about.php'
];