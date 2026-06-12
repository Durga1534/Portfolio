import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Durga Prasad — Full Stack Engineer";
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
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f8f6f2",
          color: "#18181b",
          fontFamily: "Georgia, serif",
        }}
      >
        <p style={{ fontSize: 14, letterSpacing: "0.15em", textTransform: "uppercase", color: "#71717a", fontFamily: "monospace" }}>
          Full Stack Engineer
        </p>
        <div>
          <div style={{ fontSize: 72, lineHeight: 1.05, marginBottom: 24 }}>Durga Prasad</div>
          <div style={{ fontSize: 28, color: "#52525b", maxWidth: 700, lineHeight: 1.4 }}>
            Building production backends, realtime apps, and AI-powered products.
          </div>
        </div>
        <div style={{ display: "flex", gap: 32, fontSize: 18, color: "#71717a", fontFamily: "monospace" }}>
          <span>6 shipped apps</span>
          <span>4 live deploys</span>
          <span>durga.dev</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
