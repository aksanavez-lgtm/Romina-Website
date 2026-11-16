"use client";

import { useEffect, useState, type FormEvent } from "react";
import styles from "./contact.module.css";

export function ContactForm() {
  const [notice, setNotice] = useState<"" | "success" | "error">("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (notice !== "success") return;
    const timeout = setTimeout(() => setNotice(""), 7000);
    return () => clearTimeout(timeout);
  }, [notice]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    setNotice("");
    setSending(true);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: fields.get("firstName"),
          lastName: fields.get("lastName"),
          email: fields.get("email"),
          subject: fields.get("subject"),
          message: fields.get("message"),
          privacy: fields.get("privacy") === "on",
          website: fields.get("website"),
        }),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Contact delivery failed");
      form.reset();
      setNotice("success");
    } catch {
      setNotice("error");
    } finally {
      clearTimeout(timeout);
      setSending(false);
    }
  }
  return <form className={styles.form} action="/api/contact" method="post" onSubmit={submit} onInput={() => setNotice("")} aria-labelledby="message-title" aria-busy={sending}>
    <h2 id="message-title">Nachricht senden</h2>
    <p className={styles.formNote}>Bitte senden Sie keine sensiblen Gesundheitsinformationen über dieses Formular.</p>
    <div className={styles.names}>
      <label><span className={styles.srOnly}>Vorname (Pflichtfeld)</span><input name="firstName" autoComplete="given-name" placeholder="Vorname *" maxLength={100} required /></label>
      <label><span className={styles.srOnly}>Nachname (Pflichtfeld)</span><input name="lastName" autoComplete="family-name" placeholder="Nachname *" maxLength={100} required /></label>
    </div>
    <label><span className={styles.srOnly}>E-Mail-Adresse (Pflichtfeld)</span><input name="email" type="email" autoComplete="email" placeholder="E-Mail-Adresse *" maxLength={254} required /></label>
    <label><span className={styles.srOnly}>Betreff</span><input name="subject" placeholder="Betreff" maxLength={120} /></label>
    <label><span className={styles.srOnly}>Ihre Nachricht (Pflichtfeld)</span><textarea name="message" placeholder="Ihre Nachricht *" rows={5} maxLength={5000} required /></label>
    <input className={styles.honeypot} type="text" name="website" autoComplete="off" tabIndex={-1} aria-hidden="true" />
    <label className={styles.consent}><input name="privacy" type="checkbox" required /><span>Ich habe die <a href="/datenschutz">Datenschutzerklärung</a> gelesen und stimme zu.</span></label>
    <button type="submit" disabled={sending}>{sending ? "Wird gesendet…" : "Nachricht senden"}</button>
    {notice && <div className={`${styles.notice} ${notice === "error" ? styles.noticeError : ""}`} role={notice === "error" ? "alert" : "status"}>
      <p>{notice === "success" ? "Vielen Dank. Ihre Nachricht wurde zum Versand angenommen." : <>Der Versand ist im Moment nicht möglich. Bitte rufen Sie unter <a href="tel:+4368184087022">0681 / 840 870 22</a> an oder schreiben Sie direkt an <a href="mailto:praxis@psychotherapie-lauzensky.at">praxis@psychotherapie-lauzensky.at</a>.</>}</p>
      <button className={styles.noticeClose} type="button" onClick={() => setNotice("")} aria-label="Meldung schließen"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" /></svg></button>
    </div>}
  </form>;
}
