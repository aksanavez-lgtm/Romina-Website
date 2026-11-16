import styles from "./competencies.module.css";

// Column order follows the supplied four-column reference.
const columns = [
  [
    ["Ängste", "M10 21v-4H7v-5H4l3-5a7 7 0 0 1 13 3c0 3-2 4-2 7v4M14 5l-3 6h4l-2 5", "sage"],
    ["Panikattacken", "M12 21S2 15 2 8a5 5 0 0 1 10-1A5 5 0 0 1 22 8c0 7-10 13-10 13M4 12h4l2-4 3 8 2-4h5", "sage"],
    ["Sinnfindung und Spiritualität", "M12 2v4m0 12v4M2 12h4m12 0h4M5 5l3 3m8 8 3 3M19 5l-3 3M8 16l-3 3M12 7l3 5-3 5-3-5z", "sage"],
    ["Zwänge", "M20 8a8 8 0 0 0-14-3L3 8m0-5v5h5M4 16a8 8 0 0 0 14 3l3-3m0 5v-5h-5", "peach"],
  ],
  [
    ["Paartherapie", "M9 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6M18 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6M2 21v-3a7 7 0 0 1 14 0v3m1-8a6 6 0 0 1 6 6v2", "peach"],
    ["Selbsterfahrung für das Propädeutikum", "M12 5v16M2 4c4-1 7 0 10 2 3-2 6-3 10-2v16c-4-1-7 0-10 1-3-1-6-2-10-1z", "peach"],
    ["Depressionen", "M6 15a5 5 0 0 1-1-10 7 7 0 0 1 13 0 5 5 0 0 1 0 10M7 18l-1 3m6-3-1 3m6-3-1 3", "sage"],
    ["Essstörungen", "M18.5 12a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M1.5 5.6v3a1.6 1.6 0 0 0 3.2 0v-3M3.1 5.6V18M1.5 8.5q.8.6 1.6 0 .8.6 1.6 0M21 5.5c-2.4.6-2.4 4.7 0 5.3 2.4-.6 2.4-4.7 0-5.3M21 10.8V18", "peach"],
  ],
  [
    ["Suicidale Gedanken", "M12 2 1 21h22zM12 8v6m0 3v1", "blue"],
    ["Bipolare Störungen", "M14 8.3A7 7 0 1 1 9.3 13.7M14 7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0M3.8 6.5q1.2-1.2 2.4 0m2.6 0q1.2-1.2 2.4 0M5.2 9.5c1.1 1.8 3.5 1.8 4.6 0M12.4 13.8q1.2 1 2.4 0m2.6 0q1.2 1 2.4 0M13.7 18.5c.9-2.2 3.7-2.2 4.6 0", "blue"],
    ["Schlafstörungen", "M12.7 2C6.6 1.8 2 6.9 2 11.8C2 17.5 6.5 21.6 12 21.6C16.4 21.6 19.8 19.1 21.2 15.4C18.2 17 14.9 16.7 12.2 14.8M12.7 2C8.8 5 7.7 10 11.1 13.5L9.5 15.7L11.4 17.1L10 19.3M19.5 2h2.3l-2.3 3h2.3M16.5 6.2h1.8l-1.8 2.2h1.8M13.7 9.4h1.7l-1.7 2h1.7", "peach"],
    ["Sterbebegleitung", "M8 10h8v12H8zM12 10V7m0 0c-5-2-2-5 0-7 2 3 4 6 0 7", "blue"],
  ],
  [
    ["Burnout", "M2 7h18v11H2zM20 10h3v5h-3M5 10h3v5H5z", "peach"],
    ["Posttraumatische Belastungsstörungen", "M10.5 9.5C9.7 9.6 9 9.9 8.6 10.2C7 9.8 5.3 10.8 4.9 12.5C3.2 13.1 2.3 15.1 2.8 16.8C2.9 17.1 3 17.3 3.2 17.5C3 19 4.1 20.3 5.5 20.2C6 20.9 6.7 21.2 7.4 21.1C8.5 22.2 10 22.4 11.4 22C12.7 22.6 14.1 22.4 15.2 21.9C17 22.5 18.6 21.4 18.8 20C20.8 19.6 21.6 17.1 20 14.6C20.5 12.3 18.7 9.7 16.2 10.1L14.5 9.5M14.5 8a2 .6 0 1 1-4 0 2 .6 0 0 1 4 0v2.4c-1.1.8-2.9.8-4 0V8M12.5 7.9C12.9 6.2 13.8 5 15.4 4M14 3.9l-.5-1.7 1.8.8.7-2 .5 2 1.8-.8-1 1.7 2 .5-2 .5.8 1.5-1.8-.5-.5 1.2M4.9 12.5c1.1-.2 2.2.1 3 .8 1.2-2.3 3.5-3 5.6-1.8 1.3.7 2 1.8 1.3 2.4M6.4 12.7c.2-.8.7-1.1 1.5-1.2M3.2 17.5c1.2.8 2.1-.2 1.6-1.4-.8-1.7 1.1-3 2.2-1.2 1.1-.7 2.8-1 3.7-.1 1.5 1.3.5 2.4-1 2.3-2.3-.2-2.6 2.3-.7 2.5.8.1 1.4-.2 1.8-.7M8.2 15.7c-3.4.1-2.8 5.9.7 6.4M5.9 15.5l.7 1M10.2 13.4c.8-1.2 2.1-.7 2.2.5.2 2 2.9 2.7 4.1 1.3 1.3-1.2.6-2.7-.3-3.3M10.4 13.5q-.2.7-.9 1M12.9 15.8c1.8 1.8.5 5.2-1.5 6.2M16 15c.8 1.2-1.8 2.5-.7 4.1.8 1 2.1 1.4 3.5.9M20 14.6c-1.2.9-1.7 1.8-1.6 3M15.6 20.6q-.6 1-1.4 1.4", "blue"],
    ["Trauerbewältigung", "M12 10s-6-3-6-6a3 3 0 0 1 6-1 3 3 0 0 1 6 1c0 3-6 6-6 6M2 20l5-5h5c3 0 3 3 0 3h-2m4-1 6-3c3-1 4 1 2 3l-8 5H7", "sage"],
    ["Lebenskrisen", "M12 2v20M4 5h15l3 3-3 3H4zM20 13H5l-3 3 3 3h15z", "blue"],
  ],
];

export function Competencies() {
  return <section className={styles.section} aria-labelledby="competencies-subtitle">
    <div className="container">
      <div className={styles.heading}>
        <p id="competencies-subtitle" className={styles.subtitle}>Themen und Anliegen, mit denen Sie zu mir kommen können:</p>
      </div>
      <div className={styles.grid}>
        {columns.map((column, index) => <ul key={index} className={styles.column}>
          {column.map(([label, path, color]) => <li key={label} className={styles.item}>
            <span className={`${styles.icon} ${styles[color]}`} aria-hidden="true"><svg style={label === "Posttraumatische Belastungsstörungen" || label === "Essstörungen" ? { width: 36, height: 36 } : undefined} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={label === "Posttraumatische Belastungsstörungen" ? 0.54625 : label === "Essstörungen" ? 0.85 : 1} strokeLinecap="round" strokeLinejoin="round"><path d={path} /></svg></span>
            <span>{label}</span>
          </li>)}
        </ul>)}
      </div>
    </div>
    <svg className={styles.waves} viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true"><path fill="var(--sage-light)" d="M0 50C350 130 700-30 1440 50V100H0Z"/><path fill="var(--rose)" opacity=".35" d="M0 85C500 10 950 125 1440 65V100H0Z"/></svg>
  </section>;
}
