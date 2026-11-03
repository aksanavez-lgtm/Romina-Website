import styles from "./therapy-values.module.css";

type TherapyValue = {
  title: string;
  paragraphs: string[];
  link: { label: string; href: string };
};

export function TherapyValues({ title, values }: { title: string; values: TherapyValue[] }) {
  return (
    <section className={styles.section} id="begleitung" aria-labelledby="values-title">
      <div className="container">
        <h2 id="values-title" className={styles.heading}>{title}</h2>
        <div className={styles.grid}>
          {values.map((value, index) => (
            <article className={styles.panel} key={value.title}>
              <h3>{value.title}</h3>
              <svg className={styles.symbol} viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true" focusable="false">
                <circle cx="40" cy="40" r="35" />
                {index === 0 ? <path d="M40 56C13 39 27 24 40 36C53 24 67 39 40 56ZM40 16V23M17 31L24 34M63 31L56 34M19 53L25 50M61 53L55 50" /> : index === 1 ? <><circle cx="26" cy="29" r="7" /><circle cx="54" cy="29" r="7" /><path d="M15 57V51C15 36 30 36 34 47L40 53L46 47C50 36 65 36 65 51V57M31 60L40 53L49 60" /></> : <path d="M40 62V36M40 48C27 48 22 39 23 30C35 30 40 38 40 48ZM40 40C53 40 58 31 57 22C45 22 40 30 40 40ZM29 62H51" />}
              </svg>
              <div className={styles.copy}>{value.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
              <a className={styles.button} href={value.link.href}>{value.link.label}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
