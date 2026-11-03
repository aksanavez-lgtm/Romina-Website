import Image from "next/image";
import styles from "./contact-section.module.css";

export function ContactSection() {
  return (
    <section className={styles.section} id="kontakt" tabIndex={-1} aria-labelledby="contact-title">
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className={styles.overline}>Ein erster Schritt</p>
          <h2 id="contact-title" className={styles.headline}>Beginnen wir<br /><em>mit einem Gespräch.</em></h2>
          <div className={styles.contacts}>
            <a href="tel:+4368184087022">
              <span className={styles.icon} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 3 3 4-2 3c1.5 3 3 4.5 6 6l3-2 4 3-2 4C11 22 2 13 3 5Z" /></svg></span>
              <span>0681 / 840 870 22</span>
            </a>
            <a href="mailto:praxis@psychotherapie-lauzensky.at">
              <span className={styles.icon} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="4.5" width="19" height="15" /><path d="m3 5 9 8 9-8M3 19l6.5-7M21 19l-6.5-7" /></svg></span>
              <span>praxis@psychotherapie-lauzensky.at</span>
            </a>
          </div>
        </div>
        <div className={styles.artwork}>
          <a className={styles.graphic} href="/kontakt" aria-label="Zur Kontaktseite">
            <div className={styles.brain}><Image src="/images/kontakt-gehirn.png" alt="" width={1672} height={941} /></div>
            <div className={styles.arrow}><Image src="/images/kontakt-gehirn.png" alt="" width={1672} height={941} /></div>
          </a>
        </div>
      </div>
    </section>
  );
}
