import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { CenteredHeroText } from "../einzeltherapie/centered-hero-text";
import heroPhoto from "../../../../public/images/paartherapie-hero-v1.png";
import styles from "./paartherapie.module.css";

export const metadata = {
  title: "Paartherapie | Mag. Romina Lauzensky",
  description: "Paartherapie bei Mag. Romina Lauzensky in Wien und Mödling. Beziehungsmuster verstehen und neue Wege im Miteinander entwickeln.",
  alternates: { canonical: "/therapie/paartherapie" },
  openGraph: { title: "Paartherapie | Mag. Romina Lauzensky", description: "Paartherapie in Wien und Mödling.", url: "/therapie/paartherapie" },
};

const themes = [
  "wieder miteinander ins Gespräch zu kommen,",
  "Konflikte besser zu verstehen und anders zu bearbeiten,",
  "wiederkehrende Beziehungsmuster zu erkennen,",
  "eigene Bedürfnisse und Grenzen klarer wahrzunehmen,",
  "Vertrauen und emotionale Nähe wieder aufzubauen,",
  "mit Veränderungen und Krisen umzugehen,",
  "oder auch eine Trennung bewusst und respektvoll zu gestalten.",
];

export default function PaartherapiePage() {
  return <>
    <main id="inhalt" tabIndex={-1}>
      <section className={styles.hero} aria-labelledby="paartherapie-title">
        <Image src={heroPhoto} alt="Paar in ruhiger, heller Umgebung" fill preload sizes="100vw" className={styles.background} quality={85} />
        <div className={styles.copy}>
          <CenteredHeroText>
            <h1 id="paartherapie-title">Paartherapie</h1>
            <h2><span>Wenn Beziehung schwierig wird, muss</span><br /><em>das nicht das Ende bedeuten.</em></h2>
            <p>Manchmal geraten Paare in wiederkehrende Konflikte, fühlen sich nicht mehr verstanden oder verlieren den Zugang zueinander. Was früher Nähe geschaffen hat, kann plötzlich Anlass für Streit, Rückzug oder Enttäuschung sein.</p>
          </CenteredHeroText>
        </div>
      </section>

      <section className={`section ${styles.patterns}`} aria-labelledby="patterns-title">
        <div className={`container ${styles.patternsGrid}`}>
          <p className={`eyebrow ${styles.patternsLabel}`}><span>GEMEINSAM.</span><span>LIEBEVOLL.</span><span>RESPEKTVOLL.</span></p>
          <div className={styles.patternsContent}>
            <h2 id="patterns-title">Beziehungsmuster<br /><em>verstehen und verändern</em></h2>
            <p className={styles.patternsIntro}>In der Paartherapie geht es darum, diese Dynamiken gemeinsam zu verstehen und neue Wege im Miteinander zu entwickeln.</p>
            <div className={styles.patternsBody}>
              <p>Gemeinsam betrachten wir solche Beziehungsmuster und versuchen zu verstehen, was sich hinter den jeweiligen Reaktionen verbirgt. Ziel ist es, neue Formen der Kommunikation und des Umgangs miteinander zu entwickeln – mit mehr Klarheit, gegenseitigem Verständnis und Handlungsspielraum.</p>
              <p>Dabei geht es nicht darum, einen „Schuldigen“ zu finden. Beide Partner sollen die Möglichkeit bekommen, ihre Sichtweise und ihre Bedürfnisse einzubringen und Verantwortung für ihren eigenen Anteil an der Beziehungsgestaltung zu übernehmen.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.change}`} aria-labelledby="change-title">
        <div className="container">
          <div className={styles.changeHeading}>
            <span className={styles.sectionNumber} aria-hidden="true">02</span>
            <div>
              <h2 id="change-title">Raum für <em>Veränderung</em></h2>
              <p>Paartherapie kann dabei unterstützen,</p>
            </div>
          </div>
          <ol className={styles.themes}>
            {themes.map((theme, index) => <li key={theme}><span className={styles.themeNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span>{theme}</span></li>)}
          </ol>
        </div>
      </section>

      <section className={`section ${styles.beginning}`} aria-labelledby="beginning-title">
        <div className={`container ${styles.beginningGrid}`}>
          <div className={styles.beginningTitle}>
            <span className={styles.sectionNumber} aria-hidden="true">03</span>
            <h2 id="beginning-title">Ein gemeinsamer <em>Anfang</em></h2>
          </div>
          <div className={styles.beginningBody}>
            <p>Paartherapie bedeutet nicht, um jeden Preis zusammenzubleiben. Sie kann auch dabei helfen, Klarheit darüber zu gewinnen, welchen gemeinsamen Weg ein Paar weitergehen möchte.</p>
            <p>Wenn Sie das Gefühl haben, als Paar alleine nicht mehr weiterzukommen, kann ein erster gemeinsamer Termin ein guter Anfang sein.</p>
            <a className={`text-link ${styles.contactLink}`} href="/kontakt">Kontakt aufnehmen <span className="arrow" aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
