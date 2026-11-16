import { SiteFooter } from "@/components/site-footer";
import { ContactSection } from "@/components/contact-section";
import { TherapyValues } from "@/components/therapy-values";
import { FadeIn } from "@/components/fade-in";
import Image from "next/image";
import { Arrow, TextLink } from "@/components/design-elements";
import landscapePhoto from "../../public/images/hero-landschaft.png";
import therapyThread from "../../public/images/therapie-faden.png";
import heroStyles from "./hero.module.css";
import portraitPhoto from "../../Romina_Foto-Uber-mich.png";

const topics = [
  { number: "01", label: "TRAUMA", title: <>Trauma & psychische<br />Belastungen</>, className: "topic-rose", items: ["Ängste & Panikattacken", "Depressionen & bipolare Störungen", "Posttraumatische Belastungsstörungen", "Zwänge, Ess- & Schlafstörungen"] },
  { number: "02", label: "BEZIEHUNG", title: <>Beziehung<br />& Familie</>, className: "topic-sage", items: ["Paartherapie", "Familientherapie"] },
  { number: "03", label: "KRISEN", title: <>Krisen<br />& Verlust</>, className: "topic-blue", items: ["Lebenskrisen & Burnout", "Trauerbewältigung", "Sterbebegleitung"], note: "Auch suizidale Gedanken können in der Therapie angesprochen werden. Die Praxis ist kein Krisendienst." },
  { number: "04", label: "ENTWICKLUNG", title: <>Entwicklung<br />& Sinn</>, className: "topic-sand", items: ["Sinnfindung & Spiritualität", "Selbsterfahrung für das Propädeutikum"] },
];

const therapies = [
  { name: "Einzeltherapie", text: "Raum für dich und das, was dich persönlich beschäftigt." },
  { name: "Paartherapie", text: "Raum für Beziehung und die Fragen, die euch als Paar bewegen." },
  { name: "Familientherapie", text: "Raum für unterschiedliche Perspektiven und das Miteinander." },
  { name: "Traumapsychotherapie", text: "Raum, um belastenden Erfahrungen behutsam zu begegnen." },
  { name: "Kunsttherapie", text: "Psychotherapie mit künstlerischen und erlebnisorientierten Elementen." },
  { name: "Tiergestützte Psychotherapie", text: "Tiergestützte Psychotherapie mit Alpakas." },
];

