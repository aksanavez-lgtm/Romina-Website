# Romina-Website · Homepage V1

Erste redaktionelle Homepage für Mag. Romina Lauzensky mit Next.js, TypeScript und App Router. Das vorhandene Projekt wurde weitergeführt; keine zusätzliche UI-Bibliothek.

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

Für `npm start` vorher den Entwicklungsserver stoppen. Auf einem neuen Rechner die Abhängigkeiten mit `npm ci` installieren. Node.js 24 ist in `.nvmrc` vorgesehen.

## Aufbau

- `src/app/page.tsx`: Homepage mit Hero, Intro, Themen, Über mich, Therapie, Standorten und Kontakt.
- `src/app/layout.tsx`: Sprache, SEO-Metadaten und lokal eingebundene Schriften.
- `src/app/globals.css`: Designsystem, responsive Layouts, Fokuszustände und Reduced-Motion-Regeln.
- `src/components/site-header.tsx`: Desktop- und mobile Navigation; Escape und Fokusübergabe.
- `src/components/design-elements.tsx`: wiederkehrende Links und Pfeile.
- `src/app/fonts/`: Playfair Display, Inter und ihre freien Lizenzen.
- `public/images/`: zwei echte Fotos von Rominas bestehender Website.
- `CONTENT-SOURCES.md`: Quellen, Bildauswahl und noch offene Inhalte.

Schriften und Fotos werden lokal ausgeliefert. Die Homepage wird beim Build statisch vorgerendert. Nur das mobile Menü benötigt einen kleinen eigenen Client-Baustein.

## Stand V1

Nur die Homepage ist umgesetzt. Navigation führt zu Seitenabschnitten. E-Mail- und Telefonlinks sind funktional. „Mehr über mich“ öffnet zusätzliche verifizierte Angaben. Impressum und Datenschutz sind noch als „folgt“ markiert.

Keine Veröffentlichung vorgenommen. Designfeedback folgt vor dem Bau weiterer Seiten.
