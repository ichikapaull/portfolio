"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface ScrollContextType {
  scrollY: number
  scrollDirection: "up" | "down" | null
}

const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  scrollDirection: null,
})

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [scrollY, setScrollY] = useState(0)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down")
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up")
      }

      setLastScrollY(currentScrollY)
      setScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return <ScrollContext.Provider value={{ scrollY, scrollDirection }}>{children}</ScrollContext.Provider>
}

export const useScroll = () => useContext(ScrollContext)

