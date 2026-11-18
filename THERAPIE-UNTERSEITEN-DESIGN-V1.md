# Therapie-Unterseiten – verbindliche Designreferenz V1

Stand: 18. November 2026. Maßgebliche, freigegebene Referenzseite: `/therapie/einzeltherapie`.

Diese Datei beschreibt den **aktuellen lokalen Quellstand** der Einzeltherapie. Sie ist eine Vorgabe für die künftige Gestaltung von Paartherapie, Familientherapie, Traumapsychotherapie, Kunsttherapie und tiergestützter Psychotherapie. Das Anlegen dieser Referenz ändert keine bestehende Seite. Vor der Umsetzung einer neuen Unterseite auch [DESIGN-SYSTEM-V1.md](DESIGN-SYSTEM-V1.md) und [FARBPALETTE.md](FARBPALETTE.md) lesen.

## 1. Quellen und Priorität

- Seitenstruktur: `src/app/therapie/einzeltherapie/page.tsx`, `competencies.tsx` und die vier lokalen CSS-Module im selben Verzeichnis.
- Hero-Zentrierung: `src/app/therapie/einzeltherapie/centered-hero-text.tsx`.
- Gemeinsame Grundlagen: `src/app/layout.tsx`, `src/app/globals.css`, `src/components/site-header.tsx`, `src/components/site-header.module.css`, `src/components/site-footer.tsx`, `src/components/site-footer.module.css`.
- Die tatsächlich wirksamen CSS-Werte und Komponenten der freigegebenen Seite sind für **deren Darstellung** maßgeblich. `DESIGN-SYSTEM-V1.md` enthält eine ältere Bestandsaufnahme; insbesondere seine Angaben zu Hero-Bilddatei, Hero-Höhe, Tracking und Schaltfläche der Einzeltherapie sind inzwischen überholt. Die neue Referenz korrigiert diese Datei nicht und führt keine stillschweigende Änderung am Designsystem durch.
- CSS-Ausdrücke wie `clamp()`, `vw`, `rem` und `%` bleiben verbindlich als Ausdrücke. Pixelwerte hängen von Viewport und Browser-Grundschriftgröße ab. Browser-Defaults werden nicht als eigene Designwerte ausgegeben.

## 2. Seitenaufbau und gemeinsame Elemente

Aktuelle Reihenfolge der Einzeltherapie: gemeinsamer Header → vollbreiter Bild-Hero mit H1, zweizeiligem H2 und Fließtext → cremefarbener Abschnitt mit Praxisfoto und Methodentext → rosafarbener Titelblock mit Label, Überschrift und Aussage → cremefarbene Kompetenzliste mit vier Spalten und Wellenabschluss → gemeinsamer Footer.

| Bereich | Verbindliche Grundlage | Individuell möglich |
| --- | --- | --- |
| Header und Navigation | `SiteHeader` aus dem Root-Layout, einschließlich mobil responsivem Menü und Kontaktlink | Aktiver Navigationspunkt durch Route |
| Hero | Proportionen, Bildfüllung, Containerachse, Textposition und Breakpoints aus Abschnitt 3 | Bildmotiv, Alternativtext, H1/H2 und Einleitungstext |
| Inhaltssektionen | `.container`, `.section`, vorhandene Grid- und Typografieregeln als Ausgangspunkt | Anzahl, Reihenfolge, Texte, Fotos und passende Kompositionen |
| Kompetenz-/Themenbereiche | Bestehende Label-, Überschriften-, Listen- und Iconmuster, wenn inhaltlich passend | Themen, Anzahl der Einträge und geeignete V1-Farben |
| Buttons | Nur tatsächlich sichtbare bestehende Varianten wiederverwenden; Header-Kontaktlink erhalten | Ziel und Beschriftung nach Seiteninhalt |
| Footer | `SiteFooter` und dessen responsive Regeln unverändert wiederverwenden | Keine seitenlokale Kopie nötig |

Die Hero-Schaltfläche in `hero.module.css` ist derzeit **nur ein unsichtbarer Platzhalter** (`visibility: hidden`, `aria-hidden="true"`) und kein sichtbarer Button der freigegebenen Einzeltherapie. Für neue Seiten daraus keine automatisch sichtbare Hero-Schaltfläche ableiten.

## 3. Verbindliche Hero-Geometrie und Bilddarstellung

Quelle: `src/app/therapie/einzeltherapie/hero.module.css`, `page.tsx` und `centered-hero-text.tsx`.

