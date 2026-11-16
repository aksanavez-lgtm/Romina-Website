import { FadeIn } from "@/components/fade-in";
import headingStyles from "./competencies-heading.module.css";
import { Competencies } from "./competencies";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import background from "../../../../public/images/einzeltherapie-hero.png";
import room from "../../../../Romina-Lauzensky_Einzeltherapie-Raum-für-dich.png";
import sectionStyles from "./benefits.module.css";
import styles from "./hero.module.css";
import { CenteredHeroText } from "./centered-hero-text";

export const metadata = { title: "Einzeltherapie | Mag. Romina Lauzensky" };

export default function TherapyPage() {
  return <><main id="inhalt" tabIndex={-1}>
    <section className={styles.hero} aria-labelledby="einzeltherapie-title">
      <Image src={background} alt="" fill preload unoptimized className={styles.background} />
      <div className={styles.copy}>
        <CenteredHeroText>
        <h1 id="einzeltherapie-title">Einzeltherapie</h1>
        <h2>Raum für dich und das,<br /><em>was dich beschäftigt.</em></h2>
        <p>Als personzentrierte Psychotherapeutin steht für mich die therapeutische Beziehung und das gemeinsame Erleben im Mittelpunkt.</p>
        </CenteredHeroText>
        <span className={styles.button} style={{ visibility: "hidden" }} aria-hidden="true">&nbsp;</span>
      </div>
    </section>
    <section className={`section ${sectionStyles.section}`} aria-labelledby="benefits-title">
      <div className={`container ${sectionStyles.grid}`}>
        <Image src={room} alt="Ordinationsraum für Einzeltherapie" unoptimized className={sectionStyles.photo} />
        <div className="about-copy">
          <p className="eyebrow">IM MITTELPUNKT</p>
          <h2 id="benefits-title">Was Einzeltherapie <em>bietet.</em></h2>
          <p className={`body-large ${sectionStyles.highlight}`}><em>Je nach Situation begleite ich Sie mit Einfühlungsvermögen, Wertschätzung, Behutsamkeit, Humor und – wenn hilfreich – auch mit Klarheit und Direktheit.</em></p>
          <p>Ich arbeite vorwiegend gesprächstherapeutisch und integriere bei Bedarf kreative Methoden, das Systembrett, Imaginationen und meditative Elemente in den therapeutischen Prozess.</p>
          <p>In der Traumapsychotherapie kann auch das Brainspotting und der Augenfokus zum Einsatz kommen, um die Erfahrungen besser zu verarbeiten.</p>
        </div>
      </div>
    </section>
    <section className={`section ${headingStyles.section}`} aria-labelledby="competencies-title">
      <div className={`container ${headingStyles.grid}`}>
        <div className={`eyebrow ${headingStyles.label}`}><FadeIn rise>MEINE<br />KOMPETENZ-<br />BEREICHE</FadeIn></div>
        <FadeIn><h2 id="competencies-title" className={headingStyles.title}>Schwerpunkte in<br />der <em>Einzeltherapie</em></h2></FadeIn>
      </div>
    </section>
    <Competencies />
  </main><SiteFooter /></>;
}
