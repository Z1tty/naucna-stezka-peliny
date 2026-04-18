/* ==============================================================
   Naučná stezka Peliny — shared client helpers
   ============================================================== */

(function (global) {
  const LANG_KEY = 'peliny:lang';
  const VISITED_KEY = 'peliny:visited';
  const NAME_KEY = 'peliny:name';
  const SUPPORTED = ['cs', 'en'];
  const DEFAULT_LANG = 'cs';

  const I18N = {
    cs: {
      trail: 'Stezka',
      station: 'Zastavení',
      of: 'z',
      nextStation: 'Další zastavení',
      backToOverview: 'Zpět na přehled',
      showOnMap: 'Ukázat v',
      audioGuide: 'Audio průvodce',
      forKids: 'pro děti',
      playHint: 'Klepnutím spustíte přehrávání',
      playFailed: 'Přehrávání selhalo',
      played: 'Přehráno',
      visitedLabel: 'Navštíveno',
      resetBtn: 'Vynulovat',
      resetConfirm: 'Opravdu chcete vymazat značky navštívených stanovišť?',
      startOver: 'Projít stezku znovu',
      startOverHint: 'Pokrok a označení návštěv se smažou. Fotka certifikátu pro jistotu nejprve uložte.',
      startOverConfirm: 'Opravdu začít znovu? Značky navštívených stanovišť se smažou.',
      stationsHeading: 'Zastavení',
      loading: 'Načítám…',
      notFound: 'Stanoviště nenalezeno.',
      missingParam: 'Chybí parametr stanoviště.',
      loadError: 'Nepodařilo se načíst seznam stanovišť.',
      loadErrorStation: 'Nepodařilo se načíst stanoviště.',
      qrMissing: 'Chybí kód QR.',
      qrNotInSystem: 'QR kód <b>{code}</b> není v systému.',
      redirecting: 'Přesměrovávám…',
      redirectError: 'Chyba při přesměrování.',
      footerCopy: 'Naučná stezka Peliny · Přírodní rezervace Peliny, Choceň',
      footerApp: 'Aplikace',

      /* Gamification */
      qrRecorded: 'Zastavení zaznamenáno',
      qrNotCountedHint: 'Zastavení se počítá až po naskenování QR kódu přímo na místě.',
      revisitTitle: 'Bloudíš?',
      revisitBody: 'Tady už jsi byl. Další nenavštívené zastavení je <b>{title}</b>.',
      revisitAll: 'A co je nejlepší: máš hotovou celou stezku! Vezmi si certifikát nebo se podívej na bonusové zastavení.',
      revisitNavigate: 'Navigovat k dalšímu',
      revisitCertificate: 'Otevřít certifikát',
      recordVisit: 'Zaznamenat návštěvu',
      openTrailOnMap: 'Otevřít celou trasu v Mapy.com',
      howItWorksTitle: 'Jak stezka funguje',
      bonusEyebrow: 'Tajné zastavení',
      bonusSectionHeading: 'Bonus',
      bonusLockedTitle: '???',
      bonusLockedSubtitle: 'Odemkne se po naskenování všech zastavení',
      bonusLockedToast: 'Zamčeno — odemkne se po naskenování všech zastavení ({visited}/{total})',
      bonusUnlockedBadge: 'Odemčeno',
      completionTitle: 'Gratulujeme! Zvládli jste celou stezku.',
      completionSubtitle: 'Odemkli jste bonusové zastavení a můžete si stáhnout certifikát.',
      certificateCta: 'Zobrazit certifikát',
      bonusCta: 'Otevřít tajné zastavení',
      bonusLockedMessage: 'Toto zastavení se odemkne až poté, co na všech 10 panelech naskenujete QR kód.',
      bonusLockedProgress: 'Dosavadní postup',
      backToTrail: 'Zpět na stezku',

      /* Next-stop guidance */
      nextGuidanceTitle: 'Pokračujte k dalšímu zastavení',
      nextGuidanceText: 'Dojděte k dalšímu panelu podle šipek v terénu — nebo si nechte zobrazit trasu v mapě. U panelu naskenujte QR kód telefonem.',
      navigateInMapy: 'Navigovat v',
      skipAhead: 'Přeskočit na detail (bez zápisu návštěvy)',
      trailFinished: 'Dokončili jste stezku',
      trailFinishedSubtitle: 'Zpět do Chocně se dostanete modrou turistickou značkou podél řeky.',
      scanQrBtn: 'Naskenovat QR',
      scanQrTitle: 'Naskenujte QR kód',
      scanQrHint: 'Nasměrujte kameru na QR kód u dalšího panelu.',
      scanLoading: 'Načítám skener…',
      scanCameraPerm: 'Povolte přístup ke kameře',
      scanError: 'Nepodařilo se spustit kameru. Použijte QR skener v nativním fotoaparátu telefonu.',
      scanUnknown: 'Tento QR kód není součástí naší stezky.',
      scanClose: 'Zavřít',

      /* Certificate */
      certificateTitle: 'Certifikát',
      certificateEyebrow: 'Naučná stezka Peliny',
      certificateBody1: 'Tímto se potvrzuje, že',
      certificateBody2: 'prošel/prošla naučnou stezku Peliny u Chocně a úspěšně zdolal/zdolala všech 10 zastavení.',
      certificatePlace: 'Choceň, Přírodní rezervace Peliny',
      certificateDate: 'Dne',
      certificateNameLabel: 'Jméno (volitelné)',
      certificateNamePlaceholder: 'Vaše jméno',
      certificatePrint: 'Vytisknout / uložit PDF',
      certificateLocked: 'Certifikát je dostupný až po naskenování všech 10 QR kódů.'
    },
    en: {
      trail: 'Trail',
      station: 'Stop',
      of: 'of',
      nextStation: 'Next stop',
      backToOverview: 'Back to overview',
      showOnMap: 'Show in',
      audioGuide: 'Audio guide',
      forKids: 'for kids',
      playHint: 'Tap to play',
      playFailed: 'Playback failed',
      played: 'Played',
      visitedLabel: 'Visited',
      resetBtn: 'Reset',
      resetConfirm: 'Really clear visited markers?',
      startOver: 'Walk the trail again',
      startOverHint: 'Progress and visit markers will be cleared. Save your certificate first if you want to keep it.',
      startOverConfirm: 'Start over? Visit markers will be cleared.',
      stationsHeading: 'Stops',
      loading: 'Loading…',
      notFound: 'Stop not found.',
      missingParam: 'Missing stop parameter.',
      loadError: 'Failed to load the list of stops.',
      loadErrorStation: 'Failed to load the stop.',
      qrMissing: 'Missing QR code.',
      qrNotInSystem: 'QR code <b>{code}</b> is not in the system.',
      redirecting: 'Redirecting…',
      redirectError: 'Redirect error.',
      footerCopy: 'Peliny Nature Trail · Peliny Nature Reserve, Choceň',
      footerApp: 'App',

      qrRecorded: 'Stop recorded',
      qrNotCountedHint: 'A stop counts only after you scan its QR code on site.',
      revisitTitle: 'Lost?',
      revisitBody: 'You\u2019ve been here already. The next unvisited stop is <b>{title}</b>.',
      revisitAll: 'And here is the good news: you have finished the whole trail! Grab your certificate or check out the bonus stop.',
      revisitNavigate: 'Navigate to next',
      revisitCertificate: 'Open certificate',
      recordVisit: 'Record your visit',
      openTrailOnMap: 'Open full route in Mapy.com',
      howItWorksTitle: 'How the trail works',
      bonusEyebrow: 'Secret stop',
      bonusSectionHeading: 'Bonus',
      bonusLockedTitle: '???',
      bonusLockedSubtitle: 'Unlocks after you scan every stop',
      bonusLockedToast: 'Locked — unlocks after you scan every stop ({visited}/{total})',
      bonusUnlockedBadge: 'Unlocked',
      completionTitle: 'Congratulations! You finished the whole trail.',
      completionSubtitle: 'You have unlocked the bonus stop and can download a certificate.',
      certificateCta: 'View certificate',
      bonusCta: 'Open the secret stop',
      bonusLockedMessage: 'This stop will unlock only after you scan the QR code at all 10 panels.',
      bonusLockedProgress: 'Current progress',
      backToTrail: 'Back to the trail',

      nextGuidanceTitle: 'Continue to the next stop',
      nextGuidanceText: 'Follow the markers in the field — or have the route shown on a map. At the next panel, scan the QR code with your phone.',
      navigateInMapy: 'Open route in',
      skipAhead: 'Skip to detail (without recording visit)',
      trailFinished: 'You have completed the trail',
      trailFinishedSubtitle: 'To get back into Choceň, follow the blue tourist trail along the river.',
      scanQrBtn: 'Scan QR',
      scanQrTitle: 'Scan a QR code',
      scanQrHint: 'Point the camera at the QR code on the next panel.',
      scanLoading: 'Loading scanner…',
      scanCameraPerm: 'Please allow camera access',
      scanError: 'Could not start the camera. Use your phone\u2019s built-in QR scanner instead.',
      scanUnknown: 'This QR code is not part of our trail.',
      scanClose: 'Close',

      certificateTitle: 'Certificate',
      certificateEyebrow: 'Peliny Nature Trail',
      certificateBody1: 'This is to certify that',
      certificateBody2: 'has walked the Peliny Nature Trail near Choceň and successfully completed all 10 stops.',
      certificatePlace: 'Choceň, Peliny Nature Reserve',
      certificateDate: 'Date',
      certificateNameLabel: 'Name (optional)',
      certificateNamePlaceholder: 'Your name',
      certificatePrint: 'Print / save as PDF',
      certificateLocked: 'The certificate will be available after you scan all 10 QR codes.'
    }
  };

  function detectLang() {
    const urlParam = new URLSearchParams(location.search).get('lang');
    if (SUPPORTED.includes(urlParam)) {
      try { localStorage.setItem(LANG_KEY, urlParam); } catch (e) {}
      return urlParam;
    }
    try {
      const stored = localStorage.getItem(LANG_KEY);
      if (SUPPORTED.includes(stored)) return stored;
    } catch (e) {}
    const candidates = navigator.languages || [navigator.language || DEFAULT_LANG];
    for (const raw of candidates) {
      const lc = (raw || '').toLowerCase();
      if (lc.startsWith('cs') || lc.startsWith('sk')) return 'cs';
      if (lc.startsWith('en')) return 'en';
    }
    return DEFAULT_LANG;
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  function t(lang, key, params) {
    let s = (I18N[lang] && I18N[lang][key]) || (I18N[DEFAULT_LANG] && I18N[DEFAULT_LANG][key]) || key;
    if (params) for (const k in params) s = s.replace('{' + k + '}', params[k]);
    return s;
  }

  function dataFileUrl(lang, prefix) {
    prefix = prefix || '';
    return prefix + 'data/stations' + (lang === 'en' ? '.en' : '') + '.json';
  }

  function getVisited() {
    try { return new Set(JSON.parse(localStorage.getItem(VISITED_KEY) || '[]')); }
    catch (e) { return new Set(); }
  }

  function markVisited(id) {
    try {
      const s = getVisited();
      s.add(id);
      localStorage.setItem(VISITED_KEY, JSON.stringify([...s]));
    } catch (e) {}
  }

  function clearVisited() {
    try { localStorage.removeItem(VISITED_KEY); } catch (e) {}
  }

  function getName() {
    try { return localStorage.getItem(NAME_KEY) || ''; } catch (e) { return ''; }
  }

  function setName(name) {
    try { localStorage.setItem(NAME_KEY, name || ''); } catch (e) {}
  }

  function splitStations(stations) {
    const main = stations.filter(s => !s.bonus).sort((a, b) => a.order - b.order);
    const bonus = stations.filter(s => s.bonus).sort((a, b) => a.order - b.order);
    return { main, bonus };
  }

  function isMainCompleted(stations, visited) {
    const { main } = splitStations(stations);
    if (!main.length) return false;
    return main.every(s => visited.has(s.id));
  }

  function buildMapyRouteUrl(fromLoc, toLoc) {
    if (!fromLoc || !toLoc) return null;
    const rp = `${fromLoc.lat},${fromLoc.lng};${toLoc.lat},${toLoc.lng}`;
    return `https://mapy.com/turisticka?planovani-trasy&rp=${encodeURIComponent(rp)}&rm=W`;
  }

  function buildMapyPointUrl(loc) {
    if (!loc) return null;
    return `https://mapy.com/zakladni?source=coor&id=${loc.lng},${loc.lat}&x=${loc.lng}&y=${loc.lat}&z=17`;
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function renderLangSwitch(el, currentLang, kind) {
    kind = kind || 'topbar';
    el.className = 'lang-switch lang-switch--' + kind;
    el.setAttribute('role', 'group');
    el.setAttribute('aria-label', 'Language');
    el.innerHTML = SUPPORTED.map(code =>
      '<a href="?lang=' + code + '" class="' + (code === currentLang ? 'is-active' : '') +
      '" aria-label="' + (code === 'cs' ? 'Čeština' : 'English') + '" aria-current="' +
      (code === currentLang ? 'true' : 'false') + '">' + code.toUpperCase() + '</a>'
    ).join('');

    el.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const newLang = a.textContent.toLowerCase();
        if (newLang === currentLang) return;
        setLang(newLang);
        const url = new URL(location.href);
        url.searchParams.set('lang', newLang);
        location.href = url.toString();
      });
    });
  }

  function renderFooter(el, lang) {
    const year = new Date().getFullYear();
    el.className = 'site-footer';
    el.innerHTML =
      '<p class="site-footer__partners">' +
        '<a href="https://www.zschocen.cz/" target="_blank" rel="noopener">Základní škola Sv. Čecha, Choceň</a>' +
        '<span class="site-footer__sep" aria-hidden="true">·</span>' +
        '<a href="https://www.chocen.cz/" target="_blank" rel="noopener">Město Choceň</a>' +
      '</p>' +
      '<p class="site-footer__row">\u00a9 ' + year + ' ' + escapeHtml(t(lang, 'footerCopy')) + '</p>' +
      '<p class="site-footer__row">' + escapeHtml(t(lang, 'footerApp')) +
      ' \u00a9 ' + year +
      ' <a href="https://www.smartghost.cz" target="_blank" rel="noopener">SmartGhost</a></p>';
  }

  function showToast(text, kind) {
    let host = document.getElementById('toastHost');
    if (!host) {
      host = document.createElement('div');
      host.id = 'toastHost';
      host.className = 'toast-host';
      document.body.appendChild(host);
    }
    const el = document.createElement('div');
    el.className = 'toast' + (kind ? ' toast--' + kind : '');
    el.innerHTML =
      '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>' +
      '<span>' + escapeHtml(text) + '</span>';
    host.appendChild(el);
    requestAnimationFrame(() => el.classList.add('is-visible'));
    setTimeout(() => {
      el.classList.remove('is-visible');
      el.addEventListener('transitionend', () => el.remove(), { once: true });
    }, 2800);
  }

  /* ------------------------- QR SCANNER ------------------------- */

  const QR_LIB_URL = 'https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js';

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if ([...document.scripts].some(s => s.src === src)) return resolve();
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = () => reject(new Error('Script load failed: ' + src));
      document.head.appendChild(s);
    });
  }

  function siteBaseUrl() {
    const script = [...document.scripts].find(s => /\/assets\/js\/app\.js(\?.*)?$/.test(s.src));
    if (script) return new URL('../../', script.src);
    return new URL('./', location.href);
  }

  function tryResolveScan(decoded) {
    const raw = (decoded || '').trim();
    if (!raw) return null;

    try {
      const u = new URL(raw);
      const site = siteBaseUrl();
      const sameOrigin = u.origin === location.origin || u.origin === site.origin;
      const sameHostFamily = u.hostname.endsWith('z1tty.github.io') || u.hostname.endsWith('chocen.cz');
      if (sameOrigin || sameHostFamily) {
        if (/\/qr\/?$/.test(u.pathname)) {
          const c = u.searchParams.get('c');
          if (c) {
            const target = new URL('qr/', site);
            target.searchParams.set('c', c);
            return target.toString();
          }
        }
        if (/\/stanoviste\/?$/.test(u.pathname)) {
          const id = u.searchParams.get('id');
          if (id) {
            const target = new URL('stanoviste/', site);
            target.searchParams.set('id', id);
            target.searchParams.set('via', 'qr');
            return target.toString();
          }
        }
      }
    } catch (e) { /* not a URL */ }

    if (/^\d+$/.test(raw)) {
      const target = new URL('qr/', siteBaseUrl());
      target.searchParams.set('c', raw);
      return target.toString();
    }

    return null;
  }

  async function openScanner(lang) {
    const overlay = document.createElement('div');
    overlay.className = 'scanner-modal';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML =
      '<div class="scanner-modal__inner">' +
        '<button type="button" class="scanner-modal__close" aria-label="' + escapeHtml(t(lang, 'scanClose')) + '">\u2715</button>' +
        '<h2 class="scanner-modal__title">' + escapeHtml(t(lang, 'scanQrTitle')) + '</h2>' +
        '<div id="qrReader" class="scanner-modal__reader"></div>' +
        '<p class="scanner-modal__hint">' + escapeHtml(t(lang, 'scanQrHint')) + '</p>' +
        '<p id="scanStatus" class="scanner-modal__status">' + escapeHtml(t(lang, 'scanLoading')) + '</p>' +
      '</div>';
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    let scanner = null;
    const status = overlay.querySelector('#scanStatus');

    const close = async () => {
      try {
        if (scanner && scanner.isScanning) { await scanner.stop(); }
        if (scanner) { await scanner.clear(); }
      } catch (e) { /* ignore */ }
      overlay.remove();
      document.body.style.overflow = '';
    };

    overlay.querySelector('.scanner-modal__close').addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });

    try {
      await loadScript(QR_LIB_URL);
      if (!window.Html5Qrcode) throw new Error('Library not available');

      status.textContent = t(lang, 'scanCameraPerm');
      scanner = new Html5Qrcode('qrReader', { verbose: false });

      await scanner.start(
        { facingMode: 'environment' },
        { fps: 10, qrbox: { width: 240, height: 240 } },
        (decoded) => {
          const target = tryResolveScan(decoded);
          if (target) {
            scanner.stop().catch(() => {}).finally(() => {
              overlay.remove();
              document.body.style.overflow = '';
              location.href = target;
            });
          } else {
            status.textContent = t(lang, 'scanUnknown');
            status.className = 'scanner-modal__status scanner-modal__status--error';
          }
        },
        () => { /* per-frame decode errors are noise */ }
      );
      status.textContent = '';
    } catch (e) {
      console.error('Scanner failed:', e);
      status.textContent = t(lang, 'scanError');
      status.className = 'scanner-modal__status scanner-modal__status--error';
    }
  }

  global.PelinyApp = {
    detectLang, setLang, t, I18N,
    dataFileUrl, getVisited, markVisited, clearVisited,
    getName, setName,
    splitStations, isMainCompleted,
    buildMapyRouteUrl, buildMapyPointUrl,
    escapeHtml, renderLangSwitch, renderFooter, showToast,
    openScanner, tryResolveScan
  };
})(window);
