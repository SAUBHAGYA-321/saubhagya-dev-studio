import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email(),
  message: z.string().min(1).max(4000),
  kind: z.enum(["contact", "meeting", "collaborate"]).default("contact"),
  context: z.string().max(500).optional(),
});

export const sendActivity = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const to = "as241204w@gmail.com";
    const apiKey = process.env["RESEND_API_KEY"];
    const subject = `Portfolio ${data.kind} — ${data.name}`;
    const html = `
      <h2>New portfolio ${data.kind} activity</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.context ? `<p><strong>Context:</strong> ${data.context}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, "<br/>")}</p>
    `;

    if (!apiKey) {
      console.log("[portfolio-activity] email not configured", { to, subject });
      return { ok: false as const, reason: "email_not_configured" };
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: [to],
        reply_to: data.email,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      console.error("[portfolio-activity] send failed", res.status, await res.text());
      return { ok: false as const, reason: "send_failed" };
    }

    return { ok: true as const };
  });
