"use client";

export function OpenAboutLink({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <a className={className} href="#mehr-ueber-mich" onClick={() => {
      const details = document.getElementById("mehr-ueber-mich");
      if (details instanceof HTMLDetailsElement) details.open = true;
    }}>
      {children}
    </a>
  );
}
