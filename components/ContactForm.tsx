"use client";

import { useState } from "react";
import { ui } from "@/components/ui";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("https://formspree.io/f/mbjqozko", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        setError("Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="py-6 text-center">
        <p className="font-display text-lg font-bold text-ink">Message sent</p>
        <p className="mt-1 text-sm text-muted">Thanks for getting in touch — I&apos;ll reply soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className={ui.label}>
          Name
        </label>
        <input id="name" name="name" required maxLength={100} className={ui.input} placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email" className={ui.label}>
          Email
        </label>
        <input id="email" name="email" type="email" required maxLength={254} className={ui.input} placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="message" className={ui.label}>
          Message
        </label>
        <textarea id="message" name="message" required maxLength={4000} rows={5} className={ui.input} placeholder="What's on your mind?" />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button type="submit" disabled={status === "sending"} className={ui.btnPrimary}>
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
