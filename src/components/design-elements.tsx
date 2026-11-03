import type { ReactNode } from "react";

export function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export function TextLink({ href, children, button = false }: { href: string; children: ReactNode; button?: boolean }) {
  return <a className={button ? "button" : "text-link"} href={href}>{children}<Arrow /></a>;
}