export default function Home() {
  return (
    <>
      <main id="inhalt" tabIndex={-1}>
        <section className={heroStyles.hero} id="start" tabIndex={-1} aria-labelledby="hero-title">
          <Image src={landscapePhoto} alt="" fill preload placeholder="blur" sizes="100vw" className={heroStyles.background} />
          <div className={heroStyles.content}>
            <h1 id="hero-title"><span>Ein sicherer Raum</span><br /><span>für das, was</span><br /><em>in dir lebt.</em></h1>
            <p className={heroStyles.description}>
              <span>Psychotherapie für Menschen in</span>{" "}
              <span>herausfordernden Lebensphasen – mit</span>{" "}
              <span>Fachwissen, Empathie und echter</span>{" "}
              <span>menschlicher Begegnung.</span>
            </p>
            <a className={heroStyles.button} href="/kontakt">Kontakt aufnehmen</a>
          </div>
        </section>

        <section className="intro section" id="raum" aria-labelledby="intro-title">
          <div className="container intro-grid">
            <div className="eyebrow"><FadeIn rise>Ankommen. Wahrnehmen. Weitergehen.</FadeIn></div>
            <FadeIn><h2 id="intro-title">Nicht alles muss<br />so bleiben, <em>wie es ist.</em></h2><p className="intro-text">Psychotherapie kann ein Raum sein, um innezuhalten und neue Perspektiven zu erkunden. Gemeinsam richten wir den Blick auf Entwicklung, Lebensfreude und innere Stabilität – in deinem eigenen Tempo.</p></FadeIn>
          </div>
        </section>

        <section className="about section" id="ueber-mich" tabIndex={-1} aria-labelledby="about-title">
          <div className="container about-grid">
            <figure className="portrait">
              <div className="portrait-image"><Image src={portraitPhoto} unoptimized alt="Portrait von Mag. Romina Lauzensky." fill placeholder="blur" sizes="(max-width: 760px) 90vw, (max-width: 1600px) 42vw, 600px" className="portrait-photo" /></div>
              <figcaption><span>Mag. Romina Lauzensky</span><span>Psychotherapie · Wien & Mödling</span></figcaption>
            </figure>
            <div className="about-copy">
              <p className="eyebrow">Der Mensch hinter der Begegnung</p>
              <h2 id="about-title">Therapie beginnt<br />mit <em style={{ color: "#256e5d" }}>Begegnung.</em></h2>
              <p className="body-large">Was bewegt einen Menschen? Was gibt seinem Leben Sinn? Und was verbindet uns miteinander?</p>
              <p>Diese Fragen begleiten mich von meinem Studium der Kultur- und Sozialanthropologie bis in meine psychotherapeutische Arbeit. In meinen Praxen in Wien und Mödling stehen Vertrauen, Offenheit und Verständnis im Mittelpunkt.</p>
              <details className="about-read-more">
                <summary className="text-link"><Image className="read-more-label read-more-image" src="/weiter-lesen.png" alt="Weiter lesen" width={2172} height={724} unoptimized /><span className="read-less-label">weniger lesen<Arrow /></span></summary>
                <div>
                  <p>Schon lange beschäftigt mich die Frage, was Menschen in ihrem Leben Orientierung gibt: Welchen Sinn sie darin finden, was sie mit anderen verbindet und wie sich die Vielfalt menschlicher Lebensentwürfe gestaltet.</p>
                  <p>Während meines Studiums der Kultur- und Sozialanthropologie suchte ich Antworten auf diese Fragen in unterschiedlichen Kulturen und Lebenswelten. Heute setze ich dieses Interesse im Rahmen der Psychotherapie fort. Dabei verbinde ich meine Neugier auf individuelle Lebensgeschichten mit einem fundierten therapeutischen Methodenrepertoire, um Menschen auf ihrem persönlichen Weg zu begleiten.</p>
                </div>
              </details>
              <details className="about-details">
                <summary>Mehr über mich <span aria-hidden="true">+</span></summary>
                <div className="about-background">
                  <section aria-labelledby="ausbildungen-title">
                    <h3 id="ausbildungen-title">Ausbildungen</h3>
                    <ul>
                      <li>Traumapsychotherapie Lehrgang, VÖPP Wien</li>
                      <li>Brainspotting, Brainspotting Austria</li>
                      <li>Pferdegestützte Psychotherapie, VÖPP Wien</li>
                      <li>Lebens-, Trauer-, und Sterbebegleitung, Kardinal Könighaus</li>
                      <li>Fachspezifikum für Psychotherapie VRP – Verein Rogerianische Psychotherapie</li>
                      <li>Studium für Kultur- und Sozialanthropologie, Schwerpunkt: Interkulturelle Kommunikation, Medizinische Anthopologie</li>
                      <li>Systemische Beratung und Coaching, The Greenfield Wien</li>
                      <li>Zert. NLP Practitioner, Mindtraining Institut für Persönlichkeitsentwicklung</li>
                      <li>Systemische Familien- und Organisationsaufstellungen Wifi Wien</li>
                    </ul>
                  </section>
                  <section aria-labelledby="arbeitserfahrungen-title">
                    <h3 id="arbeitserfahrungen-title">Arbeitserfahrungen</h3>
                    <ul>
                      <li>Selbstständige Tätigkeit in eigener Praxis seit 2017</li>
                      <li>Franziskusspital Landstraße, Palliativstation<br />Verein zb – zentrum für Beratung, Training, Entwicklung in Korneuburg</li>
                      <li>Promente Rehaklinik Sonnenpark, Psychotherapeutische Rehabilitation von Menschen mit psychischen Erkrankungen</li>
                      <li>Selbstständige Psychotherapeutin in 1060 Wien und Mödling</li>
                      <li>Humanisierte Arbeitsstätte, Berufsintegrationsbetreuerin für Menschen mit Beeinträchtigungen</li>
                    </ul>
                  </section>
                </div>
              </details>
            </div>
          </div>
        </section>

        <TherapyValues
          title="Was die Begleitung trägt."
          values={[
            {
              title: "Vertrauen & Wertschätzung",
              paragraphs: [
                "In meinen Praxen in Wien und Mödling stehen Vertrauen, Offenheit und Verständnis im Mittelpunkt.",
                "Einfühlungsvermögen und Wertschätzung bilden die Grundlage meiner personzentrierten psychotherapeutischen Arbeit.",
              ],
              link: { label: "Mehr über mich", href: "#ueber-mich" },
            },
            {
              title: "Gemeinsame Begegnung",
              paragraphs: [
                "Im Mittelpunkt stehen die therapeutische Beziehung und das gemeinsame Erleben.",
                "Ob in der Einzel-, Paar- oder Familientherapie: Hier ist Raum für persönliche Anliegen und unterschiedliche Perspektiven.",
              ],
              link: { label: "Therapie kennenlernen", href: "#therapie" },
            },
            {
              title: "Entwicklung & Sinn",
              paragraphs: [
                "Fragen nach Sinn und Spiritualität sowie Selbsterfahrung gehören zu meinen Themenschwerpunkten.",
                "Künstlerische und erlebnisorientierte Elemente ergänzen mein psychotherapeutisches Angebot.",
              ],
              link: { label: "Kontakt aufnehmen", href: "/kontakt" },
            },
          ]}
        />



        <section className="therapy section container" id="therapie" tabIndex={-1} aria-labelledby="therapy-title">
          <div className="therapy-intro">
            <p className="eyebrow">Wege der Begleitung</p><h2 id="therapy-title">So individuell<br />wie <em>dein Leben.</em></h2>
            <p>Allein, zu zweit oder als Familie.<br />Hier ist Platz für deine Perspektive.</p>
            <div className="therapy-approach">
              <div className="approach-art"><Image src={therapyThread} alt="" sizes="(max-width: 760px) 100vw, 435px" className="approach-mark" /></div>
              <h3 className="approach-title">Personzentrierte Psychotherapie</h3>
              <p>Bei der Personzentrierten Psychotherapie stehen Sie als Mensch im Mittelpunkt. Nicht nur Ihre Probleme oder eine Diagnose, sondern Ihre persönlichen Erfahrungen, Gefühle und Bedürfnisse bekommen Raum.</p>
              <details className="approach-details">
                <summary>Weiter lesen</summary>
                <p>Die therapeutische Beziehung basiert auf Empathie, Wertschätzung und Echtheit. In einer vertrauensvollen Atmosphäre können Sie sich selbst besser verstehen, eigene Bedürfnisse wahrnehmen und neue Perspektiven entwickeln.</p>
                <p>Die Personzentrierte Psychotherapie geht davon aus, dass jeder Mensch die Fähigkeit zur persönlichen Entwicklung in sich trägt. Therapie kann dabei einen geschützten Raum bieten, um Veränderungen im eigenen Tempo zu ermöglichen.</p>
              </details>
            </div>
          </div>
          <div className="therapy-list">
            {therapies.map((therapy, index) => index === 0 ? (
              <a className="therapy-row" key={therapy.name} href="/therapie/einzeltherapie"><span className="eyebrow">0{index + 1}</span><div><h3>{therapy.name}</h3><p>{therapy.text}</p></div></a>
            ) : (
              <article className="therapy-row" key={therapy.name}><span className="eyebrow">0{index + 1}</span><div><h3>{therapy.name}</h3><p>{therapy.text}</p></div></article>
            ))}
            <div className="therapy-extra"><TextLink href="#kontakt">Zum Angebot anfragen</TextLink></div>
          </div>
        </section>

        <section className="topics" id="themen" tabIndex={-1} aria-labelledby="topics-title">
          <div className="topics-heading"><div className="container intro-grid"><div className="eyebrow"><FadeIn rise>Was dich bewegt</FadeIn></div><FadeIn><h2 id="topics-title">Das Leben ist vielschichtig.<br /><em>Du darfst es auch sein.</em></h2></FadeIn></div></div>
          <div className="topics-grid container">
            {topics.map((topic) => (
              <article className={`topic ${topic.className}`} key={topic.number}>
                <span className="eyebrow topic-number">{topic.number} / {topic.label}</span>
                <h3>{topic.title}</h3>
                <ul>{topic.items.map(item => <li key={item}>{item}</li>)}</ul>
                {topic.note && <p className="topic-note">{topic.note}</p>}
              </article>
            ))}
          </div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
