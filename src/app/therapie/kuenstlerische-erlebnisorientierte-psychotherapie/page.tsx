import { TherapyDetail } from "../therapy-detail";

export const metadata = {
  title: "Psychotherapie mit künstlerischen Elementen | Mag. Romina Lauzensky",
  description: "Psychotherapie mit künstlerischen und erlebnisorientierten Elementen bei Mag. Romina Lauzensky in Wien und Mödling.",
  alternates: { canonical: "/therapie/kuenstlerische-erlebnisorientierte-psychotherapie" },
  openGraph: { title: "Psychotherapie mit künstlerischen Elementen | Mag. Romina Lauzensky", description: "Künstlerische und erlebnisorientierte Elemente in der Psychotherapie.", url: "/therapie/kuenstlerische-erlebnisorientierte-psychotherapie" },
};

export default function Page() {
  return <TherapyDetail title="Psychotherapie mit künstlerischen & erlebnisorientierten Elementen" lead="Manches lässt sich leichter erkunden, wenn neben dem Gespräch auch andere Ausdrucksformen Raum bekommen." sections={[
    { heading: "Erleben und ausdrücken", paragraphs: ["Meine psychotherapeutische Arbeit ist personzentriert und vorwiegend gesprächsorientiert. Wenn es zum Anliegen passt, können kreative und erlebnisorientierte Methoden den gemeinsamen Prozess ergänzen.", "Dabei geht es um Ihre Erfahrungen und Wahrnehmungen, nicht um künstlerische Leistung."] },
    { heading: "Ein individueller Zugang", paragraphs: ["Ob ein solcher Zugang hilfreich erscheint, besprechen wir gemeinsam. Sie müssen keine Vorkenntnisse mitbringen und können Fragen oder Vorbehalte offen ansprechen.", "Im Mittelpunkt bleiben Ihre persönlichen Themen und ein Tempo, das für Sie stimmig ist."] },
  ]} />;
}