| Eigenschaft | Aktueller Wert / Verhalten |
| --- | --- |
| Breite | Hero-`section` in voller verfügbarer Seitenbreite; `position: relative`, `isolation: isolate`, `overflow: hidden` |
| Grundhöhe | `--hero-base-height: clamp(420px, 26vw, 520px)` |
| Mindesthöhe | `min-height: calc(var(--hero-base-height) * 1.2)` |
| Oberer Versatz | `margin-top: calc(var(--hero-base-height) * -.1)`; diesen Zusammenhang mit dem gemeinsamen Header beibehalten |
| Scrollziel | `scroll-margin-top: var(--site-header-height)`; Header misst die Variable zur Laufzeit |
| Bild | Next `Image` mit `fill`, `preload`, `sizes="100vw"`; vorhandene Referenzdatei `public/images/einzeltherapie-hero-v1-photo.png` (2084 × 754 px) |
| Bildfüllung | `.background`: `left: 0 !important`, `width: 100% !important`, `object-fit: cover`, `object-position: right center`; Motiv weder strecken noch verzerren. Der konkrete Zuschnitt darf mit dem Motiv abgestimmt werden, die vollflächige Darstellung bleibt. |
| Textlesbarkeit | Hero-Pseudoelement mit `linear-gradient(90deg, var(--sand), transparent 45%)` |
| Textbreite | `.copy`: `width: min(600px, 48%)` |
| Horizontale Position | `margin-left: max(var(--gutter), calc((100% - 1320px) / 2))` |
| Textinnenraum | `padding: 3.5rem 0` |
| Vertikale Zentrierung | `CenteredHeroText` misst Hero und Text mit `getBoundingClientRect()` und zentriert den **gesamten** H1/H2/Absatz-Wrapper über `translateY(...)`; `ResizeObserver` aktualisiert bei Größenänderungen |
| Lokale Feinausrichtung | H1 und H2 jeweils `translateY(1.75rem)`; Fließtext `translateY(2.5rem)`. Diese optischen Korrekturen sind Bestandteil des aktuellen Erscheinungsbilds, ohne die Berechnung der Wrapper-Mitte zu ersetzen. |

Responsive Hero-Regeln:

| Viewport | Aktuelle Regeln |
| --- | --- |
| Bis 1000 px | Grundhöhe `500px`, damit Mindesthöhe `600px`; `.copy` mit `width: 57%`, `padding-block: 3rem`; H1/H2-Größen siehe Abschnitt 4 |
| Bis 600 px | Grundhöhe `680px`, Mindesthöhe daraus `816px`, zusätzlich `padding-bottom: 240px`; Bild `top: 0 !important`, `height: 100% !important`, `object-position: right center`; Textbreite `auto`, `margin-inline: var(--gutter)`, `padding: 2.5rem 0 1rem`; Lesbarkeitsverlauf `linear-gradient(180deg, var(--sand) 0%, var(--sand) 58%, transparent 75%)` |

Die tatsächliche Höhe kann durch Inhalt und Padding größer als die Mindesthöhe werden. Bildausschnitt und Steine rechts bei Desktop, Tablet und Mobile prüfen, wenn für eine andere Therapieform ein anderes Motiv gewählt wird. Die freigegebene Hero-Proportion ist die CSS-Formel, kein einzelner Screenshot-Pixelwert.

## 4. Verbindliche Schriftfamilien und Typografie

`src/app/layout.tsx` lädt lokal **Inter Regular 400**, **Inter Medium 500**, **Playfair Display Regular 400** und **Playfair Display Italic 400** über `next/font/local` mit `display: "swap"`. `--font-sans` und `--font-serif` stehen am `<html>`. Fallbacks sind Arial bzw. Georgia. Allura ist nur für die Signatur im gemeinsamen Header eingebunden. Keine neuen Schriftdateien oder willkürlichen Größen hinzufügen. Das visuelle H1/H2/H3-System in `DESIGN-SYSTEM-V1.md` bleibt die übergeordnete Schrift-Referenz; lokale Werte der Einzeltherapie sind die konkret freigegebene Ausprägung.

