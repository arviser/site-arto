# artoremes.fi

Arto Remesin henkilökohtainen verkkosivusto. Yksi käsin tehty staattinen HTML-sivu, suomeksi.

## Rakenne

- `public/`: julkaistava sivusto (`index.html`, `arto-hero.jpg`, faviconit, `apple-touch-icon.png`, `og-image.png`, `robots.txt`, `_headers`).
- `scripts/build.mjs`: kirjoittaa `public/sitemap.xml`. `sitemap.xml` ei ole mukana gitissä.

## Cloudflare Pages

- Production branch: `main`
- Framework preset: None
- Build command: `npm run build`
- Build output directory: `public`
- Preview-branchit: `dev` (esikatselu, https://dev.site-arto.pages.dev)
- `public/_headers` estää `*.pages.dev`-osoitteiden indeksoinnin. Oma domain ei ole estetty.

## Työnkulku

- **Omistaja:** Arto Remes. Kieli: suomi, vastaukset ytimekkäitä, jatkotoimet vaihtoehtoina.
- **Branchit:** `dev` = esikatselu, `main` = tuotanto (artoremes.fi). Kaikki muutokset tehdään ensin `dev`-branchiin.
- **Aloita aina:** `git checkout dev` ja `git pull origin dev`.
- **Esikatselu:** muutos committataan ja pushataan `dev`iin, Cloudflare rakentaa esikatselun. Arto tarkistaa sen.
- **Tuotantoon:** vain Arton komennolla ("viedään tuotantoon"). Silloin `dev` yhdistetään `main`iin ja pushataan.
- **Älä** vie tuotantoon omatoimisesti.

## Sivuston säännöt

- Tekstit ovat Arton omia: älä muuta sisältöä pyytämättä.
- Fontit: Unbounded (otsikot) ja Geist (leipäteksti) Google Fontsista. Aksenttiväri teal `#0a7466` (tumma teema `#4fd8bd`). Vaalea ja tumma teema `prefers-color-scheme`n mukaan.
- Jakokuva `public/og-image.png` (1200×630), `og:image` osoittaa osoitteeseen https://artoremes.fi/og-image.png.
- Kuvapolut `index.html`:ssä ovat suhteellisia.

## Paikallinen rakennus

```
npm run build
```
