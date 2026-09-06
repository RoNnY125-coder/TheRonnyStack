import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const satoshi = await readFile(
    join(process.cwd(), "app/fonts/satoshi/satoshi-700.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0C0C0B",
          color: "#F3EFE7",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#DC143C",
          }}
        >
          <span>TRS</span>
          <span>{site.phrase}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, lineHeight: 0.9, letterSpacing: -4 }}>
            THE RONNY
          </div>
          <div
            style={{
              fontSize: 92,
              lineHeight: 0.9,
              letterSpacing: -4,
              paddingLeft: 180,
            }}
          >
            STACK
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#8A8680" }}>{site.tagline}</div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Satoshi",
          data: satoshi,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