| Element | Tatsächlich wirksamer Stil |
| --- | --- |
| Grundtext | Inter 400, `--font-size-body: 1rem`, `line-height: 1.75`, `--ink`; Tracking nicht lokal gesetzt |
| Hero-H1 | Playfair Display 400, `clamp(2.8rem, 4.7488vw, 5rem)`, `line-height: 1.12`, `letter-spacing: -.018em`, Farbe `--ink`; bis 1000 px `clamp(2.8rem, 5.5vw, 3.5rem)`, bis 600 px `clamp(2.45rem, 10vw, 3.4rem)` |
| Hero-H2 | Playfair Display 400, `clamp(1.7rem, 2.7vw, 2.65rem)`, `line-height: 1.24`, `letter-spacing: -.014em`, Farbe `--terracotta`; zweite Zeile mit echtem Playfair Italic (`em`). Bis 1000 px `clamp(1.65rem, 3.4vw, 2.2rem)`, bis 600 px `clamp(1.5rem, 6.2vw, 2.2rem)` |
| Hero-Absatz | Inter 400, `var(--font-size-body)`, `line-height: 1.45`, `max-width: 490px`; bis 1000 px `max-width: none`, bis 600 px `font-size: 1rem` |
| Inhalts-H2 „Was Einzeltherapie bietet.“ | Globale H2-Basis: Playfair 400, `font-size: var(--heading)` = `clamp(2.6rem, 4.6vw, 4.75rem)`, `line-height: 1.14`, `letter-spacing: -.045em`; Wort „bietet.“ als `em` kursiv; lokales `margin-block: 1.6rem 2rem`, bis 760 px `1.3rem 1.5rem` |
| Inhalts-Label | `.eyebrow`: Inter 500, `.66rem`, `line-height: 1.6`, `letter-spacing: .17em`, uppercase |
| Hervorgehobener Inhaltsabsatz | `.body-large`: Playfair 400, `1.55rem`, `line-height: 1.5`; lokal `color: #256e5d` und vorhandenes `em` durch `font-style: normal` gerade gestellt |
| Weitere Inhaltsabsätze | Inter 400, `1rem`, Grundzeilenhöhe `1.75`, `margin-bottom: 1.4rem`; lokal für den Absatz direkt nach `.highlight` `margin-bottom: .56rem` |
| Rosé-Titel-H2 | Playfair 400, `clamp(2.75rem, 4.4vw, 4.4rem)`, `line-height: clamp(3.42rem, 5.472vw, 5.472rem)`, `letter-spacing: -.027em`, `width: 110%`; `em` kursiv und in `--terracotta`. Bis 760 px `clamp(2.31rem, 8.25vw, 3.85rem)`, Zeilenhöhe `clamp(2.8728rem, 10.26vw, 4.788rem)`, Breite 100%. |
| Rosé-Label | `.label` zusätzlich zu `.eyebrow`: `.77418rem`, `line-height: 1.584rem`, `letter-spacing: .1122rem`, `padding-top: .7rem`; mobil `padding-top: 0` |
| Rosé-Aussage | Inter 400, Grundgröße `1rem`, Grundzeilenhöhe `1.75`, Farbe `--ink`, `margin-top: 1.8rem` |
| Kompetenzuntertitel | Playfair 400, `1.55rem`, `line-height: 1.5`, `letter-spacing: normal`, `font-style: normal`, Farbe `#000` |
| Kompetenzzeilen | Playfair 400, `1.25rem`, `line-height: 1.3`; übrige Abstände in Abschnitt 5 |

**H3:** Die aktuelle Einzeltherapie besitzt in ihren Inhaltssektionen kein eigenes HTML-`h3`. Für eine neue Unterseite den passenden H3-Typ aus `DESIGN-SYSTEM-V1.md` wählen: visuelle Overline-Referenz `.eyebrow` (Inter 500, `.66rem`, `1.6`, `.17em`, uppercase) oder, wenn eine echte Zwischenüberschrift nötig ist, das bestehende globale `h3` mit Playfair 400, `line-height: 1.2`, `letter-spacing: -.035em` und einer bereits vorhandenen kontextbezogenen Größe. Keine neue H3-Größe erfinden. Visuelle Hierarchie und HTML-Tag sind getrennt zu prüfen.

Hero-Abstände: H2 `margin-top: 1.25rem` (bis 1000 px `1rem`), Absatz `margin-top: 1.95rem` (auch bis 1000 px); optische Versätze aus Abschnitt 3 kommen hinzu. Schriftgrößen, Laufweiten und Zeilenhöhen nicht aus den älteren Einzeltherapie-Zeilen in `DESIGN-SYSTEM-V1.md` übernehmen, wenn sie den hier dokumentierten aktuellen CSS-Werten widersprechen.

## 5. Container, Bilder und Sektionen

