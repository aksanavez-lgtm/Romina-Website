import type { ReactNode } from "react";
import styles from "./site-footer.module.css";

function Icon({ children }: { children: ReactNode }) {
  return <span className={styles.icon} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">{children}</svg></span>;
}
function Pin() {
  return <Icon><path d="M12 22s8-10 8-14a8 8 0 0 0-16 0c0 4 8 14 8 14Z" /><circle cx="12" cy="8" r="3" /></Icon>;
}
export function SiteFooter() {
  return <footer className={styles.footer}>
    <div className={`container ${styles.upper}`}>
      <div className={styles.identity}>
        <p className={styles.name}>ROMINA LAUZENSKY</p>
        <p className={styles.profession}>PSYCHOTHERAPEUTIN</p>
        <div className={styles.rule} />
        <p className={styles.statement}>Raum für Veränderung.<br />Für ein Leben in mehr Klarheit,<br />Verbundenheit und Selbstbestimmung.</p>
        <svg className={styles.branch} viewBox="0 0 300 450" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 438C65 355 110 304 147 233S184 106 193 43M37 406C26 366 22 333 48 281C59 326 61 347 37 406M61 369C92 322 137 305 193 315C141 358 122 367 61 369M110 288C109 241 61 231 91 133C127 174 141 215 110 288M114 280C161 227 208 211 263 222C211 269 175 277 114 280M171 187C164 147 133 102 202 17C223 91 216 116 171 187M172 187C202 135 237 120 294 107C257 162 238 174 172 187" />
          <path d="M37 406 42 327M61 369 146 331M110 288 99 180M114 280 213 240M172 187 247 140" strokeWidth=".8" />
        </svg>
      </div>
      <div className={styles.contact}>
        <h2>Kontakt</h2><div className={styles.rule} />
        <a className={styles.row} href="tel:+4368184087022"><Icon><path d="m7 3 3 4-2 3c1.5 3 3 4.5 6 6l3-2 4 3-2 4C11 22 2 13 3 5Z" /></Icon><span>0681 / 840 870 22</span></a>
        <a className={styles.row} href="mailto:praxis@psychotherapie-lauzensky.at"><Icon><rect x="2" y="4" width="20" height="16" /><path d="m2 4 10 9L22 4" /></Icon><span>praxis@psychotherapie-lauzensky.at</span></a>
      </div>
      <div className={styles.locations}>
        <h2>Ordinationsstandorte</h2><div className={styles.rule} />
        <div className={styles.row}><Pin /><address><strong>Mödling</strong><br />Klostergasse 19/5<br />2340 Mödling</address></div>
        <div className={styles.divider} />
        <div className={styles.row}><Pin /><address><strong>Wien</strong><br />Mollardgasse 34/2/40-41<br />1060 Wien</address></div>
      </div>
    </div>
    <div className={styles.bar}><div className={`container ${styles.bottom}`}>
      <div className={styles.credits}><span>Copyright © 2026 Mag. Romina Lauzensky</span><span className={styles.designer}>Designed by Oksana Vezhnivets</span></div>
      <nav className={styles.legal} aria-label="Rechtliche Informationen"><a href="/impressum">Impressum</a><a href="/datenschutz">Datenschutz</a></nav>
    </div></div>
  </footer>;
}
