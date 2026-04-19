# Naučná stezka Peliny

Mobilně optimalizovaná webová aplikace pro naučnou stezku v přírodní rezervaci **Peliny** u Chocně. U každého panelu v terénu je QR kód — po naskenování se otevře stránka se zajímavostmi, fotografiemi a audio průvodcem. Aplikace běží v prohlížeči, nic se neinstaluje.

**Živá verze:** <https://z1tty.github.io/naucna-stezka-peliny/>

---

## Co umí

- **9 obsahových zastavení + bonus** — text, fotky, audio průvodce pro děti
- **QR skenování v aplikaci i nativním fotoaparátem** — plovoucí „Scan QR" tlačítko, inline tlačítko „Zaznamenat návštěvu" pod prvním odstavcem
- **QR-gated gamifikace** — stanoviště se počítá jako navštívené jen po reálném skenování QR na místě (ne z pohodlí gauče)
- **Bonusové 10. zastavení** a **certifikát s vlastním jménem** (uložitelný jako PDF) se odemknou po naskenování všech 9
- **„Bloudíš?" upozornění** — při opakovaném skenování navigace na první nenavštívené stanoviště
- **Česky + anglicky** — přepínač v rohu, automatická detekce podle jazyka prohlížeče
- **Galerie fotek** — swipovatelná v horní části, doplňkové inline fotky mezi odstavci, fullscreen lightbox s šipkami a swipem
- **Mapy.com integrace** — pěší navigace k dalšímu zastavení, vazba na sdílenou trasu
- **Čtení v terénu** — velké písmo, vysoký kontrast, dark mode, font `Instrument Serif + Inter`, responzivní na malých telefonech

---

## Struktura projektu

```
/index.html                   # Domovská stránka (hero, statistiky, seznam zastavení, progress)
/stanoviste/index.html        # Detail stanoviště (galerie, text, audio, navigace)
/qr/index.html                # QR redirect vrstva (/qr/?c=N → stanoviště nebo home)
/certifikat/index.html        # Certifikát o absolvování, tisknutelný do PDF

/qr-codes/
  index.html                  # Tisknutelný přehled všech testovacích QR kódů
  png/peliny-1..10.png        # Testovací QR kódy (start + 9 stanovišť)

/assets/
  css/style.css               # Styly (mobile-first, light/dark)
  js/app.js                   # Sdílený klient (i18n, scanner, lightbox, navigace, toast)
  images/                     # Fotky + Mapy.com wordmark
  audio/demo.mp3              # Dočasné audio (Apple TTS Zuzana)

/data/
  stations.json               # Obsah zastavení (česky) — UPRAVOVAT ZDE
  stations.en.json            # Obsah zastavení (anglicky)
  redirects.json              # Mapování QR kódů na stanoviště

/.github/workflows/pages.yml  # Automatický deploy na GitHub Pages
```

---

## Úprava obsahu (bez programování)

### Texty, audio, souřadnice
Vše je v `data/stations.json` (CS) a `data/stations.en.json` (EN). Každé stanoviště:

```jsonc
{
  "id": "opukove-pilire",        // stabilní slug, nemění se
  "order": 1,                    // pořadí v UI
  "title": "Opukové pilíře",
  "subtitle": "Dominanta rezervace",
  "icon": "mountain",            // piktogram v menu — viz app.js
  "images": [                    // galerie nahoře (volitelné)
    { "src": "assets/images/...jpg", "caption": "..." }
  ],
  "inlineImages": [              // fotka mezi odstavci (volitelné)
    { "src": "assets/images/...jpg", "after": 1, "caption": "..." }
  ],
  "audio": "assets/audio/demo.mp3",
  "text": [ "odstavec 1", "odstavec 2", "odstavec 3" ],
  "childText": "zjednodušená verze pro děti",
  "location": { "lat": 50.0008, "lng": 16.2172 },
  "durationToNext": "3 min chůze",
  "next": "velbloud"
}
```

