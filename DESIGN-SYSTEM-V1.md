# Design-System-Referenz – Romina Website V1

Stand: 11. November 2026. **Bestandsaufnahme, keine Designänderung.**

## 1. Geltungsbereich und Leseschlüssel

Diese Referenz basiert auf sämtlichen CSS-, TSX- und TS-Dateien unter `src/`, den lokalen Fontdateien und `FARBPALETTE.md`. Sie unterscheidet die gewünschte **visuelle Hierarchie** von HTML-Tags und dokumentiert auch vorhandene, derzeit nicht eingebundene Regeln. Sie ist keine automatische Vereinheitlichung des Designs.

- Exakte CSS-Ausdrücke sind maßgeblich. `clamp()`, `min()`, Prozent-, Viewport- und Container-Einheiten sind bewusst nicht auf einen einzigen Pixelwert reduziert.
- Das Projekt setzt keine feste Root-Schriftgröße. **Alle px-Umrechnungen von rem in dieser Dokumentation gelten bei der üblichen Browserbasis 16 px**; bei geänderten Browsereinstellungen gelten die rem-Werte. `1rem = 16px` ist eine Rechenbasis, kein zusätzlich vorhandener CSS-Token.
- Einheitenlose Zeilenhöhe ist ein Multiplikator der jeweiligen Schriftgröße; `em`-Buchstabenabstand hängt von der lokalen Schriftgröße ab.
- Nicht gesetzte Werte werden geerbt oder stammen aus Browser-Defaults. Es werden dafür keine erfundenen Zahlen eingesetzt.
- `--font-serif` und `--font-sans` sind durch `next/font/local` erzeugte Schriftfamilienvariablen; die technischen generierten Familiennamen können sich mit Builds ändern.
- Fundstellen beziehen sich auf den Quellstand dieser Dokumentation. CSS-Module sind lokal begrenzt; gleichnamige Klassen aus verschiedenen Dateien sind nicht dieselbe Klasse.
- CSS-Kaskade: `globals.css` ordnet `@layer tokens, base, components, responsive`. Modulregeln liegen außerhalb dieser Layer und haben bei normalen Deklarationen Vorrang vor den geschichteten Regeln. Anschließend gelten Spezifität und Reihenfolge. `!important` ist in den Tabellen ausdrücklich erhalten.
- Vollständige Varianten inklusive aller Media-Bedingungen stehen in den Inventartabellen weiter unten. Rasterbildpixel sind keine Design-Tokens; Farben innerhalb von Fotos werden nicht als CSS-Farben inventarisiert.

## 2. Tatsächliche Seiten und aktive Komponenten

| Bereich | Implementierung / Styles | Status |
| --- | --- | --- |
| Alle Seiten: Header | `src/app/layout.tsx` → `src/components/site-header.tsx` + `site-header.module.css` | Gemeinsamer Header |
| Startseite, Über mich, Therapieübersicht, Themen | `src/app/page.tsx`, `globals.css`, `hero.module.css` | Über mich/Themen sind Ankerabschnitte der Startseite, keine eigenen Routen im aktuellen `src/app` |
| Kontaktblock auf Startseite | `src/components/contact-section.tsx` + Modul | Eigenständiger Kontaktblock mit Gehirngrafik |
| Dreierkarten | `src/components/therapy-values.tsx` + Modul | Auf Startseite eingebunden |
| Kontaktseite | `src/app/kontakt/page.tsx`, `contact-form.tsx`, `contact.module.css` | Eigene Route `/kontakt` |
| Einzeltherapie | `src/app/therapie/einzeltherapie/page.tsx` + vier CSS-Module, `competencies.tsx` | Hero → Sessel-/Methodenabschnitt → Rosé-Titelblock → Kompetenzliste → Footer |
| Weitere fünf Therapie-Unterseiten | jeweilige `page.tsx`, `src/app/therapie/therapy.module.css` | Aktuell nur Seitentitel im gemeinsamen Grundlayout und Footer |
| Footer | `src/components/site-footer.tsx` + Modul | Von Seiten eingebunden, nicht durch Root-Layout |
| Scrollanimation | `src/components/fade-in.tsx` | Startseite Intro/Themen und Einzeltherapie-Roséblock |
| Ältere Handschriftnotiz | `src/components/handwritten-note.tsx` + Modul | Vorhanden, aber von keiner aktuellen Seite importiert; Kontaktseite nutzt Allura unabhängig davon |

Ältere globale Regeln wie `.site-header`, `.wordmark`, `.main-navigation`, `.hero`, `.hero-art`, `.contact`, `.site-footer`, `.footer-grid` sind **nicht** die gleichnamigen Modulklassen der aktuellen Header-/Hero-/Footer-Komponenten. Sie bleiben als Quellbestand im vollständigen Inventar, dürfen aber nicht unbesehen als wirksames Design dieser Komponenten interpretiert werden. Auch `.heading h2` in `competencies.module.css` hat nach Entfernen der alten Überschrift aktuell kein passendes h2 in dieser Komponente.

## 3. Schriftfamilien und Dateien

Die exakten Namen wurden aus der `name`-Tabelle der TTF-Dateien ausgelesen, nicht aus den Dateinamen geraten.

| Familie | Vollständiger Fontname | PostScript-Name | Datei | Einbindung / Gewicht |
| --- | --- | --- | --- | --- |
| Inter | Inter Medium | Inter-Medium | [src/app/fonts/inter-medium.ttf](src/app/fonts/inter-medium.ttf) | 500 normal |
| Inter | Inter Regular | Inter-Regular | [src/app/fonts/inter-regular.ttf](src/app/fonts/inter-regular.ttf) | 400 normal |
| Playfair Display | Playfair Display Italic | PlayfairDisplay-Italic | [src/app/fonts/playfair-italic.ttf](src/app/fonts/playfair-italic.ttf) | 400 italic |
| Playfair Display | Playfair Display Regular | PlayfairDisplay-Regular | [src/app/fonts/playfair-regular.ttf](src/app/fonts/playfair-regular.ttf) | 400 normal |
| Allura | Allura Regular | Allura-Regular | [src/components/fonts/allura-regular.ttf](src/components/fonts/allura-regular.ttf) | 400 normal |

Inter und Playfair Display werden in `src/app/layout.tsx` über `localFont` geladen, `display: "swap"`; beide Variablen stehen am `<html>`-Element. Allura wird in `site-header.tsx`, `kontakt/page.tsx` und der derzeit ungenutzten `handwritten-note.tsx` ebenfalls lokal geladen, Gewicht 400 und `display: "swap"`.

Fallbacks: `Georgia, serif` für Serifentext; `Arial, sans-serif` für Sans-Serif. `.arrow` nutzt ausdrücklich `Arial, sans-serif`. Diese Fallbacks sind keine zusätzlich mitgelieferten Fontdateien. Inter Italic oder weitere Gewichte sind nicht als eigene Dateien eingebunden. `em` in Playfair kann die vorhandene echte Italic-Datei nutzen.

### 3.1 Verbindliche visuelle Hierarchie und tatsächliche Referenzen

| Element | Exakter Wert | CSS-Klasse / Variable | Fundstelle |
| --- | --- | --- | --- |
| H1-Referenz „Therapie beginnt …“ | Playfair Display 400; Größe `clamp(2.6rem, 4.6vw, 4.75rem)` = 41,6–76 px; LH `1.14`; Tracking `-.045em`; normale Schreibweise; em kursiv | tatsächliches HTML `h2`, `--heading`, `.about-copy h2` | `src/app/globals.css:21,31–34,123`; `src/app/page.tsx` |
| H1-Farbakzent „Begegnung.“ | `#256e5d`, Playfair Display Italic 400 | Inline-Style am `em` | `src/app/page.tsx:61` |
| H2-Referenz „Was bewegt …“ | Playfair Display Regular 400; `1.55rem` = 24,8 px; LH `1.5` = 37,2 px; Tracking nicht gesetzt (normal im Referenzkontext); nicht kursiv; geerbtes `--ink` | tatsächliches `p.body-large`, nicht allgemeines `h2` | `src/app/globals.css:125`; `src/app/page.tsx` |
| H3-Referenz „DER MENSCH …“ | Inter Medium 500; `.66rem` = 10,56 px; LH `1.6` = 16,896 px; Tracking `.17em`; uppercase; nicht kursiv | tatsächliches `p.eyebrow`, nicht allgemeines `h3` | `src/app/globals.css:28,49`; `src/app/page.tsx` |
| Fließtext-Referenz „Diese Fragen …“ | Inter Regular 400; `1rem` = 16 px; LH `1.75` = 28 px; Tracking normal; `--ink`; nicht kursiv | `body`, `--font-size-body`, `.about-copy > p:not(.eyebrow)` | `src/app/globals.css:5,28,124` |
| Einzeltherapie-Kompetenzuntertitel | Playfair Display 400; `1.55rem` = 24,8 px; LH `1.5`; Tracking `normal`; `font-style: normal`; `#000` | `.subtitle` | `src/app/therapie/einzeltherapie/competencies.module.css:5` |

Die H2-/H3-Referenzen ändern ihre Schriftgröße im bestehenden Über-mich-Abschnitt nicht an einem Breakpoint. Die Abstände des Abschnitts ändern sich mobil. Visuelle H1/H2/H3-Bezeichnungen sind **keine Anweisung**, HTML-Tags ohne Prüfung zu ersetzen.

### 3.2 Wichtige lokale Typografievarianten

| Element | Exakter Wert | CSS-Klasse / Variable | Fundstelle |
| --- | --- | --- | --- |
| Start-Hero H1 | `clamp(57.6px, 5.936vw, 113.6px)`; LH `1.03`; Tracking `-.06em`; zusätzlich gesamte H1 `scale(.8)`; erste Zeile `scaleX(.93)`, em `scaleX(1.05)` | `.content h1` | `src/app/hero.module.css` |
| Start-Hero H1 ≤1100 | `clamp(51.2px, 5.936vw, 65.6px)`; bestehende Skalierung bleibt | `.content h1` | gleiches Modul |
| Start-Hero H1 ≤760 | `clamp(27.2px, 6.92vw, 52px)`; LH `1.08`; Tracking `-.055em`; Skalierung bleibt | `.content h1` | gleiches Modul |
| Start-Hero Beschreibung | Playfair Regular; `21.16px` = `1.3225rem` bei 16 px; LH `34.5px`; nicht kursiv | `.description` | gleiches Modul |
| Intro / Themen-Titel | `clamp(2.75rem, 4.4vw, 4.4rem)`; LH `clamp(2.85rem,4.56vw,4.56rem)`; geerbtes H2-Tracking | `.intro h2`, `.topics-heading h2` | `globals.css` |
| Intro / Themen ≤760 | `clamp(2.31rem,8.25vw,3.85rem)`; LH `clamp(2.394rem,8.55vw,3.99rem)` | gleiche Selektoren | `globals.css` |
| Kontakt-Hero H1 | `clamp(46.08px,4.7488vw,90.88px)`; LH `1.1`; Tracking `-.045em`; `#5C6E5C`; Akzent `#b65c40` italic | `.heroCopy h1`, `.headlineAccent` | `kontakt/contact.module.css` |
| Kontakt-Hero ≤1100 / ≤760 | `clamp(40.96px,4.7488vw,52.48px)` / `clamp(21.76px,5.536vw,41.6px)` | `.heroCopy h1` | gleiches Modul |
| Einzeltherapie Hero H1 | `clamp(2.8rem,4.7488vw,5rem)`; LH `1.12`; Tracking `-.045em` | `.copy h1` | `therapie/einzeltherapie/hero.module.css` |
| Einzeltherapie Hero H2 | `clamp(1.7rem,2.7vw,2.65rem)`; 400; LH `1.24`; Tracking `-.035em`; Terrakotta; zweite Zeile italic | `.copy h2` | gleiches Modul |
| Einzeltherapie Methoden-H2-Referenz | `.body-large` 1.55rem/1.5; `#256e5d`; vorhandenes em durch `font-style: normal` gerade gesetzt | `.highlight`, `.highlight em` | `benefits.module.css` und `globals.css` |
| Einzeltherapie Rosé-Titel | dieselben Größen-/LH-Ausdrücke wie Intro; em Terrakotta; mobile Breite 100% statt Intro-Überbreite | `.title` | `competencies-heading.module.css` |
| Kompetenz-Einträge | Playfair; `1.25rem` = 20 px; LH `1.3` = 26 px | `.item` | `competencies.module.css` |
| Fünf weitere Therapieseiten H1 | `clamp(2rem,4.5vw,4.5rem)`; LH `1.15` | `.page h1` | `therapie/therapy.module.css` |

Alle übrigen Schriftvarianten, einschließlich Navigation, Logo, Footer, Formular, Karten, Kontakte und sämtliche Breakpoint-Überschreibungen, sind in Abschnitt 8 vollständig aufgeführt.

## 4. Zentrale Tokens und Farbdefinitionen

