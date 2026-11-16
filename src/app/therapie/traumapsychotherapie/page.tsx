import { TherapyDetail } from "../therapy-detail";

export const metadata = {
  title: "Traumapsychotherapie | Mag. Romina Lauzensky",
  description: "Traumapsychotherapie bei Mag. Romina Lauzensky in Wien und Mödling. Behutsame, personzentrierte Begleitung bei belastenden Erfahrungen.",
  alternates: { canonical: "/therapie/traumapsychotherapie" },
  openGraph: { title: "Traumapsychotherapie | Mag. Romina Lauzensky", description: "Traumapsychotherapie in Wien und Mödling.", url: "/therapie/traumapsychotherapie" },
};

export default function Page() {
  return <TherapyDetail title="Traumapsychotherapie" lead="Belastende Erfahrungen können noch lange nachwirken. In der Therapie ist Raum, sich ihnen in einem geschützten Rahmen und im eigenen Tempo zuzuwenden." sections={[
    { heading: "Behutsam und gemeinsam", paragraphs: ["Die therapeutische Beziehung und das gemeinsame Erleben stehen in meiner personzentrierten Arbeit im Mittelpunkt. Was Sie erzählen möchten und was Sie gerade brauchen, besprechen wir miteinander.", "Ziel ist ein Rahmen, in dem Erfahrungen und die damit verbundenen Gefühle wahrgenommen und eingeordnet werden können."] },
    { heading: "Mögliche Methoden", paragraphs: ["Ich arbeite vorwiegend gesprächstherapeutisch. Je nach Situation können Imaginationen, kreative Methoden oder meditative Elemente den Prozess ergänzen.", "In der Traumapsychotherapie können auch Brainspotting und Augenfokus zum Einsatz kommen. Ob eine Methode für Sie passend ist, klären wir gemeinsam."] },
  ]} />;
}
