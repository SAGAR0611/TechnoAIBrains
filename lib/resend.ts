import { Resend } from "resend"

// Lazily instantiated so the module can be imported without RESEND_API_KEY
// set (e.g. during `next build` on a machine that hasn't configured env yet).
let client: Resend | null = null

export function getResendClient() {
  if (!client) {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not set — see .env.example")
    }
    client = new Resend(apiKey)
  }
  return client
}
