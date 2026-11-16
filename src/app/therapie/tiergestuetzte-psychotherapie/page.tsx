import { TherapyDetail } from "../therapy-detail";

export const metadata = {
  title: "Tiergestützte Psychotherapie mit Alpakas | Mag. Romina Lauzensky",
  description: "Tiergestützte Psychotherapie mit Alpakas im Angebot von Mag. Romina Lauzensky. Fragen zu Ablauf und Eignung können Sie direkt an die Praxis richten.",
  alternates: { canonical: "/therapie/tiergestuetzte-psychotherapie" },
  openGraph: { title: "Tiergestützte Psychotherapie mit Alpakas | Mag. Romina Lauzensky", description: "Informationen zum tiergestützten Angebot mit Alpakas.", url: "/therapie/tiergestuetzte-psychotherapie" },
};

export default function Page() {
  return <TherapyDetail title="Tiergestützte Psychotherapie mit Alpakas" lead="Die Begegnung mit Alpakas kann ein erlebnisorientiertes Element der psychotherapeutischen Begleitung sein." sections={[
    { heading: "Begegnung als Teil der Therapie", paragraphs: ["Im Mittelpunkt stehen Ihre Anliegen und die therapeutische Beziehung. Das tiergestützte Angebot eröffnet einen weiteren Rahmen, in dem Wahrnehmungen und Erfahrungen besprochen werden können.", "Wie ein Termin gestaltet wird, hängt vom jeweiligen Anliegen und den Möglichkeiten vor Ort ab."] },
    { heading: "Fragen zum Angebot", paragraphs: ["Ob dieses Angebot für Sie geeignet ist und wo es stattfindet, klären wir vorab persönlich. So können auch praktische Fragen und mögliche Vorbehalte besprochen werden.", "Bitte kontaktieren Sie die Praxis für aktuelle Informationen zum Ablauf und zur Verfügbarkeit."] },
  ]} />;
}
