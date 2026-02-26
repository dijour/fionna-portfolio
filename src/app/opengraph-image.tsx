import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Fionna Lui - Creative Strategist";
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
          justifyContent: "space-between",
          backgroundColor: "#f5f5f3",
          fontFamily: "Inter, sans-serif",
          padding: "48px 56px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {/* Top-left: Logo */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 900,
              color: "#050505",
              letterSpacing: "-0.01em",
            }}
          >
            FL™
          </div>

          {/* Top-right: Descriptor */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#050505",
            }}
          >
            Creative Strategist
          </div>
        </div>

        {/* Bottom: Large cropped name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            bottom: -30,
            left: 56,
            right: 56,
          }}
        >
          <div
            style={{
              fontSize: 186,
              fontWeight: 900,
              color: "#050505",
              letterSpacing: "-0.05em",
              lineHeight: 0.85,
              whiteSpace: "nowrap",
            }}
          >
            FIONNA
          </div>
          <div
            style={{
              fontSize: 186,
              fontWeight: 900,
              color: "#050505",
              letterSpacing: "-0.05em",
              lineHeight: 0.85,
              whiteSpace: "nowrap",
            }}
          >
            LUI
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
