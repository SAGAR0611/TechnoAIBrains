import { z } from "zod"

const baseFields = {
  name: z.string().trim().min(2, "Enter your full name"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20, "Enter a valid phone number"),
  message: z.string().trim().min(10, "Tell us a little more (at least 10 characters)"),
}

export const schoolEnquirySchema = z.object({
  type: z.literal("school"),
  ...baseFields,
  schoolName: z.string().trim().min(2, "Enter your school's name"),
  city: z.string().trim().min(2, "Enter your city or town"),
  studentCount: z.string().trim().min(1, "Roughly how many students would join?"),
})

export const generalEnquirySchema = z.object({
  type: z.literal("general"),
  ...baseFields,
})

export const enquirySchema = z.discriminatedUnion("type", [
  schoolEnquirySchema,
  generalEnquirySchema,
])

export type SchoolEnquiryInput = z.infer<typeof schoolEnquirySchema>
export type GeneralEnquiryInput = z.infer<typeof generalEnquirySchema>
export type EnquiryInput = z.infer<typeof enquirySchema>
