# Homepage V1 – Quellen und redaktionelle Entscheidungen

Stand: 17. September 2026. Ausschließlich die Homepage wurde umgesetzt.

## Gestaltungsreferenzen

- Romina-Moodboard-1.heif und Romina-Moodboard-2.heif aus `/Users/aksanavz/Pictures/Romina-Website-Designreferenzen/`: Farbwelt, Atmosphäre, Bildsprache. Beide wurden visuell geprüft. Keine darin abgebildete Person wurde als Romina übernommen.
- https://moniquemillertherapy.com/: große Editorial-Typografie, Weißraum und Wechsel der Kompositionen; keine fremden Texte oder Bilder übernommen.

## Sachliche Inhalte

- https://www.psychotherapie-lauzensky.at/: Kontakt, Standorte, Grundgedanke der Begleitung.
- https://www.psychotherapie-lauzensky.at/ueber-mich/: Kultur- und Sozialanthropologie, Interesse an Sinn und menschlichen Beziehungen, Fachspezifikum VRP, Keramik und Ölmalerei. Die aktuelle Seite wurde direkt abgerufen und geprüft.
- https://www.psychotherapie-lauzensky.at/methode-schwerpunkte/: personzentrierte Arbeitsweise und Themenschwerpunkte.
- https://www.psychotherapie-lauzensky.at/kontakt/: Telefonnummer, E-Mail und beide Praxisadressen.
- https://www.psychotherapie-lauzensky.at/therapeutischer-ablauf/: als Kontext gelesen; Kosten, Zuschüsse und rechtliche Aussagen nicht ungeprüft übernommen.
- Vom Auftrag ausdrücklich bestätigt: vier Therapieformen, künstlerische/erlebnisorientierte Elemente, Alpaka-Angebot und die vier redaktionellen Themengruppen.

Texte wurden gekürzt und in die gewünschte Du-Ansprache gebracht. Redaktionelle Einladungen sind keine Zitate oder Therapieerfolgsversprechen. Suizidale Gedanken werden zurückhaltend erwähnt; keine Krisendienst-Funktion wird versprochen.

## Fotos

Die Nutzerin hat die Übernahme der echten Fotos der bestehenden Website ausdrücklich freigegeben. Beide verwendeten Fotos wurden vor der Integration vollständig angesehen.

| Verwendung | Lokale Datei | Originalquelle | Größe |
| --- | --- | --- | --- |
| Hero: Romina im Praxisraum | public/images/praxis-gespraechsraum.jpg | https://www.psychotherapie-lauzensky.at/wp-content/uploads/2023/04/Praxis2-2048x1365.jpg | 2048 × 1365 |
| Über mich: farbiges Portrait | public/images/romina-lauzensky-portrait.jpg | https://www.psychotherapie-lauzensky.at/wp-content/uploads/2023/04/09_Romy_cut.jpeg | 1816 × 1100 |

Ausschnitte werden mit CSS object-position gesetzt; Originaldateien bleiben unverändert. Next.js Image erzeugt passende responsive Größen. Hero wird vorab geladen, das zweite Bild verzögert. Keine externen Bildanfragen im Besucherbrowser.

Das ebenfalls geprüfte Schwarz-Weiß-Portrait Romy13a.jpg wurde zugunsten der wärmeren Farbfotos nicht verwendet. Der Pexels-Banner der alten Website wurde nicht übernommen. Für V1 sind keine Foto-Platzhalter mehr nötig.

## Schriften

Playfair Display Regular/Italic und Inter Regular/Medium, von Google Fonts bezogen, mit `next/font/local` lokal ausgeliefert. SIL-OFL-Lizenzen liegen in `src/app/fonts/`. Keine Anfragen an Google beim Seitenbesuch und kein Schrift-Download beim Build nötig.

## Bewusst offen

- Impressum und Datenschutz sind sichtbar als „folgt“ gekennzeichnet, ohne tote Links. Rechtstexte und eigene Unterseiten sind nicht Teil von V1.
- Alle Navigationslinks führen zu Abschnitten der Homepage. „Mehr über mich“ im Portrait-Bereich öffnet weitere verifizierte Angaben direkt auf der Seite.
- Kontakt über E-Mail- und Telefonlinks; kein unverbundenes Kontaktformular.
- Keine Veröffentlichung, keine fremden Social-Media-Links, keine erfundenen Bewertungen.
