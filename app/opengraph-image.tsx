import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Owen Battis — Strategic Marketing Graduate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.25em",
            color: "#a78bfa",
            textTransform: "uppercase" as const,
            marginBottom: 32,
            fontWeight: 500,
          }}
        >
          Strategic Marketing Graduate
        </div>
        <div
          style={{
            fontSize: 96,
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
            fontSize: 34,
            color: "#a1a1aa",
            lineHeight: 1.5,
            maxWidth: 800,
            fontWeight: 400,
          }}
        >
          Strategy, creativity, and global perspective.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            fontSize: 16,
            color: "#52525b",
            fontWeight: 400,
          }}
        >
          owenbattis.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
