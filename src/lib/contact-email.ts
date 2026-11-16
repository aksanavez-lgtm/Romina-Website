export const practiceEmail = "praxis@psychotherapie-lauzensky.at";

export type ContactMessage = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

function singleLine(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string" || value.length > maxLength) return null;
  return value.replace(/[\u0000-\u001f\u007f]+/g, " ").trim();
}

export function validateContactMessage(value: unknown): ContactMessage | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const fields = value as Record<string, unknown>;
  const firstName = singleLine(fields.firstName, 100);
  const lastName = singleLine(fields.lastName, 100);
  const email = singleLine(fields.email, 254);
  const subject = singleLine(fields.subject, 120);
  const message = typeof fields.message === "string" && fields.message.length <= 5000
    ? fields.message.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").trim()
    : null;

  if (!firstName || !lastName || !email || !message || subject === null || fields.privacy !== true) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  return { firstName, lastName, email, subject, message };
}

export async function sendContactEmail(message: ContactMessage, apiKey: string, fetcher: typeof fetch = fetch): Promise<boolean> {
  const response = await fetcher("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { "api-key": apiKey, "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify({
      sender: { name: "Praxis Mag. Romina Lauzensky", email: practiceEmail },
      to: [{ name: "Mag. Romina Lauzensky", email: practiceEmail }],
      replyTo: { name: `${message.firstName} ${message.lastName}`, email: message.email },
      subject: message.subject ? `Kontaktanfrage: ${message.subject}` : "Kontaktanfrage über die Website",
      textContent: `Neue Kontaktanfrage über die Website\n\nName: ${message.firstName} ${message.lastName}\nE-Mail: ${message.email}\nBetreff: ${message.subject || "–"}\n\nNachricht:\n${message.message}`,
    }),
    signal: AbortSignal.timeout(10000),
    cache: "no-store",
  });
  return response.status === 201;
}
