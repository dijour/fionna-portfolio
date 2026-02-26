import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Fionna Lui - Creative Strategist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const interBold = await fetch(
    new URL(
      "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZg.ttf"
    )
  ).then((res) => res.arrayBuffer());

  const interBlack = await fetch(
    new URL(
      "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuBWYMZg.ttf"
    )
  ).then((res) => res.arrayBuffer());

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
          fontFamily: "Inter",
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
              fontSize: 30,
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
              fontSize: 30,
              fontWeight: 700,
              color: "#050505",
            }}
          >
            Creative Strategist
          </div>
        </div>

        {/* Bottom: Large name spanning full width */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 48,
            left: 56,
            right: 56,
          }}
        >
          <div
            style={{
              fontSize: 206,
              fontWeight: 900,
              color: "#050505",
              letterSpacing: "-0.05em",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            FIONNA LUI
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interBold,
          weight: 700,
          style: "normal",
        },
        {
          name: "Inter",
          data: interBlack,
          weight: 900,
          style: "normal",
        },
      ],
    }
  );
}
