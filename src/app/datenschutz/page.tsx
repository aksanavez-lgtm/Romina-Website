import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import styles from "../rechtliches.module.css";

export const metadata: Metadata = {
  title: "Datenschutz | Mag. Romina Lauzensky",
  description: "Informationen zum Datenschutz auf der Website von Mag. Romina Lauzensky.",
  alternates: { canonical: "/datenschutz" },
};

export default function Datenschutz() {
  return <>
    <main id="inhalt" tabIndex={-1} className={styles.page}><div className={`container ${styles.inner}`}>
      <h1>Datenschutz</h1>
      <h2>Verantwortliche und Kontakt</h2>
      <p>Mag. Romina Lauzensky, Psychotherapeutin<br />Mollardgasse 34/2/40-41, 1060 Wien<br />E-Mail: <a href="mailto:praxis@psychotherapie-lauzensky.at">praxis@psychotherapie-lauzensky.at</a><br />Telefon: <a href="tel:+4368184087022">0681 / 840 870 22</a></p>
      <h2>Kontaktaufnahme</h2>
      <p>Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Angaben, um Ihre Anfrage zu beantworten. Beim Absenden des Kontaktformulars werden Vorname, Nachname, E-Mail-Adresse, Betreff und Nachricht an den Server dieser Website übertragen. Wenn der Versand eingerichtet ist, werden sie über den Versanddienst Brevo an praxis@psychotherapie-lauzensky.at gesendet. Die Website speichert diese Angaben nicht in einer eigenen Datenbank. Brevo verarbeitet gesendete Daten zur Zustellung der E-Mail; dabei gelten auch die Aufbewahrungsregeln des Dienstes und des E-Mail-Anbieters der Praxis. Bitte senden Sie über das Formular keine sensiblen Gesundheitsinformationen.</p>
      <p>Die Verarbeitung von Anfragen erfolgt zur Durchführung vorvertraglicher Maßnahmen beziehungsweise zur Bearbeitung Ihrer Anfrage. Für die weitere Verarbeitung im Rahmen einer Behandlung gelten die entsprechenden gesetzlichen und beruflichen Pflichten.</p>
      <h2>Technischer Betrieb</h2>
      <p>Beim Aufruf der Website können für die Auslieferung und Sicherheit technisch erforderliche Verbindungsdaten verarbeitet werden. Einzelheiten zu Hosting, Protokollierung, Speicherdauer und möglichen Empfängern werden vor Inbetriebnahme anhand des tatsächlich gewählten Anbieters ergänzt.</p>
      <p>Die im Projekt eingebundenen Schriften und Bilder werden von der Website selbst ausgeliefert. Es ist derzeit kein Analyse- oder Werbedienst im Projekt eingebunden.</p>
      <h2>Google Maps</h2>
      <p>Auf der Kontaktseite sind Karten von Google Maps eingebettet. Wenn Sie zu den Karten scrollen, kann Ihr Browser eine Verbindung zu Google herstellen und dabei Ihre IP-Adresse und technische Verbindungsdaten übermitteln. Google kann dabei auch Cookies oder ähnliche Technologien einsetzen. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Weitere Informationen finden Sie in der <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von Google</a>.</p>
      <p>Die Links „In Google Maps öffnen“ führen nach Ihrem Klick zu Google Maps in einem neuen Tab.</p>
      <h2>Ihre Rechte</h2>
      <p>Sie können nach Maßgabe der Datenschutz-Grundverordnung Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen sowie gegebenenfalls Widerspruch einlegen oder Datenübertragbarkeit geltend machen. Wenden Sie sich dafür an die oben genannte E-Mail-Adresse.</p>
      <p>Sie können sich außerdem bei der <a href="https://www.dsb.gv.at/" target="_blank" rel="noopener noreferrer">Österreichischen Datenschutzbehörde</a> beschweren.</p>
    </div></main>
    <SiteFooter />
  </>;
}
