import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const runtime = "edge";
export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(700px 460px at 85% 0%, rgba(162,62,36,0.12), transparent 62%), radial-gradient(600px 500px at 5% 100%, rgba(183,150,62,0.16), transparent 65%), linear-gradient(180deg, #F6F0E2, #F3ECDD 60%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 88,
            height: 88,
            borderRadius: 999,
            border: "3px solid #B7963E",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 34,
            fontWeight: 700,
            color: "#A23E24",
            marginBottom: 32,
            background: "#FBF6EA",
          }}
        >
          DE
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "0.02em",
            color: "#2A2016",
            textAlign: "center",
          }}
        >
          {site.name.toUpperCase()}
        </div>
        <div
          style={{
            marginTop: 10,
            width: 90,
            height: 4,
            background: "#B7963E",
          }}
        />
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            color: "#5A503E",
            textAlign: "center",
            maxWidth: 900,
            fontStyle: "italic",
          }}
        >
          {site.headline}
        </div>
      </div>
    ),
    { ...size }
  );
}
