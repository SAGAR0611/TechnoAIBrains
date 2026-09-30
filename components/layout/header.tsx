"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

import { siteConfig } from "@/content/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { BrandLogo } from "./brand-logo"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(!isHome)
  const [mobileOpen, setMobileOpen] = useState(false)
  const lastY = useRef(0)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastY.current
    setScrolled(latest > 24)
    setHidden(latest > previous && latest > 120)
    lastY.current = latest
  })

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const transparent = isHome && !scrolled

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        transparent
          ? "bg-transparent"
          : "border-b border-border/80 bg-background/90 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/75"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandLogo />

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {siteConfig.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand",
                pathname === link.href ? "text-brand" : "text-foreground/80"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button render={<Link href="/for-schools" />}>For Schools</Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" aria-label="Open menu" />}
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-2 flex flex-col gap-1 px-4" aria-label="Mobile">
                {siteConfig.nav.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-md px-2 py-2 text-base font-medium hover:bg-muted",
                      pathname === link.href && "text-brand"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button render={<Link href="/for-schools" />} className="mt-2">
                  For Schools
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
