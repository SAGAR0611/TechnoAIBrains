export interface Stat {
  id: string
  value: number
  /** Rendered after the count-up finishes, e.g. "+" for 40+ */
  suffix?: string
  label: string
  description?: string
}
