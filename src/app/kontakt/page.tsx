import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/site-footer";
import practice from "../../../public/images/ordination-moedling-kontakt.jpg";
import styles from "./contact.module.css";

const handwriting = localFont({ src: "../../components/fonts/allura-regular.ttf", weight: "400", display: "swap" });
export const metadata: Metadata = { title: "Kontakt | Mag. Romina Lauzensky", description: "Kontakt zur Praxis von Mag. Romina Lauzensky. Psychotherapie in Wien und Mödling: Telefonnummer, E-Mail und Ordinationsstandorte.", alternates: { canonical: "/kontakt" }, openGraph: { title: "Kontakt | Mag. Romina Lauzensky", description: "Kontakt und Ordinationsstandorte in Wien und Mödling.", url: "/kontakt" } };
function Icon({ children }: { children: ReactNode }) {
  return <span className={styles.icon} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">{children}</svg></span>;
}
function Pin() { return <Icon><path d="M12 22S4 12 4 8a8 8 0 0 1 16 0c0 4-8 14-8 14Z" /><circle cx="12" cy="8" r="3" /></Icon>; }
const locations = [
  { name: "Wien", street: "Mollardgasse 34/2/40-41", postal: "1060 Wien" },
  { name: "Mödling", street: "Klostergasse 19/5", postal: "2340 Mödling" },
];
const mapUrl = (place: typeof locations[number]) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.street}, ${place.postal}, Österreich`)}`;

export default function ContactPage() {
  return <><main id="inhalt" tabIndex={-1} className={styles.page}>
    <section className={styles.hero} aria-labelledby="contact-hero-title">
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <p className={styles.overline}>Kontakt</p>
          <h1 id="contact-hero-title">Ich freue mich<br />auf <span className={styles.headlineAccent}>Ihre Nachricht.</span></h1>
          <p>Ob Sie Fragen haben, ein Erstgespräch vereinbaren möchten<br className={styles.heroBreak} /> oder unsicher sind, ob mein Angebot das Richtige für Sie ist –<br className={styles.heroBreak} /> melden Sie sich gerne. Ich bin für Sie da.</p>
        </div>
        <p className={`${styles.heroNote} ${handwriting.className}`}>Der erste Schritt<br />kann vieles verändern.</p>
      </div>
    </section>
    <section className={`container ${styles.info}`} aria-label="Kontaktinformationen">
      <div><Icon><path d="m7 3 3 4-2 3c1.5 3 3 4.5 6 6l3-2 4 3-2 4C11 22 2 13 3 5Z" /></Icon><h2>Telefon</h2><a href="tel:+4368184087022">0681 / 840 870 22</a></div>
      <div><Icon><rect x="2" y="4" width="20" height="16" /><path d="m2 4 10 9L22 4" /></Icon><h2>E-Mail</h2><a href="mailto:praxis@psychotherapie-lauzensky.at">praxis@psychotherapie-lauzensky.at</a></div>
      {[locations[1], locations[0]].map(place => <div key={place.name}><Pin /><h2>Ordination {place.name}</h2><a href={mapUrl(place)} target="_blank" rel="noopener noreferrer">{place.street}<br />{place.postal}</a></div>)}
    </section>
    <section className={styles.message} aria-labelledby="message-title"><div className={styles.formSide}><div className={styles.contactPrompt}><h2 id="message-title">Nehmen Sie Kontakt auf</h2><p>Für Fragen oder einen ersten Termin erreichen Sie mich per E-Mail oder Telefon.</p><a className={styles.emailButton} href="mailto:praxis@psychotherapie-lauzensky.at">E-Mail schreiben</a><a href="tel:+4368184087022">0681 / 840 870 22 anrufen</a></div></div><div className={styles.photo}><Image src={practice} alt="Praxisraum in Mödling mit zwei Sesseln, Pflanzen und einem kleinen Tisch" fill sizes="(max-width: 760px) 100vw, 54vw" /></div></section>
    <section className={`container ${styles.locations}`} aria-labelledby="locations-title"><h2 id="locations-title" className={styles.overline}>Ordinationsstandorte</h2><div className={styles.locationGrid}>{locations.map(place => <a className={styles.location} key={place.name} href={mapUrl(place)} target="_blank" rel="noopener noreferrer" aria-label={`${place.name}, ${place.street}, ${place.postal}, Österreich – in Google Maps öffnen (neuer Tab)`}><div className={styles.mapLink}><Pin /><span>In Google Maps öffnen ↗</span></div><div><h3>{place.name}</h3><address>{place.street}<br />{place.postal}</address></div></a>)}</div></section>
    <aside className={styles.crisis} aria-labelledby="crisis-title"><div className={`container ${styles.crisisInner}`}><div className={styles.crisisHeading}><Icon><path d="M12 20 4 12C-2 5 7-1 12 6c5-7 14-1 8 6Z" /></Icon><div><p className={styles.overline}>Wichtiger Hinweis</p><h2 id="crisis-title">Sie befinden sich in einer akuten Krise?</h2></div></div><p>Bitte wenden Sie sich in einer akuten psychischen Krise an den Sozialpsychiatrischen Notdienst in Wien (<a href="tel:+43131330">01 31330</a>, rund um die Uhr) oder bei einer lebensbedrohlichen Situation an die Rettung (<a href="tel:144">144</a>).</p></div></aside>
  </main><SiteFooter /></>;
}
