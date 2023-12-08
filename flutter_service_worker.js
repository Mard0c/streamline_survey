'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01d8dbbeb2e678cdbca8ff34dec3601f",
".git/config": "7adeb82a3e5df365a47b0c3625bdcd2c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "34fd2dc6b208d4975b9f6c6abcd9e2d8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "af8f3b5c303b53aa9ed65289b273c8f3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "866fd2d9bd5517dcb9ccd7944958b040",
".git/logs/refs/heads/main": "55a5e1aa2dedabeba86a7b7f7f9df3ac",
".git/logs/refs/remotes/origin/main": "cdb246e2976ec10ef487166ac770f1ba",
".git/objects/07/2556b47eefc66cff7e012392468fb79dbdcdb5": "b09611b97e83a92f1cb28734f2cbe33f",
".git/objects/07/c1c3abf06e910df1d13564e47b8b314bc3f66b": "1c1ce6180b2ca739f62b08318e7b4254",
".git/objects/09/98fa4d2617dd258f4f9e503d0f3c9946dceb85": "41c24ac7fc22ec4b201ae35b7172aff7",
".git/objects/0a/095f715b6356556871257264f37ec28f876a9f": "a6cbb799a4728b7d2d56b777c0684c5e",
".git/objects/0d/c233aa6dc7f21f932ca45e32978e61265b1aca": "017c3a3b2ad99980a804e88b77a0cb8b",
".git/objects/13/7ba00f8d9833e07089c777f0551b26caccb191": "3dac9225fb39da7061c4ac31241bbb64",
".git/objects/13/b1b98c5808feae8cd9c056ccc55084bdfd9d9b": "78c0697a81a610d076175363edc96bfe",
".git/objects/1c/ab60424d8c9711ab9be270c8b528b143be03eb": "7fa7cde97739477db96ac768b090dc66",
".git/objects/1c/e97fd3522e80d6c74a90628109880acdc1eafa": "bb02897bf71f813920896d76d720d043",
".git/objects/25/8505eb64503fa964e82241ea0818f196a893b0": "f6c2bd5aa658e9b2e08ffd45f912ea59",
".git/objects/26/c4453f86e875712fabc85ff416472fb282d3d9": "547a3ce5c5108795cefb18932b4688ad",
".git/objects/29/2826eb4c70d6c6954bf71d8e87b86d89877130": "03d6789856b1b9a14bf4141ea238ba13",
".git/objects/2c/e8fcb1c0eed141f9ddf17c0a0f6e96b9d5babe": "792ac963088003cd5f83ca503ef93d8d",
".git/objects/2f/b0c6ac3c58c2cbb0985bcab5ef5d5c191959d0": "1110feaaa847955e24ba9d37d63d25ce",
".git/objects/33/f8be33d42b5ddbb7a431c54ec7090f4a6bcd2d": "5c20b0d23a484d445c9e2b51ab5f882e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/6d9d9b86d3a88aadd9d7753af4451285753459": "9e22864be1222b518c8fa60c463cf832",
".git/objects/3c/f19ba414be1f26f77e59146c2bdc05bc2c8ef7": "adc80f892c8ab1b5f2137566c28887eb",
".git/objects/40/a597dd9c20e77a59f27049f002c0a3b7746302": "17c6ed6dc2a25c2361611f0ad417104d",
".git/objects/4e/2426778ba5549086fb4d47d91849e6193b16bc": "8b3fa006bab32bed1fb23bedd500f026",
".git/objects/50/4d69b41a86e7f2ad9ccc7238e83b6397932243": "1d1d9f6199563feb5cdc5351129d94a0",
".git/objects/52/9ba6b8f565e85b9bf9b15c31b5baeb78d0e79f": "e47d563dbf58fc2981e6c6face3bcaf2",
".git/objects/56/72da893c434c9ac79e7b749d1d90e53e0c1ab9": "9b57a6994e12c451cddf3c22f3a1ee21",
".git/objects/57/8292d0cedc09c365f57bddb5bcaa3761b0daf5": "85007a6ad805889ebe440d2ad0d601bf",
".git/objects/5f/367b24518a4b73ab441d70c37e9ea5e0d561be": "d8bc996a5af50be12a22ecc51538a13d",
".git/objects/6a/e3563076751d63df58a90f696fa82bee9f1a77": "0fe2f89ebbbea5b091b1b39c942f4951",
".git/objects/6b/e6de96d0c4c3e7165799ef816e2b2e87e7c96a": "8ceb9ab35fb58fd201a38c6967abdee8",
".git/objects/6d/820669c041053c32f5d9ed88f5adae0ecf2893": "29aaaacdca7561c4b2be079d439bccf1",
".git/objects/6e/45b2b096f3da89487cce9b0f5af95a1f3301ce": "160a861ae98f9412c979d2e9c32938e8",
".git/objects/75/3628fdadf74f9bb210ea9365e312a89a0e5c93": "1ffc1efff7b9ecdd24f8e46084dbe531",
".git/objects/77/dab3743f2fcf7fd86feca812c5e4454f69585d": "c1996cfcd5c071912e78511001c386fb",
".git/objects/79/6166fdaa3813465380944423c9854f31ebfe22": "2e4e1ce777930f0d633a2444a0ecae6d",
".git/objects/7c/d91edb35816a564a485a9d8b78827b60a852b7": "1a9e04238f99f628a08c350742182d55",
".git/objects/82/2281dd0bb4d961cf85f188dacdf2a64cc1e8d5": "ac837d69be454b1aea3642b67e438e41",
".git/objects/83/cd8ef641fb63b51104f684785e574a95c5e3ab": "0d7773566e6b8a0a7de994599940f754",
".git/objects/85/bb9aca223aa8f560f803259a7d35e504bb0501": "a148efaba81fb379d2c22a0873b2ffb8",
".git/objects/86/ba60defb9b4f78d1561794e4340f3810af0846": "6a7ad3d5ff3d5fb7e60db0c82eb066a7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8e/7fc655eeb41ddc66e2f59600e1d407e1c8b1e1": "bbc887d9bc69e92d0759e6bb5f97c40f",
".git/objects/90/c70664a135095274c9bd600db88555a2e5b013": "df78f3c2caa0ae83814c01a6bb54f80a",
".git/objects/90/cdc380db1cdedf9e6ee55cc9477b6e6c077668": "0f2611c504e10140ca773235a8ccae02",
".git/objects/96/3b35066995075629183cf45f04534933f2013e": "9ab01816d9128f6dba21d44763f191a3",
".git/objects/9c/7625c198e4b8894553095ec16802d41cdc53e3": "d6175bddeaf3d8e740f34d4dfa2682b2",
".git/objects/9d/2b848bde7b8ba765c1331516e6db6641204eae": "92726b5b0fc0a967a010e645bb7c4290",
".git/objects/9d/9122b5814604f84903fc29a7455935a011cd4d": "db504a1715804636798c2859156f8599",
".git/objects/a0/0412bcfbb6d9ff67b3a6edcba624a59f65ffab": "bef8bc7bd7d9cc16475beeca35ee3c7b",
".git/objects/a3/ff7a5d16d9cce2654cb14397c0aa86dcd27522": "a381f710340a9760968144e7fa700c35",
".git/objects/ac/5b927dc70599f26f1cadf4ee10bc19ea98f877": "b01756384010542b86cd08e14051f781",
".git/objects/ad/b522ccffb3df3899522eb479ac0d1497e1e609": "e99f43e6c2c85aab20d9ccb62ea8240e",
".git/objects/ae/902b892d35338e9c6e149254334eef6d1c7545": "9c0afb3268a7dba6a585fc1c82d1b0b5",
".git/objects/af/86fdfdeb1db8292f1f1081fa8ee95ea558eee0": "91f32a31707be9ef925268b8e1050c60",
".git/objects/b0/7cb747268253b23caa9b521300c1d10d5efbc1": "e12ead452e04965cb471e3c0a0b1747c",
".git/objects/b5/6ce5594a006bf435fab7878832a1f2c3b8d9ae": "594bb76d60eebb74b20f926d31d8c1f4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/56f9aa98611aefcb1e1d688dc42a11006d1823": "12c87b521de0bf6a861e6213611fe940",
".git/objects/c0/c6c35e0436d58939c4fa95cc919a950ac146d1": "5cb24c9f8d11308c333cb1fd0acdf85b",
".git/objects/ca/10ffc3a28fb0f8c4cf2e9df5430c6c65e6f306": "7db1b39072389b8e556a35f3e5f04cf9",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/d851060a319a4323c083da9fa38eb5a341d61d": "f8fd1e359e405eea04cab60a72101dad",
".git/objects/d9/9f62de12fd4b327cea90b07e9371a61bd00bc4": "546d640818c2b2fc0bc907d2ea2278eb",
".git/objects/df/5784c08aab5f1bbad54d4eb899ed7fb90736f1": "72801d74456bb7f1590a74e526443104",
".git/objects/e1/ae4dfac484aae407082b10350c51207a46cba5": "642a6ac79cd4c09a59eed19c6291bd52",
".git/objects/e5/5ef91d80269f2604ad13ce4c6b4b72e4e74ae9": "8ffcd6eef5864bd420e5b8a6e8b14932",
".git/objects/e6/7457fca050b76f8b116e5143c3ce8267b2a7bf": "73fa37b3b8eb9e37edd16904ec68bff7",
".git/objects/e6/db057c6045b350eef5f6baaec03be29183143c": "115dde90e03461adcf07fef871fbe139",
".git/objects/ea/6b7e526fd2c661149d1745f5e19e2ebaa20c56": "b353d03220446b597d97640fd6d80284",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/8faba63d68437fdd886cf5d618dece287810ad": "5d8adfb171820b594478743b699ea54e",
".git/objects/f3/e3606fb1064dd4346c362615ce68ef302b2540": "fe61da8f6e39abe4bb55e53c5a02775e",
".git/objects/f5/3a7d4602bef2547725319283c2fe5bc83efc40": "4215a4e526dec56d535f04afdf80fc99",
".git/objects/f6/4b0edecb206ffce27b5f54ffb1def3db8df1a9": "04be554f565225b3c40d0d3def30ddbd",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/ORIG_HEAD": "e6ed6a62c956d497cbb1450e99cd3cb4",
".git/refs/heads/main": "31046c3732853de75852798ccf45fc1c",
".git/refs/remotes/origin/main": "31046c3732853de75852798ccf45fc1c",
"assets/AssetManifest.bin": "d316c928cd393b5996b9615a0f5b0d8f",
"assets/AssetManifest.json": "23190acf06cc1bbcf90d69250b24843b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/myassets/OFFICIAL_streamline_logo_colour.svg": "7ea221e9097006be3821ebd39df89ee3",
"assets/NOTICES": "5688e0f950cb28f93ac71a72d80bca3d",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "8c9ab94b3e7d4f85ca01c1b0a1e54bd1",
"canvaskit/canvaskit.wasm": "ed9d534d9ec451a8d3bcbaf529c12316",
"canvaskit/chromium/canvaskit.js": "56facd8978a5292c9bb1d06dfcaee271",
"canvaskit/chromium/canvaskit.wasm": "042524c4a9284ea70bcc88782597daf9",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "25b94796c3088f530b6fe2a736892379",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.ico": "0dce3ece632fae7a4e8d801f9c463fd0",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "048621c4c4317ff5d02d5c6d9c8cce04",
"/": "048621c4c4317ff5d02d5c6d9c8cce04",
"main.dart.js": "39c375712ca5cb8718e0d89e84fd1630",
"manifest.json": "abde2395c3329b2eb451ab179fb28b3c",
"README.md": "ffda12b5f458775c4d7fd4cd59b66090",
"version.json": "0bbb80fc16aa90f940ff29fb9cb6252f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
