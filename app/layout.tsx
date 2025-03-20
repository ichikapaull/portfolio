import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Montserrat, Playfair_Display } from "next/font/google"
import type { Metadata } from "next"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Cinematic Portfolio | Full Stack Developer",
  description:
    "A cinematic portfolio showcasing the work of a Full Stack Web Developer with a focus on artistic design and technical excellence.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${montserrat.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

