import { TherapyDetail } from "../therapy-detail";

export const metadata = {
  title: "Familientherapie | Mag. Romina Lauzensky",
  description: "Familientherapie bei Mag. Romina Lauzensky in Wien und Mödling. Unterschiedliche Sichtweisen verstehen und neue Wege im Miteinander finden.",
  alternates: { canonical: "/therapie/familientherapie" },
  openGraph: { title: "Familientherapie | Mag. Romina Lauzensky", description: "Familientherapie in Wien und Mödling.", url: "/therapie/familientherapie" },
};

export default function Page() {
  return <TherapyDetail title="Familientherapie" lead="Veränderungen in einer Familie betreffen oft mehrere Menschen. Familientherapie schafft Raum für die unterschiedlichen Erfahrungen und Bedürfnisse." sections={[
    { heading: "Jede Sichtweise zählt", paragraphs: ["Trennung, Patchwork-Konstellationen, Verluste oder wiederkehrende Konflikte können das Zusammenleben belasten. Im gemeinsamen Gespräch können die Beteiligten ihre Sichtweisen einbringen und einander besser verstehen.", "Ein geschützter, wertschätzender Rahmen hilft, auch schwierige Themen anzusprechen."] },
    { heading: "Miteinander neue Wege finden", paragraphs: ["Wir betrachten festgefahrene Muster und suchen nach Möglichkeiten, anders miteinander zu sprechen und umzugehen. Dabei stehen die Anliegen der Familie im Mittelpunkt.", "Welche Personen an einem Gespräch teilnehmen und welche Fragen zuerst wichtig sind, lässt sich bei der Kontaktaufnahme klären."] },
  ]} />;
}
