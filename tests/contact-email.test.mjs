import assert from "node:assert/strict";
import test from "node:test";
import { practiceEmail, sendContactEmail, validateContactMessage } from "../src/lib/contact-email.ts";

const validForm = {
  firstName: "Anna",
  lastName: "Beispiel",
  email: "anna@example.com",
  subject: "Erstgespräch",
  message: "Ich möchte einen Termin vereinbaren.",
  privacy: true,
};

test("validates the required contact fields and strips header controls", () => {
  assert.equal(validateContactMessage({ ...validForm, privacy: false }), null);
  assert.equal(validateContactMessage({ ...validForm, email: "invalid" }), null);
  assert.equal(validateContactMessage({ ...validForm, message: "x".repeat(5001) }), null);
  assert.equal(validateContactMessage({ ...validForm, subject: "Termin\r\nBcc: stranger@example.com" })?.subject, "Termin Bcc: stranger@example.com");
});

test("sends plain text to the practice and uses the visitor as reply-to", async () => {
  const message = validateContactMessage(validForm);
  assert.ok(message);
  let request;
  const accepted = await sendContactEmail(message, "test-api-key", async (url, options) => {
    request = { url, options };
    return new Response(JSON.stringify({ messageId: "test-id" }), { status: 201 });
  });

  assert.equal(accepted, true);
  assert.equal(request.url, "https://api.brevo.com/v3/smtp/email");
  assert.equal(request.options.headers["api-key"], "test-api-key");
  const body = JSON.parse(request.options.body);
  assert.equal(body.sender.email, practiceEmail);
  assert.equal(body.to[0].email, practiceEmail);
  assert.equal(body.replyTo.email, validForm.email);
  assert.match(body.textContent, /Ich möchte einen Termin vereinbaren/);
  assert.equal(body.htmlContent, undefined);
});

test("a provider rejection is reported as failure", async () => {
  const message = validateContactMessage(validForm);
  assert.ok(message);
  assert.equal(await sendContactEmail(message, "test-api-key", async () => new Response(null, { status: 429 })), false);
});