Po commitu do `main` je za ~20 s na živé stránce.

### QR kódy → stanoviště
`data/redirects.json`:

```json
{
  "redirects": {
    "1": "__home__",              // QR #1 vede na úvodní stránku
    "2": "opukove-pilire",
    "3": "velbloud",
    "...": "..."
  }
}
```

Výhoda mezivrstvy: fyzické QR zůstávají stejné, obsah lze přemapovat bez přetisku.

### Meta (hlavní stránka)
V `meta` sekci obou jazykových JSONů:
- `title`, `subtitle`, `intro` — hero text + úvod
- `heroImage`, `heroCredit`, `heroCreditUrl` — obrázek + povinná atribuce
- `trailMapUrl` — odkaz na celou trasu v Mapy.com
- `startLocation` — souřadnice vstupu do stezky (pro navigaci „zpět na začátek")
- `stats` — pole s počtem zastavení, délkou, časem

---

## Vývoj lokálně

```sh
python3 -m http.server 8000
```

Pak otevřít <http://localhost:8000>.

---

## Deploy

Push do `main` → GitHub Actions workflow `.github/workflows/pages.yml` → [GitHub Pages](https://z1tty.github.io/naucna-stezka-peliny/).

Build trvá ~15–30 s, žádné klíče ani tajemství.

---

## Testovací QR kódy

Pro testování flow v terénu nebo na papíře:

- Přehled s tiskovou stránkou: <https://z1tty.github.io/naucna-stezka-peliny/qr-codes/>
- Hotové PNG v repozitáři: `qr-codes/png/peliny-1.png` … `peliny-10.png`

QR #1 otevírá domovskou stránku (nezapočítává se do postupu). QR #2–#10 vedou na jednotlivá zastavení.

---

## Co zbývá dodělat

- **Finální texty** — současné jsou sestavené z veřejných zdrojů (chocen.cz, Kudy z nudy, Wikipedie)
- **Reálná audio** — teď dočasné nahrávky z Apple TTS (Zuzana)
- **Fotky** — piktogramy v menu, hero je reálný, zbytek jsou placeholdery
- **Skutečné GPS** panelů v terénu (pro navigaci)
- **Odkaz na Mapy.com stezku** — zatím placeholder `mapy.com/s/banuvabeju`
- **Analytika (GoatCounter)** — až bude registrovaný účet, přidat 1 řádek JS + custom eventy:
  `qr_scan`, `station_view`, `bonus_unlock`, `certificate_view`, `pwa_install`, `audio_play`, `mapy_nav_click`

---

## Použité zdroje

- Hero fotka: **Petr1888** / [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pohled_na_Peliny_01.jpg) — CC BY-SA 4.0
- Logo Mapy.com: Seznam.cz, a.s. / [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Logo_Mapy-com.svg) — CC0
- QR scanner: [html5-qrcode](https://github.com/mebjas/html5-qrcode) (lazy-loaded z CDN)
- Fonty: [Inter](https://rsms.me/inter/) + [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) z Google Fonts

---

## Licence

Proprietární — **„All Rights Reserved"**. Viz soubor [LICENSE](LICENSE).

- Kód, texty, fotografie, audio, grafika a design jsou autorským dílem SmartGhost + ZŠ Sv. Čecha Choceň.
- Kopírování, distribuce, odvozená díla nebo komerční použití jsou **zakázány** bez předchozího písemného souhlasu.
- Povoleno je prohlížet aplikaci v prohlížeči, sdílet odkaz a citovat krátké úryvky s atribucí.

Aplikace obsahuje několik komponent třetích stran pod vlastními licencemi — viz [NOTICES.md](NOTICES.md).

## Autor

Aplikace © [SmartGhost](https://www.smartghost.cz)
Ve spolupráci se ZŠ Sv. Čecha Choceň a městem Choceň.
