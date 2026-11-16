import { sendContactEmail, validateContactMessage } from "@/lib/contact-email";

export const runtime = "nodejs";

const responseHeaders = { "Cache-Control": "no-store" };

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  let originHost: string | undefined;
  try {
    originHost = origin ? new URL(origin).host : undefined;
  } catch {
    return Response.json({ ok: false }, { status: 403, headers: responseHeaders });
  }
  if (!originHost || originHost !== request.headers.get("host")) {
    return Response.json({ ok: false }, { status: 403, headers: responseHeaders });
  }
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return Response.json({ ok: false }, { status: 415, headers: responseHeaders });
  }
  const contentLength = Number(request.headers.get("content-length"));
  if (contentLength > 12000) {
    return Response.json({ ok: false }, { status: 413, headers: responseHeaders });
  }

  let body: unknown;
  try {
    const raw = await request.text();
    if (raw.length > 12000) return Response.json({ ok: false }, { status: 413, headers: responseHeaders });
    body = JSON.parse(raw);
  } catch {
    return Response.json({ ok: false }, { status: 400, headers: responseHeaders });
  }

  // Quietly discard submissions from simple bots that fill hidden fields.
  if (body && typeof body === "object" && "website" in body && typeof body.website === "string" && body.website.trim()) {
    return Response.json({ ok: true }, { headers: responseHeaders });
  }

  const message = validateContactMessage(body);
  if (!message) return Response.json({ ok: false }, { status: 422, headers: responseHeaders });

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return Response.json({ ok: false }, { status: 503, headers: responseHeaders });

  try {
    const accepted = await sendContactEmail(message, apiKey);
    return Response.json({ ok: accepted }, { status: accepted ? 200 : 502, headers: responseHeaders });
  } catch {
    return Response.json({ ok: false }, { status: 502, headers: responseHeaders });
  }
}
