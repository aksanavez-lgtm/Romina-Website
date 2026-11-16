import { TherapyDetail } from "../therapy-detail";

export const metadata = {
  title: "Paartherapie | Mag. Romina Lauzensky",
  description: "Paartherapie bei Mag. Romina Lauzensky in Wien und Mödling. Raum für Beziehungskonflikte, Kommunikation und unterschiedliche Perspektiven.",
  alternates: { canonical: "/therapie/paartherapie" },
  openGraph: { title: "Paartherapie | Mag. Romina Lauzensky", description: "Paartherapie in Wien und Mödling.", url: "/therapie/paartherapie" },
};

export default function Page() {
  return <TherapyDetail title="Paartherapie" lead="Wenn Gespräche schwerfallen oder Konflikte immer wiederkehren, kann ein gemeinsamer Blick auf die Beziehung neue Perspektiven eröffnen." sections={[
    { heading: "Beziehungsmuster verstehen", paragraphs: ["In der Paartherapie erhalten beide Personen Raum, ihre Sichtweise und ihre Bedürfnisse auszusprechen. Gemeinsam betrachten wir, wie Streit, Rückzug oder Missverständnisse entstehen und was dahintersteht.", "Es geht darum, wieder miteinander ins Gespräch zu kommen und den Umgang mit schwierigen Situationen bewusster zu gestalten."] },
    { heading: "Klarheit für den gemeinsamen Weg", paragraphs: ["Themen können Kommunikation, Nähe, Vertrauen, Veränderungen oder Krisen in der Beziehung sein. Auch die Frage, ob und wie ein Paar seinen Weg fortsetzen möchte, darf Platz haben.", "Ein erster gemeinsamer Termin bietet Gelegenheit, das Anliegen und einen passenden Rahmen zu besprechen."] },
  ]} />;
}
