import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — branding, web, SEO & performance marketing`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const logoBuffer = await readFile(
    join(process.cwd(), "public", "logo-mark.png"),
  );
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "72px 80px",
          background:
            "radial-gradient(ellipse 80% 60% at 100% 0%, rgba(255,77,0,0.18) 0%, transparent 55%), #050505",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            marginBottom: 40,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={96} height={96} alt="" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <span
              style={{
                fontSize: 52,
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              MZ5 Digital
            </span>
            <span
              style={{
                fontSize: 22,
                color: "#ff6b2e",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {siteConfig.tagline}
            </span>
          </div>
        </div>
        <p
          style={{
            fontSize: 32,
            lineHeight: 1.45,
            color: "#d4d4d8",
            maxWidth: 900,
            margin: 0,
          }}
        >
          Branding, web development, SEO, paid media & AI for ambitious brands
          in Ontario and beyond.
        </p>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 20,
            color: "#71717a",
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#ff4d00",
            }}
          />
          mz5digital.com
        </div>
      </div>
    ),
    { ...size },
  );
}
