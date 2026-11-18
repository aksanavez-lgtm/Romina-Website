"use client";

import { useEffect, useRef, useState } from "react";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { therapyNavigation } from "./therapy-navigation";
import styles from "./site-header.module.css";

const signature = localFont({
  src: "./fonts/allura-regular.ttf",
  weight: "400",
  display: "swap",
});

const navigation = [
  ["Home", "#start"],
  ["Über mich", "#ueber-mich"],
  ["Themen", "#themen"],
  ["Therapie", "#therapie"],
  ["Kontakt", "/kontakt"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const contactPage = pathname !== "/";
  const header = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(pathname === "/kontakt" ? "/kontakt" : "#start");
  const therapyMenu = useRef<HTMLDetailsElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const syncHash = () => setActive(pathname === "/" ? window.location.hash || "#start" : pathname);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => {
    const element = header.current;
    if (!element) return;
    const updateHeight = () => document.documentElement.style.setProperty("--site-header-height", `${element.getBoundingClientRect().height}px`);
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  function navigate(href: string) {
    setOpen(false);
    if (therapyMenu.current) therapyMenu.current.open = false;
    setActive(href);
    if (href.startsWith("#")) document.getElementById(href.slice(1))?.focus({ preventScroll: true });
  }

  return (
    <header ref={header} className={styles.header} onKeyDown={(event) => {
      if (event.key === "Escape" && therapyMenu.current?.open) {
        therapyMenu.current.open = false;
        therapyMenu.current.querySelector("summary")?.focus();
        event.stopPropagation();
        return;
      }
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }}>
      <a className="skip-link" href="#inhalt">Zum Inhalt springen</a>
      <div className={`container ${styles.inner}`}>
        <a className={styles.brand} href={contactPage ? "/#start" : "#start"} aria-label="Romina Lauzensky – Startseite" onClick={() => navigate("#start")}>
          <span className={styles.names} aria-hidden="true">
            <span className={styles.givenName}>ROMINA</span>
            <span className={`${styles.signature} ${signature.className}`}>Lauzensky</span>
          </span>
          <span className={styles.descriptor} aria-hidden="true">Psychotherapie</span>
        </a>
        <div className={styles.navigationRow}>
          <button ref={toggle} className={styles.menuToggle} type="button" aria-label={open ? "Menü schließen" : "Menü öffnen"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
            <span className={styles.menuLabel}>{open ? "Schließen" : "Menü"}</span>
            <span className={`${styles.menuIcon} ${open ? styles.menuIconOpen : ""}`} aria-hidden="true"><i /><i /></span>
          </button>
          <nav id="main-navigation" aria-label="Hauptnavigation" className={`${styles.navigation} ${open ? styles.navigationOpen : ""}`}>
            {navigation.map(([label, href]) => (
              label === "Therapie" ? (
                <details key={href} ref={therapyMenu} className={styles.therapyMenu} onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) event.currentTarget.open = false;
                }}>
                  <summary className={styles.therapyTrigger} data-active={pathname.startsWith("/therapie/") || active === "#therapie"}>Therapie</summary>
                  <ul className={styles.therapyDropdown}>
                    {therapyNavigation.map((therapy) => (
                      <li key={therapy.slug}><a href={`/therapie/${therapy.slug}`} onMouseDown={(event) => {
                        if (event.button !== 0) return;
                        // Keep Safari's blur event from closing the dropdown before click.
                        event.preventDefault();
                        event.currentTarget.focus({ preventScroll: true });
                      }} aria-current={pathname === `/therapie/${therapy.slug}` ? "page" : undefined} onClick={() => navigate(`/therapie/${therapy.slug}`)}>{therapy.title}</a></li>
                    ))}
                  </ul>
                </details>
              ) : <a key={href} href={contactPage && href.startsWith("#") ? `/${href}` : href} aria-current={active === href ? "location" : undefined} onClick={() => navigate(href)}>{label}</a>
            ))}
          </nav>
          <a className={styles.contactButton} href="/kontakt" onClick={() => navigate("/kontakt")}>Kontakt aufnehmen</a>
        </div>
      </div>
    </header>
  );
}
