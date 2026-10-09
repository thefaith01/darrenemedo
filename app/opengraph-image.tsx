import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const runtime = "edge";
export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Matches the site: white surface, near-black ink, one gold-dark accent.
   No gradients, glows or italics. See DESIGN.md. */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFFFFF",
          padding: "88px 96px",
          borderBottom: "12px solid #191919",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 76,
            height: 76,
            borderRadius: 999,
            border: "2px solid #8A6A1F",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
            fontWeight: 600,
            color: "#8A6A1F",
          }}
        >
          DE
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: "#191919",
              lineHeight: 1.05,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 32,
              color: "#5E5E5E",
              maxWidth: 900,
              lineHeight: 1.35,
            }}
          >
            {site.headline}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
