"use client";

import { useState, type FormEvent } from "react";
import styles from "./contact.module.css";

export function ContactForm() {
  const [notice, setNotice] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("Ihre Nachricht wurde nicht versendet. Der Formularversand ist noch nicht eingerichtet. Bitte kontaktieren Sie die Praxis telefonisch oder per E-Mail.");
  }
  return <form className={styles.form} onSubmit={submit} aria-labelledby="message-title">
    <h2 id="message-title">Nachricht senden</h2>
    <div className={styles.names}>
      <label><span className={styles.srOnly}>Vorname (Pflichtfeld)</span><input name="firstName" autoComplete="given-name" placeholder="Vorname *" required /></label>
      <label><span className={styles.srOnly}>Nachname (Pflichtfeld)</span><input name="lastName" autoComplete="family-name" placeholder="Nachname *" required /></label>
    </div>
    <label><span className={styles.srOnly}>E-Mail-Adresse (Pflichtfeld)</span><input name="email" type="email" autoComplete="email" placeholder="E-Mail-Adresse *" required /></label>
    <label><span className={styles.srOnly}>Betreff</span><input name="subject" placeholder="Betreff" /></label>
    <label><span className={styles.srOnly}>Ihre Nachricht (Pflichtfeld)</span><textarea name="message" placeholder="Ihre Nachricht *" rows={5} required /></label>
    <label className={styles.consent}><input name="privacy" type="checkbox" required /><span>Ich habe die <a href="/datenschutz">Datenschutzerklärung</a> gelesen und stimme zu.</span></label>
    <button type="submit">Nachricht senden</button>
    {notice && <p className={styles.notice} role="status">{notice}</p>}
  </form>;
}
