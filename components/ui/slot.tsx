import * as React from "react"

type SlotProps = React.HTMLAttributes<HTMLElement> & {
  "aria-invalid"?: boolean | "true" | "false"
}

/**
 * Minimal "asChild" primitive: merges the props it receives onto its single
 * child element instead of rendering a wrapper node. Used by FormControl to
 * attach id/aria wiring directly to the underlying input without an extra DOM node.
 */
function Slot({ children, className, ...props }: SlotProps) {
  if (!React.isValidElement(children)) {
    return null
  }

  const child = children as React.ReactElement<{ className?: string }>

  return React.cloneElement(child, {
    ...props,
    className: [className, child.props.className].filter(Boolean).join(" ") || undefined,
  } as Partial<unknown>)
}

export { Slot }
