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
      openTrailOnMap: 'Otevřít celou trasu v',
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
      trailFinishedBonusHint: 'Pokud jste načetli všechna zastavení, odemkli jste si bonusové zastavení.',
      trailFinishedBackHint: 'Nebo se můžete vrátit zpět na začátek:',
      trailFinishedBonusCta: 'Otevřít bonusové zastavení',
      navigateToStart: 'Navigovat na začátek',
      installTitle: 'Stáhnout jako aplikaci',
      installHint: 'Přidá ikonu na plochu, funguje i bez signálu.',
      installAndroidLabel: 'Android',
      installAppleLabel: 'iPhone',
      iosInstallTitle: 'Instalace na iPhone',
      iosInstallStep1: '1. Klepněte na tlačítko <b>Sdílet</b> ve spodní liště Safari.',
      iosInstallStep2: '2. V nabídce vyberte <b>„Přidat na plochu"</b>.',
      iosInstallStep3: '3. Potvrďte klepnutím na <b>„Přidat"</b> vpravo nahoře.',
      iosInstallSafariHint: 'Funguje pouze v Safari — v jiných prohlížečích tato volba není dostupná.',
      androidInstallTitle: 'Instalace na Android',
      androidInstallStep1: '1. V Chromu klepněte na ikonu <b>⋮</b> vpravo nahoře.',
      androidInstallStep2: '2. Vyberte <b>„Nainstalovat aplikaci"</b> nebo <b>„Přidat na plochu"</b>.',
      androidInstallStep3: '3. Potvrďte <b>„Instalovat"</b>.',
      installModalClose: 'Rozumím',
      scanQrBtn: 'Naskenovat QR',
      scanQrTitle: 'Naskenujte QR kód',
      scanQrHint: 'Nasměrujte kameru na QR kód u panelu.',
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
      openTrailOnMap: 'Open the full route in',
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
      trailFinishedBonusHint: 'If you have scanned every stop, you have unlocked the bonus stop.',
      trailFinishedBackHint: 'Or head back to the start:',
      trailFinishedBonusCta: 'Open the bonus stop',
      navigateToStart: 'Route to the start',
      installTitle: 'Install as an app',
      installHint: 'Adds an icon to your home screen — works offline.',
      installAndroidLabel: 'Android',
      installAppleLabel: 'iPhone',
      iosInstallTitle: 'Install on iPhone',
      iosInstallStep1: '1. Tap the <b>Share</b> button in Safari\u2019s bottom bar.',
      iosInstallStep2: '2. Choose <b>"Add to Home Screen"</b>.',
      iosInstallStep3: '3. Confirm by tapping <b>"Add"</b> in the top-right corner.',
      iosInstallSafariHint: 'Only works in Safari — other browsers do not offer this option.',
      androidInstallTitle: 'Install on Android',
      androidInstallStep1: '1. In Chrome, tap the <b>⋮</b> icon in the top-right corner.',
      androidInstallStep2: '2. Choose <b>"Install app"</b> or <b>"Add to Home screen"</b>.',
      androidInstallStep3: '3. Confirm <b>"Install"</b>.',
      installModalClose: 'Got it',
      scanQrBtn: 'Scan QR',
      scanQrTitle: 'Scan a QR code',
      scanQrHint: 'Point the camera at the QR code on the panel.',
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
    const installHtml = isStandalone() ? '' : (
      '<div class="site-footer__install">' +
        '<div class="site-footer__install-label">' + escapeHtml(t(lang, 'installTitle')) + '</div>' +
        '<div class="site-footer__install-icons">' +
          '<button type="button" class="site-footer__install-btn" data-install="android" aria-label="' + escapeHtml(t(lang, 'installAndroidLabel')) + '">' +
            '<svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">' +
              '<path d="M17.5 13.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm-11 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM16.8 7.1l1.6-2.8c.1-.2 0-.4-.1-.5s-.4 0-.5.1l-1.6 2.8c-1.3-.6-2.7-.9-4.2-.9s-2.9.3-4.2.9L6.2 3.9c-.1-.2-.3-.2-.5-.1-.2.1-.2.3-.1.5l1.6 2.8c-2.6 1.5-4.2 4-4.2 6.9h18c0-2.9-1.7-5.4-4.2-6.9z"/>' +
              '<path d="M3 15v6c0 .6.4 1 1 1h1v-7H3zm16 0v7h1c.6 0 1-.4 1-1v-6h-2zM6 22h12v-7H6v7z"/>' +
            '</svg>' +
            '<span>' + escapeHtml(t(lang, 'installAndroidLabel')) + '</span>' +
          '</button>' +
          '<button type="button" class="site-footer__install-btn" data-install="ios" aria-label="' + escapeHtml(t(lang, 'installAppleLabel')) + '">' +
            '<svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">' +
              '<path d="M17.5 13.1c0-2.8 2.3-4.1 2.4-4.2-1.3-1.9-3.3-2.1-4-2.1-1.7-.2-3.3.9-4.1.9-.8 0-2.2-.9-3.6-.9-1.8 0-3.6 1-4.6 2.7-2 3.4-.5 8.4 1.4 11.2 1 1.3 2 2.8 3.5 2.8 1.4-.1 2-.9 3.7-.9s2.3.9 3.7.9c1.6 0 2.6-1.4 3.5-2.7.7-1 1.3-2.2 1.4-2.9 0 0-2.7-1.1-2.7-4.1zM14.9 5.6c.7-.9 1.2-2.1 1.1-3.3-1.1.1-2.3.7-3.1 1.6-.6.8-1.2 2-1 3.2 1.2.1 2.4-.6 3-1.5z"/>' +
            '</svg>' +
            '<span>' + escapeHtml(t(lang, 'installAppleLabel')) + '</span>' +
          '</button>' +
        '</div>' +
        '<div class="site-footer__install-hint">' + escapeHtml(t(lang, 'installHint')) + '</div>' +
      '</div>'
    );
    el.innerHTML =
      installHtml +
      '<p class="site-footer__partners">' +
        '<a href="https://www.zschocen.cz/" target="_blank" rel="noopener">Základní škola Sv. Čecha, Choceň</a>' +
        '<span class="site-footer__sep" aria-hidden="true">·</span>' +
        '<a href="https://www.chocen.cz/" target="_blank" rel="noopener">Město Choceň</a>' +
      '</p>' +
      '<p class="site-footer__row">\u00a9 ' + year + ' ' + escapeHtml(t(lang, 'footerCopy')) + '</p>' +
      '<p class="site-footer__row">' + escapeHtml(t(lang, 'footerApp')) +
      ' \u00a9 ' + year +
      ' <a href="https://www.smartghost.cz" target="_blank" rel="noopener">SmartGhost</a></p>';

    el.querySelectorAll('[data-install]').forEach(btn => {
      btn.addEventListener('click', () => {
        const platform = btn.getAttribute('data-install');
        triggerInstall(lang, platform);
      });
    });
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

  /* ------------------------- LIGHTBOX ------------------------- */

  function openLightbox(images, startIndex) {
    if (!images || !images.length) return;
    let idx = Math.max(0, Math.min(startIndex || 0, images.length - 1));
    const multi = images.length > 1;

    const overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML =
      '<button type="button" class="lightbox__close" aria-label="Close">\u2715</button>' +
      (multi ? '<button type="button" class="lightbox__nav lightbox__prev" aria-label="Previous">\u2039</button>' : '') +
      '<img class="lightbox__img" src="" alt="">' +
      (multi ? '<button type="button" class="lightbox__nav lightbox__next" aria-label="Next">\u203A</button>' : '') +
      '<div class="lightbox__caption" id="lbCaption"></div>' +
      (multi ? '<div class="lightbox__counter" id="lbCounter"></div>' : '');
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    const img = overlay.querySelector('.lightbox__img');
    const cap = overlay.querySelector('#lbCaption');
    const counter = overlay.querySelector('#lbCounter');

    function update() {
      const it = images[idx];
      img.src = it.src || it;
      const captionText = it.caption || '';
      cap.textContent = captionText;
      cap.style.display = captionText ? 'block' : 'none';
      if (counter) counter.textContent = (idx + 1) + ' / ' + images.length;
    }
    function prev() { idx = (idx - 1 + images.length) % images.length; update(); }
    function next() { idx = (idx + 1) % images.length; update(); }
    function close() {
      overlay.remove();
      document.body.style.overflow = '';
      document.removeEventListener('keydown', keyHandler);
    }
    function keyHandler(e) {
      if (e.key === 'Escape') close();
      else if (multi && e.key === 'ArrowLeft')  prev();
      else if (multi && e.key === 'ArrowRight') next();
    }

    document.addEventListener('keydown', keyHandler);
    overlay.querySelector('.lightbox__close').addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    const prevBtn = overlay.querySelector('.lightbox__prev');
    const nextBtn = overlay.querySelector('.lightbox__next');
    if (prevBtn) prevBtn.addEventListener('click', prev);
    if (nextBtn) nextBtn.addEventListener('click', next);

    // Swipe support on the image
    let touchStartX = 0;
    img.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    img.addEventListener('touchend', e => {
      if (!multi) return;
      const dx = (e.changedTouches[0].clientX || 0) - touchStartX;
      if (Math.abs(dx) > 40) { if (dx < 0) next(); else prev(); }
    });

    update();
  }

  /* ------------------------- PWA (install + service worker) ------------------------- */

  let deferredInstallPrompt = null;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
  });

  function isStandalone() {
    try {
      if (window.matchMedia('(display-mode: standalone)').matches) return true;
      if (window.navigator.standalone === true) return true;
    } catch (e) {}
    return false;
  }

  function isIOS() {
    return /iphone|ipad|ipod/i.test(navigator.userAgent || '') && !window.MSStream;
  }

  async function triggerInstall(lang, platform) {
    if (platform === 'android' && deferredInstallPrompt) {
      try {
        deferredInstallPrompt.prompt();
        await deferredInstallPrompt.userChoice;
      } catch (e) { /* ignore */ }
      deferredInstallPrompt = null;
      return;
    }
    showInstallInstructions(lang, platform);
  }

  function showInstallInstructions(lang, platform) {
    const titleKey = platform === 'ios' ? 'iosInstallTitle' : 'androidInstallTitle';
    const steps = platform === 'ios'
      ? ['iosInstallStep1', 'iosInstallStep2', 'iosInstallStep3']
      : ['androidInstallStep1', 'androidInstallStep2', 'androidInstallStep3'];
    const hint = platform === 'ios' ? t(lang, 'iosInstallSafariHint') : '';

    const overlay = document.createElement('div');
    overlay.className = 'install-modal';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML =
      '<div class="install-modal__inner">' +
        '<h2 class="install-modal__title">' + escapeHtml(t(lang, titleKey)) + '</h2>' +
        '<ol class="install-modal__steps">' +
          steps.map(k => '<li>' + t(lang, k) + '</li>').join('') +
        '</ol>' +
        (hint ? '<p class="install-modal__hint">' + escapeHtml(hint) + '</p>' : '') +
        '<button type="button" class="install-modal__close">' + escapeHtml(t(lang, 'installModalClose')) + '</button>' +
      '</div>';
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    const close = () => {
      overlay.remove();
      document.body.style.overflow = '';
    };
    overlay.querySelector('.install-modal__close').addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  }

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    if (!/^https?:$/.test(location.protocol)) return;
    window.addEventListener('load', () => {
      const base = siteBaseUrl();
      const swUrl = new URL('sw.js', base).toString();
      navigator.serviceWorker.register(swUrl, { scope: base.pathname }).catch((e) => {
        console.warn('SW register failed:', e);
      });
    });
  }
  registerServiceWorker();

  global.PelinyApp = {
    detectLang, setLang, t, I18N,
    dataFileUrl, getVisited, markVisited, clearVisited,
    getName, setName,
    splitStations, isMainCompleted,
    buildMapyRouteUrl, buildMapyPointUrl,
    escapeHtml, renderLangSwitch, renderFooter, showToast,
    openScanner, tryResolveScan,
    openLightbox,
    isStandalone, isIOS, triggerInstall
  };
})(window);