| Variable | Exakter Wert | Geltungsbereich | Fundstelle |
| --- | --- | --- | --- |
| --font-size-body | 1rem | :root / @layer tokens | [src/app/globals.css:4](src/app/globals.css#L4) |
| --sand | #f7efe9 | :root / @layer tokens | [src/app/globals.css:4](src/app/globals.css#L4) |
| --paper | #fcf9f5 | :root / @layer tokens | [src/app/globals.css:4](src/app/globals.css#L4) |
| --rose | #d9b4a7 | :root / @layer tokens | [src/app/globals.css:4](src/app/globals.css#L4) |
| --terracotta | #c97f6b | :root / @layer tokens | [src/app/globals.css:4](src/app/globals.css#L4) |
| --clay-ink | #8a4637 | :root / @layer tokens | [src/app/globals.css:4](src/app/globals.css#L4) |
| --sage | #7b8f7a | :root / @layer tokens | [src/app/globals.css:4](src/app/globals.css#L4) |
| --sage-soft | #95a594 | :root / @layer tokens | [src/app/globals.css:4](src/app/globals.css#L4) |
| --sage-light | #dce1d7 | :root / @layer tokens | [src/app/globals.css:4](src/app/globals.css#L4) |
| --blue | #687c93 | :root / @layer tokens | [src/app/globals.css:4](src/app/globals.css#L4) |
| --blue-light | #dfe5ec | :root / @layer tokens | [src/app/globals.css:4](src/app/globals.css#L4) |
| --ink | #2e2e2e | :root / @layer tokens | [src/app/globals.css:4](src/app/globals.css#L4) |
| --muted | #625d58 | :root / @layer tokens | [src/app/globals.css:4](src/app/globals.css#L4) |
| --line | #bdb3a9 | :root / @layer tokens | [src/app/globals.css:4](src/app/globals.css#L4) |
| --gutter | clamp(1.25rem, 5.2vw, 6rem) | :root / @layer tokens | [src/app/globals.css:4](src/app/globals.css#L4) |
| --section-space | clamp(4.5rem, 8vw, 8rem) | :root / @layer tokens | [src/app/globals.css:4](src/app/globals.css#L4) |
| --heading | clamp(2.6rem, 4.6vw, 4.75rem) | :root / @layer tokens | [src/app/globals.css:4](src/app/globals.css#L4) |
| --gutter | 1.5rem | :root / @layer responsive → @media (max-width: 760px) | [src/app/globals.css:212](src/app/globals.css#L212) |
| --photo-right-gap | max(0px, calc((100cqw - 100cqh * 1154 / 871) / 2)) | .photo img / @media(min-width: 1001px) | [src/app/kontakt/contact.module.css:57](src/app/kontakt/contact.module.css#L57) |
| --header-terracotta | #b65c40 | .header / Basis (außerhalb @layer) | [src/components/site-header.module.css:2](src/components/site-header.module.css#L2) |
| --signature-green | #256e5d | .header / Basis (außerhalb @layer) | [src/components/site-header.module.css:2](src/components/site-header.module.css#L2) |

Zusätzliche Laufzeitvariable: `--site-header-height` wird von `site-header.tsx` über `ResizeObserver` auf die tatsächliche Headerhöhe in px gesetzt. Kein konstanter Wert; Fallback in `html`-Scrollabstand: `180px`. Fontvariablen: `--font-sans` = Inter; `--font-serif` = Playfair Display (Root-Layout).

### 4.1 Farbverwendung – jede farbbezogene CSS-Deklaration

HEX-Schreibweisen werden exakt aus dem Code übernommen. `#000` = `#000000`, `#fff`/`white` = `#FFFFFF`, `black` = `#000000`, `transparent` ist transparent, `currentColor` erbt die aktuelle Textfarbe. Achtstellige HEX-Werte enthalten Alpha. `color-mix()` und Gradienten bleiben als exakte Ausdrücke dokumentiert, da ihre Darstellung vom Hintergrund abhängen kann; daraus wird kein pauschaler HEX-Wert erfunden. Explizite `rgba()`-Literale sind im aktuellen CSS nicht vorhanden.

| Verwendung / Selektor | Exakte Farbdeklaration | Bedingung / Layer | Fundstelle |
| --- | --- | --- | --- |
| :root | --sand: #f7efe9; --paper: #fcf9f5; --rose: #d9b4a7; --terracotta: #c97f6b; --clay-ink: #8a4637; --sage: #7b8f7a; --sage-soft: #95a594; --sage-light: #dce1d7; --blue: #687c93; --blue-light: #dfe5ec; --ink: #2e2e2e; --muted: #625d58; --line: #bdb3a9 | @layer tokens | [src/app/globals.css:4](src/app/globals.css#L4) |
| body | background: var(--sand); color: var(--ink) | @layer base | [src/app/globals.css:28](src/app/globals.css#L28) |
| ::selection | background: var(--rose); color: var(--ink) | @layer base | [src/app/globals.css:29](src/app/globals.css#L29) |
| a | color: inherit | @layer base | [src/app/globals.css:37](src/app/globals.css#L37) |
| button | color: inherit | @layer base | [src/app/globals.css:38](src/app/globals.css#L38) |
| :focus-visible | outline: 2px solid var(--clay-ink) | @layer base | [src/app/globals.css:40](src/app/globals.css#L40) |
| [tabindex="-1"]:focus:not(:focus-visible) | outline: none | @layer base | [src/app/globals.css:41](src/app/globals.css#L41) |
| .button | background: var(--clay-ink); color: var(--paper); border: 1px solid var(--clay-ink) | @layer components | [src/app/globals.css:52](src/app/globals.css#L52) |
| .button:hover | background: #693429 | @layer components | [src/app/globals.css:53](src/app/globals.css#L53) |
| .text-link | border-bottom: 1px solid currentColor | @layer components | [src/app/globals.css:54](src/app/globals.css#L54) |
| .site-header | border-bottom: 1px solid var(--line) | @layer components | [src/app/globals.css:57](src/app/globals.css#L57) |
| .main-navigation a | border-bottom: 1px solid transparent | @layer components | [src/app/globals.css:63](src/app/globals.css#L63) |
| .main-navigation a:hover | border-color: var(--clay-ink) | @layer components | [src/app/globals.css:64](src/app/globals.css#L64) |
| .skip-link | background: var(--ink); color: white | @layer components | [src/app/globals.css:67](src/app/globals.css#L67) |
| .hero h1 em | color: var(--clay-ink) | @layer components | [src/app/globals.css:72](src/app/globals.css#L72) |
| .hero-bottom | border-top: 1px solid var(--line) | @layer components | [src/app/globals.css:77](src/app/globals.css#L77) |
| .hero-art | background: var(--rose) | @layer components | [src/app/globals.css:81](src/app/globals.css#L81) |
| .portrait-image | background: #d8d7d0 | @layer components | [src/app/globals.css:83](src/app/globals.css#L83) |
| .therapy-approach | border-top: 1px solid var(--line) | @layer components | [src/app/globals.css:85](src/app/globals.css#L85) |
| .approach-details summary | color: var(--clay-ink) | @layer components | [src/app/globals.css:91](src/app/globals.css#L91) |
| .intro | background: var(--sage-light); color: #000 | @layer components | [src/app/globals.css:93](src/app/globals.css#L93) |
| .intro-symbol | color: #536653 | @layer components | [src/app/globals.css:98](src/app/globals.css#L98) |
| .topics-heading | background: var(--sage-soft) | @layer components | [src/app/globals.css:104](src/app/globals.css#L104) |
| .topic-rose | background: #e4c9be | @layer components | [src/app/globals.css:107](src/app/globals.css#L107) |
| .topic-sage | background: var(--sage-light) | @layer components | [src/app/globals.css:108](src/app/globals.css#L108) |
| .topic-blue | background: var(--blue-light) | @layer components | [src/app/globals.css:109](src/app/globals.css#L109) |
| .topic-sand | background: #eae0d4 | @layer components | [src/app/globals.css:110](src/app/globals.css#L110) |
| .topic-number | border-bottom: 1px solid #8e847b | @layer components | [src/app/globals.css:111](src/app/globals.css#L111) |
| .about | background: #ebe3d9 | @layer components | [src/app/globals.css:118](src/app/globals.css#L118) |
| .about[tabindex="-1"]:focus, .topics[tabindex="-1"]:focus | outline: none | @layer components | [src/app/globals.css:119](src/app/globals.css#L119) |
| .portrait figcaption | border-bottom: 1px solid var(--line) | @layer components | [src/app/globals.css:121](src/app/globals.css#L121) |
| .portrait figcaption span:last-child | color: var(--muted) | @layer components | [src/app/globals.css:122](src/app/globals.css#L122) |
| .about-read-more summary | border-bottom: none | @layer components | [src/app/globals.css:128](src/app/globals.css#L128) |
| .about-details summary | color: var(--clay-ink); border-block: 1px solid var(--clay-ink) | @layer components | [src/app/globals.css:136](src/app/globals.css#L136) |
| .therapy-intro h2 | color: var(--clay-ink) | @layer components | [src/app/globals.css:148](src/app/globals.css#L148) |
| .therapy-row | border-top: 1px solid var(--line) | @layer components | [src/app/globals.css:150](src/app/globals.css#L150) |
| .therapy-row h3:hover | color: var(--sage) | @layer components | [src/app/globals.css:153](src/app/globals.css#L153) |
| .therapy-extra | border-top: 1px solid var(--line) | @layer components | [src/app/globals.css:155](src/app/globals.css#L155) |
| .locations | background: var(--blue-light) | @layer components | [src/app/globals.css:158](src/app/globals.css#L158) |
| .locations-grid > * | border-top: 1px solid #8c99a7 | @layer components | [src/app/globals.css:162](src/app/globals.css#L162) |
| .contact | background: var(--rose) | @layer components | [src/app/globals.css:167](src/app/globals.css#L167) |
| .contact-circle | border: 1px solid var(--ink) | @layer components | [src/app/globals.css:170](src/app/globals.css#L170) |
| .contact-circle:hover | background: var(--sand) | @layer components | [src/app/globals.css:172](src/app/globals.css#L172) |
| .contact-bottom | border-top: 1px solid #9b776b | @layer components | [src/app/globals.css:173](src/app/globals.css#L173) |
| .site-footer | background: var(--sand) | @layer components | [src/app/globals.css:179](src/app/globals.css#L179) |
| .footer-bottom | border-top: 1px solid var(--line) | @layer components | [src/app/globals.css:188](src/app/globals.css#L188) |
| .legal-placeholders | color: var(--muted) | @layer components | [src/app/globals.css:190](src/app/globals.css#L190) |
| .menu-toggle | border: 0; background: transparent | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:216](src/app/globals.css#L216) |
| .menu-icon i | background: var(--ink) | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:218](src/app/globals.css#L218) |
| .main-navigation | background: var(--sand); border-bottom: 1px solid var(--line) | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:221](src/app/globals.css#L221) |
| .main-navigation a | border-bottom: 1px solid var(--line) | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:223](src/app/globals.css#L223) |
| .hero | background: #faf5ef; color: #252525 | Basis (außerhalb @layer) | [src/app/hero.module.css:1](src/app/hero.module.css#L1) |
| .content h1 em | color: #b65c40 | Basis (außerhalb @layer) | [src/app/hero.module.css:37](src/app/hero.module.css#L37) |
| .button | background: var(--sage); color: #fff | Basis (außerhalb @layer) | [src/app/hero.module.css:55](src/app/hero.module.css#L55) |
| .button:hover | background: color-mix(in srgb, var(--sage) 85%, black) | Basis (außerhalb @layer) | [src/app/hero.module.css:76](src/app/hero.module.css#L76) |
| .hero::after | background: linear-gradient(90deg, #faf5eff2, #faf5efb3 38%, transparent 73%) | @media (max-width: 1100px) | [src/app/hero.module.css:85](src/app/hero.module.css#L85) |
| .hero::after | background: linear-gradient(180deg, #faf5effa 0%, #faf5eff2 45%, #faf5ef80 65%, transparent 84%) | @media (max-width: 760px) | [src/app/hero.module.css:97](src/app/hero.module.css#L97) |
| .page | color: var(--ink); background: var(--paper) | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:1](src/app/kontakt/contact.module.css#L1) |
| .overline::after | background: var(--blue) | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:3](src/app/kontakt/contact.module.css#L3) |
| .hero | background: var(--sand) url('/images/kontakt-hero.png') center / cover no-repeat | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:4](src/app/kontakt/contact.module.css#L4) |
| .heroCopy h1 | color: #5C6E5C | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:9](src/app/kontakt/contact.module.css#L9) |
| .headlineAccent | color: #b65c40 | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:10](src/app/kontakt/contact.module.css#L10) |
| .info > div | border-left: 1px solid var(--line) | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:14](src/app/kontakt/contact.module.css#L14) |
| .info > div:first-child | border: 0 | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:15](src/app/kontakt/contact.module.css#L15) |
| .icon | border: 1px solid currentColor; color: var(--terracotta) | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:17](src/app/kontakt/contact.module.css#L17) |
| .message | background: var(--sand) | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:22](src/app/kontakt/contact.module.css#L22) |
| .form input:not([type=checkbox]), .form textarea | border: 1px solid transparent; background: var(--paper); color: var(--ink) | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:28](src/app/kontakt/contact.module.css#L28) |
| .form input::placeholder, .form textarea::placeholder | color: var(--ink) | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:29](src/app/kontakt/contact.module.css#L29) |
| .consent input | accent-color: var(--clay-ink) | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:32](src/app/kontakt/contact.module.css#L32) |
| .form button | border: 0; background: var(--clay-ink); color: var(--sand) | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:34](src/app/kontakt/contact.module.css#L34) |
| .location + .location | border-left: 1px solid var(--line) | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:41](src/app/kontakt/contact.module.css#L41) |
| .mapLink | background: var(--blue-light) | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:42](src/app/kontakt/contact.module.css#L42) |
| .crisis | background: var(--blue-light) | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:47](src/app/kontakt/contact.module.css#L47) |
| .crisisHeading .icon | color: var(--ink) | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:50](src/app/kontakt/contact.module.css#L50) |
| .crisisHeading .icon svg | color: var(--terracotta) | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:51](src/app/kontakt/contact.module.css#L51) |
| .crisisInner > p | border-left: 1px solid var(--line) | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:53](src/app/kontakt/contact.module.css#L53) |
| .info > div:nth-child(3) | border-left: 0 | @media(max-width: 1000px) | [src/app/kontakt/contact.module.css:74](src/app/kontakt/contact.module.css#L74) |
| .crisisInner > p | border-left: 0 | @media(max-width: 1000px) | [src/app/kontakt/contact.module.css:79](src/app/kontakt/contact.module.css#L79) |
| .location + .location | border-left: 0; border-top: 1px solid var(--line) | @media(max-width: 760px) | [src/app/kontakt/contact.module.css:96](src/app/kontakt/contact.module.css#L96) |
| .info > div | border-left: 0; border-bottom: 1px solid var(--line) | @media(max-width: 420px) | [src/app/kontakt/contact.module.css:101](src/app/kontakt/contact.module.css#L101) |
| .info > div:first-child | border-bottom: 1px solid var(--line) | @media(max-width: 420px) | [src/app/kontakt/contact.module.css:102](src/app/kontakt/contact.module.css#L102) |
| .info > div:last-child | border-bottom: 0 | @media(max-width: 420px) | [src/app/kontakt/contact.module.css:103](src/app/kontakt/contact.module.css#L103) |
| .section | background: var(--paper) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/benefits.module.css:1](src/app/therapie/einzeltherapie/benefits.module.css#L1) |
| .highlight | color: #256e5d | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/benefits.module.css:5](src/app/therapie/einzeltherapie/benefits.module.css#L5) |
| .section | background: var(--rose); color: var(--ink) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies-heading.module.css:1](src/app/therapie/einzeltherapie/competencies-heading.module.css#L1) |
| .title em | color: var(--terracotta) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies-heading.module.css:25](src/app/therapie/einzeltherapie/competencies-heading.module.css#L25) |
| .section | background: var(--paper); color: var(--ink) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:1](src/app/therapie/einzeltherapie/competencies.module.css#L1) |
| .heading h2 em | color: #256e5d | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:4](src/app/therapie/einzeltherapie/competencies.module.css#L4) |
| .subtitle | color: #000 | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:5](src/app/therapie/einzeltherapie/competencies.module.css#L5) |
| .item | border-bottom: 1px solid color-mix(in srgb, var(--rose) 55%, var(--paper)) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:8](src/app/therapie/einzeltherapie/competencies.module.css#L8) |
| .sage | background: var(--sage-light); color: #256e5d | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:12](src/app/therapie/einzeltherapie/competencies.module.css#L12) |
| .peach | background: color-mix(in srgb, var(--rose) 35%, var(--paper)); color: var(--clay-ink) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:13](src/app/therapie/einzeltherapie/competencies.module.css#L13) |
| .blue | background: var(--blue-light); color: var(--blue) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:14](src/app/therapie/einzeltherapie/competencies.module.css#L14) |
| .hero | background: var(--sand) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/hero.module.css:1](src/app/therapie/einzeltherapie/hero.module.css#L1) |
| .hero::after | background: linear-gradient(90deg, var(--sand), transparent 45%) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/hero.module.css:3](src/app/therapie/einzeltherapie/hero.module.css#L3) |
| .copy | color: var(--ink) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/hero.module.css:4](src/app/therapie/einzeltherapie/hero.module.css#L4) |
| .copy h2 | color: var(--terracotta) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/hero.module.css:6](src/app/therapie/einzeltherapie/hero.module.css#L6) |
| .button | background: #687C93; color: #fff | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/hero.module.css:9](src/app/therapie/einzeltherapie/hero.module.css#L9) |
| .button:focus-visible | outline: 2px solid var(--ink) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/hero.module.css:10](src/app/therapie/einzeltherapie/hero.module.css#L10) |
| .hero::after | background: linear-gradient(180deg, var(--sand) 0%, var(--sand) 58%, transparent 75%) | @media (max-width: 600px) | [src/app/therapie/einzeltherapie/hero.module.css:22](src/app/therapie/einzeltherapie/hero.module.css#L22) |
| .page | background: var(--sand) | Basis (außerhalb @layer) | [src/app/therapie/therapy.module.css:1](src/app/therapie/therapy.module.css#L1) |
| .section | background: var(--rose); color: var(--ink) | Basis (außerhalb @layer) | [src/components/contact-section.module.css:1](src/components/contact-section.module.css#L1) |
| .contacts | border-top: 1px solid color-mix(in srgb, var(--ink) 30%, transparent) | Basis (außerhalb @layer) | [src/components/contact-section.module.css:19](src/components/contact-section.module.css#L19) |
| .icon | border: 1px solid currentColor | Basis (außerhalb @layer) | [src/components/contact-section.module.css:23](src/components/contact-section.module.css#L23) |
| .artwork | border-left: 1px solid color-mix(in srgb, var(--ink) 30%, transparent) | Basis (außerhalb @layer) | [src/components/contact-section.module.css:25](src/components/contact-section.module.css#L25) |
| .artwork | border-left: 0; border-top: 1px solid color-mix(in srgb, var(--ink) 30%, transparent) | @media (max-width: 1000px) | [src/components/contact-section.module.css:43](src/components/contact-section.module.css#L43) |
| .note | color: #fff | Basis (außerhalb @layer) | [src/components/handwritten-note.module.css:1](src/components/handwritten-note.module.css#L1) |
| .footer | background: var(--sand); color: var(--ink) | Basis (außerhalb @layer) | [src/components/site-footer.module.css:1](src/components/site-footer.module.css#L1) |
| .rule | background: #cbbbaa | Basis (außerhalb @layer) | [src/components/site-footer.module.css:6](src/components/site-footer.module.css#L6) |
| .branch | color: #c8b9a7 | Basis (außerhalb @layer) | [src/components/site-footer.module.css:8](src/components/site-footer.module.css#L8) |
| .icon | border: 1.2px solid var(--sage); color: var(--sage) | Basis (außerhalb @layer) | [src/components/site-footer.module.css:15](src/components/site-footer.module.css#L15) |
| .divider | background: #cbbbaa | Basis (außerhalb @layer) | [src/components/site-footer.module.css:19](src/components/site-footer.module.css#L19) |
| .bar | background: var(--sage); color: var(--sand) | Basis (außerhalb @layer) | [src/components/site-footer.module.css:20](src/components/site-footer.module.css#L20) |
| .designer | border-left: 1px solid color-mix(in srgb, var(--sand) 65%, transparent) | Basis (außerhalb @layer) | [src/components/site-footer.module.css:23](src/components/site-footer.module.css#L23) |
| .legal | border-left: 1px solid color-mix(in srgb, var(--sand) 65%, transparent) | Basis (außerhalb @layer) | [src/components/site-footer.module.css:24](src/components/site-footer.module.css#L24) |
| .header | --header-terracotta: #b65c40; --signature-green: #256e5d; background: var(--paper); border-bottom: none | Basis (außerhalb @layer) | [src/components/site-header.module.css:2](src/components/site-header.module.css#L2) |
| .givenName | color: var(--ink) | Basis (außerhalb @layer) | [src/components/site-header.module.css:39](src/components/site-header.module.css#L39) |
| .signature | color: var(--signature-green) | Basis (außerhalb @layer) | [src/components/site-header.module.css:48](src/components/site-header.module.css#L48) |
| .descriptor::before, .descriptor::after | background: #aaa7a1 | Basis (außerhalb @layer) | [src/components/site-header.module.css:70](src/components/site-header.module.css#L70) |
| .navigation a::after | background: var(--header-terracotta) | Basis (außerhalb @layer) | [src/components/site-header.module.css:115](src/components/site-header.module.css#L115) |
| .navigation a:hover, .navigation a[aria-current] | color: var(--header-terracotta) | Basis (außerhalb @layer) | [src/components/site-header.module.css:127](src/components/site-header.module.css#L127) |
| .contactButton | border: 1px solid transparent; background: var(--header-terracotta); color: var(--paper) | Basis (außerhalb @layer) | [src/components/site-header.module.css:132](src/components/site-header.module.css#L132) |
| .contactButton:hover | background: var(--clay-ink) | Basis (außerhalb @layer) | [src/components/site-header.module.css:150](src/components/site-header.module.css#L150) |
| .header :focus-visible | outline: 2px solid var(--clay-ink) | Basis (außerhalb @layer) | [src/components/site-header.module.css:151](src/components/site-header.module.css#L151) |
| .menuToggle | border: 0; background: transparent | @media (max-width: 760px) | [src/components/site-header.module.css:174](src/components/site-header.module.css#L174) |
| .menuIcon i | background: var(--ink) | @media (max-width: 760px) | [src/components/site-header.module.css:176](src/components/site-header.module.css#L176) |
| .navigation | background: var(--paper); border-bottom: 1px solid var(--terracotta) | @media (max-width: 760px) | [src/components/site-header.module.css:180](src/components/site-header.module.css#L180) |
| .therapyTrigger:hover, .therapyTrigger[data-active="true"] | color: var(--header-terracotta) | Basis (außerhalb @layer) | [src/components/site-header.module.css:209](src/components/site-header.module.css#L209) |
| .therapyDropdown | background: var(--paper); border: 1px solid var(--line) | Basis (außerhalb @layer) | [src/components/site-header.module.css:210](src/components/site-header.module.css#L210) |
| .therapyDropdown li + li | border-top: 1px solid var(--line) | Basis (außerhalb @layer) | [src/components/site-header.module.css:223](src/components/site-header.module.css#L223) |
| .therapyDropdown | border: 0; border-left: 1px solid var(--line) | @media (max-width: 760px) | [src/components/site-header.module.css:231](src/components/site-header.module.css#L231) |
| .section | background: var(--paper) | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:1](src/components/therapy-values.module.css#L1) |
| .panel | border: 1px solid var(--line) | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:4](src/components/therapy-values.module.css#L4) |
| .panel:nth-child(1) | background: #f1ddd5; border-color: var(--rose) | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:5](src/components/therapy-values.module.css#L5) |
| .panel:nth-child(2) | background: #e6e9e0; border-color: var(--sage) | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:6](src/components/therapy-values.module.css#L6) |
| .panel:nth-child(3) | background: #e4e8ed; border-color: var(--blue) | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:7](src/components/therapy-values.module.css#L7) |
| .symbol | color: var(--clay-ink) | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:9](src/components/therapy-values.module.css#L9) |
| .button | background: var(--clay-ink); color: var(--paper) | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:12](src/components/therapy-values.module.css#L12) |
| .button:hover | background: #693429 | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:13](src/components/therapy-values.module.css#L13) |

Weitere Farben außerhalb von CSS: `#256e5d` am Wort „Begegnung.“ in `src/app/page.tsx`; Kompetenz-Wellen: `fill="var(--sage-light)"`, `fill="var(--rose)" opacity=".35"` in `competencies.tsx`. SVG-Icons verwenden `stroke="currentColor"`, keine eigene zusätzliche Icon-Farbpalette. Fotos und Rastergrafiken haben unveränderte, nicht auf CSS-Tokens reduzierte Bildfarben.

### 4.2 Palette: Abweichungen zum bestätigten Dokument

- `FARBPALETTE.md` nennt Blau-Grau **#6B7C93**, der tatsächlich wirksame `--blue`-Token ist **#687C93**. Der Einzeltherapie-Button hat #687C93 zusätzlich als Literal.
- Header-Terrakotta **#B65C40** ist ein lokaler Token; Start-Hero-Akzent und Kontakt-Hero-Akzent nutzen denselben Literalwert. Zentrales Terrakotta ist **#C97F6B**.
- Logo-Grün **#256E5D**, Kontakt-Hero-Grün **#5C6E5C** und Salbei **#7B8F7A** sind verschiedene Werte und dürfen nicht stillschweigend gleichgesetzt werden.
- Fließtext ist überwiegend Anthrazit **#2E2E2E**, nicht reines Schwarz. Intro und Kompetenzuntertitel setzen explizit **#000**. Start-Hero setzt **#252525**.
- Weitere lokale Hintergrund-/Linienfarben stehen vollständig in der Farbtabelle. Diese sind Bestand, keine neu genehmigte Palette.

## 5. Layoutübersicht und Abstände

| Element | Exakter Wert | CSS-Klasse / Variable | Fundstelle |
| --- | --- | --- | --- |
| Standardcontainer | `width: min(100% - var(--gutter) * 2, 1320px)`; horizontal auto | `.container` | `globals.css:47` |
| Seitenränder | `clamp(1.25rem,5.2vw,6rem)` = 20–96 px; ≤760 px `1.5rem` = 24 px | `--gutter` | `globals.css` |
| Abschnittsabstand | `clamp(4.5rem,8vw,8rem)` = 72–128 px oben und unten | `--section-space`, `.section` | `globals.css` |
| Intro / Rosé-Titelblock | `1fr 2.4fr .5fr`, gap 3rem; ≤1000: `1fr 3fr`, 2rem; ≤760: eine Spalte, 1.8rem | `.intro-grid` / `.grid` | globals / `competencies-heading.module.css` |
| Über mich | 1fr 1fr; gap `clamp(3rem,8vw,8rem)`; ≤1000 gap 3rem; ≤760 eine Spalte / 2.6rem | `.about-grid` | globals |
| H1-Referenz Abstand | margin oben 1.6rem / unten 2rem; ≤760: 1.3rem / 1.5rem | `.about-copy h2` | globals |
| Fließtext-Abstand | margin-bottom 1.4rem; Methodenabschnitt nur erster unterer Absatz .56rem | `.about-copy > p:not(.eyebrow)`, `.section .highlight + p` | globals / benefits |
| Therapieübersicht | 1fr 1.25fr; gap `clamp(3rem,8vw,8rem)`; mobil einspaltig gap 2.8rem | `.therapy` | globals |
| Themenkacheln | 1.15fr 1fr; padding `clamp(2rem,4vw,4rem)`; ≤760 eine Spalte / 2rem; lokale seitliche Versätze 1.2rem | `.topics-grid`, `.topic*` | globals |
| Sesselabschnitt | .9fr 1.1fr; gap `clamp(2rem,3.6vw,4rem)`; ≤760 eine Spalte / 2.6rem | `.grid` | benefits |
| Kompetenzliste | 4 gleiche Spalten, gap 2rem; ≤1000 zwei; ≤600 eine / gap 0; margin-top 3rem | `.grid` | competencies |
| Kompetenzzeilen | 4 Reihen `minmax(7rem, auto)` je Spalte; mobil min-height 6rem; padding-block 1rem; gap .9rem | `.column`, `.item` | competencies |
| Kompetenzbereich Weißraum | padding-block `var(--section-space)` | `.section` | competencies |
| Kontaktinfo | 4 Spalten; padding oben/unten 70px; ≤1000 zwei; ≤420 eine | `.info` | contact |
| Formular / Foto | 46% 54%; ≤760 eine Spalte; Formularpadding 2rem 3rem 2rem mit links Content-Achse | `.message`, `.formSide` | contact |
| Krisenbox | padding-block 6.2rem = 99.2px; 1.25fr 1fr, gap 2rem; ≤1000 eine Spalte | `.crisis`, `.crisisInner` | contact |
| Footer | 1.42fr 1fr .72fr; gap 3.2rem; padding 7rem 4.4rem; ≤1150 zwei Spalten; ≤600 eine | `.upper` | site-footer.module.css |

Die vollständigen Einzelwerte für **sämtliche** Padding-, Margin-, Gap-, Grid-, Breiten-, Höhen-, Radius- und Positionierungsregeln stehen in Abschnitt 9, mit jedem jeweiligen Breakpoint. Keine Zahl dieser Übersicht ersetzt lokale Overrides.

## 6. Komponenten und Verhalten

### 6.1 Header und Navigation

Der aktive Header ist `position: sticky; top: 0; z-index: 100`, **nicht `position: fixed`**. Er bleibt im normalen Dokumentfluss. Die tatsächliche Höhe wird gemessen. Desktop-Minimalhöhe `clamp(125px,10.17vw,180px)`, mit Padding und Inhalt gegebenenfalls größer. Hintergrund `--paper`. Tabletbereich 761–1200 px: Navigation in zusätzlicher Grid-Zeile. Mobile ≤760 px: Logo, Menüschalter und Kontaktbutton; Menü absolut unter Header, maximale Höhe anhand `--site-header-height`.

Aktiver/Hover-Menüpunkt #B65C40, 1px-Unterstreichung per `scaleX(0 → 1)`, 180ms ease. Menütext „Home“. Therapie nutzt `<details>/<summary>` mit sechs Links; Escape schließt, Fokus außerhalb schließt; Einzeltherapie hat einen speziellen Safari-Mousedown-Fokus-Handler. Kein eigener Hover-Öffnungscode. Dropdown rechte Ausrichtung, `min(26rem,85vw)`, max-height 65dvh; mobil statisch mit linker Linie. Alle Detailmaße siehe Inventar.

### 6.2 Buttons, Links, Rahmen

| Variante | Form / Maße | Farbe / Interaktion | Fundstelle |
| --- | --- | --- | --- |
| Globaler Button | Radius 2px; min-height 48px; padding .9rem 1.5rem | --clay-ink / --paper; Hover #693429; 180ms ease; Pfeil bewegt sich (3px,-3px) | globals.css |
| Header-Kontakt | Radius 100px; min-height `clamp(44px,3.4544vw,59.84px)`; width `clamp(153px,14.144vw,244.8px)` | #B65C40 / --paper; Hover --clay-ink; 180ms ease | site-header.module.css |
| Start-Hero | Radius 2.4px; zusätzlich scale .85 und translateY 2.8vw; Maße exakt im Inventar | --sage / #fff; Hover `color-mix(in srgb,var(--sage) 85%,black)` | app/hero.module.css |
| Einzeltherapie Hero | Radius 2px; min-height 44px; padding .9rem 2rem, ≤1000 .8rem 1.8rem | #687C93 / #fff; kein eigener Hover-Farbwechsel; Fokus 2px --ink | einzeltherapie/hero.module.css |
| Dreierkarten | Radius 100px; min-height 54px; padding .9rem 1.5rem | --clay-ink / --paper; Hover #693429 | therapy-values.module.css |
| Formular | Radius 100px; min-height 44px; padding .7rem 1.8rem | --clay-ink / --sand; kein eigener Hover-Farbwert | kontakt/contact.module.css |

Linien meist 1px; Footer-Iconkreis 1.2px; Fokuslinien 2px; Icons verwenden SVG-stroke statt gefüllter Symbole. Details/Akkordeons sind native `<details>`; das Plus in `.about-details[open]` dreht 45°, ohne dort definierten Übergang. Footerlinks unterstreichen bei Hover.

### 6.3 Animationen und Bewegung

| Element | Exakte Logik / Werte | Auslösung | Fundstelle |
| --- | --- | --- | --- |
| FadeIn Standard | opacity 0 → 1; 2200ms; ease-in-out; fill both; keine gesetzte Verzögerung | IntersectionObserver ≥0.2; außerhalb zurück auf Zeit 0, erneut abspielbar | fade-in.tsx |
| FadeIn rise | opacity 0 → 1; translateY(40px → 0); 1400ms; ease-in-out | gleich | fade-in.tsx |
| FadeIn write | clipPath inset(0 100% 0 0) → inset(-10% -15% -10% 0); opacity 0→1; 2750ms; optional rise | Variante vorhanden, keine aktuellen Aufrufe mit write gefunden | fade-in.tsx |
| Intro / Roséblock | Label `<FadeIn rise>`, Titel `<FadeIn>` | Scroll wie oben | app/page.tsx; einzeltherapie/page.tsx |
| Therapieangebotstitel | nur color; 300ms ease; Hover --sage | h3:hover | globals.css |
| Gehirn-Link | scale 1 → 1.2; 300ms ease-out; Ursprung Mitte; Desktop zusätzliche bestehende transform-Skalierung 1.5 | gesamter `.graphic`-Link (Gehirn UND Pfeil) hover | contact-section.module.css |
| Handschriftnotiz (nicht eingebunden) | clipPath; erste Zeile 650/1.6 =406.25ms, weitere 850/1.6 =531.25ms; delay index×700/1.6 =index×437.5ms; linear | ≥0.4 sichtbar, pointerenter, pageshow | handwritten-note.tsx |

`prefers-reduced-motion: reduce`: globale CSS-Regel deaktiviert Animationen/Transitions mit `!important`; FadeIn verzichtet auf Animation und beendet sie bei Einstellungswechsel. Zusätzliche lokale Reduced-Motion-Regeln für Header-, Hero- und Kartenbuttons sind vorhanden. Es gibt aktuell **keine** Drehanimation der Fadenillustration.

### 6.4 Bilddarstellung und Icons

| Bild / Element | Datei bzw. Quelle | Darstellung |
| --- | --- | --- |
| Start-Hero | `public/images/hero-landschaft.png` | Next Image fill, preload, blur-placeholder; cover; Desktop center top, ≤1100 62% top, ≤760 72% bottom; responsive Gradienten |
| Porträt | `Romina_Foto-Uber-mich.png` (Projektwurzel) | unoptimized; fill; cover; center 20%; Container clamp(380px,44vw,620px), mobil420px; mobile Figure90% |
| Personzentrierte Illustration | `public/images/therapie-faden.png` | Next Image; CSS width124%, margin-left -13.8%, height auto; umgebender Overflow hidden; keine SVG und keine Animation |
| Weiter lesen | `public/weiter-lesen.png` | deklarierte Bildmaße2172×724; CSS Breite300px, Höheauto, margin-left -30.75px; unoptimized |
| Kontakt-Gehirn/Pfeil | `public/images/kontakt-gehirn.png` | zwei Ausschnitte desselben Bildes; deklarierte1672×941; Containerverhältnisse1672/600 und1672/341; Abstand1.5rem; Hover gesamter Link |
| Kontakt-Hero | `public/images/kontakt-hero.png` | CSS-Hintergrund center/cover; mobil62% top; echte HTML-Texte |
| Kontakt-Praxisfoto | `public/images/ordination-moedling-kontakt.jpg` | Next Image fill; contain center bis1000px; >1000 cover mit Container-Units-Berechnung für rechte Kante; genaue Formel im Layoutinventar |
| Einzeltherapie Hero | `public/images/einzeltherapie-hero.png` | fill/preload/unoptimized; max.Breite1600px; cover right center; mobil260px Bildhöhe unten |
| Einzeltherapie Sessel | `Romina-Lauzensky_Einzeltherapie-Raum-für-dich.png` (Projektwurzel; kombinierendes ü) | unoptimized; width100%, height auto, aspect-ratio800/695, cover, Radius20px |
| Kompetenzicons | inline SVG, viewBox0 0 24 24 | strokeWidth1, runde Enden/Ecken; SVG27px, Kreis44px |
| Footericons | inline SVG, viewBox0 0 24 24 | strokeWidth1.2; Kreis2.4rem; SVG60% |
| Kontaktseitenicons | inline SVG, viewBox0 0 24 24 | strokeWidth1.1; Kreis3.25rem, SVG55%; Krisenicon4.4rem |
| Kontaktblockicons | inline SVG, viewBox0 0 24 24 | strokeWidth1.2; Kreis40px, SVG52% |
| Dreierkartenicons | inline SVG, viewBox0 0 80 80 | strokeWidth1.4; SVG88×88px |
| Footerzweig | inline SVG, viewBox0 0 300 450 | strokeWidth1.7, innerer Pfad .8; #c8b9a7; Maße responsive im Inventar |
| Kompetenzwellen | inline SVG, viewBox0 0 1440 100 | preserveAspectRatio none; Breite100%, Höhe55px; unten absolut; --sage-light und --rose mit opacity.35 |

## 7. Festgestellte Abweichungen – nicht korrigiert

1. Visuelle H1-/H2-/H3-Rollen sind keine einheitlichen Codeklassen. Die Referenz-H1 ist ein HTML-h2; Referenz-H2 ist p.body-large; Referenz-H3 ist p.eyebrow. Globale HTML-h3 sind Serif, nicht Sans-Serif. Karten-/Therapie-h3 sind große Serifentitel. Das ist kein Anlass zu automatischem Umstyling.
2. H1-Größen unterscheiden sich pro Hero; der Start-Hero wird zusätzlich skaliert. Angegebene CSS-Schriftgröße ist dort nicht identisch mit der optisch transformierten Größe.
3. Haupt-Fließtexttoken ist 1rem, aber Start-Hero-Beschreibung ist ausdrücklich Serif21.16px/34.5px. Footer und Kontakte enthalten weitere Serifvarianten. Zeilenhöhen variieren (u.a.1.45,1.5,1.6,1.7,1.75,1.95).
4. Zentraler H2-HTML-Token --heading ist nicht der vom Benutzer als H2 definierte kleine Referenzstil. Für künftige H2-Referenzaufträge .body-large vergleichen, nicht blind h2 verwenden.
5. Farben weichen lokal von Tokens und teils von FARBPALETTE.md ab, siehe4.2. Schwarz und Anthrazit sind im Bestand verschieden.
6. Kein einheitlicher Breakpoint-Satz: 360,420,480,600,760,900,1000,1100,1150,1200,1600px sowie komplementäre min-width-Bedingungen. Genaue Bereiche im folgenden Index.
7. Verschiedene Buttonradien (2px,2.4px,100px), Bildradien20px, Kartenradius16px; kein zentraler Radius-Token.
8. Header ist sticky, nicht fixed. Globale alte Header-Regeln sind nicht die aktive Implementierung.
9. Kompetenzliste hat vier Spalten; die Regeln für ihre inzwischen entfernte h2-Überschrift bestehen noch. Sie sind derzeit ohne entsprechendes Element.
10. Das mobile Intro-Label erhält feste Höhen1.056rem bzw.2.112rem (≤360); der neue Roséblock nutzt solche festen Höhen nicht. Intro/Titel haben teils110% Breite; mobile Roséüberschrift100%.
11. Kontaktkarte ist eine klickbare Standortfläche (Google-Maps-Suchlink), keine eingebettete Karte. Kontaktformular zeigt nach Absenden einen Hinweis, dass Versand nicht eingerichtet ist. Diese Zustände sind dokumentierter Bestand, nicht geändert.
12. Im vorliegenden src/app gibt es keine eigenen Impressum-/Datenschutz-Routen, obwohl Footer/Formular darauf verlinken. Keine Routen wurden ergänzt.

## 8. Vollständiges Typografie-Inventar (zentrale Regeln und lokale Overrides)

Jede explizite Typografiedeklaration aus allen CSS-Dateien, einschließlich Shorthands, Textumbruch und responsiven Varianten. Nicht wiederholte Eigenschaften bleiben geerbt. Werte von `font:` gelten als Shorthand; Defaultstärke von normalem body/p ist normal/400. Die nicht verwendeten Regeln bleiben als solche im Quellbestand erkennbar (Abschnitt2).

| Element / Selektor | Exakter Wert | Layer / Responsive-Bedingung | Fundstelle |
| --- | --- | --- | --- |
| body | font-family: var(--font-sans), Arial, sans-serif; font-size: var(--font-size-body); line-height: 1.75; -webkit-font-smoothing: antialiased | @layer base | [src/app/globals.css:28](src/app/globals.css#L28) |
| h1, h2, h3 | font-family: var(--font-serif), Georgia, serif; font-weight: 400 | @layer base | [src/app/globals.css:31](src/app/globals.css#L31) |
| h2 | font-size: var(--heading); line-height: 1.14; letter-spacing: -.045em; text-wrap: balance | @layer base | [src/app/globals.css:32](src/app/globals.css#L32) |
| h3 | line-height: 1.2; letter-spacing: -.035em; hyphens: manual | @layer base | [src/app/globals.css:33](src/app/globals.css#L33) |
| em | font-weight: 400 | @layer base | [src/app/globals.css:34](src/app/globals.css#L34) |
| p | text-wrap: pretty | @layer base | [src/app/globals.css:35](src/app/globals.css#L35) |
| p, li, address | overflow-wrap: break-word | @layer base | [src/app/globals.css:36](src/app/globals.css#L36) |
| a | text-decoration: none; text-underline-offset: .3em | @layer base | [src/app/globals.css:37](src/app/globals.css#L37) |
| button | font: inherit | @layer base | [src/app/globals.css:38](src/app/globals.css#L38) |
| address | font-style: normal | @layer base | [src/app/globals.css:42](src/app/globals.css#L42) |
| .eyebrow | font-size: .66rem; line-height: 1.6; font-weight: 500; letter-spacing: .17em; text-transform: uppercase | @layer components | [src/app/globals.css:49](src/app/globals.css#L49) |
| .arrow | font-family: Arial, sans-serif; font-size: 1.4em; line-height: 1 | @layer components | [src/app/globals.css:50](src/app/globals.css#L50) |
| .button, .text-link | font-size: .8rem; font-weight: 500 | @layer components | [src/app/globals.css:51](src/app/globals.css#L51) |
| .quiet-link | font-size: .8rem; text-decoration: underline | @layer components | [src/app/globals.css:56](src/app/globals.css#L56) |
| .wordmark | white-space: nowrap | @layer components | [src/app/globals.css:59](src/app/globals.css#L59) |
| .wordmark span:first-child | font-family: var(--font-serif), Georgia, serif; text-transform: uppercase; font-size: 1.08rem; letter-spacing: .105em; line-height: 1.8 | @layer components | [src/app/globals.css:60](src/app/globals.css#L60) |
| .wordmark span:last-child | font-size: .59rem; letter-spacing: .31em; text-transform: uppercase | @layer components | [src/app/globals.css:61](src/app/globals.css#L61) |
| .main-navigation a | font-size: .78rem | @layer components | [src/app/globals.css:63](src/app/globals.css#L63) |
| .hero h1 | font-size: clamp(4.8rem, 7.4vw, 7.7rem); line-height: 1.06; letter-spacing: -.055em | @layer components | [src/app/globals.css:71](src/app/globals.css#L71) |
| .hero-copy > p | font-size: var(--font-size-body) | @layer components | [src/app/globals.css:75](src/app/globals.css#L75) |
| .hero-bottom | font-size: .65rem; letter-spacing: .08em; text-transform: uppercase | @layer components | [src/app/globals.css:77](src/app/globals.css#L77) |
| .hero-bottom a span | font-size: 1.3rem | @layer components | [src/app/globals.css:79](src/app/globals.css#L79) |
| .approach-title | font-family: var(--font-sans), Arial, sans-serif; font-size: .95rem; line-height: 1.6; letter-spacing: .1em; text-transform: uppercase | @layer components | [src/app/globals.css:88](src/app/globals.css#L88) |
| .therapy-approach p | font-size: var(--font-size-body) | @layer components | [src/app/globals.css:89](src/app/globals.css#L89) |
| .approach-details summary | text-decoration: underline; text-underline-offset: .3em | @layer components | [src/app/globals.css:91](src/app/globals.css#L91) |
| .intro-grid > .eyebrow | font-size: .77418rem; line-height: 1.584rem; letter-spacing: .1122rem | @layer components | [src/app/globals.css:95](src/app/globals.css#L95) |
| .intro h2, .topics-heading h2 | font-size: clamp(2.75rem, 4.4vw, 4.4rem); line-height: clamp(2.85rem, 4.56vw, 4.56rem) | @layer components | [src/app/globals.css:96](src/app/globals.css#L96) |
| .intro-text | font-size: var(--font-size-body) | @layer components | [src/app/globals.css:97](src/app/globals.css#L97) |
| .intro-symbol | font-size: 5.5rem; line-height: 1 | @layer components | [src/app/globals.css:98](src/app/globals.css#L98) |
| .section-heading > p:last-child | font-size: var(--font-size-body) | @layer components | [src/app/globals.css:102](src/app/globals.css#L102) |
| .topics-heading | text-align: left | @layer components | [src/app/globals.css:104](src/app/globals.css#L104) |
| .topic h3 | font-size: clamp(2rem, 3vw, 3.1rem) | @layer components | [src/app/globals.css:112](src/app/globals.css#L112) |
| .topic ul | font-size: var(--font-size-body); line-height: 1.95 | @layer components | [src/app/globals.css:113](src/app/globals.css#L113) |
| .topic-note | font-size: var(--font-size-body); line-height: 1.7 | @layer components | [src/app/globals.css:114](src/app/globals.css#L114) |
| .topics-after p | font-family: var(--font-serif), Georgia, serif; font-size: 1.45rem; font-style: italic | @layer components | [src/app/globals.css:116](src/app/globals.css#L116) |
| .portrait figcaption | font-size: .74rem | @layer components | [src/app/globals.css:121](src/app/globals.css#L121) |
| .portrait figcaption span:last-child | font-size: .65rem | @layer components | [src/app/globals.css:122](src/app/globals.css#L122) |
| .about-copy > p:not(.eyebrow) | font-size: var(--font-size-body) | @layer components | [src/app/globals.css:124](src/app/globals.css#L124) |
| .about-copy > p.body-large | font-family: var(--font-serif), Georgia, serif; font-size: 1.55rem; line-height: 1.5 | @layer components | [src/app/globals.css:125](src/app/globals.css#L125) |
| .about-details | font-size: var(--font-size-body) | @layer components | [src/app/globals.css:126](src/app/globals.css#L126) |
| .about-read-more | font-size: var(--font-size-body) | @layer components | [src/app/globals.css:127](src/app/globals.css#L127) |
| .about-details summary | font-size: 1.2rem | @layer components | [src/app/globals.css:136](src/app/globals.css#L136) |
| .about-details summary span | font-size: 1.4rem | @layer components | [src/app/globals.css:138](src/app/globals.css#L138) |
| .about-background h3 | font-family: var(--font-serif), Georgia, serif; font-size: 1.5rem; font-weight: 400 | @layer components | [src/app/globals.css:142](src/app/globals.css#L142) |
| .about-background li | overflow-wrap: break-word | @layer components | [src/app/globals.css:144](src/app/globals.css#L144) |
| .therapy-intro > p:not(.eyebrow) | font-size: var(--font-size-body) | @layer components | [src/app/globals.css:149](src/app/globals.css#L149) |
| .therapy-row h3 | font-size: clamp(1.8rem, 2.7vw, 2.65rem); overflow-wrap: anywhere; hyphens: auto | @layer components | [src/app/globals.css:152](src/app/globals.css#L152) |
| .therapy-row p | font-size: var(--font-size-body) | @layer components | [src/app/globals.css:154](src/app/globals.css#L154) |
| .therapy-extra > p:not(.eyebrow) | font-size: var(--font-size-body) | @layer components | [src/app/globals.css:156](src/app/globals.css#L156) |
| .locations-grid h3 | font-size: 3rem | @layer components | [src/app/globals.css:163](src/app/globals.css#L163) |
| .locations-grid address, .locations-contact p | font-size: 1rem | @layer components | [src/app/globals.css:164](src/app/globals.css#L164) |
| .contact h2 | font-size: clamp(3.5rem, 6.5vw, 6.8rem); line-height: 1.1 | @layer components | [src/app/globals.css:169](src/app/globals.css#L169) |
| .contact-circle .arrow | font-size: 3rem | @layer components | [src/app/globals.css:171](src/app/globals.css#L171) |
| .contact-bottom p | font-size: 1rem | @layer components | [src/app/globals.css:174](src/app/globals.css#L174) |
| .contact-bottom a | font-size: 1rem; overflow-wrap: anywhere | @layer components | [src/app/globals.css:176](src/app/globals.css#L176) |
| .contact-bottom a:hover | text-decoration: underline | @layer components | [src/app/globals.css:177](src/app/globals.css#L177) |
| .footer-grid nav a | font-size: .75rem | @layer components | [src/app/globals.css:183](src/app/globals.css#L183) |
| .footer-grid > div | font-size: .73rem | @layer components | [src/app/globals.css:184](src/app/globals.css#L184) |
| .footer-grid > div a | overflow-wrap: anywhere | @layer components | [src/app/globals.css:186](src/app/globals.css#L186) |
| .site-footer a:hover | text-decoration: underline | @layer components | [src/app/globals.css:187](src/app/globals.css#L187) |
| .footer-bottom | font-size: .65rem | @layer components | [src/app/globals.css:188](src/app/globals.css#L188) |
| .legal-placeholders small | font-size: inherit | @layer components | [src/app/globals.css:191](src/app/globals.css#L191) |
| .hero h1 | font-size: 8rem | @layer responsive → @media (min-width: 1600px) | [src/app/globals.css:195](src/app/globals.css#L195) |
| .hero h1 | font-size: clamp(4rem, 8vw, 6rem) | @layer responsive → @media (max-width: 1000px) | [src/app/globals.css:199](src/app/globals.css#L199) |
| .wordmark span:first-child | font-size: .88rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:214](src/app/globals.css#L214) |
| .wordmark span:last-child | font-size: .53rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:215](src/app/globals.css#L215) |
| .menu-toggle | font-size: .75rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:216](src/app/globals.css#L216) |
| .main-navigation a | font-size: .95rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:223](src/app/globals.css#L223) |
| .hero h1 | font-size: clamp(2rem, 10vw, 4.4rem); line-height: 1.13 | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:225](src/app/globals.css#L225) |
| .hero-copy > p | font-size: var(--font-size-body) | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:228](src/app/globals.css#L228) |
| .hero-bottom | font-size: .53rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:230](src/app/globals.css#L230) |
| .intro h2, .topics-heading h2 | font-size: clamp(2.31rem, 8.25vw, 3.85rem); line-height: clamp(2.394rem, 8.55vw, 3.99rem) | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:234](src/app/globals.css#L234) |
| .section-heading h2 | font-size: clamp(2.2rem, 7vw, 3.5rem) | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:238](src/app/globals.css#L238) |
| .topic h3 | font-size: 2.2rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:241](src/app/globals.css#L241) |
| .therapy-row h3 | font-size: clamp(1.7rem, 6vw, 2.5rem) | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:252](src/app/globals.css#L252) |
| .locations-grid h3 | font-size: 2.5rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:254](src/app/globals.css#L254) |
| .locations-grid address | font-size: .81rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:255](src/app/globals.css#L255) |
| .contact h2 | font-size: clamp(2.7rem, 8.5vw, 4.3rem) | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:258](src/app/globals.css#L258) |
| .contact-circle .arrow | font-size: 2rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:260](src/app/globals.css#L260) |
| .contact-bottom a | font-size: clamp(.75rem, 3.4vw, 1rem) | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:262](src/app/globals.css#L262) |
| .content h1 | font-size: clamp(57.6px, 5.936vw, 113.6px); line-height: 1.03; letter-spacing: -.06em | Basis (außerhalb @layer) | [src/app/hero.module.css:27](src/app/hero.module.css#L27) |
| .description | font-family: var(--font-serif), Georgia, serif; font-style: normal; font-size: 21.16px; line-height: 34.5px; text-wrap: initial | Basis (außerhalb @layer) | [src/app/hero.module.css:39](src/app/hero.module.css#L39) |
| .button | white-space: nowrap; font-size: clamp(10.4px, .816vw, 14.4px); font-weight: 500; letter-spacing: .08em; text-transform: uppercase | Basis (außerhalb @layer) | [src/app/hero.module.css:55](src/app/hero.module.css#L55) |
| .content h1 | font-size: clamp(51.2px, 5.936vw, 65.6px) | @media (max-width: 1100px) | [src/app/hero.module.css:82](src/app/hero.module.css#L82) |
| .description | font-size: 21.16px | @media (max-width: 1100px) | [src/app/hero.module.css:83](src/app/hero.module.css#L83) |
| .content h1 | font-size: clamp(27.2px, 6.92vw, 52px); line-height: 1.08; letter-spacing: -.055em | @media (max-width: 760px) | [src/app/hero.module.css:99](src/app/hero.module.css#L99) |
| .description | font-size: 21.16px; line-height: 34.5px | @media (max-width: 760px) | [src/app/hero.module.css:100](src/app/hero.module.css#L100) |
| .button | font-size: 10.4px | @media (max-width: 760px) | [src/app/hero.module.css:101](src/app/hero.module.css#L101) |
| .overline | font-family: var(--font-sans), Arial, sans-serif; font-size: .72rem; font-weight: 400; text-transform: uppercase; letter-spacing: .17em; line-height: 1.5 | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:2](src/app/kontakt/contact.module.css#L2) |
| .heroCopy .overline | font-size: 1.1vw; letter-spacing: .24em; line-height: 1.5 | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:7](src/app/kontakt/contact.module.css#L7) |
| .heroCopy h1 | font-size: clamp(46.08px, 4.7488vw, 90.88px); line-height: 1.1; letter-spacing: -.045em | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:9](src/app/kontakt/contact.module.css#L9) |
| .headlineAccent | font-style: italic | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:10](src/app/kontakt/contact.module.css#L10) |
| .heroCopy > p:last-child | font-size: var(--font-size-body); line-height: 1.5 | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:11](src/app/kontakt/contact.module.css#L11) |
| .heroNote | white-space: nowrap; font-size: 2.35vw; line-height: 1.25 | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:12](src/app/kontakt/contact.module.css#L12) |
| .info h2 | font: 500 1rem/1.4 var(--font-sans), Arial, sans-serif; letter-spacing: -.025em | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:19](src/app/kontakt/contact.module.css#L19) |
| .info a | font-size: .95rem; line-height: 1.5; overflow-wrap: anywhere | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:20](src/app/kontakt/contact.module.css#L20) |
| .page a:hover | text-decoration: underline | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:21](src/app/kontakt/contact.module.css#L21) |
| .form h2 | font-size: clamp(2rem, 3vw, 3rem); letter-spacing: -.05em | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:25](src/app/kontakt/contact.module.css#L25) |
| .form input:not([type=checkbox]), .form textarea | font: inherit; font-size: .85rem; line-height: 1.5 | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:28](src/app/kontakt/contact.module.css#L28) |
| .form .consent | font-size: .74rem; line-height: 1.5 | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:31](src/app/kontakt/contact.module.css#L31) |
| .consent a | text-decoration: underline | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:33](src/app/kontakt/contact.module.css#L33) |
| .form button | font: inherit; font-size: .85rem | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:34](src/app/kontakt/contact.module.css#L34) |
| .notice | font-size: var(--font-size-body) | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:35](src/app/kontakt/contact.module.css#L35) |
| .mapLink | text-align: center | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:42](src/app/kontakt/contact.module.css#L42) |
| .mapLink span:last-child | font-size: .72rem | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:44](src/app/kontakt/contact.module.css#L44) |
| .location h3 | font-size: clamp(1.6rem, 2.2vw, 2rem) | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:45](src/app/kontakt/contact.module.css#L45) |
| .location address | font-style: normal; font-size: .9rem; line-height: 1.5 | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:46](src/app/kontakt/contact.module.css#L46) |
| .crisis h2 | font-size: clamp(1.4rem, 2.1vw, 2rem); letter-spacing: -.04em | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:52](src/app/kontakt/contact.module.css#L52) |
| .crisisInner > p | font-size: var(--font-size-body); line-height: 1.6 | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:53](src/app/kontakt/contact.module.css#L53) |
| .srOnly | white-space: nowrap | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:54](src/app/kontakt/contact.module.css#L54) |
| .heroCopy h1 | font-size: clamp(40.96px, 4.7488vw, 52.48px) | @media(max-width: 1100px) | [src/app/kontakt/contact.module.css:69](src/app/kontakt/contact.module.css#L69) |
| .heroCopy > p:last-child | font-size: var(--font-size-body) | @media(max-width: 1100px) | [src/app/kontakt/contact.module.css:70](src/app/kontakt/contact.module.css#L70) |
| .heroCopy .overline | font-size: .72rem | @media(max-width: 760px) | [src/app/kontakt/contact.module.css:85](src/app/kontakt/contact.module.css#L85) |
| .heroCopy h1 | font-size: clamp(21.76px, 5.536vw, 41.6px) | @media(max-width: 760px) | [src/app/kontakt/contact.module.css:86](src/app/kontakt/contact.module.css#L86) |
| .heroCopy > p:last-child | font-size: var(--font-size-body) | @media(max-width: 760px) | [src/app/kontakt/contact.module.css:87](src/app/kontakt/contact.module.css#L87) |
| .heroNote | font-size: 2rem | @media(max-width: 760px) | [src/app/kontakt/contact.module.css:89](src/app/kontakt/contact.module.css#L89) |
| .highlight em | font-style: normal | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/benefits.module.css:6](src/app/therapie/einzeltherapie/benefits.module.css#L6) |
| .label | font-size: .77418rem; line-height: 1.584rem; letter-spacing: .1122rem | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies-heading.module.css:12](src/app/therapie/einzeltherapie/competencies-heading.module.css#L12) |
| .title | font-size: clamp(2.75rem, 4.4vw, 4.4rem); line-height: clamp(2.85rem, 4.56vw, 4.56rem) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies-heading.module.css:19](src/app/therapie/einzeltherapie/competencies-heading.module.css#L19) |
| .title | font-size: clamp(2.31rem, 8.25vw, 3.85rem); line-height: clamp(2.394rem, 8.55vw, 3.99rem) | @media (max-width: 760px) | [src/app/therapie/einzeltherapie/competencies-heading.module.css:36](src/app/therapie/einzeltherapie/competencies-heading.module.css#L36) |
| .heading | text-align: center | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:2](src/app/therapie/einzeltherapie/competencies.module.css#L2) |
| .heading h2 | font-size: clamp(2.8rem, 4.7488vw, 5rem); line-height: 1.12; letter-spacing: -.045em | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:3](src/app/therapie/einzeltherapie/competencies.module.css#L3) |
| .subtitle | font-family: var(--font-serif), Georgia, serif; font-size: 1.55rem; font-weight: 400; font-style: normal; line-height: 1.5; letter-spacing: normal | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:5](src/app/therapie/einzeltherapie/competencies.module.css#L5) |
| .item | font-family: var(--font-serif), Georgia, serif; font-size: 1.25rem; line-height: 1.3 | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:8](src/app/therapie/einzeltherapie/competencies.module.css#L8) |
| .item > span:last-child | overflow-wrap: anywhere | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:9](src/app/therapie/einzeltherapie/competencies.module.css#L9) |
| .heading h2 | font-size: clamp(2.45rem, 10vw, 3.4rem) | @media (max-width: 600px) | [src/app/therapie/einzeltherapie/competencies.module.css:21](src/app/therapie/einzeltherapie/competencies.module.css#L21) |
| .copy h1 | font-family: var(--font-serif), Georgia, serif; font-size: clamp(2.8rem, 4.7488vw, 5rem); line-height: 1.12; letter-spacing: -.045em | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/hero.module.css:5](src/app/therapie/einzeltherapie/hero.module.css#L5) |
| .copy h2 | font-family: var(--font-serif), Georgia, serif; font-size: clamp(1.7rem, 2.7vw, 2.65rem); font-weight: 400; line-height: 1.24; letter-spacing: -.035em | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/hero.module.css:6](src/app/therapie/einzeltherapie/hero.module.css#L6) |
| .copy h2 em | font-style: italic | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/hero.module.css:7](src/app/therapie/einzeltherapie/hero.module.css#L7) |
| .copy p | font-size: var(--font-size-body); line-height: 1.45 | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/hero.module.css:8](src/app/therapie/einzeltherapie/hero.module.css#L8) |
| .button | font-size: .85rem; line-height: 1.4; text-transform: uppercase | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/hero.module.css:9](src/app/therapie/einzeltherapie/hero.module.css#L9) |
| .copy h1 | font-size: clamp(2.8rem, 5.5vw, 3.5rem) | @media (max-width: 1000px) | [src/app/therapie/einzeltherapie/hero.module.css:14](src/app/therapie/einzeltherapie/hero.module.css#L14) |
| .copy h2 | font-size: clamp(1.65rem, 3.4vw, 2.2rem) | @media (max-width: 1000px) | [src/app/therapie/einzeltherapie/hero.module.css:15](src/app/therapie/einzeltherapie/hero.module.css#L15) |
| .copy h1 | font-size: clamp(2.45rem, 10vw, 3.4rem) | @media (max-width: 600px) | [src/app/therapie/einzeltherapie/hero.module.css:24](src/app/therapie/einzeltherapie/hero.module.css#L24) |
| .copy h2 | font-size: clamp(1.5rem, 6.2vw, 2.2rem) | @media (max-width: 600px) | [src/app/therapie/einzeltherapie/hero.module.css:25](src/app/therapie/einzeltherapie/hero.module.css#L25) |
| .copy p | font-size: 1rem | @media (max-width: 600px) | [src/app/therapie/einzeltherapie/hero.module.css:26](src/app/therapie/einzeltherapie/hero.module.css#L26) |
| .page h1 | font-size: clamp(2rem, 4.5vw, 4.5rem); line-height: 1.15; overflow-wrap: break-word | Basis (außerhalb @layer) | [src/app/therapie/therapy.module.css:2](src/app/therapie/therapy.module.css#L2) |
| .overline | font-size: .7rem; font-weight: 500; text-transform: uppercase; letter-spacing: .17em | Basis (außerhalb @layer) | [src/components/contact-section.module.css:16](src/components/contact-section.module.css#L16) |
| .headline | font-size: var(--heading); line-height: 1.14; letter-spacing: -.045em; text-wrap: initial | Basis (außerhalb @layer) | [src/components/contact-section.module.css:17](src/components/contact-section.module.css#L17) |
| .headline em | white-space: nowrap | Basis (außerhalb @layer) | [src/components/contact-section.module.css:18](src/components/contact-section.module.css#L18) |
| .contacts a | font-family: var(--font-serif), Georgia, serif; font-size: clamp(.95rem, 1vw, 1.15rem) | Basis (außerhalb @layer) | [src/components/contact-section.module.css:20](src/components/contact-section.module.css#L20) |
| .contacts a:hover span:last-child | text-decoration: underline | Basis (außerhalb @layer) | [src/components/contact-section.module.css:21](src/components/contact-section.module.css#L21) |
| .contacts a span:last-child | overflow-wrap: anywhere | Basis (außerhalb @layer) | [src/components/contact-section.module.css:22](src/components/contact-section.module.css#L22) |
| .headline | font-size: var(--heading) | @media (max-width: 1000px) | [src/components/contact-section.module.css:42](src/components/contact-section.module.css#L42) |
| .headline | font-size: clamp(2rem, 8vw, 2.6rem) | @media (max-width: 480px) | [src/components/contact-section.module.css:47](src/components/contact-section.module.css#L47) |
| .headline em | white-space: normal | @media (max-width: 480px) | [src/components/contact-section.module.css:48](src/components/contact-section.module.css#L48) |
| .contacts a | font-size: .95rem | @media (max-width: 480px) | [src/components/contact-section.module.css:49](src/components/contact-section.module.css#L49) |
| .note | font-size: clamp(27px, 2.79vw, 54px); line-height: .95; font-weight: 400 | Basis (außerhalb @layer) | [src/components/handwritten-note.module.css:1](src/components/handwritten-note.module.css#L1) |
| .note span | white-space: nowrap | Basis (außerhalb @layer) | [src/components/handwritten-note.module.css:15](src/components/handwritten-note.module.css#L15) |
| .note | font-size: clamp(27px, 3.24vw, 36px) | @media (min-width: 761px) and (max-width: 1100px) | [src/components/handwritten-note.module.css:23](src/components/handwritten-note.module.css#L23) |
| .note | font-size: clamp(27px, 6.48vw, 39.6px) | @media (max-width: 760px) | [src/components/handwritten-note.module.css:27](src/components/handwritten-note.module.css#L27) |
| .footer | font-family: var(--font-serif), Georgia, serif | Basis (außerhalb @layer) | [src/components/site-footer.module.css:1](src/components/site-footer.module.css#L1) |
| .name | font-size: 1.7rem; line-height: 1.3; white-space: nowrap | Basis (außerhalb @layer) | [src/components/site-footer.module.css:4](src/components/site-footer.module.css#L4) |
| .profession | font-family: var(--font-sans), Arial, sans-serif; font-size: .74rem; letter-spacing: .34em | Basis (außerhalb @layer) | [src/components/site-footer.module.css:5](src/components/site-footer.module.css#L5) |
| .statement | font-size: 1.03rem; font-style: italic; line-height: 1.55 | Basis (außerhalb @layer) | [src/components/site-footer.module.css:7](src/components/site-footer.module.css#L7) |
| .footer h2 | font-size: 1.5rem; line-height: 1.3; letter-spacing: -.025em; text-wrap: initial | Basis (außerhalb @layer) | [src/components/site-footer.module.css:9](src/components/site-footer.module.css#L9) |
| .row | font-size: 1.04rem; line-height: 1.5 | Basis (außerhalb @layer) | [src/components/site-footer.module.css:11](src/components/site-footer.module.css#L11) |
| .row span:last-child | overflow-wrap: anywhere | Basis (außerhalb @layer) | [src/components/site-footer.module.css:14](src/components/site-footer.module.css#L14) |
| .row address | font-style: normal | Basis (außerhalb @layer) | [src/components/site-footer.module.css:17](src/components/site-footer.module.css#L17) |
| .row strong | font-weight: 400; font-size: 1.12rem | Basis (außerhalb @layer) | [src/components/site-footer.module.css:18](src/components/site-footer.module.css#L18) |
| .bottom | font-size: .95rem | Basis (außerhalb @layer) | [src/components/site-footer.module.css:21](src/components/site-footer.module.css#L21) |
| .designer | font-size: .72rem | Basis (außerhalb @layer) | [src/components/site-footer.module.css:23](src/components/site-footer.module.css#L23) |
| .footer a:hover | text-decoration: underline; text-underline-offset: .2em | Basis (außerhalb @layer) | [src/components/site-footer.module.css:25](src/components/site-footer.module.css#L25) |
| .name | font-size: 1.4rem | @media (max-width: 600px) | [src/components/site-footer.module.css:34](src/components/site-footer.module.css#L34) |
| .profession | font-size: .64rem | @media (max-width: 600px) | [src/components/site-footer.module.css:35](src/components/site-footer.module.css#L35) |
| .statement | font-size: .94rem | @media (max-width: 600px) | [src/components/site-footer.module.css:36](src/components/site-footer.module.css#L36) |
| .row | font-size: 1rem | @media (max-width: 600px) | [src/components/site-footer.module.css:38](src/components/site-footer.module.css#L38) |
| .brand | text-align: center | Basis (außerhalb @layer) | [src/components/site-header.module.css:24](src/components/site-header.module.css#L24) |
| .names | white-space: nowrap | Basis (außerhalb @layer) | [src/components/site-header.module.css:31](src/components/site-header.module.css#L31) |
| .givenName | font-family: var(--font-serif), Georgia, serif; font-size: clamp(1.53rem, 2.04vw, 2.21rem); font-weight: 400; line-height: 1.1; letter-spacing: -.035em | Basis (außerhalb @layer) | [src/components/site-header.module.css:39](src/components/site-header.module.css#L39) |
| .signature | font-size: clamp(2.55rem, 3.485vw, 4.165rem); font-weight: 400; line-height: 1; letter-spacing: -.045em | Basis (außerhalb @layer) | [src/components/site-header.module.css:48](src/components/site-header.module.css#L48) |
| .descriptor | text-transform: uppercase; letter-spacing: .45em; font-size: clamp(.408rem, .6528vw, .68rem); line-height: 1.6 | Basis (außerhalb @layer) | [src/components/site-header.module.css:59](src/components/site-header.module.css#L59) |
| .navigation a | font-family: var(--font-sans), Arial, sans-serif; font-size: clamp(.7225rem, .9537vw, 1.047625rem); line-height: 1.5; white-space: nowrap | Basis (außerhalb @layer) | [src/components/site-header.module.css:101](src/components/site-header.module.css#L101) |
| .contactButton | font-family: var(--font-sans), Arial, sans-serif; font-size: clamp(.6358rem, .9826vw, 1.0404rem); line-height: 1.45; white-space: nowrap | Basis (außerhalb @layer) | [src/components/site-header.module.css:132](src/components/site-header.module.css#L132) |
| .givenName | font-size: 1.7rem | @media (min-width: 761px) and (max-width: 1200px) | [src/components/site-header.module.css:157](src/components/site-header.module.css#L157) |
| .signature | font-size: 2.8475rem | @media (min-width: 761px) and (max-width: 1200px) | [src/components/site-header.module.css:158](src/components/site-header.module.css#L158) |
| .descriptor | font-size: .442rem | @media (min-width: 761px) and (max-width: 1200px) | [src/components/site-header.module.css:159](src/components/site-header.module.css#L159) |
| .contactButton | font-size: .6358rem | @media (min-width: 761px) and (max-width: 1200px) | [src/components/site-header.module.css:161](src/components/site-header.module.css#L161) |
| .navigation a | font-size: .79475rem | @media (min-width: 761px) and (max-width: 1200px) | [src/components/site-header.module.css:163](src/components/site-header.module.css#L163) |
| .givenName | font-size: min(7.225vw, 2.125rem) | @media (max-width: 760px) | [src/components/site-header.module.css:170](src/components/site-header.module.css#L170) |
| .signature | font-size: min(11.73vw, 3.4rem) | @media (max-width: 760px) | [src/components/site-header.module.css:171](src/components/site-header.module.css#L171) |
| .descriptor | font-size: .408rem; letter-spacing: .38em | @media (max-width: 760px) | [src/components/site-header.module.css:172](src/components/site-header.module.css#L172) |
| .menuToggle | font-size: .8rem | @media (max-width: 760px) | [src/components/site-header.module.css:174](src/components/site-header.module.css#L174) |
| .contactButton | font-size: .6647rem | @media (max-width: 760px) | [src/components/site-header.module.css:179](src/components/site-header.module.css#L179) |
| .navigation a | font-size: .79475rem | @media (max-width: 760px) | [src/components/site-header.module.css:182](src/components/site-header.module.css#L182) |
| .contactButton | font-size: .59245rem | @media (max-width: 360px) | [src/components/site-header.module.css:188](src/components/site-header.module.css#L188) |
| .menuToggle | font-size: .75rem | @media (max-width: 360px) | [src/components/site-header.module.css:189](src/components/site-header.module.css#L189) |
| .therapyTrigger | font-family: var(--font-sans), Arial, sans-serif; font-size: clamp(.7225rem, .9537vw, 1.047625rem); line-height: 1.5 | Basis (außerhalb @layer) | [src/components/site-header.module.css:197](src/components/site-header.module.css#L197) |
| .navigation .therapyDropdown a | white-space: normal; font-size: 1rem | Basis (außerhalb @layer) | [src/components/site-header.module.css:224](src/components/site-header.module.css#L224) |
| .therapyTrigger | font-size: .79475rem | @media (min-width: 761px) and (max-width: 1200px) | [src/components/site-header.module.css:227](src/components/site-header.module.css#L227) |
| .therapyTrigger | font-size: .79475rem | @media (max-width: 760px) | [src/components/site-header.module.css:230](src/components/site-header.module.css#L230) |
| .heading | text-align: center | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:2](src/components/therapy-values.module.css#L2) |
| .panel | text-align: center | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:4](src/components/therapy-values.module.css#L4) |
| .panel h3 | font-size: clamp(1.6rem, 2.3vw, 2.4rem); overflow-wrap: anywhere | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:8](src/components/therapy-values.module.css#L8) |
| .copy | font-size: var(--font-size-body); line-height: 1.75 | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:10](src/components/therapy-values.module.css#L10) |
| .button | font-size: .95rem | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:12](src/components/therapy-values.module.css#L12) |

## 9. Vollständiges Layout-, Rahmen- und Interaktionsinventar

Alle übrigen CSS-Deklarationen außerhalb der Typografie und Token-Definitionen, damit keine lokalen Abstände, Maße, Bilder-, Hover- oder Fokusregeln fehlen. Farben werden hier bei Bedarf nochmals im Zusammenhang mit Rahmen und Layout gezeigt.

| Element / Selektor | Exakter Wert | Layer / Responsive-Bedingung | Fundstelle |
| --- | --- | --- | --- |
| * | box-sizing: border-box | @layer base | [src/app/globals.css:26](src/app/globals.css#L26) |
| html | scroll-padding-top: calc(var(--site-header-height, 180px) + 2rem) | @layer base | [src/app/globals.css:27](src/app/globals.css#L27) |
| body | margin: 0; background: var(--sand); color: var(--ink) | @layer base | [src/app/globals.css:28](src/app/globals.css#L28) |
| ::selection | background: var(--rose); color: var(--ink) | @layer base | [src/app/globals.css:29](src/app/globals.css#L29) |
| h1, h2, h3, p, figure | margin: 0 | @layer base | [src/app/globals.css:30](src/app/globals.css#L30) |
| a | color: inherit | @layer base | [src/app/globals.css:37](src/app/globals.css#L37) |
| button | color: inherit | @layer base | [src/app/globals.css:38](src/app/globals.css#L38) |
| a, button, summary | -webkit-tap-highlight-color: transparent | @layer base | [src/app/globals.css:39](src/app/globals.css#L39) |
| :focus-visible | outline: 2px solid var(--clay-ink); outline-offset: 6px | @layer base | [src/app/globals.css:40](src/app/globals.css#L40) |
| [tabindex="-1"]:focus:not(:focus-visible) | outline: none | @layer base | [src/app/globals.css:41](src/app/globals.css#L41) |
| svg | display: block | @layer base | [src/app/globals.css:43](src/app/globals.css#L43) |
| .container | width: min(100% - var(--gutter) * 2, 1320px); margin-inline: auto | @layer components | [src/app/globals.css:47](src/app/globals.css#L47) |
| .section | padding-block: var(--section-space) | @layer components | [src/app/globals.css:48](src/app/globals.css#L48) |
| .arrow | display: inline-block; transition: transform 180ms ease | @layer components | [src/app/globals.css:50](src/app/globals.css#L50) |
| .button, .text-link | display: inline-flex; align-items: center; justify-content: space-between; gap: 1.8rem; min-height: 48px | @layer components | [src/app/globals.css:51](src/app/globals.css#L51) |
| .button | background: var(--clay-ink); color: var(--paper); padding: .9rem 1.5rem; border: 1px solid var(--clay-ink); border-radius: 2px; transition: background 180ms ease | @layer components | [src/app/globals.css:52](src/app/globals.css#L52) |
| .button:hover | background: #693429 | @layer components | [src/app/globals.css:53](src/app/globals.css#L53) |
| .text-link | border-bottom: 1px solid currentColor; padding-block: .5rem | @layer components | [src/app/globals.css:54](src/app/globals.css#L54) |
| .text-link:hover .arrow, .button:hover .arrow | transform: translate(3px, -3px) | @layer components | [src/app/globals.css:55](src/app/globals.css#L55) |
| .quiet-link | display: inline-flex; align-items: center; min-height: 48px | @layer components | [src/app/globals.css:56](src/app/globals.css#L56) |
| .site-header | border-bottom: 1px solid var(--line); position: relative; z-index: 10 | @layer components | [src/app/globals.css:57](src/app/globals.css#L57) |
| .header-inner | min-height: 108px; display: flex; align-items: center; justify-content: space-between; gap: 2rem | @layer components | [src/app/globals.css:58](src/app/globals.css#L58) |
| .wordmark | display: inline-flex; flex-direction: column; min-height: 44px; justify-content: center | @layer components | [src/app/globals.css:59](src/app/globals.css#L59) |
| .main-navigation | display: flex; align-items: center; gap: clamp(1.4rem, 3vw, 3rem) | @layer components | [src/app/globals.css:62](src/app/globals.css#L62) |
| .main-navigation a | min-height: 44px; display: flex; align-items: center; border-bottom: 1px solid transparent | @layer components | [src/app/globals.css:63](src/app/globals.css#L63) |
| .main-navigation a:hover | border-color: var(--clay-ink) | @layer components | [src/app/globals.css:64](src/app/globals.css#L64) |
| .main-navigation a:last-child | border-bottom-color: var(--ink) | @layer components | [src/app/globals.css:65](src/app/globals.css#L65) |
| .menu-toggle | display: none | @layer components | [src/app/globals.css:66](src/app/globals.css#L66) |
| .skip-link | position: absolute; top: -100px; left: var(--gutter); background: var(--ink); color: white; padding: 1rem; z-index: 20 | @layer components | [src/app/globals.css:67](src/app/globals.css#L67) |
| .skip-link:focus | top: 10px | @layer components | [src/app/globals.css:68](src/app/globals.css#L68) |
| .hero | position: relative; padding-top: 7.156rem | @layer components | [src/app/globals.css:70](src/app/globals.css#L70) |
| .hero h1 | position: relative; z-index: 2; pointer-events: none | @layer components | [src/app/globals.css:71](src/app/globals.css#L71) |
| .hero h1 em | color: var(--clay-ink) | @layer components | [src/app/globals.css:72](src/app/globals.css#L72) |
| .hero-art | position: absolute; right: 0; top: 6.2rem; width: 44%; height: calc(100% - 10.8rem) | @layer components | [src/app/globals.css:73](src/app/globals.css#L73) |
| .hero-copy | position: relative; width: 44%; margin-top: 2rem; padding-bottom: 3.5rem | @layer components | [src/app/globals.css:74](src/app/globals.css#L74) |
| .hero-copy > p | max-width: 370px | @layer components | [src/app/globals.css:75](src/app/globals.css#L75) |
| .hero-actions | display: flex; gap: 1.6rem; align-items: center; flex-wrap: wrap; margin-top: 1.7rem | @layer components | [src/app/globals.css:76](src/app/globals.css#L76) |
| .hero-bottom | position: relative; display: flex; justify-content: space-between; border-top: 1px solid var(--line); min-height: 75px; align-items: center | @layer components | [src/app/globals.css:77](src/app/globals.css#L77) |
| .hero-bottom a | min-height: 44px; display: flex; align-items: center; gap: 2rem | @layer components | [src/app/globals.css:78](src/app/globals.css#L78) |
| .hero-art | background: var(--rose) | @layer components | [src/app/globals.css:81](src/app/globals.css#L81) |
| .hero-photo | object-fit: cover; object-position: 72% center | @layer components | [src/app/globals.css:82](src/app/globals.css#L82) |
| .portrait-image | position: relative; height: clamp(380px, 44vw, 620px); background: #d8d7d0 | @layer components | [src/app/globals.css:83](src/app/globals.css#L83) |
| .portrait-photo | object-fit: cover; object-position: center 20% | @layer components | [src/app/globals.css:84](src/app/globals.css#L84) |
| .therapy-approach | margin-top: 3rem; border-top: 1px solid var(--line); padding-top: 1.2rem; max-width: 350px | @layer components | [src/app/globals.css:85](src/app/globals.css#L85) |
| .approach-art | overflow: hidden; margin-bottom: 1rem | @layer components | [src/app/globals.css:86](src/app/globals.css#L86) |
| .approach-mark | display: block; width: 124%; max-width: none; height: auto; margin-left: -13.8% | @layer components | [src/app/globals.css:87](src/app/globals.css#L87) |
| .therapy-approach p | margin-top: 1rem | @layer components | [src/app/globals.css:89](src/app/globals.css#L89) |
| .approach-details | margin-top: 1rem | @layer components | [src/app/globals.css:90](src/app/globals.css#L90) |
| .approach-details summary | cursor: pointer; min-height: 44px; padding-block: .5rem; color: var(--clay-ink) | @layer components | [src/app/globals.css:91](src/app/globals.css#L91) |
| .intro | background: var(--sage-light); color: #000 | @layer components | [src/app/globals.css:93](src/app/globals.css#L93) |
| .intro-grid | display: grid; grid-template-columns: 1fr 2.4fr .5fr; gap: 3rem | @layer components | [src/app/globals.css:94](src/app/globals.css#L94) |
| .intro-grid > .eyebrow | max-width: 150px; padding-top: .7rem | @layer components | [src/app/globals.css:95](src/app/globals.css#L95) |
| .intro h2, .topics-heading h2 | width: 110% | @layer components | [src/app/globals.css:96](src/app/globals.css#L96) |
| .intro-text | max-width: 490px; margin-top: 1.8rem | @layer components | [src/app/globals.css:97](src/app/globals.css#L97) |
| .intro-symbol | justify-self: end; color: #536653 | @layer components | [src/app/globals.css:98](src/app/globals.css#L98) |
| .section-heading | display: grid; grid-template-columns: 1fr 2.8fr; gap: 1.3rem 3rem; margin-bottom: 3.2rem | @layer components | [src/app/globals.css:100](src/app/globals.css#L100) |
| .section-heading > .eyebrow | padding-top: .7rem | @layer components | [src/app/globals.css:101](src/app/globals.css#L101) |
| .section-heading > p:last-child | grid-column: 2; max-width: 360px | @layer components | [src/app/globals.css:102](src/app/globals.css#L102) |
| .topics | padding-bottom: var(--section-space) | @layer components | [src/app/globals.css:103](src/app/globals.css#L103) |
| .topics-heading | background: var(--sage-soft); padding-block: var(--section-space) | @layer components | [src/app/globals.css:104](src/app/globals.css#L104) |
| .topics-grid | display: grid; grid-template-columns: 1.15fr 1fr; margin-top: var(--section-space) | @layer components | [src/app/globals.css:105](src/app/globals.css#L105) |
| .topic | padding: clamp(2rem, 4vw, 4rem) | @layer components | [src/app/globals.css:106](src/app/globals.css#L106) |
| .topic-rose | background: #e4c9be | @layer components | [src/app/globals.css:107](src/app/globals.css#L107) |
| .topic-sage | background: var(--sage-light) | @layer components | [src/app/globals.css:108](src/app/globals.css#L108) |
| .topic-blue | background: var(--blue-light) | @layer components | [src/app/globals.css:109](src/app/globals.css#L109) |
| .topic-sand | background: #eae0d4 | @layer components | [src/app/globals.css:110](src/app/globals.css#L110) |
| .topic-number | display: block; padding-bottom: 1.3rem; border-bottom: 1px solid #8e847b | @layer components | [src/app/globals.css:111](src/app/globals.css#L111) |
| .topic h3 | margin-block: 1.8rem 1.5rem | @layer components | [src/app/globals.css:112](src/app/globals.css#L112) |
| .topic ul | list-style: none; padding: 0; margin: 0 | @layer components | [src/app/globals.css:113](src/app/globals.css#L113) |
| .topic-note | max-width: 350px; margin-top: 1.3rem | @layer components | [src/app/globals.css:114](src/app/globals.css#L114) |
| .topics-after | display: flex; justify-content: space-between; align-items: center; gap: 2rem; margin-top: 2rem | @layer components | [src/app/globals.css:115](src/app/globals.css#L115) |
| .about | background: #ebe3d9 | @layer components | [src/app/globals.css:118](src/app/globals.css#L118) |
| .about[tabindex="-1"]:focus, .topics[tabindex="-1"]:focus | outline: none | @layer components | [src/app/globals.css:119](src/app/globals.css#L119) |
| .about-grid | display: grid; grid-template-columns: 1fr 1fr; gap: clamp(3rem, 8vw, 8rem); align-items: start | @layer components | [src/app/globals.css:120](src/app/globals.css#L120) |
| .portrait figcaption | display: flex; flex-direction: column; border-bottom: 1px solid var(--line); padding-block: 1.1rem | @layer components | [src/app/globals.css:121](src/app/globals.css#L121) |
| .portrait figcaption span:last-child | color: var(--muted); margin-top: .15rem | @layer components | [src/app/globals.css:122](src/app/globals.css#L122) |
| .about-copy h2 | margin-block: 1.6rem 2rem | @layer components | [src/app/globals.css:123](src/app/globals.css#L123) |
| .about-copy > p:not(.eyebrow) | margin-bottom: 1.4rem | @layer components | [src/app/globals.css:124](src/app/globals.css#L124) |
| .about-details | margin-top: 2.5rem | @layer components | [src/app/globals.css:126](src/app/globals.css#L126) |
| .about-read-more summary | width: fit-content; cursor: pointer; list-style: none; border-bottom: none | @layer components | [src/app/globals.css:128](src/app/globals.css#L128) |
| .about-read-more summary::-webkit-details-marker | display: none | @layer components | [src/app/globals.css:129](src/app/globals.css#L129) |
| .about-read-more:not([open]) summary | padding-block: 0 | @layer components | [src/app/globals.css:130](src/app/globals.css#L130) |
| .about-read-more .read-more-image | display: block; width: 300px; height: auto; margin-left: -30.75px | @layer components | [src/app/globals.css:131](src/app/globals.css#L131) |
| .about-read-more .read-less-label | display: inline-flex; align-items: center; gap: 1.8rem | @layer components | [src/app/globals.css:132](src/app/globals.css#L132) |
| .about-read-more[open] .read-more-label, .about-read-more:not([open]) .read-less-label | display: none | @layer components | [src/app/globals.css:133](src/app/globals.css#L133) |
| .about-read-more > div | padding-top: .6rem | @layer components | [src/app/globals.css:134](src/app/globals.css#L134) |
| .about-read-more p + p | margin-top: 1rem | @layer components | [src/app/globals.css:135](src/app/globals.css#L135) |
| .about-details summary | min-height: 48px; cursor: pointer; list-style: none; color: var(--clay-ink); border-block: 1px solid var(--clay-ink); padding-block: .8rem; display: flex; align-items: center; justify-content: space-between | @layer components | [src/app/globals.css:136](src/app/globals.css#L136) |
| .about-details summary::-webkit-details-marker | display: none | @layer components | [src/app/globals.css:137](src/app/globals.css#L137) |
| .about-details[open] summary span | transform: rotate(45deg) | @layer components | [src/app/globals.css:139](src/app/globals.css#L139) |
| .about-details > div | padding-top: 1.2rem | @layer components | [src/app/globals.css:140](src/app/globals.css#L140) |
| .about-background section + section | margin-top: 2rem | @layer components | [src/app/globals.css:141](src/app/globals.css#L141) |
| .about-background h3 | margin-bottom: .9rem | @layer components | [src/app/globals.css:142](src/app/globals.css#L142) |
| .about-background ul | list-style: disc; padding-left: 1.25rem | @layer components | [src/app/globals.css:143](src/app/globals.css#L143) |
| .about-background li | padding-left: .2rem | @layer components | [src/app/globals.css:144](src/app/globals.css#L144) |
| .about-background li + li | margin-top: .65rem | @layer components | [src/app/globals.css:145](src/app/globals.css#L145) |
| .therapy | display: grid; grid-template-columns: 1fr 1.25fr; gap: clamp(3rem, 8vw, 8rem) | @layer components | [src/app/globals.css:147](src/app/globals.css#L147) |
| .therapy-intro h2 | margin-block: 1.4rem 1.8rem; color: var(--clay-ink) | @layer components | [src/app/globals.css:148](src/app/globals.css#L148) |
| .therapy-row | border-top: 1px solid var(--line); display: grid; grid-template-columns: 2.5rem 1fr; gap: .6rem; padding-block: 1.9rem | @layer components | [src/app/globals.css:150](src/app/globals.css#L150) |
| .therapy-row > span | padding-top: .5rem | @layer components | [src/app/globals.css:151](src/app/globals.css#L151) |
| .therapy-row h3 | transition: color 300ms ease | @layer components | [src/app/globals.css:152](src/app/globals.css#L152) |
| .therapy-row h3:hover | color: var(--sage) | @layer components | [src/app/globals.css:153](src/app/globals.css#L153) |
| .therapy-row p | margin-top: .8rem; max-width: 360px | @layer components | [src/app/globals.css:154](src/app/globals.css#L154) |
| .therapy-extra | border-top: 1px solid var(--line); padding-top: 1.7rem | @layer components | [src/app/globals.css:155](src/app/globals.css#L155) |
| .therapy-extra > p:not(.eyebrow) | margin-block: 1rem | @layer components | [src/app/globals.css:156](src/app/globals.css#L156) |
| .locations | background: var(--blue-light) | @layer components | [src/app/globals.css:158](src/app/globals.css#L158) |
| .locations-heading | display: grid; grid-template-columns: 1fr 2.8fr; gap: 3rem | @layer components | [src/app/globals.css:159](src/app/globals.css#L159) |
| .locations-heading .eyebrow | padding-top: .7rem | @layer components | [src/app/globals.css:160](src/app/globals.css#L160) |
| .locations-grid | display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 3rem; margin-top: 3.5rem | @layer components | [src/app/globals.css:161](src/app/globals.css#L161) |
| .locations-grid > * | border-top: 1px solid #8c99a7; padding-top: 1.7rem | @layer components | [src/app/globals.css:162](src/app/globals.css#L162) |
| .locations-grid h3 | margin-block: 1rem | @layer components | [src/app/globals.css:163](src/app/globals.css#L163) |
| .locations-contact | display: flex; flex-direction: column; align-items: start; justify-content: space-between; gap: 1rem | @layer components | [src/app/globals.css:165](src/app/globals.css#L165) |
| .contact | background: var(--rose) | @layer components | [src/app/globals.css:167](src/app/globals.css#L167) |
| .contact-heading | display: flex; align-items: center; justify-content: space-between; gap: 2rem; margin-top: 1.7rem | @layer components | [src/app/globals.css:168](src/app/globals.css#L168) |
| .contact-circle | width: 110px; aspect-ratio: 1; border: 1px solid var(--ink); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background 180ms ease | @layer components | [src/app/globals.css:170](src/app/globals.css#L170) |
| .contact-circle:hover | background: var(--sand) | @layer components | [src/app/globals.css:172](src/app/globals.css#L172) |
| .contact-bottom | display: flex; justify-content: space-between; gap: 2rem; border-top: 1px solid #9b776b; margin-top: 3rem; padding-top: 1.8rem | @layer components | [src/app/globals.css:173](src/app/globals.css#L173) |
| .contact-bottom > div | display: flex; flex-direction: column; align-items: start | @layer components | [src/app/globals.css:175](src/app/globals.css#L175) |
| .contact-bottom a | min-height: 44px; display: inline-flex; align-items: center | @layer components | [src/app/globals.css:176](src/app/globals.css#L176) |
| .site-footer | background: var(--sand); padding-block: 4rem 1.5rem | @layer components | [src/app/globals.css:179](src/app/globals.css#L179) |
| .footer-grid | display: grid; grid-template-columns: 1.4fr .8fr 1.5fr; gap: 3rem; padding-bottom: 3rem | @layer components | [src/app/globals.css:180](src/app/globals.css#L180) |
| .footer-grid > .wordmark | align-self: start | @layer components | [src/app/globals.css:181](src/app/globals.css#L181) |
| .footer-grid nav | display: grid; grid-template-columns: 1fr 1fr; gap: .2rem 1.5rem; align-content: start | @layer components | [src/app/globals.css:182](src/app/globals.css#L182) |
| .footer-grid nav a | min-height: 44px; display: inline-flex; align-items: center | @layer components | [src/app/globals.css:183](src/app/globals.css#L183) |
| .footer-grid > div > p:nth-child(2) | margin-block: .9rem | @layer components | [src/app/globals.css:185](src/app/globals.css#L185) |
| .footer-grid > div a | min-height: 44px; display: inline-flex; align-items: center | @layer components | [src/app/globals.css:186](src/app/globals.css#L186) |
| .footer-bottom | display: flex; gap: 1.5rem; justify-content: space-between; align-items: center; border-top: 1px solid var(--line); padding-top: 1.3rem | @layer components | [src/app/globals.css:188](src/app/globals.css#L188) |
| .footer-bottom > a | min-height: 44px; display: flex; align-items: center | @layer components | [src/app/globals.css:189](src/app/globals.css#L189) |
| .legal-placeholders | display: flex; gap: 1.4rem; color: var(--muted) | @layer components | [src/app/globals.css:190](src/app/globals.css#L190) |
| .header-inner | min-height: 90px | @layer responsive → @media (max-width: 1000px) | [src/app/globals.css:197](src/app/globals.css#L197) |
| .main-navigation | gap: 1.3rem | @layer responsive → @media (max-width: 1000px) | [src/app/globals.css:198](src/app/globals.css#L198) |
| .hero-copy | width: 48% | @layer responsive → @media (max-width: 1000px) | [src/app/globals.css:200](src/app/globals.css#L200) |
| .hero-art | top: 7.5rem; height: calc(100% - 13rem) | @layer responsive → @media (max-width: 1000px) | [src/app/globals.css:201](src/app/globals.css#L201) |
| .hero-actions | gap: .6rem 1.2rem | @layer responsive → @media (max-width: 1000px) | [src/app/globals.css:202](src/app/globals.css#L202) |
| .intro-grid | grid-template-columns: 1fr 3fr; gap: 2rem | @layer responsive → @media (max-width: 1000px) | [src/app/globals.css:203](src/app/globals.css#L203) |
| .intro-symbol | display: none | @layer responsive → @media (max-width: 1000px) | [src/app/globals.css:204](src/app/globals.css#L204) |
| .about-grid | gap: 3rem | @layer responsive → @media (max-width: 1000px) | [src/app/globals.css:205](src/app/globals.css#L205) |
| .therapy | gap: 3rem | @layer responsive → @media (max-width: 1000px) | [src/app/globals.css:206](src/app/globals.css#L206) |
| .contact-circle | width: 85px | @layer responsive → @media (max-width: 1000px) | [src/app/globals.css:207](src/app/globals.css#L207) |
| .footer-grid | grid-template-columns: 1fr 1fr | @layer responsive → @media (max-width: 1000px) | [src/app/globals.css:208](src/app/globals.css#L208) |
| .footer-grid > div:last-child | grid-column: 1 / -1 | @layer responsive → @media (max-width: 1000px) | [src/app/globals.css:209](src/app/globals.css#L209) |
| .header-inner | min-height: 84px | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:213](src/app/globals.css#L213) |
| .menu-toggle | border: 0; background: transparent; min-height: 48px; display: flex; gap: .8rem; align-items: center; padding: .5rem 0 .5rem .5rem; cursor: pointer | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:216](src/app/globals.css#L216) |
| .menu-icon | width: 22px; display: grid; gap: 6px | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:217](src/app/globals.css#L217) |
| .menu-icon i | height: 1px; background: var(--ink); transition: transform 180ms ease | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:218](src/app/globals.css#L218) |
| .menu-icon.is-open i:first-child | transform: translateY(3.5px) rotate(45deg) | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:219](src/app/globals.css#L219) |
| .menu-icon.is-open i:last-child | transform: translateY(-3.5px) rotate(-45deg) | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:220](src/app/globals.css#L220) |
| .main-navigation | display: none; position: absolute; top: 100%; left: 0; right: 0; background: var(--sand); padding: 1rem var(--gutter) 1.5rem; border-bottom: 1px solid var(--line) | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:221](src/app/globals.css#L221) |
| .main-navigation.is-open | display: flex; flex-direction: column; align-items: stretch; gap: 0 | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:222](src/app/globals.css#L222) |
| .main-navigation a | min-height: 52px; border-bottom: 1px solid var(--line) | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:223](src/app/globals.css#L223) |
| .hero | padding-top: 5.012rem; display: flex; flex-direction: column | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:224](src/app/globals.css#L224) |
| .hero-art | position: relative; order: 3; width: 87%; height: 320px; top: auto; align-self: flex-end; margin: 2rem 0 1.8rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:226](src/app/globals.css#L226) |
| .hero-copy | width: 100%; margin-top: 1.5rem; padding: 0 | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:227](src/app/globals.css#L227) |
| .hero-copy > p | max-width: 440px | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:228](src/app/globals.css#L228) |
| .hero-actions | gap: 1.2rem; margin-top: 1.5rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:229](src/app/globals.css#L229) |
| .hero-bottom | order: 4; min-height: 62px; gap: 1rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:230](src/app/globals.css#L230) |
| .hero-bottom a | gap: .6rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:231](src/app/globals.css#L231) |
| .intro-grid | grid-template-columns: 1fr; gap: 1.8rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:232](src/app/globals.css#L232) |
| .intro-grid > .eyebrow | max-width: none; padding: 0; height: 1.056rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:233](src/app/globals.css#L233) |
| .intro h2, .topics-heading h2 | width: calc(100% + 1rem) | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:234](src/app/globals.css#L234) |
| .intro-text | margin-top: 1.5rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:235](src/app/globals.css#L235) |
| .section-heading, .locations-heading | display: block | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:236](src/app/globals.css#L236) |
| .section-heading h2, .locations-heading h2 | margin-block: 1.5rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:237](src/app/globals.css#L237) |
| .topics-grid | grid-template-columns: 1fr; gap: 0 | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:239](src/app/globals.css#L239) |
| .topic | margin: 0; padding: 2rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:240](src/app/globals.css#L240) |
| .topic-sage | margin-left: 1.2rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:242](src/app/globals.css#L242) |
| .topic-blue | margin-right: 1.2rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:243](src/app/globals.css#L243) |
| .topics-after | flex-direction: column; align-items: start; gap: 1rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:244](src/app/globals.css#L244) |
| .about-grid | grid-template-columns: 1fr; gap: 2.6rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:245](src/app/globals.css#L245) |
| .portrait | width: 90% | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:246](src/app/globals.css#L246) |
| .portrait-image | height: 420px | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:247](src/app/globals.css#L247) |
| .about-copy h2 | margin-block: 1.3rem 1.5rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:248](src/app/globals.css#L248) |
| .therapy | grid-template-columns: 1fr; gap: 2.8rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:249](src/app/globals.css#L249) |
| .therapy-approach | margin-top: 2rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:250](src/app/globals.css#L250) |
| .therapy-row | padding-block: 1.6rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:251](src/app/globals.css#L251) |
| .locations-grid | grid-template-columns: 1fr 1fr; gap: 2rem 1.5rem; margin-top: 2.5rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:253](src/app/globals.css#L253) |
| .locations-contact | grid-column: 1 / -1; gap: 1.3rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:256](src/app/globals.css#L256) |
| .contact-heading | display: block | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:257](src/app/globals.css#L257) |
| .contact-circle | width: 66px; margin-top: 1.8rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:259](src/app/globals.css#L259) |
| .contact-bottom | flex-direction: column; gap: 1.3rem; margin-top: 2rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:261](src/app/globals.css#L261) |
| .footer-grid | grid-template-columns: 1fr; gap: 2rem; padding-bottom: 2rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:263](src/app/globals.css#L263) |
| .footer-grid nav | grid-template-columns: repeat(3, 1fr); gap: .2rem 1rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:264](src/app/globals.css#L264) |
| .footer-bottom | flex-wrap: wrap; gap: .8rem 1.5rem | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:265](src/app/globals.css#L265) |
| .footer-bottom > span | width: 100% | @layer responsive → @media (max-width: 760px) | [src/app/globals.css:266](src/app/globals.css#L266) |
| html | scroll-behavior: auto | @layer responsive → @media (prefers-reduced-motion: reduce) | [src/app/globals.css:269](src/app/globals.css#L269) |
| *, *::before, *::after | animation: none !important; transition: none !important | @layer responsive → @media (prefers-reduced-motion: reduce) | [src/app/globals.css:270](src/app/globals.css#L270) |
| .intro-grid > .eyebrow | height: 2.112rem | @layer responsive → @media (max-width: 360px) | [src/app/globals.css:275](src/app/globals.css#L275) |
| .hero | position: relative; isolation: isolate; overflow: hidden; min-height: 46.11vw; background: #faf5ef; color: #252525 | Basis (außerhalb @layer) | [src/app/hero.module.css:1](src/app/hero.module.css#L1) |
| .background | z-index: -1; object-fit: cover; object-position: center top | Basis (außerhalb @layer) | [src/app/hero.module.css:10](src/app/hero.module.css#L10) |
| .content | position: relative; padding: 7.4vw 0 1.45vw 6.88% | Basis (außerhalb @layer) | [src/app/hero.module.css:16](src/app/hero.module.css#L16) |
| .content | left: calc(max(var(--gutter), (100% - 1320px) / 2) - 6.88%) | @media (min-width: 1101px) | [src/app/hero.module.css:22](src/app/hero.module.css#L22) |
| .content h1 | transform: scale(.8); transform-origin: top left | Basis (außerhalb @layer) | [src/app/hero.module.css:27](src/app/hero.module.css#L27) |
| .content h1 span, .content h1 em | display: inline-block; transform-origin: left center | Basis (außerhalb @layer) | [src/app/hero.module.css:35](src/app/hero.module.css#L35) |
| .content h1 span:first-child | transform: scaleX(.93) | Basis (außerhalb @layer) | [src/app/hero.module.css:36](src/app/hero.module.css#L36) |
| .content h1 em | color: #b65c40; transform: scaleX(1.05) | Basis (außerhalb @layer) | [src/app/hero.module.css:37](src/app/hero.module.css#L37) |
| .description | margin-top: 1.32vw | Basis (außerhalb @layer) | [src/app/hero.module.css:39](src/app/hero.module.css#L39) |
| .description span | display: block | Basis (außerhalb @layer) | [src/app/hero.module.css:48](src/app/hero.module.css#L48) |
| .description | width: min(30vw, 600px); min-height: 92.8px | @media (min-width: 1101px) | [src/app/hero.module.css:51](src/app/hero.module.css#L51) |
| .description span | display: inline | @media (min-width: 1101px) | [src/app/hero.module.css:52](src/app/hero.module.css#L52) |
| .button | transform: translateY(2.8vw) scale(.85); transform-origin: top left; display: inline-flex; align-items: center; justify-content: center; margin-top: 1.32vw; min-height: max(44.8px, 3.256vw); width: max(192px, 13.92vw); padding: .8rem; border-radius: 2.4px; background: var(--sage); color: #fff; transition: background 180ms ease | Basis (außerhalb @layer) | [src/app/hero.module.css:55](src/app/hero.module.css#L55) |
| .button:hover | background: color-mix(in srgb, var(--sage) 85%, black) | Basis (außerhalb @layer) | [src/app/hero.module.css:76](src/app/hero.module.css#L76) |
| .hero | min-height: 660px | @media (max-width: 1100px) | [src/app/hero.module.css:79](src/app/hero.module.css#L79) |
| .background | object-position: 62% top | @media (max-width: 1100px) | [src/app/hero.module.css:80](src/app/hero.module.css#L80) |
| .content | padding: 80px 5% 48px | @media (max-width: 1100px) | [src/app/hero.module.css:81](src/app/hero.module.css#L81) |
| .description | margin-top: 22.4px | @media (max-width: 1100px) | [src/app/hero.module.css:83](src/app/hero.module.css#L83) |
| .button | margin-top: 20.8px; min-height: 44.8px; width: 200px | @media (max-width: 1100px) | [src/app/hero.module.css:84](src/app/hero.module.css#L84) |
| .hero::after | content: ""; position: absolute; inset: 0; z-index: -1; background: linear-gradient(90deg, #faf5eff2, #faf5efb3 38%, transparent 73%) | @media (max-width: 1100px) | [src/app/hero.module.css:85](src/app/hero.module.css#L85) |
| .hero | min-height: 810px | @media (max-width: 760px) | [src/app/hero.module.css:95](src/app/hero.module.css#L95) |
| .background | object-position: 72% bottom | @media (max-width: 760px) | [src/app/hero.module.css:96](src/app/hero.module.css#L96) |
| .hero::after | background: linear-gradient(180deg, #faf5effa 0%, #faf5eff2 45%, #faf5ef80 65%, transparent 84%) | @media (max-width: 760px) | [src/app/hero.module.css:97](src/app/hero.module.css#L97) |
| .content | padding: 54px 6% 300px | @media (max-width: 760px) | [src/app/hero.module.css:98](src/app/hero.module.css#L98) |
| .description | margin-top: 20px | @media (max-width: 760px) | [src/app/hero.module.css:100](src/app/hero.module.css#L100) |
| .button | margin-top: 20px; width: 192px; max-width: 100% | @media (max-width: 760px) | [src/app/hero.module.css:101](src/app/hero.module.css#L101) |
| .button | transition: none | @media (prefers-reduced-motion: reduce) | [src/app/hero.module.css:105](src/app/hero.module.css#L105) |
| .page | color: var(--ink); background: var(--paper) | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:1](src/app/kontakt/contact.module.css#L1) |
| .overline | display: flex; align-items: center; gap: 1.1rem | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:2](src/app/kontakt/contact.module.css#L2) |
| .overline::after | content: ""; width: 5rem; height: 1px; background: var(--blue); opacity: .5 | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:3](src/app/kontakt/contact.module.css#L3) |
| .hero | background: var(--sand) url('/images/kontakt-hero.png') center / cover no-repeat; overflow: hidden | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:4](src/app/kontakt/contact.module.css#L4) |
| .heroInner | min-height: 33.333333vw; position: relative | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:5](src/app/kontakt/contact.module.css#L5) |
| .heroCopy | padding-top: 7.05vw; margin-left: max(var(--gutter), calc((100% - 1320px) / 2)); position: relative; width: 45% | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:6](src/app/kontakt/contact.module.css#L6) |
| .heroCopy .overline::after | display: none | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:8](src/app/kontakt/contact.module.css#L8) |
| .heroCopy h1 | color: #5C6E5C; margin-block: 1.8vw 1.5vw | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:9](src/app/kontakt/contact.module.css#L9) |
| .headlineAccent | color: #b65c40 | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:10](src/app/kontakt/contact.module.css#L10) |
| .heroNote | width: max-content; position: absolute; top: 57%; left: 69.7%; transform: rotate(-10deg); transform-origin: left top | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:12](src/app/kontakt/contact.module.css#L12) |
| .info | display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); padding-top: 70px; padding-bottom: 70px | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:13](src/app/kontakt/contact.module.css#L13) |
| .info > div | padding-inline: 2rem; border-left: 1px solid var(--line); min-width: 0 | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:14](src/app/kontakt/contact.module.css#L14) |
| .info > div:first-child | padding-left: 0; border: 0 | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:15](src/app/kontakt/contact.module.css#L15) |
| .info > div:last-child | padding-right: 0 | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:16](src/app/kontakt/contact.module.css#L16) |
| .icon | display: grid; place-items: center; width: 3.25rem; height: 3.25rem; border: 1px solid currentColor; border-radius: 50%; color: var(--terracotta); flex-shrink: 0 | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:17](src/app/kontakt/contact.module.css#L17) |
| .icon svg | width: 55%; height: 55% | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:18](src/app/kontakt/contact.module.css#L18) |
| .info h2 | margin-block: .65rem .25rem | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:19](src/app/kontakt/contact.module.css#L19) |
| .info a | display: inline-block | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:20](src/app/kontakt/contact.module.css#L20) |
| .message | display: grid; grid-template-columns: 46% 54%; background: var(--sand) | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:22](src/app/kontakt/contact.module.css#L22) |
| .formSide | min-width: 0; padding: 2rem 3rem 2rem max(var(--gutter), calc((100vw - 1320px) / 2)) | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:23](src/app/kontakt/contact.module.css#L23) |
| .form | min-width: 0; display: grid; gap: .6rem | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:24](src/app/kontakt/contact.module.css#L24) |
| .form h2 | margin-bottom: .4rem | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:25](src/app/kontakt/contact.module.css#L25) |
| .form label | display: block; min-width: 0 | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:26](src/app/kontakt/contact.module.css#L26) |
| .names | display: grid; grid-template-columns: 1fr 1fr; gap: .6rem | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:27](src/app/kontakt/contact.module.css#L27) |
| .form input:not([type=checkbox]), .form textarea | width: 100%; min-width: 0; border: 1px solid transparent; border-radius: 0; padding: .8rem; background: var(--paper); color: var(--ink); min-height: 44px | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:28](src/app/kontakt/contact.module.css#L28) |
| .form input::placeholder, .form textarea::placeholder | color: var(--ink); opacity: 1 | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:29](src/app/kontakt/contact.module.css#L29) |
| .form textarea | min-height: 9.5rem; resize: vertical | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:30](src/app/kontakt/contact.module.css#L30) |
| .form .consent | display: flex; align-items: flex-start; gap: .5rem; padding-block: .45rem | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:31](src/app/kontakt/contact.module.css#L31) |
| .consent input | width: 1rem; height: 1rem; margin: .1rem 0 0; accent-color: var(--clay-ink); flex-shrink: 0 | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:32](src/app/kontakt/contact.module.css#L32) |
| .form button | justify-self: start; border: 0; border-radius: 100px; padding: .7rem 1.8rem; min-height: 44px; background: var(--clay-ink); color: var(--sand); cursor: pointer | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:34](src/app/kontakt/contact.module.css#L34) |
| .photo | min-width: 0; position: relative; min-height: 100% | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:36](src/app/kontakt/contact.module.css#L36) |
| .photo img | object-fit: contain; object-position: center | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:37](src/app/kontakt/contact.module.css#L37) |
| .locations | padding-block: 2rem 2.5rem | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:38](src/app/kontakt/contact.module.css#L38) |
| .locationGrid | display: grid; grid-template-columns: 1fr 1fr; margin-top: 1.5rem | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:39](src/app/kontakt/contact.module.css#L39) |
| .location | display: grid; grid-template-columns: 1.15fr 1fr; align-items: center; gap: 1.5rem; padding-right: 2rem; min-width: 0 | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:40](src/app/kontakt/contact.module.css#L40) |
| .location + .location | border-left: 1px solid var(--line); padding-right: 0; padding-left: 2rem | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:41](src/app/kontakt/contact.module.css#L41) |
| .mapLink | aspect-ratio: 2.1; background: var(--blue-light); display: flex; align-items: center; justify-content: center; flex-direction: column; gap: .5rem; padding: .8rem | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:42](src/app/kontakt/contact.module.css#L42) |
| .mapLink .icon | width: 2.6rem; height: 2.6rem | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:43](src/app/kontakt/contact.module.css#L43) |
| .location h3 | margin-bottom: .35rem | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:45](src/app/kontakt/contact.module.css#L45) |
| .crisis | background: var(--blue-light); padding-block: 6.2rem | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:47](src/app/kontakt/contact.module.css#L47) |
| .crisisInner | display: grid; grid-template-columns: 1.25fr 1fr; gap: 2rem; align-items: center | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:48](src/app/kontakt/contact.module.css#L48) |
| .crisisHeading | display: flex; align-items: center; gap: 1.5rem | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:49](src/app/kontakt/contact.module.css#L49) |
| .crisisHeading .icon | color: var(--ink); width: 4.4rem; height: 4.4rem | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:50](src/app/kontakt/contact.module.css#L50) |
| .crisisHeading .icon svg | color: var(--terracotta) | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:51](src/app/kontakt/contact.module.css#L51) |
| .crisis h2 | margin-top: .6rem | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:52](src/app/kontakt/contact.module.css#L52) |
| .crisisInner > p | border-left: 1px solid var(--line); padding-left: 2rem | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:53](src/app/kontakt/contact.module.css#L53) |
| .srOnly | position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%) | Basis (außerhalb @layer) | [src/app/kontakt/contact.module.css:54](src/app/kontakt/contact.module.css#L54) |
| .photo | container-type: size | @media(min-width: 1001px) | [src/app/kontakt/contact.module.css:56](src/app/kontakt/contact.module.css#L56) |
| .photo img | left: 7.407407% !important; right: var(--photo-right-gap) !important; width: calc(92.592593% - var(--photo-right-gap)) !important; object-fit: cover | @media(min-width: 1001px) | [src/app/kontakt/contact.module.css:57](src/app/kontakt/contact.module.css#L57) |
| .crisisInner | container-type: inline-size | @media(min-width: 1001px) | [src/app/kontakt/contact.module.css:65](src/app/kontakt/contact.module.css#L65) |
| .crisisInner > p | position: relative; left: calc(-5.555556cqw - .888889rem) | @media(min-width: 1001px) | [src/app/kontakt/contact.module.css:66](src/app/kontakt/contact.module.css#L66) |
| .info | grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem 0 | @media(max-width: 1000px) | [src/app/kontakt/contact.module.css:73](src/app/kontakt/contact.module.css#L73) |
| .info > div:nth-child(3) | border-left: 0; padding-left: 0 | @media(max-width: 1000px) | [src/app/kontakt/contact.module.css:74](src/app/kontakt/contact.module.css#L74) |
| .formSide | padding-right: 1.5rem | @media(max-width: 1000px) | [src/app/kontakt/contact.module.css:75](src/app/kontakt/contact.module.css#L75) |
| .location | gap: 1rem; padding-right: 1rem | @media(max-width: 1000px) | [src/app/kontakt/contact.module.css:76](src/app/kontakt/contact.module.css#L76) |
| .location + .location | padding-left: 1rem | @media(max-width: 1000px) | [src/app/kontakt/contact.module.css:77](src/app/kontakt/contact.module.css#L77) |
| .crisisInner | grid-template-columns: 1fr | @media(max-width: 1000px) | [src/app/kontakt/contact.module.css:78](src/app/kontakt/contact.module.css#L78) |
| .crisisInner > p | padding-left: 0; border-left: 0 | @media(max-width: 1000px) | [src/app/kontakt/contact.module.css:79](src/app/kontakt/contact.module.css#L79) |
| .hero | background-position: 62% top | @media(max-width: 760px) | [src/app/kontakt/contact.module.css:82](src/app/kontakt/contact.module.css#L82) |
| .heroInner | min-height: 35rem | @media(max-width: 760px) | [src/app/kontakt/contact.module.css:83](src/app/kontakt/contact.module.css#L83) |
| .heroCopy | padding-top: 3.5rem; margin-inline: var(--gutter); width: auto | @media(max-width: 760px) | [src/app/kontakt/contact.module.css:84](src/app/kontakt/contact.module.css#L84) |
| .heroCopy h1 | margin-block: 1.5rem | @media(max-width: 760px) | [src/app/kontakt/contact.module.css:86](src/app/kontakt/contact.module.css#L86) |
| .heroCopy > p:last-child | max-width: 30rem | @media(max-width: 760px) | [src/app/kontakt/contact.module.css:87](src/app/kontakt/contact.module.css#L87) |
| .heroBreak | display: none | @media(max-width: 760px) | [src/app/kontakt/contact.module.css:88](src/app/kontakt/contact.module.css#L88) |
| .heroNote | position: relative; top: auto; left: auto; width: max-content; margin: 2.5rem 12% 2rem auto | @media(max-width: 760px) | [src/app/kontakt/contact.module.css:89](src/app/kontakt/contact.module.css#L89) |
| .info > div | padding-inline: 1rem | @media(max-width: 760px) | [src/app/kontakt/contact.module.css:90](src/app/kontakt/contact.module.css#L90) |
| .message | grid-template-columns: minmax(0, 1fr) | @media(max-width: 760px) | [src/app/kontakt/contact.module.css:91](src/app/kontakt/contact.module.css#L91) |
| .formSide | min-width: 0; padding: 2rem var(--gutter) | @media(max-width: 760px) | [src/app/kontakt/contact.module.css:92](src/app/kontakt/contact.module.css#L92) |
| .photo | width: 100%; min-height: 22rem | @media(max-width: 760px) | [src/app/kontakt/contact.module.css:93](src/app/kontakt/contact.module.css#L93) |
| .locationGrid | grid-template-columns: 1fr; gap: 1.5rem | @media(max-width: 760px) | [src/app/kontakt/contact.module.css:94](src/app/kontakt/contact.module.css#L94) |
| .location | padding-right: 0 | @media(max-width: 760px) | [src/app/kontakt/contact.module.css:95](src/app/kontakt/contact.module.css#L95) |
| .location + .location | border-left: 0; border-top: 1px solid var(--line); padding: 1.5rem 0 0 | @media(max-width: 760px) | [src/app/kontakt/contact.module.css:96](src/app/kontakt/contact.module.css#L96) |
| .crisisHeading | gap: 1rem | @media(max-width: 760px) | [src/app/kontakt/contact.module.css:97](src/app/kontakt/contact.module.css#L97) |
| .info | grid-template-columns: 1fr | @media(max-width: 420px) | [src/app/kontakt/contact.module.css:100](src/app/kontakt/contact.module.css#L100) |
| .info > div | border-left: 0; border-bottom: 1px solid var(--line); padding: 0 0 1rem | @media(max-width: 420px) | [src/app/kontakt/contact.module.css:101](src/app/kontakt/contact.module.css#L101) |
| .info > div:first-child | border-bottom: 1px solid var(--line) | @media(max-width: 420px) | [src/app/kontakt/contact.module.css:102](src/app/kontakt/contact.module.css#L102) |
| .info > div:last-child | border-bottom: 0 | @media(max-width: 420px) | [src/app/kontakt/contact.module.css:103](src/app/kontakt/contact.module.css#L103) |
| .names | grid-template-columns: 1fr | @media(max-width: 420px) | [src/app/kontakt/contact.module.css:104](src/app/kontakt/contact.module.css#L104) |
| .section | background: var(--paper) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/benefits.module.css:1](src/app/therapie/einzeltherapie/benefits.module.css#L1) |
| .grid | display: grid; grid-template-columns: .9fr 1.1fr; gap: clamp(2rem, 3.6vw, 4rem); align-items: start | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/benefits.module.css:2](src/app/therapie/einzeltherapie/benefits.module.css#L2) |
| .grid > * | min-width: 0 | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/benefits.module.css:3](src/app/therapie/einzeltherapie/benefits.module.css#L3) |
| .photo | display: block; width: 100%; height: auto; aspect-ratio: 800 / 695; object-fit: cover; border-radius: 20px | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/benefits.module.css:4](src/app/therapie/einzeltherapie/benefits.module.css#L4) |
| .highlight | color: #256e5d | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/benefits.module.css:5](src/app/therapie/einzeltherapie/benefits.module.css#L5) |
| .section .highlight + p | margin-bottom: .56rem | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/benefits.module.css:7](src/app/therapie/einzeltherapie/benefits.module.css#L7) |
| .grid | grid-template-columns: 1fr; gap: 2.6rem | @media (max-width: 760px) | [src/app/therapie/einzeltherapie/benefits.module.css:9](src/app/therapie/einzeltherapie/benefits.module.css#L9) |
| .section | background: var(--rose); color: var(--ink) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies-heading.module.css:1](src/app/therapie/einzeltherapie/competencies-heading.module.css#L1) |
| .grid | display: grid; grid-template-columns: 1fr 2.4fr .5fr; gap: 3rem | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies-heading.module.css:6](src/app/therapie/einzeltherapie/competencies-heading.module.css#L6) |
| .label | padding-top: .7rem | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies-heading.module.css:12](src/app/therapie/einzeltherapie/competencies-heading.module.css#L12) |
| .title | width: 110% | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies-heading.module.css:19](src/app/therapie/einzeltherapie/competencies-heading.module.css#L19) |
| .title em | color: var(--terracotta) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies-heading.module.css:25](src/app/therapie/einzeltherapie/competencies-heading.module.css#L25) |
| .grid | grid-template-columns: 1fr 3fr; gap: 2rem | @media (max-width: 1000px) | [src/app/therapie/einzeltherapie/competencies-heading.module.css:30](src/app/therapie/einzeltherapie/competencies-heading.module.css#L30) |
| .grid | grid-template-columns: 1fr; gap: 1.8rem | @media (max-width: 760px) | [src/app/therapie/einzeltherapie/competencies-heading.module.css:34](src/app/therapie/einzeltherapie/competencies-heading.module.css#L34) |
| .label | padding-top: 0 | @media (max-width: 760px) | [src/app/therapie/einzeltherapie/competencies-heading.module.css:35](src/app/therapie/einzeltherapie/competencies-heading.module.css#L35) |
| .title | width: 100% | @media (max-width: 760px) | [src/app/therapie/einzeltherapie/competencies-heading.module.css:36](src/app/therapie/einzeltherapie/competencies-heading.module.css#L36) |
| .section | position: relative; padding-block: var(--section-space); background: var(--paper); color: var(--ink) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:1](src/app/therapie/einzeltherapie/competencies.module.css#L1) |
| .heading h2 | margin-block: 1.6rem 1.5rem | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:3](src/app/therapie/einzeltherapie/competencies.module.css#L3) |
| .heading h2 em | color: #256e5d | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:4](src/app/therapie/einzeltherapie/competencies.module.css#L4) |
| .subtitle | color: #000 | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:5](src/app/therapie/einzeltherapie/competencies.module.css#L5) |
| .grid | display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 2rem; margin-top: 3rem | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:6](src/app/therapie/einzeltherapie/competencies.module.css#L6) |
| .column | list-style: none; margin: 0; padding: 0; display: grid; grid-template-rows: repeat(4, minmax(7rem, auto)) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:7](src/app/therapie/einzeltherapie/competencies.module.css#L7) |
| .item | display: flex; align-items: center; gap: .9rem; padding-block: 1rem; border-bottom: 1px solid color-mix(in srgb, var(--rose) 55%, var(--paper)); min-width: 0 | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:8](src/app/therapie/einzeltherapie/competencies.module.css#L8) |
| .item > span:last-child | min-width: 0 | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:9](src/app/therapie/einzeltherapie/competencies.module.css#L9) |
| .icon | width: 44px; height: 44px; border-radius: 50%; flex: 0 0 44px; display: grid; place-items: center | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:10](src/app/therapie/einzeltherapie/competencies.module.css#L10) |
| .icon svg | width: 27px; height: 27px | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:11](src/app/therapie/einzeltherapie/competencies.module.css#L11) |
| .sage | background: var(--sage-light); color: #256e5d | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:12](src/app/therapie/einzeltherapie/competencies.module.css#L12) |
| .peach | background: color-mix(in srgb, var(--rose) 35%, var(--paper)); color: var(--clay-ink) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:13](src/app/therapie/einzeltherapie/competencies.module.css#L13) |
| .blue | background: var(--blue-light); color: var(--blue) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:14](src/app/therapie/einzeltherapie/competencies.module.css#L14) |
| .waves | position: absolute; bottom: 0; width: 100%; height: 55px; pointer-events: none | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/competencies.module.css:15](src/app/therapie/einzeltherapie/competencies.module.css#L15) |
| .grid | grid-template-columns: repeat(2, minmax(0, 1fr)) | @media (max-width: 1000px) | [src/app/therapie/einzeltherapie/competencies.module.css:16](src/app/therapie/einzeltherapie/competencies.module.css#L16) |
| .grid | grid-template-columns: 1fr; gap: 0 | @media (max-width: 600px) | [src/app/therapie/einzeltherapie/competencies.module.css:18](src/app/therapie/einzeltherapie/competencies.module.css#L18) |
| .column | grid-template-rows: none | @media (max-width: 600px) | [src/app/therapie/einzeltherapie/competencies.module.css:19](src/app/therapie/einzeltherapie/competencies.module.css#L19) |
| .item | min-height: 6rem | @media (max-width: 600px) | [src/app/therapie/einzeltherapie/competencies.module.css:20](src/app/therapie/einzeltherapie/competencies.module.css#L20) |
| .hero | position: relative; isolation: isolate; min-height: clamp(420px, 26vw, 520px); overflow: hidden; scroll-margin-top: var(--site-header-height); background: var(--sand) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/hero.module.css:1](src/app/therapie/einzeltherapie/hero.module.css#L1) |
| .background | z-index: -2; left: auto !important; width: min(100%, 1600px) !important; object-fit: cover; object-position: right center | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/hero.module.css:2](src/app/therapie/einzeltherapie/hero.module.css#L2) |
| .hero::after | content: ""; position: absolute; inset: 0; z-index: -1; pointer-events: none; background: linear-gradient(90deg, var(--sand), transparent 45%) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/hero.module.css:3](src/app/therapie/einzeltherapie/hero.module.css#L3) |
| .copy | padding: 3.5rem 0; margin-left: max(var(--gutter), calc((100% - 1320px) / 2)); width: min(600px, 48%); color: var(--ink) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/hero.module.css:4](src/app/therapie/einzeltherapie/hero.module.css#L4) |
| .copy h2 | margin-top: 1.25rem; color: var(--terracotta) | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/hero.module.css:6](src/app/therapie/einzeltherapie/hero.module.css#L6) |
| .copy p | margin-top: 1.5rem; max-width: 490px | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/hero.module.css:8](src/app/therapie/einzeltherapie/hero.module.css#L8) |
| .button | display: inline-flex; align-items: center; justify-content: center; margin-top: 1.75rem; min-height: 44px; padding: .9rem 2rem; border-radius: 2px; background: #687C93; color: #fff | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/hero.module.css:9](src/app/therapie/einzeltherapie/hero.module.css#L9) |
| .button:focus-visible | outline: 2px solid var(--ink); outline-offset: 5px | Basis (außerhalb @layer) | [src/app/therapie/einzeltherapie/hero.module.css:10](src/app/therapie/einzeltherapie/hero.module.css#L10) |
| .hero | min-height: 500px | @media (max-width: 1000px) | [src/app/therapie/einzeltherapie/hero.module.css:12](src/app/therapie/einzeltherapie/hero.module.css#L12) |
| .copy | padding-block: 3rem; width: 57% | @media (max-width: 1000px) | [src/app/therapie/einzeltherapie/hero.module.css:13](src/app/therapie/einzeltherapie/hero.module.css#L13) |
| .copy h2 | margin-top: 1rem | @media (max-width: 1000px) | [src/app/therapie/einzeltherapie/hero.module.css:15](src/app/therapie/einzeltherapie/hero.module.css#L15) |
| .copy p | max-width: none; margin-top: 1.5rem | @media (max-width: 1000px) | [src/app/therapie/einzeltherapie/hero.module.css:16](src/app/therapie/einzeltherapie/hero.module.css#L16) |
| .button | margin-top: 1.75rem; padding: .8rem 1.8rem | @media (max-width: 1000px) | [src/app/therapie/einzeltherapie/hero.module.css:17](src/app/therapie/einzeltherapie/hero.module.css#L17) |
| .hero | min-height: 680px; padding-bottom: 240px | @media (max-width: 600px) | [src/app/therapie/einzeltherapie/hero.module.css:20](src/app/therapie/einzeltherapie/hero.module.css#L20) |
| .background | top: auto !important; height: 260px !important; object-position: right bottom | @media (max-width: 600px) | [src/app/therapie/einzeltherapie/hero.module.css:21](src/app/therapie/einzeltherapie/hero.module.css#L21) |
| .hero::after | content: ""; position: absolute; inset: 0; z-index: -1; background: linear-gradient(180deg, var(--sand) 0%, var(--sand) 58%, transparent 75%) | @media (max-width: 600px) | [src/app/therapie/einzeltherapie/hero.module.css:22](src/app/therapie/einzeltherapie/hero.module.css#L22) |
| .copy | width: auto; margin-inline: var(--gutter); padding: 2.5rem 0 1rem | @media (max-width: 600px) | [src/app/therapie/einzeltherapie/hero.module.css:23](src/app/therapie/einzeltherapie/hero.module.css#L23) |
| .page | min-height: 55vh; background: var(--sand); padding-block: clamp(3rem, 7vw, 7rem) | Basis (außerhalb @layer) | [src/app/therapie/therapy.module.css:1](src/app/therapie/therapy.module.css#L1) |
| .page h1 | max-width: 1100px | Basis (außerhalb @layer) | [src/app/therapie/therapy.module.css:2](src/app/therapie/therapy.module.css#L2) |
| .section | background: var(--rose); color: var(--ink); padding-block: clamp(4.5rem, 6vw, 7.5rem) | Basis (außerhalb @layer) | [src/components/contact-section.module.css:1](src/components/contact-section.module.css#L1) |
| .layout | width: min(100% - var(--gutter) * 2, 1320px); margin-inline: auto; display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, .65fr); gap: clamp(2rem, 4vw, 4rem) | Basis (außerhalb @layer) | [src/components/contact-section.module.css:7](src/components/contact-section.module.css#L7) |
| .intro | padding-top: clamp(1.5rem, 2.5vw, 3rem) | Basis (außerhalb @layer) | [src/components/contact-section.module.css:15](src/components/contact-section.module.css#L15) |
| .headline | margin-block: 1.6rem 2rem | Basis (außerhalb @layer) | [src/components/contact-section.module.css:17](src/components/contact-section.module.css#L17) |
| .contacts | border-top: 1px solid color-mix(in srgb, var(--ink) 30%, transparent); padding-top: clamp(3rem, 4vw, 4.5rem); display: grid; gap: .7rem | Basis (außerhalb @layer) | [src/components/contact-section.module.css:19](src/components/contact-section.module.css#L19) |
| .contacts a | display: flex; align-items: center; gap: clamp(.8rem, 1.4vw, 1.5rem) | Basis (außerhalb @layer) | [src/components/contact-section.module.css:20](src/components/contact-section.module.css#L20) |
| .contacts a span:last-child | min-width: 0 | Basis (außerhalb @layer) | [src/components/contact-section.module.css:22](src/components/contact-section.module.css#L22) |
| .icon | display: grid; place-items: center; width: 40px; aspect-ratio: 1; flex-shrink: 0; border: 1px solid currentColor; border-radius: 50% | Basis (außerhalb @layer) | [src/components/contact-section.module.css:23](src/components/contact-section.module.css#L23) |
| .icon svg | width: 52% | Basis (außerhalb @layer) | [src/components/contact-section.module.css:24](src/components/contact-section.module.css#L24) |
| .artwork | min-width: 0; min-height: calc(clamp(2.1rem, 2.52vw, 2.88rem) + 32.2rem); border-left: 1px solid color-mix(in srgb, var(--ink) 30%, transparent); padding-left: clamp(1.5rem, 3vw, 3rem); display: flex; align-items: center; justify-content: center | Basis (außerhalb @layer) | [src/components/contact-section.module.css:25](src/components/contact-section.module.css#L25) |
| .graphic | display: block; width: 100%; height: auto; cursor: pointer; scale: 1; transform-origin: center; transition: scale 300ms ease-out | Basis (außerhalb @layer) | [src/components/contact-section.module.css:26](src/components/contact-section.module.css#L26) |
| .graphic:hover | scale: 1.2 | Basis (außerhalb @layer) | [src/components/contact-section.module.css:27](src/components/contact-section.module.css#L27) |
| .brain, .arrow | position: relative; overflow: hidden | Basis (außerhalb @layer) | [src/components/contact-section.module.css:28](src/components/contact-section.module.css#L28) |
| .brain | aspect-ratio: 1672 / 600 | Basis (außerhalb @layer) | [src/components/contact-section.module.css:29](src/components/contact-section.module.css#L29) |
| .arrow | aspect-ratio: 1672 / 341; margin-top: 1.5rem | Basis (außerhalb @layer) | [src/components/contact-section.module.css:30](src/components/contact-section.module.css#L30) |
| .brain img, .arrow img | position: absolute; width: 100%; height: auto; left: 0 | Basis (außerhalb @layer) | [src/components/contact-section.module.css:31](src/components/contact-section.module.css#L31) |
| .brain img | top: 0 | Basis (außerhalb @layer) | [src/components/contact-section.module.css:32](src/components/contact-section.module.css#L32) |
| .arrow img | bottom: 0 | Basis (außerhalb @layer) | [src/components/contact-section.module.css:33](src/components/contact-section.module.css#L33) |
| .graphic | transform: translateX(2.7vw) scale(1.5) | @media (min-width: 1001px) | [src/components/contact-section.module.css:36](src/components/contact-section.module.css#L36) |
| .layout | grid-template-columns: 1fr; gap: 2.5rem | @media (max-width: 1000px) | [src/components/contact-section.module.css:40](src/components/contact-section.module.css#L40) |
| .intro | padding-top: 0 | @media (max-width: 1000px) | [src/components/contact-section.module.css:41](src/components/contact-section.module.css#L41) |
| .artwork | padding: 2rem 0 0; border-left: 0; border-top: 1px solid color-mix(in srgb, var(--ink) 30%, transparent) | @media (max-width: 1000px) | [src/components/contact-section.module.css:43](src/components/contact-section.module.css#L43) |
| .headline | margin-block: 2rem | @media (max-width: 480px) | [src/components/contact-section.module.css:47](src/components/contact-section.module.css#L47) |
| .contacts a | gap: .8rem | @media (max-width: 480px) | [src/components/contact-section.module.css:49](src/components/contact-section.module.css#L49) |
| .note | position: absolute; z-index: 1; left: 49%; top: 43%; margin: 0; color: #fff; transform: rotate(-9deg); transform-origin: center | Basis (außerhalb @layer) | [src/components/handwritten-note.module.css:1](src/components/handwritten-note.module.css#L1) |
| .note span | display: block; width: fit-content; padding: .08em .22em | Basis (außerhalb @layer) | [src/components/handwritten-note.module.css:15](src/components/handwritten-note.module.css#L15) |
| .note | top: 52%; left: 53% | @media (min-width: 761px) and (max-width: 1100px) | [src/components/handwritten-note.module.css:23](src/components/handwritten-note.module.css#L23) |
| .note | top: auto; bottom: 210px; left: 8% | @media (max-width: 760px) | [src/components/handwritten-note.module.css:27](src/components/handwritten-note.module.css#L27) |
| .footer | background: var(--sand); color: var(--ink) | Basis (außerhalb @layer) | [src/components/site-footer.module.css:1](src/components/site-footer.module.css#L1) |
| .upper | display: grid; grid-template-columns: 1.42fr 1fr .72fr; gap: 3.2rem; padding-block: 7rem 4.4rem | Basis (außerhalb @layer) | [src/components/site-footer.module.css:2](src/components/site-footer.module.css#L2) |
| .identity | position: relative; min-height: 17rem | Basis (außerhalb @layer) | [src/components/site-footer.module.css:3](src/components/site-footer.module.css#L3) |
| .profession | margin-top: .65rem | Basis (außerhalb @layer) | [src/components/site-footer.module.css:5](src/components/site-footer.module.css#L5) |
| .rule | width: 3.6rem; height: 1px; background: #cbbbaa; margin-block: 1.35rem 1.2rem | Basis (außerhalb @layer) | [src/components/site-footer.module.css:6](src/components/site-footer.module.css#L6) |
| .statement | position: relative; z-index: 1 | Basis (außerhalb @layer) | [src/components/site-footer.module.css:7](src/components/site-footer.module.css#L7) |
| .branch | position: absolute; width: 47%; height: 22rem; right: -.15rem; top: -4rem; color: #c8b9a7; pointer-events: none | Basis (außerhalb @layer) | [src/components/site-footer.module.css:8](src/components/site-footer.module.css#L8) |
| .contact .rule, .locations .rule | margin-block: 1.35rem 1.45rem | Basis (außerhalb @layer) | [src/components/site-footer.module.css:10](src/components/site-footer.module.css#L10) |
| .row | display: flex; align-items: flex-start; gap: 1.35rem | Basis (außerhalb @layer) | [src/components/site-footer.module.css:11](src/components/site-footer.module.css#L11) |
| .contact .row | align-items: center | Basis (außerhalb @layer) | [src/components/site-footer.module.css:12](src/components/site-footer.module.css#L12) |
| .contact .row + .row | margin-top: 1rem | Basis (außerhalb @layer) | [src/components/site-footer.module.css:13](src/components/site-footer.module.css#L13) |
| .row span:last-child | min-width: 0 | Basis (außerhalb @layer) | [src/components/site-footer.module.css:14](src/components/site-footer.module.css#L14) |
| .icon | display: grid; place-items: center; width: 2.4rem; height: 2.4rem; border: 1.2px solid var(--sage); color: var(--sage); border-radius: 50%; flex-shrink: 0 | Basis (außerhalb @layer) | [src/components/site-footer.module.css:15](src/components/site-footer.module.css#L15) |
| .icon svg | width: 60%; height: 60% | Basis (außerhalb @layer) | [src/components/site-footer.module.css:16](src/components/site-footer.module.css#L16) |
| .divider | height: 1px; background: #cbbbaa; margin-block: 1.1rem | Basis (außerhalb @layer) | [src/components/site-footer.module.css:19](src/components/site-footer.module.css#L19) |
| .bar | background: var(--sage); color: var(--sand) | Basis (außerhalb @layer) | [src/components/site-footer.module.css:20](src/components/site-footer.module.css#L20) |
| .bottom | min-height: 6.3rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem | Basis (außerhalb @layer) | [src/components/site-footer.module.css:21](src/components/site-footer.module.css#L21) |
| .credits | display: flex; align-items: center; gap: 1rem | Basis (außerhalb @layer) | [src/components/site-footer.module.css:22](src/components/site-footer.module.css#L22) |
| .designer | border-left: 1px solid color-mix(in srgb, var(--sand) 65%, transparent); padding-left: 1rem | Basis (außerhalb @layer) | [src/components/site-footer.module.css:23](src/components/site-footer.module.css#L23) |
| .legal | display: flex; gap: 2rem; border-left: 1px solid color-mix(in srgb, var(--sand) 65%, transparent); padding: .65rem 0 .65rem 2rem | Basis (außerhalb @layer) | [src/components/site-footer.module.css:24](src/components/site-footer.module.css#L24) |
| .upper | grid-template-columns: 1.2fr 1fr; gap: 3rem; padding-block: 4rem | @media (max-width: 1150px) | [src/components/site-footer.module.css:27](src/components/site-footer.module.css#L27) |
| .identity | grid-column: 1 / -1; min-height: 12rem | @media (max-width: 1150px) | [src/components/site-footer.module.css:28](src/components/site-footer.module.css#L28) |
| .branch | width: 13rem; right: 10%; height: 17rem; top: -2rem | @media (max-width: 1150px) | [src/components/site-footer.module.css:29](src/components/site-footer.module.css#L29) |
| .bottom | flex-wrap: wrap; padding-block: 1.5rem | @media (max-width: 1150px) | [src/components/site-footer.module.css:30](src/components/site-footer.module.css#L30) |
| .upper | grid-template-columns: 1fr; gap: 2.5rem; padding-block: 3rem | @media (max-width: 600px) | [src/components/site-footer.module.css:33](src/components/site-footer.module.css#L33) |
| .branch | right: -1rem; top: 0; width: 30%; opacity: .65 | @media (max-width: 600px) | [src/components/site-footer.module.css:37](src/components/site-footer.module.css#L37) |
| .row | gap: 1rem | @media (max-width: 600px) | [src/components/site-footer.module.css:38](src/components/site-footer.module.css#L38) |
| .bottom, .credits | align-items: flex-start; flex-direction: column; gap: .8rem | @media (max-width: 600px) | [src/components/site-footer.module.css:39](src/components/site-footer.module.css#L39) |
| .designer | padding-left: .8rem | @media (max-width: 600px) | [src/components/site-footer.module.css:40](src/components/site-footer.module.css#L40) |
| .legal | padding-left: .8rem; gap: 1.5rem | @media (max-width: 600px) | [src/components/site-footer.module.css:41](src/components/site-footer.module.css#L41) |
| .header | position: sticky; top: 0; z-index: 100; background: var(--paper); border-bottom: none | Basis (außerhalb @layer) | [src/components/site-header.module.css:2](src/components/site-header.module.css#L2) |
| .inner | display: grid; grid-template-columns: 24.3% minmax(0, 1fr); align-items: center; column-gap: 13%; width: auto; margin-left: 4.2%; margin-right: 2.4%; min-height: clamp(125px, 10.17vw, 180px); padding-block: clamp(1.25rem, 1.8vw, 2rem) | Basis (außerhalb @layer) | [src/components/site-header.module.css:12](src/components/site-header.module.css#L12) |
| .brand | display: block; width: 100%; margin: 0 | Basis (außerhalb @layer) | [src/components/site-header.module.css:24](src/components/site-header.module.css#L24) |
| .names | display: flex; justify-content: flex-start; align-items: baseline; padding-inline: 0 | Basis (außerhalb @layer) | [src/components/site-header.module.css:31](src/components/site-header.module.css#L31) |
| .givenName | color: var(--ink) | Basis (außerhalb @layer) | [src/components/site-header.module.css:39](src/components/site-header.module.css#L39) |
| .signature | position: relative; margin-left: .16em; color: var(--signature-green); transform: translateY(.015em) | Basis (außerhalb @layer) | [src/components/site-header.module.css:48](src/components/site-header.module.css#L48) |
| .descriptor | display: flex; align-items: center; justify-content: flex-start; gap: .68rem; margin-top: .4675rem | Basis (außerhalb @layer) | [src/components/site-header.module.css:59](src/components/site-header.module.css#L59) |
| .descriptor::before, .descriptor::after | content: ""; width: 20.4px; height: 1px; background: #aaa7a1; flex-shrink: 0 | Basis (außerhalb @layer) | [src/components/site-header.module.css:70](src/components/site-header.module.css#L70) |
| .brand | position: relative; left: calc(max(var(--gutter), (100vw - 1320px) / 2) - 4.2vw) | @media (min-width: 1201px) | [src/components/site-header.module.css:79](src/components/site-header.module.css#L79) |
| .navigationRow | display: flex; align-items: center; gap: clamp(1.19rem, 3.213vw, 3.57rem); justify-content: flex-end; padding: 0 | Basis (außerhalb @layer) | [src/components/site-header.module.css:85](src/components/site-header.module.css#L85) |
| .navigation | display: flex; flex: 0 1 auto; align-items: center; justify-content: flex-start; gap: clamp(1.0626rem, 2.1252vw, 2.1252rem) | Basis (außerhalb @layer) | [src/components/site-header.module.css:93](src/components/site-header.module.css#L93) |
| .navigation a | display: inline-flex; align-items: center; justify-content: center; position: relative; min-height: 44.2px; padding: .3rem 0; transition: color 180ms ease | Basis (außerhalb @layer) | [src/components/site-header.module.css:101](src/components/site-header.module.css#L101) |
| .navigation a::after | position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: var(--header-terracotta); content: ""; transform: scaleX(0); transition: transform 180ms ease | Basis (außerhalb @layer) | [src/components/site-header.module.css:115](src/components/site-header.module.css#L115) |
| .navigation a:hover, .navigation a[aria-current] | color: var(--header-terracotta) | Basis (außerhalb @layer) | [src/components/site-header.module.css:127](src/components/site-header.module.css#L127) |
| .navigation a:hover::after, .navigation a[aria-current]::after | transform: scaleX(1) | Basis (außerhalb @layer) | [src/components/site-header.module.css:129](src/components/site-header.module.css#L129) |
| .contactButton | display: inline-flex; align-items: center; justify-content: center; min-height: clamp(44px, 3.4544vw, 59.84px); width: clamp(153px, 14.144vw, 244.8px); padding: .68rem 1.428rem; flex-shrink: 0; border: 1px solid transparent; border-radius: 100px; background: var(--header-terracotta); color: var(--paper); transition: background 180ms ease | Basis (außerhalb @layer) | [src/components/site-header.module.css:132](src/components/site-header.module.css#L132) |
| .contactButton:hover | background: var(--clay-ink) | Basis (außerhalb @layer) | [src/components/site-header.module.css:150](src/components/site-header.module.css#L150) |
| .header :focus-visible | outline: 2px solid var(--clay-ink); outline-offset: 5px | Basis (außerhalb @layer) | [src/components/site-header.module.css:151](src/components/site-header.module.css#L151) |
| .menuToggle | display: none | Basis (außerhalb @layer) | [src/components/site-header.module.css:152](src/components/site-header.module.css#L152) |
| .inner | margin-inline: auto; grid-template-columns: 1fr auto; column-gap: 2rem; width: 93% | @media (min-width: 761px) and (max-width: 1200px) | [src/components/site-header.module.css:155](src/components/site-header.module.css#L155) |
| .brand | width: 280.5px; max-width: 100% | @media (min-width: 761px) and (max-width: 1200px) | [src/components/site-header.module.css:156](src/components/site-header.module.css#L156) |
| .navigationRow | display: contents | @media (min-width: 761px) and (max-width: 1200px) | [src/components/site-header.module.css:160](src/components/site-header.module.css#L160) |
| .contactButton | grid-column: 2; grid-row: 1; width: 153px; min-height: 44px | @media (min-width: 761px) and (max-width: 1200px) | [src/components/site-header.module.css:161](src/components/site-header.module.css#L161) |
| .navigation | grid-column: 1 / -1; justify-content: center; gap: 3.1878rem; margin-top: 1rem | @media (min-width: 761px) and (max-width: 1200px) | [src/components/site-header.module.css:162](src/components/site-header.module.css#L162) |
| .inner | margin-inline: auto; display: block; width: calc(100% - var(--gutter) * 2); padding-block: 1rem 0 | @media (max-width: 760px) | [src/components/site-header.module.css:167](src/components/site-header.module.css#L167) |
| .brand | width: min(100%, 306px); margin-inline: auto | @media (max-width: 760px) | [src/components/site-header.module.css:168](src/components/site-header.module.css#L168) |
| .names | padding-inline: 0 | @media (max-width: 760px) | [src/components/site-header.module.css:169](src/components/site-header.module.css#L169) |
| .signature | margin-left: .16em | @media (max-width: 760px) | [src/components/site-header.module.css:171](src/components/site-header.module.css#L171) |
| .descriptor | margin-top: .8rem; padding-top: .7rem | @media (max-width: 760px) | [src/components/site-header.module.css:172](src/components/site-header.module.css#L172) |
| .navigationRow | justify-content: space-between; padding-block: 1.2rem 1rem; gap: 1rem | @media (max-width: 760px) | [src/components/site-header.module.css:173](src/components/site-header.module.css#L173) |
| .menuToggle | display: inline-flex; align-items: center; justify-content: center; gap: .7rem; min-height: 48px; padding: .5rem 0; border: 0; background: transparent; cursor: pointer | @media (max-width: 760px) | [src/components/site-header.module.css:174](src/components/site-header.module.css#L174) |
| .menuIcon | width: 21px; display: grid; gap: 6px | @media (max-width: 760px) | [src/components/site-header.module.css:175](src/components/site-header.module.css#L175) |
| .menuIcon i | height: 1px; background: var(--ink); transition: transform 180ms ease | @media (max-width: 760px) | [src/components/site-header.module.css:176](src/components/site-header.module.css#L176) |
| .menuIconOpen i:first-child | transform: translateY(3.5px) rotate(45deg) | @media (max-width: 760px) | [src/components/site-header.module.css:177](src/components/site-header.module.css#L177) |
| .menuIconOpen i:last-child | transform: translateY(-3.5px) rotate(-45deg) | @media (max-width: 760px) | [src/components/site-header.module.css:178](src/components/site-header.module.css#L178) |
| .contactButton | width: auto; min-height: 44.2px; padding: .7225rem 1.105rem | @media (max-width: 760px) | [src/components/site-header.module.css:179](src/components/site-header.module.css#L179) |
| .navigation | display: none; position: absolute; top: 100%; left: 0; right: 0; background: var(--paper); padding: .5rem var(--gutter) 1.2rem; border-bottom: 1px solid var(--terracotta) | @media (max-width: 760px) | [src/components/site-header.module.css:180](src/components/site-header.module.css#L180) |
| .navigationOpen | display: flex; flex-direction: column; align-items: stretch; gap: 0 | @media (max-width: 760px) | [src/components/site-header.module.css:181](src/components/site-header.module.css#L181) |
| .navigation a | justify-content: flex-start; min-height: 44.2px; padding-inline: .5rem | @media (max-width: 760px) | [src/components/site-header.module.css:182](src/components/site-header.module.css#L182) |
| .navigation a::after | right: auto; width: 5rem | @media (max-width: 760px) | [src/components/site-header.module.css:183](src/components/site-header.module.css#L183) |
| .navigationRow | gap: .5rem | @media (max-width: 360px) | [src/components/site-header.module.css:187](src/components/site-header.module.css#L187) |
| .contactButton | padding-inline: .765rem | @media (max-width: 360px) | [src/components/site-header.module.css:188](src/components/site-header.module.css#L188) |
| .menuToggle | gap: .5rem | @media (max-width: 360px) | [src/components/site-header.module.css:189](src/components/site-header.module.css#L189) |
| .header *, .header *::after | transition: none | @media (prefers-reduced-motion: reduce) | [src/components/site-header.module.css:193](src/components/site-header.module.css#L193) |
| .therapyMenu | position: relative | Basis (außerhalb @layer) | [src/components/site-header.module.css:196](src/components/site-header.module.css#L196) |
| .therapyTrigger | display: flex; align-items: center; min-height: 44.2px; padding: .3rem 0; cursor: pointer; list-style: none | Basis (außerhalb @layer) | [src/components/site-header.module.css:197](src/components/site-header.module.css#L197) |
| .therapyTrigger::-webkit-details-marker | display: none | Basis (außerhalb @layer) | [src/components/site-header.module.css:208](src/components/site-header.module.css#L208) |
| .therapyTrigger:hover, .therapyTrigger[data-active="true"] | color: var(--header-terracotta) | Basis (außerhalb @layer) | [src/components/site-header.module.css:209](src/components/site-header.module.css#L209) |
| .therapyDropdown | position: absolute; top: 100%; right: 0; width: min(26rem, 85vw); margin: 0; padding: .75rem 1.25rem; list-style: none; background: var(--paper); border: 1px solid var(--line); max-height: 65dvh; overflow-y: auto | Basis (außerhalb @layer) | [src/components/site-header.module.css:210](src/components/site-header.module.css#L210) |
| .therapyDropdown li + li | border-top: 1px solid var(--line) | Basis (außerhalb @layer) | [src/components/site-header.module.css:223](src/components/site-header.module.css#L223) |
| .navigation .therapyDropdown a | display: flex; justify-content: flex-start; padding: .75rem 0 | Basis (außerhalb @layer) | [src/components/site-header.module.css:224](src/components/site-header.module.css#L224) |
| .navigation .therapyDropdown a::after | display: none | Basis (außerhalb @layer) | [src/components/site-header.module.css:225](src/components/site-header.module.css#L225) |
| .therapyTrigger | padding-inline: .5rem | @media (max-width: 760px) | [src/components/site-header.module.css:230](src/components/site-header.module.css#L230) |
| .therapyDropdown | position: static; width: 100%; border: 0; border-left: 1px solid var(--line) | @media (max-width: 760px) | [src/components/site-header.module.css:231](src/components/site-header.module.css#L231) |
| .navigationOpen | max-height: calc(100dvh - var(--site-header-height)); overflow-y: auto | @media (max-width: 760px) | [src/components/site-header.module.css:232](src/components/site-header.module.css#L232) |
| .section | padding-block: var(--section-space); background: var(--paper) | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:1](src/components/therapy-values.module.css#L1) |
| .heading | margin: 0 auto clamp(2.5rem, 5vw, 5rem); max-width: 850px | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:2](src/components/therapy-values.module.css#L2) |
| .grid | display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(1rem, 2vw, 2rem) | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:3](src/components/therapy-values.module.css#L3) |
| .panel | display: flex; flex-direction: column; align-items: center; border: 1px solid var(--line); border-radius: 16px; padding: clamp(1.5rem, 2.5vw, 2.6rem) | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:4](src/components/therapy-values.module.css#L4) |
| .panel:nth-child(1) | background: #f1ddd5; border-color: var(--rose) | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:5](src/components/therapy-values.module.css#L5) |
| .panel:nth-child(2) | background: #e6e9e0; border-color: var(--sage) | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:6](src/components/therapy-values.module.css#L6) |
| .panel:nth-child(3) | background: #e4e8ed; border-color: var(--blue) | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:7](src/components/therapy-values.module.css#L7) |
| .panel h3 | min-height: 2.4em; display: flex; align-items: center; justify-content: center | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:8](src/components/therapy-values.module.css#L8) |
| .symbol | width: 88px; height: 88px; margin: 1.8rem auto 2rem; color: var(--clay-ink) | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:9](src/components/therapy-values.module.css#L9) |
| .copy | flex: 1 | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:10](src/components/therapy-values.module.css#L10) |
| .copy p + p | margin-top: 1.4rem | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:11](src/components/therapy-values.module.css#L11) |
| .button | margin-top: 2rem; display: inline-flex; align-items: center; justify-content: center; min-height: 54px; padding: .9rem 1.5rem; border-radius: 100px; background: var(--clay-ink); color: var(--paper); transition: background 180ms ease | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:12](src/components/therapy-values.module.css#L12) |
| .button:hover | background: #693429 | Basis (außerhalb @layer) | [src/components/therapy-values.module.css:13](src/components/therapy-values.module.css#L13) |
| .grid | grid-template-columns: 1fr; max-width: 640px; margin-inline: auto | @media (max-width: 900px) | [src/components/therapy-values.module.css:14](src/components/therapy-values.module.css#L14) |
| .panel | padding: 2rem | @media (max-width: 900px) | [src/components/therapy-values.module.css:14](src/components/therapy-values.module.css#L14) |
| .panel h3 | min-height: 0 | @media (max-width: 900px) | [src/components/therapy-values.module.css:14](src/components/therapy-values.module.css#L14) |
| .symbol | margin-block: 1.5rem | @media (max-width: 900px) | [src/components/therapy-values.module.css:14](src/components/therapy-values.module.css#L14) |
| .button | transition: none | @media (prefers-reduced-motion: reduce) | [src/components/therapy-values.module.css:15](src/components/therapy-values.module.css#L15) |

## 10. Responsive-Regeln: vollständiger Bedingungsindex

Eine Basisdeklaration gilt grundsätzlich auch auf schmalen Ansichten, bis eine passende Media-Regel sie überschreibt. Bei mehreren max-width-Regeln gilt die spätere passende Deklaration für dieselbe Eigenschaft.

| Datei | Exakte Bedingung | Betroffene Selektoren |
| --- | --- | --- |
| [src/app/globals.css:195](src/app/globals.css#L195) | @layer responsive → @media (min-width: 1600px) | .hero h1 |
| [src/app/globals.css:197](src/app/globals.css#L197) | @layer responsive → @media (max-width: 1000px) | .header-inner, .main-navigation, .hero h1, .hero-copy, .hero-art, .hero-actions, .intro-grid, .intro-symbol, .about-grid, .therapy, .contact-circle, .footer-grid, .footer-grid > div:last-child |
| [src/app/globals.css:212](src/app/globals.css#L212) | @layer responsive → @media (max-width: 760px) | :root, .header-inner, .wordmark span:first-child, .wordmark span:last-child, .menu-toggle, .menu-icon, .menu-icon i, .menu-icon.is-open i:first-child, .menu-icon.is-open i:last-child, .main-navigation, .main-navigation.is-open, .main-navigation a, .hero, .hero h1, .hero-art, .hero-copy, .hero-copy > p, .hero-actions, .hero-bottom, .hero-bottom a, .intro-grid, .intro-grid > .eyebrow, .intro h2, .topics-heading h2, .intro-text, .section-heading, .locations-heading, .section-heading h2, .locations-heading h2, .section-heading h2, .topics-grid, .topic, .topic h3, .topic-sage, .topic-blue, .topics-after, .about-grid, .portrait, .portrait-image, .about-copy h2, .therapy, .therapy-approach, .therapy-row, .therapy-row h3, .locations-grid, .locations-grid h3, .locations-grid address, .locations-contact, .contact-heading, .contact h2, .contact-circle, .contact-circle .arrow, .contact-bottom, .contact-bottom a, .footer-grid, .footer-grid nav, .footer-bottom, .footer-bottom > span |
| [src/app/globals.css:269](src/app/globals.css#L269) | @layer responsive → @media (prefers-reduced-motion: reduce) | html, *, *::before, *::after |
| [src/app/globals.css:275](src/app/globals.css#L275) | @layer responsive → @media (max-width: 360px) | .intro-grid > .eyebrow |
| [src/app/hero.module.css:22](src/app/hero.module.css#L22) | @media (min-width: 1101px) | .content, .description, .description span |
| [src/app/hero.module.css:79](src/app/hero.module.css#L79) | @media (max-width: 1100px) | .hero, .background, .content, .content h1, .description, .button, .hero::after |
| [src/app/hero.module.css:95](src/app/hero.module.css#L95) | @media (max-width: 760px) | .hero, .background, .hero::after, .content, .content h1, .description, .button |
| [src/app/hero.module.css:105](src/app/hero.module.css#L105) | @media (prefers-reduced-motion: reduce) | .button |
| [src/app/kontakt/contact.module.css:56](src/app/kontakt/contact.module.css#L56) | @media(min-width: 1001px) | .photo, .photo img, .crisisInner, .crisisInner > p |
| [src/app/kontakt/contact.module.css:69](src/app/kontakt/contact.module.css#L69) | @media(max-width: 1100px) | .heroCopy h1, .heroCopy > p:last-child |
| [src/app/kontakt/contact.module.css:73](src/app/kontakt/contact.module.css#L73) | @media(max-width: 1000px) | .info, .info > div:nth-child(3), .formSide, .location, .location + .location, .crisisInner, .crisisInner > p |
| [src/app/kontakt/contact.module.css:82](src/app/kontakt/contact.module.css#L82) | @media(max-width: 760px) | .hero, .heroInner, .heroCopy, .heroCopy .overline, .heroCopy h1, .heroCopy > p:last-child, .heroBreak, .heroNote, .info > div, .message, .formSide, .photo, .locationGrid, .location, .location + .location, .crisisHeading |
| [src/app/kontakt/contact.module.css:100](src/app/kontakt/contact.module.css#L100) | @media(max-width: 420px) | .info, .info > div, .info > div:first-child, .info > div:last-child, .names |
| [src/app/therapie/einzeltherapie/benefits.module.css:9](src/app/therapie/einzeltherapie/benefits.module.css#L9) | @media (max-width: 760px) | .grid |
| [src/app/therapie/einzeltherapie/competencies-heading.module.css:30](src/app/therapie/einzeltherapie/competencies-heading.module.css#L30) | @media (max-width: 1000px) | .grid |
| [src/app/therapie/einzeltherapie/competencies-heading.module.css:34](src/app/therapie/einzeltherapie/competencies-heading.module.css#L34) | @media (max-width: 760px) | .grid, .label, .title |
| [src/app/therapie/einzeltherapie/competencies.module.css:16](src/app/therapie/einzeltherapie/competencies.module.css#L16) | @media (max-width: 1000px) | .grid |
| [src/app/therapie/einzeltherapie/competencies.module.css:18](src/app/therapie/einzeltherapie/competencies.module.css#L18) | @media (max-width: 600px) | .grid, .column, .item, .heading h2 |
| [src/app/therapie/einzeltherapie/hero.module.css:12](src/app/therapie/einzeltherapie/hero.module.css#L12) | @media (max-width: 1000px) | .hero, .copy, .copy h1, .copy h2, .copy p, .button |
| [src/app/therapie/einzeltherapie/hero.module.css:20](src/app/therapie/einzeltherapie/hero.module.css#L20) | @media (max-width: 600px) | .hero, .background, .hero::after, .copy, .copy h1, .copy h2, .copy p |
| [src/components/contact-section.module.css:36](src/components/contact-section.module.css#L36) | @media (min-width: 1001px) | .graphic |
| [src/components/contact-section.module.css:40](src/components/contact-section.module.css#L40) | @media (max-width: 1000px) | .layout, .intro, .headline, .artwork |
| [src/components/contact-section.module.css:47](src/components/contact-section.module.css#L47) | @media (max-width: 480px) | .headline, .headline em, .contacts a |
| [src/components/handwritten-note.module.css:23](src/components/handwritten-note.module.css#L23) | @media (min-width: 761px) and (max-width: 1100px) | .note |
| [src/components/handwritten-note.module.css:27](src/components/handwritten-note.module.css#L27) | @media (max-width: 760px) | .note |
| [src/components/site-footer.module.css:27](src/components/site-footer.module.css#L27) | @media (max-width: 1150px) | .upper, .identity, .branch, .bottom |
| [src/components/site-footer.module.css:33](src/components/site-footer.module.css#L33) | @media (max-width: 600px) | .upper, .name, .profession, .statement, .branch, .row, .bottom, .credits, .designer, .legal |
| [src/components/site-header.module.css:79](src/components/site-header.module.css#L79) | @media (min-width: 1201px) | .brand |
| [src/components/site-header.module.css:155](src/components/site-header.module.css#L155) | @media (min-width: 761px) and (max-width: 1200px) | .inner, .brand, .givenName, .signature, .descriptor, .navigationRow, .contactButton, .navigation, .navigation a, .therapyTrigger |
| [src/components/site-header.module.css:167](src/components/site-header.module.css#L167) | @media (max-width: 760px) | .inner, .brand, .names, .givenName, .signature, .descriptor, .navigationRow, .menuToggle, .menuIcon, .menuIcon i, .menuIconOpen i:first-child, .menuIconOpen i:last-child, .contactButton, .navigation, .navigationOpen, .navigation a, .navigation a::after, .therapyTrigger, .therapyDropdown |
| [src/components/site-header.module.css:187](src/components/site-header.module.css#L187) | @media (max-width: 360px) | .navigationRow, .contactButton, .menuToggle |
| [src/components/site-header.module.css:193](src/components/site-header.module.css#L193) | @media (prefers-reduced-motion: reduce) | .header *, .header *::after |
| [src/components/therapy-values.module.css:14](src/components/therapy-values.module.css#L14) | @media (max-width: 900px) | .grid, .panel, .panel h3, .symbol |
| [src/components/therapy-values.module.css:15](src/components/therapy-values.module.css#L15) | @media (prefers-reduced-motion: reduce) | .button |

### 10.1 rem/px-Umrechnung der im CSS vorhandenen rem-Literale

Bei Rootgröße16px. In clamp-Ausdrücken ist nur die rem-Grenze umgerechnet, nicht der viewportabhängige Zwischenwert.

| Originalwert | px bei16px Root |
| --- | --- |
| -4rem | -64px |
| -2rem | -32px |
| -1rem | -16px |
| -0.15rem | -2.4px |
| 0.1rem | 1.6px |
| 0.1122rem | 1.7952px |
| 0.15rem | 2.4px |
| 0.2rem | 3.2px |
| 0.25rem | 4px |
| 0.3rem | 4.8px |
| 0.35rem | 5.6px |
| 0.4rem | 6.4px |
| 0.408rem | 6.528px |
| 0.442rem | 7.072px |
| 0.45rem | 7.2px |
| 0.4675rem | 7.48px |
| 0.5rem | 8px |
| 0.53rem | 8.48px |
| 0.56rem | 8.96px |
| 0.59rem | 9.44px |
| 0.59245rem | 9.4792px |
| 0.6rem | 9.6px |
| 0.6358rem | 10.1728px |
| 0.64rem | 10.24px |
| 0.65rem | 10.4px |
| 0.66rem | 10.56px |
| 0.6647rem | 10.6352px |
| 0.68rem | 10.88px |
| 0.7rem | 11.2px |
| 0.72rem | 11.52px |
| 0.7225rem | 11.56px |
| 0.73rem | 11.68px |
| 0.74rem | 11.84px |
| 0.75rem | 12px |
| 0.765rem | 12.24px |
| 0.77418rem | 12.38688px |
| 0.78rem | 12.48px |
| 0.79475rem | 12.716px |
| 0.8rem | 12.8px |
| 0.81rem | 12.96px |
| 0.85rem | 13.6px |
| 0.88rem | 14.08px |
| 0.888889rem | 14.222224px |
| 0.9rem | 14.4px |
| 0.94rem | 15.04px |
| 0.95rem | 15.2px |
| 1rem | 16px |
| 1.03rem | 16.48px |
| 1.04rem | 16.64px |
| 1.0404rem | 16.6464px |
| 1.04763rem | 16.762px |
| 1.056rem | 16.896px |
| 1.0626rem | 17.0016px |
| 1.08rem | 17.28px |
| 1.1rem | 17.6px |
| 1.105rem | 17.68px |
| 1.12rem | 17.92px |
| 1.15rem | 18.4px |
| 1.19rem | 19.04px |
| 1.2rem | 19.2px |
| 1.25rem | 20px |
| 1.3rem | 20.8px |
| 1.35rem | 21.6px |
| 1.4rem | 22.4px |
| 1.428rem | 22.848px |
| 1.45rem | 23.2px |
| 1.5rem | 24px |
| 1.53rem | 24.48px |
| 1.55rem | 24.8px |
| 1.584rem | 25.344px |
| 1.6rem | 25.6px |
| 1.65rem | 26.4px |
| 1.7rem | 27.2px |
| 1.75rem | 28px |
| 1.8rem | 28.8px |
| 1.9rem | 30.4px |
| 2rem | 32px |
| 2.1rem | 33.6px |
| 2.112rem | 33.792px |
| 2.125rem | 34px |
| 2.1252rem | 34.0032px |
| 2.2rem | 35.2px |
| 2.21rem | 35.36px |
| 2.31rem | 36.96px |
| 2.394rem | 38.304px |
| 2.4rem | 38.4px |
| 2.45rem | 39.2px |
| 2.5rem | 40px |
| 2.55rem | 40.8px |
| 2.6rem | 41.6px |
| 2.65rem | 42.4px |
| 2.7rem | 43.2px |
| 2.75rem | 44px |
| 2.8rem | 44.8px |
| 2.8475rem | 45.56px |
| 2.85rem | 45.6px |
| 2.88rem | 46.08px |
| 3rem | 48px |
| 3.1rem | 49.6px |
| 3.1878rem | 51.0048px |
| 3.2rem | 51.2px |
| 3.25rem | 52px |
| 3.4rem | 54.4px |
| 3.5rem | 56px |
| 3.57rem | 57.12px |
| 3.6rem | 57.6px |
| 3.85rem | 61.6px |
| 3.99rem | 63.84px |
| 4rem | 64px |
| 4.165rem | 66.64px |
| 4.3rem | 68.8px |
| 4.4rem | 70.4px |
| 4.5rem | 72px |
| 4.56rem | 72.96px |
| 4.75rem | 76px |
| 4.8rem | 76.8px |
| 5rem | 80px |
| 5.012rem | 80.192px |
| 5.5rem | 88px |
| 6rem | 96px |
| 6.2rem | 99.2px |
| 6.3rem | 100.8px |
| 6.8rem | 108.8px |
| 7rem | 112px |
| 7.156rem | 114.496px |
| 7.5rem | 120px |
| 7.7rem | 123.2px |
| 8rem | 128px |
| 9.5rem | 152px |
| 10.8rem | 172.8px |
| 12rem | 192px |
| 13rem | 208px |
| 17rem | 272px |
| 22rem | 352px |
| 26rem | 416px |
| 30rem | 480px |
| 32.2rem | 515.2px |
| 35rem | 560px |

## 11. Verbindliche Regeln für zukünftige Codex-Aufgaben

1. **Design V1 bleibt verbindlich.** Keine neue Designversion, kein Commit und keine Veröffentlichung ohne ausdrückliche Freigabe.
2. Bestehende lokale Schriftdateien, CSS-Klassen und Design-Tokens wiederverwenden. Keine neuen Fonts, Farben oder Typografiestile ohne ausdrückliche Freigabe.
3. Bei Angaben H1/H2/H3 die visuelle Referenz aus Abschnitt3.1 verwenden: H1 große Playfair-Überschrift; H2 kleinere, gerade Playfair-Referenz1.55rem/1.5; H3 Inter-Overline in Großbuchstaben mit vorhandener Sperrung; Fließtext Inter1rem/1.75. Diese Zuordnung ersetzt keine semantische Prüfung der HTML-Hierarchie.
4. Bestehende Abstände, Container, Breakpoints und Komponenten für vergleichbare Elemente übernehmen. Keine globale Änderung zur Lösung eines einzelnen lokalen Auftrags.
5. Bei Widersprüchen zwischen Seiten, FARBPALETTE.md und lokalen Werten zuerst nachfragen, welche bestehende Referenz für den konkreten Auftrag gilt. Keine stillschweigende Harmonisierung.
6. Lokale, ausdrücklich beauftragte Ausnahmen (z.B. Start-Hero-Serifbeschreibung) erhalten. Diese Dokumentation autorisiert keine automatische Umgestaltung bestehender Bereiche.
7. Schriftfarbe, Größe, Stärke, Zeilenhöhe, Tracking, Transform-Skalierung und HTML-Tag getrennt prüfen. Bei gewünschtem Stilwechsel nur die autorisierten Eigenschaften ändern.
8. Desktop-, Tablet- und Mobile-Regeln sowie Reduced Motion berücksichtigen. Bestehende Animationen wiederverwenden; keine ähnlichen Neuimplementierungen ohne Auftrag.
9. Nur beauftragte Dateien/Abschnitte bearbeiten. Vorher/nachher vergleichen; keine Bilder, Header, Footer oder Nachbarsektionen unbeabsichtigt ändern.
10. Nach ausdrücklich genehmigten Designänderungen diese Referenz gezielt aktualisieren; Fundstellen und lokale Overrides nachvollziehbar halten.

## 12. Prüfprotokoll und Grenzen

- Statische vollständige Quellcodeinventur, keine Änderung oder Neuinterpretation der Website.
- Alle CSS-Regelblöcke einschließlich verschachtelter @media-/@layer-Bedingungen wurden in die Inventare aufgenommen.
- Fontnamen aus binären TTF-Metadaten verifiziert; Lizenztexte liegen neben den Fontdateien.
- Die Haupttabellen erklären tatsächlich eingebundene Komponenten; das vollständige Inventar enthält zusätzlich verbleibende alte Regeln.
- Keine Browser-Pixelmessung behauptet. Fluidwerte, Bildzuschnitt und tatsächliche Headerhöhe hängen von Viewport, Inhalt und Browser ab; ihre Originalformeln sind dokumentiert.
- Es wurden keine externen Schriftarten heruntergeladen, keine Website-Dateien bearbeitet, kein Commit erstellt und nichts veröffentlicht.

Inventarumfang: 13 CSS-Dateien, 556 CSS-Regelblöcke, 5 Fontdateien.

### Quellstand (SHA-256)

| Datei | SHA-256 |
| --- | --- |
| src/app/fonts/inter-medium.ttf | 8c883f63b2c4157d997319f2c8bc6995ed4357ef371940d31ca159004a4aae63 |
| src/app/fonts/inter-regular.ttf | 1b08e7fc267a5c7e1d614100f604b83e7e8a0be241f0f288faa2b3ac93a683ba |
| src/app/fonts/playfair-italic.ttf | 6021680663c58b344d8404c289c755aadc662a02189ffe4f5ca79378f9e97840 |
| src/app/fonts/playfair-regular.ttf | 1609a54fa3ad1abc8d0037132f73700333241ea0b65672079998e352f151dea7 |
| src/app/globals.css | d76552802be95750e809f8c96f1ecd42592f3123bb2f0d0fecdde49fe448045e |
| src/app/hero.module.css | 33d5f1df18b1e06c29c02f60c597bd20d857786cf9eafaa3ceecca0c24b23e8a |
| src/app/kontakt/contact-form.tsx | d7b007a41d852d6ef6ee3025eee87e584e3e15b74278dc8e379454cb8fdd3c26 |
| src/app/kontakt/contact.module.css | 774090719f2fd5aec5f4df39969c736c8eb667a833a4586094036e35a066fabf |
| src/app/kontakt/page.tsx | 0b81b5a2caa2e5590d31f4071a0e86bf003abfa798930bd0686ddf1d9fdd900e |
| src/app/layout.tsx | 9aed35af9cf25f3237b447fe6097dd34513487c185cea720043a049232cbab6e |
| src/app/page.tsx | 4b485daf091a82eccf92a97d68618a1aeab321216077bfbe4e6846d09bfb1891 |
| src/app/therapie/einzeltherapie/benefits.module.css | 6890a292bafbdf85add02125b92fc9948a60a8f2db906ad5c5622758e5417ac3 |
| src/app/therapie/einzeltherapie/competencies-heading.module.css | 2a3a8c8cb9bc120d1b3de3dd863d4ff3df769db51a5faea523c158086999d134 |
| src/app/therapie/einzeltherapie/competencies.module.css | 64198637028087005502c036d01751378e291ca94f24225e9bcc005dba1cd291 |
| src/app/therapie/einzeltherapie/competencies.tsx | a50829b96f205ecb3fdb4fb51daa4e6db195e4a6b3ae4e390489beb68523e4a3 |
| src/app/therapie/einzeltherapie/hero.module.css | 5da9d90165c5a816335a8b26526cac71b6a931c99069154a6f44148233d0c63f |
| src/app/therapie/einzeltherapie/page.tsx | db034bc4c6adb9601bc44c7cca48e6fad48bccab916862c1ac447bb27d3c3239 |
| src/app/therapie/familientherapie/page.tsx | b207365b2052b31681222258d662c611a9f7ad3db6e93c1605766296973cce20 |
| src/app/therapie/kuenstlerische-erlebnisorientierte-psychotherapie/page.tsx | daef3aa724040698db82f707a9e3ac650f401d0b428f0190c0201880a200bc1f |
| src/app/therapie/paartherapie/page.tsx | bf76d3b3661619beb2a5e5e222605524b21605a378afd65193abc88305905a71 |
| src/app/therapie/therapy.module.css | 0780ff248be60b5c9bcbc4a31c77ec30615b561fefd031f3939678306ccd4832 |
| src/app/therapie/tiergestuetzte-psychotherapie/page.tsx | 7c5a1e6311d6168d38f92574e3f6c13973a5344aa9ff3f7f6ecb6e2f9f492857 |
| src/app/therapie/traumapsychotherapie/page.tsx | e205fe2c52fa0de0a49233b300e9fc7f48aef1d319851d6ec735f35bfdedadcf |
| src/components/contact-section.module.css | 1139512aa1b9e6ecbca6f2c7beb7fa5a17402ad05ceab6e2b7cac588cd82b62f |
| src/components/contact-section.tsx | 6e5308ccdde15c25728cee09ba97067c80641cb0a56955151352a9f5e1144d34 |
| src/components/design-elements.tsx | 5f0aeb185f6059a157bcee8a1420c80aa498b09fb5570605890f1b27f9f741c5 |
| src/components/fade-in.tsx | 44efa3e51c293b542e142fc786dc6247b13526d52875c4a4a87d202e076209b9 |
| src/components/fonts/allura-regular.ttf | 9c142b2e515832c0dfc4ff8b8ea18f40314943bf937b72e2b23c4661bac14cc6 |
| src/components/handwritten-note.module.css | 149c244bab10d0dedaa0c4da499e4ea0aa3676c01f5551ad60891101dd1b01be |
| src/components/handwritten-note.tsx | 13f6f77c3dce114303ee6331b0f0fd0965f6709d7bb7c0d4e78175c91208017b |
| src/components/site-footer.module.css | ca68a2c16070a3b8c094517ab565f733d3b544c5f9d40397d471e5dde0368c8c |
| src/components/site-footer.tsx | b5f217488b6c4fdfabef46104a05fc1a3b0378bad5e659b689757f8ffbece4f1 |
| src/components/site-header.module.css | 40690e92896e46b7e852d0cd9829cea52ccaece5ca09aa8911336646be8ef2d9 |
| src/components/site-header.tsx | f9e52c245dc9a593fc693bbc0737f739381267220c35eec937b3ba079938b442 |
| src/components/therapy-navigation.ts | 06c6a3fefafa5f8bf5ab114dbd75da1271006a20ad5521e4bba9fe69cd4aba0d |
| src/components/therapy-values.module.css | ceab16593b046e1e3242710bc22f89f20ec77ee7b79654468dca5eb0869e1f99 |
| src/components/therapy-values.tsx | 9daa1c0319b7ca7fe996db11cef87c2ec319893e3103042fe044002e279282e0 |
