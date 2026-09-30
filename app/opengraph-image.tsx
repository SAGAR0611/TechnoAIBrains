import { readFile } from "node:fs/promises"
import path from "node:path"
import { ImageResponse } from "next/og"

import { siteConfig } from "@/content/site"
import { flagshipStats } from "@/content/stats"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`

export default async function OpengraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public", "logo-mark.png"))
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundImage: "linear-gradient(135deg, #040c20 0%, #071a45 60%, #0a2358 100%)",
          color: "#f2f6ff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={132} height={132} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 60, fontWeight: 700 }}>
              Techno<span style={{ color: "#40f502" }}>AI</span>Brains
            </div>
            <div style={{ display: "flex", marginTop: 12, fontSize: 28, color: "#b8c6e6", maxWidth: 800 }}>
              {siteConfig.tagline}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 64 }}>
          {flagshipStats.map((stat) => (
            <div key={stat.id} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 72, fontWeight: 700, color: "#40f502" }}>
                {stat.value}
                {stat.suffix ?? ""}
              </div>
              <div style={{ display: "flex", fontSize: 22, color: "#dbe4fa", maxWidth: 260 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
