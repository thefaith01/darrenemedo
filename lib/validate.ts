/** Small input-validation helpers for API routes. */

export function isEmail(v: unknown): v is string {
  return (
    typeof v === "string" &&
    v.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
  );
}

/** Trims a string and enforces a max length. Returns null if empty or invalid. */
export function boundedString(v: unknown, max: number): string | null {
  if (typeof v !== "string") return null;
  const t = v.trim();
  if (!t || t.length > max) return null;
  return t;
}
