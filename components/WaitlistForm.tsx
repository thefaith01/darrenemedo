"use client";

import { useState } from "react";
import { ui } from "@/components/ui";

type Status = "idle" | "sending" | "sent" | "error";

const RE_ENQUIRY_MONTHS = 3;

export function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [role, setRole] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const roleValue = data.get("role");
    const roleOther = data.get("roleOther");
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      role: roleValue === "Other" && roleOther ? `Other: ${roleOther}` : roleValue,
      address: data.get("address"),
      units: data.get("units"),
      notes: data.get("notes"),
      bestInClass: data.get("bestInClass") ? "Yes" : "No",
    };

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      form.reset();
      setRole("");
      setStatus("sent");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="py-6 text-center">
        <p className="font-display text-lg font-bold text-ink">
          You&apos;re on the list
        </p>
        <p className="mt-1 text-sm text-muted">
          Applications are reviewed personally, and spots are rare. Please allow at
          least {RE_ENQUIRY_MONTHS} months before reaching out again.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="wl-name" className={ui.label}>
          Name
        </label>
        <input
          id="wl-name"
          name="name"
          required
          maxLength={100}
          className={ui.input}
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="wl-email" className={ui.label}>
          Email
        </label>
        <input
          id="wl-email"
          name="email"
          type="email"
          required
          maxLength={254}
          className={ui.input}
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="wl-phone" className={ui.label}>
          Phone
        </label>
        <input
          id="wl-phone"
          name="phone"
          type="tel"
          maxLength={30}
          className={ui.input}
          placeholder="Optional"
        />
      </div>
      <div>
        <label htmlFor="wl-role" className={ui.label}>
          Relationship to the building
        </label>
        <select
          id="wl-role"
          name="role"
          required
          className={ui.input}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select one</option>
          <option value="Leaseholder">Leaseholder</option>
          <option value="Resident Director">Resident Director</option>
          <option value="Freeholder">Freeholder</option>
          <option value="Other">Other</option>
        </select>
      </div>
      {role === "Other" && (
        <div>
          <label htmlFor="wl-role-other" className={ui.label}>
            Please specify
          </label>
          <input
            id="wl-role-other"
            name="roleOther"
            required
            maxLength={100}
            className={ui.input}
            placeholder="Your relationship to the building"
          />
        </div>
      )}
      <div>
        <label htmlFor="wl-address" className={ui.label}>
          Address of the building
        </label>
        <input
          id="wl-address"
          name="address"
          required
          maxLength={200}
          className={ui.input}
          placeholder="Building address"
        />
      </div>
      <div>
        <label htmlFor="wl-units" className={ui.label}>
          Number of units
        </label>
        <input
          id="wl-units"
          name="units"
          type="number"
          min={1}
          required
          className={ui.input}
          placeholder="e.g. 24"
        />
      </div>
      <div>
        <label htmlFor="wl-notes" className={ui.label}>
          Other useful information
        </label>
        <textarea
          id="wl-notes"
          name="notes"
          maxLength={2000}
          rows={4}
          className={ui.input}
          placeholder="Anything else worth knowing"
        />
      </div>
      <div className="flex items-start gap-2.5">
        <input
          id="wl-best-in-class"
          name="bestInClass"
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded-sm border-line text-accent focus:ring-2 focus:ring-gold/40"
        />
        <label htmlFor="wl-best-in-class" className="text-[14px] leading-snug text-muted">
          I&apos;m looking for best-in-class service, not the cheapest option
        </label>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button type="submit" disabled={status === "sending"} className={ui.btnPrimary}>
        {status === "sending" ? "Submitting..." : "Join the waiting list"}
      </button>
    </form>
  );
}
