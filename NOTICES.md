# Third-party notices

This project is licensed as described in [LICENSE](LICENSE). The following third-party components are embedded or referenced at runtime and are subject to their own licenses — they are not covered by this project's license.

---

## Hero photo (⚠️ placeholder, to be replaced)

| | |
|---|---|
| File | `assets/images/hero-peliny.jpg` |
| Author | **Petr1888** (Wikimedia user) |
| Source | https://commons.wikimedia.org/wiki/File:Pohled_na_Peliny_01.jpg |
| License | Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) |
| Status | **Temporary sample — will be replaced with own photography from ZŠ Sv. Čecha Choceň.** |

While this photo is present, any copy or derivative including it inherits the CC BY-SA 4.0 obligation (attribution + share-alike). Removing this photo removes that constraint.

---

## Mapy.com logo

| | |
|---|---|
| File | `assets/images/mapy-com-logo.svg` |
| Rights holder | Seznam.cz, a.s. |
| Source | https://commons.wikimedia.org/wiki/File:Logo_Mapy-com.svg |
| License | Creative Commons CC0 1.0 Universal (Public Domain Dedication) |
| Note | Trademark rights of Seznam.cz, a.s. are reserved. Used solely to visually identify the Mapy.com service that the app links to. |

---

## html5-qrcode (loaded at runtime from CDN)

| | |
|---|---|
| Source | https://github.com/mebjas/html5-qrcode |
| Version | 2.3.8 |
| CDN | https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js |
| License | Apache License 2.0 |
| Note | Lazy-loaded only when the user taps the scanner button. Not redistributed by this project. |

---

## Web fonts (referenced via Google Fonts)

| | |
|---|---|
| Inter | SIL Open Font License 1.1 — https://rsms.me/inter/ |
| Instrument Serif | SIL Open Font License 1.1 — https://fonts.google.com/specimen/Instrument+Serif |
| Source | `https://fonts.googleapis.com/css2?family=Inter:...&family=Instrument+Serif&display=swap` |
| Note | Loaded on demand from Google Fonts. Not redistributed by this project. |

---

## Icons (inline SVG in HTML)

Several outline pictograms in the app are inspired by the open-source [Lucide](https://lucide.dev/) icon set (ISC License). Shapes have been hand-authored to avoid bundling the library.

---

## Generated content

- Station demo audio (`assets/audio/demo.mp3`) is synthesised with Apple's built-in macOS `say` command using the voice "Zuzana". It is a placeholder and will be replaced with original recordings **voiced by pupils of ZŠ Sv. Čecha Choceň**. Those recordings will be covered by the project license.
- App icons (`assets/icons/*.png`) are generated programmatically (Pillow) from a simple serif "P" on the project's accent color. They are original work covered by the project license.
