import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import styles from "../rechtliches.module.css";

export const metadata: Metadata = {
  title: "Impressum | Mag. Romina Lauzensky",
  description: "Angaben zur Praxis von Mag. Romina Lauzensky und Kontaktmöglichkeiten in Wien und Mödling.",
  alternates: { canonical: "/impressum" },
};

export default function Impressum() {
  return <>
    <main id="inhalt" tabIndex={-1} className={styles.page}><div className={`container ${styles.inner}`}>
      <h1>Impressum</h1>
      <h2>Medieninhaberin und Diensteanbieterin</h2>
      <p>Mag. Romina Lauzensky<br />Psychotherapeutin<br />Tätigkeitsbereich: Psychotherapie</p>
      <h2>Ordinationsstandorte und Kontakt</h2>
      <address>Wien: Mollardgasse 34/2/40-41, 1060 Wien<br />Mödling: Klostergasse 19/5, 2340 Mödling</address>
      <p>Telefon: <a href="tel:+4368184087022">0681 / 840 870 22</a><br />E-Mail: <a href="mailto:praxis@psychotherapie-lauzensky.at">praxis@psychotherapie-lauzensky.at</a></p>
      <h2>Berufsrecht</h2>
      <p>Berufsbezeichnung: Psychotherapeutin. Maßgebliche berufsrechtliche Vorschrift: <a href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20012578" target="_blank" rel="noopener noreferrer">Psychotherapiegesetz 2024</a>.</p>
      <h2>Inhalt dieser Website</h2>
      <p>Informationen über die psychotherapeutische Tätigkeit, die angebotenen Leistungen und Kontaktmöglichkeiten der Praxis.</p>
    </div></main>
    <SiteFooter />
  </>;
}
