/**
 * Sponsor Hanim Turizm - Trafik Izleme Snippet
 * index.html icinde <body> kapaniyindan once yuklenmeli:
 *   <script>window.SH_API_URL = 'https://api.sponsorhanimtravel.com/api';</script>
 *   <script src="/sh-tracking.js" defer></script>
 *
 * GDPR uyumlu: IP'ler sunucuda gunluk rotasyonlu tuz ile SHA-256 hashlenir.
 */
(function () {
  'use strict';

  var API_URL = window.SH_API_URL || 'http://localhost:3001/api';
  var ENDPOINT = API_URL.replace(/\/$/, '') + '/analytics/track';

  // Session ID - sessionStorage'da, tarayici sekmesi kapaninca silinir
  function getSessionId() {
    try {
      var id = sessionStorage.getItem('sh_sid');
      if (id && /^[A-Za-z0-9_-]{8,64}$/.test(id)) return id;
      // Yeni ID: zaman + rastgele
      var rnd = '';
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (var i = 0; i < 16; i++) rnd += chars.charAt(Math.floor(Math.random() * chars.length));
      id = Date.now().toString(36) + '-' + rnd;
      sessionStorage.setItem('sh_sid', id);
      return id;
    } catch (e) {
      // sessionStorage yoksa bir kere uret
      return 'nost-' + Math.random().toString(36).slice(2, 14);
    }
  }

  var lastPath = null;

  function track(path) {
    try {
      // Cerez onayi yoksa izleme yapma
      if (window.SH_TRACKING_DISABLED) return;

      var p = path || (window.location.pathname + window.location.search);
      // Ayni path'i arka arkaya gondermeyelim
      if (p === lastPath) return;
      lastPath = p;

      var data = {
        path: p,
        referrer: document.referrer || null,
        sessionId: getSessionId(),
      };

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
    } catch (e) { /* sessizce yut */ }
  }

  // Ilk yuklemede gonder
  track();

  // SPA geziniti destegi
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

  window.SHTracker = { track: track };
})();
