# Naučná stezka Peliny

Mobilně optimalizovaná webová aplikace pro naučnou stezku v přírodní rezervaci Peliny u Chocně. Návštěvníci na jednotlivých stanovištích naskenují QR kód, který otevře stránku s textem, obrázky a audiem.

## Struktura

```
/index.html              # rozcestník (seznam stanovišť)
/stanoviste/index.html   # šablona detailu stanoviště (načítá data podle ?id=…)
/qr/index.html           # redirect mezivrstva (/qr/?c=1 → /stanoviste/?id=lesni-zivot)
/data/stations.json      # obsah stanovišť (upravovat tady)
/data/redirects.json     # mapování QR kódů na stanoviště
/assets/                 # obrázky, audio
/admin/                  # (bude) PHP administrace
```

## Vývoj

Lokálně stačí statický webserver:

```sh
python3 -m http.server 8000
```

Pak otevřít http://localhost:8000.

## Deploy

Push do `main` → GitHub Actions workflow `.github/workflows/pages.yml` nasadí na GitHub Pages.

## QR kódy

QR nesměruje na konečnou stránku, ale přes redirect:

```
https://<url>/qr/?c=1  →  /stanoviste/?id=lesni-zivot
```

Tím lze obsah měnit bez přetisku QR kódů. Mapování je v `data/redirects.json`.
