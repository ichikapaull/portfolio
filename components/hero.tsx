"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useScroll } from "@/components/scroll-context"
import ThemeToggle from "@/components/theme-toggle"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
    >
      <ThemeToggle />

      <div className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex justify-center"
        >
          <div className="relative px-8 py-2">
            {/* Film frame border */}
            <div className="absolute inset-0 border-2 border-white/70 bg-black/80 shadow-inner"></div>

            {/* Film perforations (sprocket holes) */}
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 flex flex-col gap-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-2 w-2 rounded-sm border border-white/70 bg-black"></div>
              ))}
            </div>
            <div className="absolute -right-1 top-1/2 -translate-y-1/2 flex flex-col gap-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-2 w-2 rounded-sm border border-white/70 bg-black"></div>
              ))}
            </div>

            {/* Animated film grain effect */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1 }}
            >
              {/* Multiple animated layers for more authentic film grain */}
              <motion.div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"
                animate={{
                  scale: [1, 1.05, 0.95, 1.02, 1],
                  opacity: [0.5, 0.7, 0.3, 0.6, 0.5],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
                  backgroundSize: "150px",
                }}
                animate={{
                  x: [0, 1, -1, 2, 0],
                  y: [0, -1, 1, -2, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 0.2,
                  ease: "linear",
                }}
              />
              {/* Flickering effect like old film projector */}
              <motion.div
                className="absolute inset-0 bg-white mix-blend-overlay"
                animate={{
                  opacity: [0, 0.01, 0, 0.02, 0, 0.01, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2.5,
                  times: [0, 0.2, 0.3, 0.45, 0.5, 0.8, 1],
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Text with vintage typography */}
            <span className="relative font-serif text-sm tracking-widest text-white uppercase">
              Full Stack Developer
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center font-serif text-5xl font-bold tracking-tight text-white dark:text-white sm:text-6xl md:text-7xl lg:text-8xl"
          style={{
            textShadow: "0 4px 8px rgba(0,0,0,0.3)",
          }}
        >
          <span className="block">Ilyas Dal</span>
          <span className="mt-2 block text-2xl font-sans font-light tracking-wider text-gray-300 dark:text-gray-300 sm:text-3xl md:text-4xl">
            Crafting Digital Experiences
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#about"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-gray-500 bg-transparent px-8 py-3 text-sm font-medium text-white transition-all duration-300 dark:border-gray-700 dark:text-white"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            <span className="relative">Discover My Work</span>
          </a>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 dark:to-black/80"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        ></div>
      </div>
    </section>
  )
}

