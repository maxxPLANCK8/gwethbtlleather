import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f5f5f0",
          color: "#1a1a1a",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "80px",
          width: "100%"
        }}
      >
        <div>
          <div style={{ color: "#8b4513", fontSize: 28, letterSpacing: 8 }}>
            GHOSTATLAS LEATHER
          </div>
          <div style={{ fontSize: 92, lineHeight: 0.95, marginTop: 26 }}>
            Quiet luxury for work and travel.
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
