import { ImageResponse } from "next/og";

// Favicon metadata
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
          color: "#ffffff",
          fontSize: 18,
          fontWeight: 700,
          borderRadius: 6,
          letterSpacing: -1,
        }}
      >
        AG
      </div>
    ),
    { ...size }
  );
}
