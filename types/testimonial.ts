export interface Testimonial {
  id: string
  quote: string
  attribution: string
  role: string
  /** Always true until a real quote is collected — renders a visible placeholder treatment. */
  placeholder: true
}
