import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Fionna Lui - Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          backgroundColor: "#050505",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* FL Logo */}
        <div
          style={{
            fontSize: 180,
            fontWeight: 900,
            color: "white",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          FL
        </div>

        {/* Divider line */}
        <div
          style={{
            width: 60,
            height: 2,
            backgroundColor: "rgba(255,255,255,0.2)",
            marginTop: 40,
            marginBottom: 40,
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "white",
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
          }}
        >
          Fionna Lui
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            marginTop: 12,
          }}
        >
          Costume Designer &amp; Stylist
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
