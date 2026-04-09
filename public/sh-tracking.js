/**
 * Sponsor Hanim Turizm - Trafik Izleme Snippet
 * Bu script'i siteye eklemek icin <head> veya <body> sonuna su sekilde ekleyin:
 * <script src="/sh-tracking.js" defer></script>
 *
 * GDPR uyumlu: IP'ler sunucuda gunluk rotasyonlu tuz ile SHA-256 hashlenir.
 */
(function () {
  'use strict';

  var API_URL = window.SH_API_URL || 'http://localhost:3001/api';
  var ENDPOINT = API_URL.replace(/\/api$/, '') + '/api/track';

  // Sayfa goruntulemesi gonder (backend zaten her istegi otomatik kaydediyor,
  // ama SPA gezintisinde manuel olarak da bildirmek icin bu fonksiyonu kullaniriz)
  function track(path) {
    try {
      var data = {
        path: path || window.location.pathname,
        referrer: document.referrer || null,
        title: document.title,
        screen: window.screen.width + 'x' + window.screen.height,
        lang: navigator.language,
      };

      // sendBeacon kullan, sayfa kapanirken bile calisir
      if (navigator.sendBeacon) {
        var blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
        navigator.sendBeacon(ENDPOINT, blob);
      } else {
        fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
          keepalive: true,
        }).catch(function () {});
      }
    } catch (e) {
      // Sessizce yut - analitik kullaniciyi etkilememeli
    }
  }

  // Ilk yuklemede gonder
  track();

  // SPA geziniti destegi - history API'sini wrap et
  var originalPushState = history.pushState;
  var originalReplaceState = history.replaceState;

  history.pushState = function () {
    originalPushState.apply(this, arguments);
    setTimeout(function () { track(); }, 0);
  };

  history.replaceState = function () {
    originalReplaceState.apply(this, arguments);
    setTimeout(function () { track(); }, 0);
  };

  window.addEventListener('popstate', function () {
    setTimeout(function () { track(); }, 0);
  });

  // Global API
  window.SHTracker = { track: track };
})();
