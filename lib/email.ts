import { Resend } from "resend";

const TO = "darren.emedo@gmail.com";
const FROM = "contact@darrenemedo.com";

let resend: Resend | null = null;

export function hasResend(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

function getClient(): Resend {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

export async function sendContactEmail(input: {
  name: string;
  email: string;
  message: string;
}): Promise<{ demo: boolean }> {
  if (!hasResend()) {
    console.log("[demo mode] contact message (not sent):", input);
    return { demo: true };
  }

  const { error } = await getClient().emails.send({
    from: FROM,
    to: TO,
    replyTo: input.email,
    subject: `New message from ${input.name} via darrenemedo.com`,
    text: `Name: ${input.name}\nEmail: ${input.email}\n\n${input.message}`,
    html: `<p><strong>Name:</strong> ${input.name}</p><p><strong>Email:</strong> <a href="mailto:${input.email}">${input.email}</a></p><hr><p>${input.message.replace(/\n/g, "<br>")}</p>`,
  });

  if (error) throw new Error(`Resend failed: ${error.message}`);
  return { demo: false };
}
