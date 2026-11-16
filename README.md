# Romina-Website

Website für Mag. Romina Lauzensky mit Next.js, TypeScript und App Router. Das vorhandene Projekt wurde weitergeführt; keine zusätzliche UI-Bibliothek.

## Auf dem Mac ansehen

Terminal öffnen und eingeben:

```sh
cd ~/Documents/Romina-Website
npm run dev
```

Im Browser http://127.0.0.1:3000 öffnen. Terminal geöffnet lassen; mit Ctrl + C stoppen. Bei einem belegten Port die im Terminal angezeigte Adresse verwenden. Ein bereits laufender Server muss nicht ein zweites Mal gestartet werden.

## Prüfen und optimierte Version starten

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

Vor einem Deployment `NEXT_PUBLIC_SITE_URL` auf die endgültige öffentliche Domain setzen. Die Variable steuert Canonical-Links, Sitemap und `robots.txt`; ohne Angabe wird `https://www.psychotherapie-lauzensky.at` verwendet. Die noch zu bestätigenden Angaben für Impressum und Datenschutz stehen in [LEGAL-REVIEW.md](LEGAL-REVIEW.md).

Für `npm start` vorher den Entwicklungsserver stoppen. Auf einem neuen Rechner die Abhängigkeiten mit `npm ci` installieren. Node.js 24 ist in `.nvmrc` vorgesehen.

## Aufbau

- `src/app/page.tsx`: Homepage mit Hero, Intro, Themen, Über mich, Therapie, Standorten und Kontakt.
- `src/app/layout.tsx`: Sprache, SEO-Metadaten und lokal eingebundene Schriften.
- `src/app/therapie/`: Unterseiten für die Therapieangebote.
- `src/app/kontakt/`: Kontaktdaten und Ordinationsstandorte.
- `src/app/impressum/` und `src/app/datenschutz/`: rechtliche Angaben; offene Punkte stehen in `LEGAL-REVIEW.md`.
- `src/app/sitemap.ts` und `src/app/robots.ts`: Suchmaschinen- und Crawler-Dateien.
- `src/app/globals.css`: Designsystem, responsive Layouts, Fokuszustände und Reduced-Motion-Regeln.
- `src/components/site-header.tsx`: Desktop- und mobile Navigation; Escape und Fokusübergabe.
- `src/components/design-elements.tsx`: wiederkehrende Links und Pfeile.
- `src/app/fonts/`: Playfair Display, Inter und ihre freien Lizenzen.
- `public/images/`: zwei echte Fotos von Rominas bestehender Website.
- `CONTENT-SOURCES.md`: Quellen, Bildauswahl und noch offene Inhalte.

Schriften und Fotos werden lokal ausgeliefert. Alle Seiten werden beim Build statisch vorgerendert. Nur das mobile Menü benötigt einen kleinen eigenen Client-Baustein.

## Aktueller Stand

Homepage, Kontaktseite und sechs Therapieseiten sind umgesetzt. E-Mail- und Telefonlinks sind funktional. Das frühere Kontaktformular ohne Versandfunktion wurde entfernt. Für die Veröffentlichung müssen die rechtlichen Angaben gemäß `LEGAL-REVIEW.md` mit den tatsächlichen Praxis- und Hostingdaten abgeglichen werden.

Keine Veröffentlichung vorgenommen.
