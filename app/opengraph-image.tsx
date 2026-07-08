import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Owen Battis — Strategic Marketing Graduate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0d0d0f",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 20,
            letterSpacing: "0.3em",
            color: "#a78bfa",
            textTransform: "uppercase" as const,
            marginBottom: 24,
          }}
        >
          Strategic Marketing Graduate
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: 32,
          }}
        >
          Owen Battis
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#a1a1aa",
            lineHeight: 1.5,
            maxWidth: 800,
          }}
        >
          Strategy, creativity, and global perspective.
        </div>
      </div>
    ),
    { ...size }
  );
}
