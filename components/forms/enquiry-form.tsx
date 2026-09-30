"use client"

import { useState } from "react"
import { useForm, type Resolver } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Send } from "lucide-react"
import { toast } from "sonner"

import { generalEnquirySchema, schoolEnquirySchema } from "@/lib/validations/enquiry"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

interface EnquiryFormProps {
  type: "school" | "general"
  className?: string
}

interface FormValues {
  type: "school" | "general"
  name: string
  email: string
  phone: string
  message: string
  schoolName: string
  city: string
  studentCount: string
}

export function EnquiryForm({ type, className }: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "success">("idle")
  const schema = type === "school" ? schoolEnquirySchema : generalEnquirySchema

  const form = useForm<FormValues>({
    resolver: zodResolver(schema) as Resolver<FormValues>,
    defaultValues: {
      type,
      name: "",
      email: "",
      phone: "",
      message: "",
      schoolName: "",
      city: "",
      studentCount: "",
    },
  })

  async function onSubmit(values: FormValues) {
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error("Request failed")
      }

      setStatus("success")
      toast.success("Thanks — we'll be in touch shortly.")
      form.reset()
    } catch {
      toast.error("Something went wrong sending that. Please try again, or email us directly.")
    }
  }

  if (status === "success") {
    return (
      <div className={className}>
        <p className="rounded-lg border border-primary/30 bg-primary/10 p-6 text-sm text-foreground">
          Thanks for reaching out — we&rsquo;ve received your message and will get back to you
          shortly.
        </p>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" autoComplete="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+91 00000 00000" autoComplete="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {type === "school" && (
            <>
              <FormField
                control={form.control}
                name="schoolName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>School name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your school's name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City / town</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Mulbagal" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="studentCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Roughly how many students?</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 300" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="mt-5">
              <FormLabel>{type === "school" ? "Tell us about your school" : "Message"}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={
                    type === "school"
                      ? "What grades would join, and what are you hoping students walk away able to do?"
                      : "How can we help?"
                  }
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="mt-6" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="h-4 w-4" aria-hidden="true" />
          )}
          {type === "school" ? "Send enquiry" : "Send message"}
        </Button>
      </form>
    </Form>
  )
}
