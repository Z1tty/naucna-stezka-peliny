/* ==============================================================
   Naučná stezka Peliny — shared client helpers
   ============================================================== */

(function (global) {
  const LANG_KEY = 'peliny:lang';
  const VISITED_KEY = 'peliny:visited';
  const SUPPORTED = ['cs', 'en'];
  const DEFAULT_LANG = 'cs';

  const I18N = {
    cs: {
      trail: 'Stezka',
      station: 'Zastavení',
      of: 'z',
      nextStation: 'Další zastavení',
      backToOverview: 'Zpět na přehled',
      showOnMap: 'Zobrazit na Mapy.cz',
      audioGuide: 'Audio průvodce',
      forKids: 'pro děti',
      playHint: 'Klepnutím spustíte přehrávání',
      playFailed: 'Přehrávání selhalo',
      played: 'Přehráno',
      visitedLabel: 'Navštíveno',
      resetBtn: 'Vynulovat',
      resetConfirm: 'Opravdu chcete vymazat značky navštívených stanovišť?',
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
      footerCopy: '© Naučná stezka Peliny · Přírodní rezervace Peliny, Choceň',
      footerAuthor: 'Autor aplikace'
    },
    en: {
      trail: 'Trail',
      station: 'Stop',
      of: 'of',
      nextStation: 'Next stop',
      backToOverview: 'Back to overview',
      showOnMap: 'Show on Mapy.cz',
      audioGuide: 'Audio guide',
      forKids: 'for kids',
      playHint: 'Tap to play',
      playFailed: 'Playback failed',
      played: 'Played',
      visitedLabel: 'Visited',
      resetBtn: 'Reset',
      resetConfirm: 'Really clear visited markers?',
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
      footerCopy: '© Peliny Nature Trail · Peliny Nature Reserve, Choceň',
      footerAuthor: 'Application by'
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
    if (params) {
      for (const k in params) s = s.replace('{' + k + '}', params[k]);
    }
    return s;
  }

  function dataFileUrl(lang, prefix) {
    prefix = prefix || '';
    return prefix + 'data/stations' + (lang === 'en' ? '.en' : '') + '.json';
  }

  function getVisited() {
    try {
      return new Set(JSON.parse(localStorage.getItem(VISITED_KEY) || '[]'));
    } catch (e) {
      return new Set();
    }
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
    el.className = 'site-footer';
    el.innerHTML =
      '<p class="site-footer__row">' + escapeHtml(t(lang, 'footerCopy')) + '</p>' +
      '<p class="site-footer__row">' + escapeHtml(t(lang, 'footerAuthor')) +
      ': <a href="https://www.smartghost.cz" target="_blank" rel="noopener">www.smartghost.cz</a></p>';
  }

  global.PelinyApp = {
    detectLang, setLang, t, I18N,
    dataFileUrl, getVisited, markVisited, clearVisited,
    escapeHtml, renderLangSwitch, renderFooter
  };
})(window);
