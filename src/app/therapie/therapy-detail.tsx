import { SiteFooter } from "@/components/site-footer";
import styles from "./therapy.module.css";

type Section = { heading: string; paragraphs: string[] };

export function TherapyDetail({ title, lead, sections }: { title: string; lead: string; sections: Section[] }) {
  return <>
    <main id="inhalt" tabIndex={-1} className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>Therapeutisches Angebot · Wien & Mödling</p>
        <h1>{title}</h1>
        <p className={styles.lead}>{lead}</p>
        <div className={styles.sections}>
          {sections.map(section => <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </section>)}
        </div>
        <section className={styles.contact} aria-labelledby="therapy-contact-title">
          <h2 id="therapy-contact-title">Ein Gespräch vereinbaren</h2>
          <p>Wenn Sie Fragen zum Angebot haben oder einen ersten Termin anfragen möchten, freue ich mich über Ihre Kontaktaufnahme.</p>
          <a href="/kontakt">Kontakt und Ordinationsstandorte</a>
        </section>
      </div>
    </main>
    <SiteFooter />
  </>;
}
