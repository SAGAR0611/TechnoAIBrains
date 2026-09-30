import { NextResponse } from "next/server"

import { enquirySchema } from "@/lib/validations/enquiry"
import { getResendClient } from "@/lib/resend"
import { siteConfig } from "@/content/site"

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)

  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }

  const parsed = enquirySchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 422 }
    )
  }

  const data = parsed.data
  const subject =
    data.type === "school"
      ? `New school enquiry — ${data.schoolName} (${data.city})`
      : `New contact message — ${data.name}`

  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    ...(data.type === "school"
      ? [`School: ${data.schoolName}`, `City: ${data.city}`, `Students: ${data.studentCount}`]
      : []),
    "",
    data.message,
  ]

  try {
    const resend = getResendClient()
    await resend.emails.send({
      from: process.env.ENQUIRY_FROM_EMAIL ?? "TechnoAIBrains <onboarding@resend.dev>",
      to: process.env.ENQUIRY_TO_EMAIL ?? siteConfig.contact.email,
      replyTo: data.email,
      subject,
      text: lines.join("\n"),
    })
  } catch (error) {
    console.error("Failed to send enquiry email", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
