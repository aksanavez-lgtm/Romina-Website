import { SiteFooter } from "@/components/site-footer";
import styles from "../therapy.module.css";

export const metadata = { title: "Paartherapie | Mag. Romina Lauzensky" };

export default function TherapyPage() {
  return <><main id="inhalt" tabIndex={-1} className={styles.page}><div className="container"><h1>Paartherapie</h1></div></main><SiteFooter /></>;
}