- Globaler `.container`: `width: min(100% - var(--gutter) * 2, 1320px)` und `margin-inline: auto`. `--gutter: clamp(1.25rem, 5.2vw, 6rem)`; bis 760 px `1.5rem`.
- Globale `.section`: `padding-block: var(--section-space)` mit `--section-space: clamp(4.5rem, 8vw, 8rem)`. Lokale Abweichungen bleiben lokal.
- Cremefarbener Bild-/Textabschnitt: `.section` in `benefits.module.css` mit `background: var(--paper)` und unterem Padding `calc(var(--section-space) * .75)`. Grid `.9fr 1.1fr`, `gap: clamp(2rem, 3.6vw, 4rem)`, `align-items: start`; bis 760 px eine Spalte, Gap `2.6rem`. Foto `width: 100%`, `height: auto`, `aspect-ratio: 800 / 695`, `object-fit: cover`, `border-radius: 20px`.
- Rosé-Titelblock: globale `.section`-Abstände, `background: var(--rose)`, `color: var(--ink)`. Grid `1fr 2.4fr .5fr`, `gap: 3rem`; bis 1000 px `1fr 3fr`, `gap: 2rem`; bis 760 px eine Spalte, `gap: 1.8rem`. Label und Titel nutzen `FadeIn` (Label mit `rise`); der Inhalt darf je Therapie variieren.
- Kompetenzliste: `background: var(--paper)`, `padding-block: calc(var(--section-space) * .7) var(--section-space)`. Grid mit vier gleich breiten Spalten, `gap: 2rem`, `margin-top: 3rem`; bis 1000 px zwei Spalten, bis 600 px eine Spalte und Gap 0. Zeilen: vier Rasterreihen `minmax(7rem, auto)`, `padding-block: 1rem`, Flex-Gap `.9rem`, untere 1-px-Linie; mobil `min-height: 6rem`. Iconkreis 44 × 44 px. Die Liste ist ein vorhandenes Gestaltungsbeispiel, keine Pflichtsektion für jede Therapieform.
- Footer: gemeinsame `SiteFooter`-Komponente. Ihr oberes Grid ist `1.42fr 1fr .72fr`, Gap `3.2rem`, `padding-block: 7rem 4.4rem`; bis 1150 px zwei Spalten, bis 600 px eine Spalte. Nicht seitenlokal neu gestalten.
- Header: gemeinsame `SiteHeader`-Komponente mit sticky Positionierung und Hintergrund `--paper`. Desktop-Inneres `min-height: clamp(125px, 10.17vw, 180px)`; bis 1200 px `100px`, bis 760 px `96px`. Unter 1200 px wechselt die Navigation ins Menü. Die tatsächliche Headerhöhe wird per `ResizeObserver` als `--site-header-height` bereitgestellt.

## 6. Farben, Bilder und individuelle Gestaltung

Die bestätigten Palettenwerte und ihre Namen stehen in `FARBPALETTE.md`. Aktuelle Einzeltherapie-Flächen verwenden `--sand` im Hero, `--paper` in den Inhaltsflächen und `--rose` im Titelblock; Text überwiegend `--ink`, Akzent `--terracotta`. Bildmotive, thematisch passende Akzentfarben, Illustrationen und die Komposition einzelner Inhaltsblöcke dürfen je Therapieform variieren. Bei neuen Farben zuerst die bestätigte Palette verwenden und keine bisherige Ausnahme (etwa das lokale Grün `#256e5d` oder den tatsächlichen CSS-Wert `--blue: #687c93`) automatisch zu einer neuen allgemeinen Regel erklären. Bei Abweichungen von Palette und bestehendem Quellcode die konkrete Referenz für den Auftrag klären.

## 7. Arbeitsregeln für künftige Unterseiten

1. Zuerst diese Datei, `DESIGN-SYSTEM-V1.md`, `FARBPALETTE.md` und die aktuelle Einzeltherapie-Implementierung lesen.
2. Gemeinsamen Header und Footer sowie vorhandene Tokens und passende Komponenten wiederverwenden. Die Hero-Proportionen und die typografische Hierarchie als Ausgangspunkt übernehmen; Inhalte und Bildmotiv individuell gestalten.
3. Anzahl und Reihenfolge der Inhaltssektionen nach Therapieform festlegen. Eine bestehende Sektion nur übernehmen, wenn sie fachlich und gestalterisch passt.
4. Desktop, Tablet und Mobile anhand der dokumentierten Breakpoints prüfen; Bildfüllung ohne Verzerrung, Lesbarkeit, Textumbruch und ausreichende Abstände sicherstellen.
5. Größere strukturelle Abweichungen von der Referenz vor der Umsetzung mit der Nutzerin abstimmen. Lokale Unterschiede nachvollziehbar halten; bestehende Seiten nicht automatisch angleichen.
6. Die Einzeltherapie als freigegebene Master-Seite **nicht verändern**. Diese Dokumentation selbst bewirkt keine neue Designversion und keine Umgestaltung anderer Unterseiten.
