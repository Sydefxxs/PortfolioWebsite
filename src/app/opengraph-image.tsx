import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Arath Garza — Software Developer";
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
          justifyContent: "center",
          padding: "80px",
          background: "#0d0d0d",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.35) 0%, transparent 60%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#a5b4fc",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          Available for internships
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 800, lineHeight: 1.05 }}>
          Arath Garza
        </div>
        <div style={{ display: "flex", fontSize: 52, fontWeight: 700, color: "#6b7280", marginTop: 8 }}>
          Software Developer
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#9ca3af",
            marginTop: 32,
            maxWidth: 820,
          }}
        >
          Computer Science student building modern, performant web applications.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginTop: 48,
            fontSize: 26,
            color: "#818cf8",
            fontWeight: 600,
          }}
        >
          arathgarza.com
        </div>
      </div>
    ),
    { ...size }
  );
}
