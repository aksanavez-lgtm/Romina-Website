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

Schriften und Fotos werden lokal ausgeliefert. Alle Seiten werden beim Build statisch vorgerendert. Das mobile Menü und die Platzhalter-Meldung des Kontaktformulars nutzen kleine Client-Bausteine.

## Aktueller Stand

Homepage, Kontaktseite und sechs Therapieseiten sind umgesetzt. E-Mail- und Telefonlinks sind funktional. Das Kontaktformular sendet über die Brevo Transactional Email API an `praxis@psychotherapie-lauzensky.at`, sobald `BREVO_API_KEY` gesetzt und die Absenderadresse bei Brevo verifiziert ist. Ohne gültige Konfiguration oder bei einem Versandfehler zeigt es Telefonnummer und E-Mail-Adresse als Alternative an. Für die Veröffentlichung müssen die rechtlichen Angaben gemäß `LEGAL-REVIEW.md` mit den tatsächlichen Praxis- und Hostingdaten abgeglichen werden.

### Kontaktformular aktivieren

1. Bei Brevo ein Konto für die Praxis anlegen und `praxis@psychotherapie-lauzensky.at` als Absender verifizieren. Die Domainauthentifizierung gemäß Brevo einrichten.
2. In Brevo unten links **Settings → SMTP & API → API Keys & MCP → Generate API key** öffnen. Einen Namen wie `Romina Website Kontaktformular` vergeben. **Restricted** wählen, für **Transactional email** die Berechtigung **All** setzen und alle anderen Bereiche auf **None** lassen. Den Schlüssel sofort kopieren; Brevo zeigt ihn nur einmal. Einen **API key**, keinen **SMTP key**, verwenden. Lokal in `.env.local` speichern:

   ```text
   BREVO_API_KEY=hier-den-schluessel-eintragen
   ```

3. Dieselbe Umgebungsvariable beim Hosting-Anbieter als geheimes Server-Environment-Variable hinterlegen und die Website neu bereitstellen. Der Schlüssel darf nicht mit `NEXT_PUBLIC_` beginnen und nicht ins Repository eingecheckt werden.
4. Nach der Einrichtung eine echte Testnachricht senden und den Eingang im Praxispostfach prüfen. Die API-Bestätigung allein belegt noch keine Zustellung.
5. In Brevo unter **Settings → Transactional emails → Retention rules** die E-Mail-Vorschau auf **Never store previews** und die Log-Aufbewahrung auf **1 month** setzen, wenn keine längere Aufbewahrung benötigt wird.

Das Formular benötigt einen Next.js-Server oder eine Plattform mit Serverfunktionen. Reines statisches Hosting kann `/api/contact` nicht ausführen. Vor der Veröffentlichung Brevos Auftragsverarbeitungsvereinbarung und die Datenschutzerklärung mit der Praxis prüfen.

Keine Veröffentlichung vorgenommen.
