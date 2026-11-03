import { SiteFooter } from "@/components/site-footer";
import styles from "../therapy.module.css";

export const metadata = { title: "Tiergestützte Psychotherapie mit Alpakas | Mag. Romina Lauzensky" };

export default function TherapyPage() {
  return <><main id="inhalt" tabIndex={-1} className={styles.page}><div className="container"><h1>Tiergestützte Psychotherapie mit Alpakas</h1></div></main><SiteFooter /></>;
}
