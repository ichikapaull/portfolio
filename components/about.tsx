"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Palette, Zap, Globe } from "lucide-react"

const skills = [
  {
    name: "Frontend",
    icon: <Palette className="h-6 w-6" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  { name: "Backend", icon: <Code className="h-6 w-6" />, items: ["Node.js", "Express", "Python", "PostgreSQL"] },
  { name: "DevOps", icon: <Zap className="h-6 w-6" />, items: ["Docker", "AWS", "CI/CD", "Kubernetes"] },
  {
    name: "Other",
    icon: <Globe className="h-6 w-6" />,
    items: ["UI/UX Design", "SEO", "Performance", "Accessibility"],
  },
]

const timelineEvents = [
  {
    year: "2025",
    title: "Full Stack Developer",
    company: "Upwork",
    description: "Desing and development of enterprise-scale applications with React, Node.js",
  },
  {
    year: "2021-2022",
    title: "Frontend Developer",
    company: "Freelancer",
    description: "I designed and deployed websites and qr menus for local businesses",
  },
  {
    year: "2019-2025",
    title: "Co-Founder",
    company: "Huzur Giyim",
    description: "Co-founder of a clothing store, actively involved in brand strategy, operations management, and customer experience.",
  },
  {
    year: "2017-2025",
    title: "Store Manager",
    company: "Huzur Kırtasiye",
    description: "As a store manager, I led efforts to maximize sales by enhancing operational efficiency, managing teams, optimizing inventory, and delivering an exceptional customer experience.",
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="about" className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white dark:text-white sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-300 dark:text-gray-300">
          As a passionate Full Stack Developer and entrepreneur, I bring a strong vision to both the digital world and the physical retail industry. As the co-founder of a clothing store and the manager of a stationery shop, I have led initiatives ranging from brand strategy and operations management to team leadership and exceptional customer experience. By combining technical precision with an artistic perspective, I create digital experiences that are not only highly functional but also visually compelling.
          </p>
        </motion.div>

        <div className="mt-20">
          <h3 className="mb-12 text-center font-serif text-2xl font-bold text-white dark:text-white sm:text-3xl">
            Professional Journey
          </h3>

          <div className="relative mx-auto max-w-3xl">
            {/* Film strip timeline line */}
            <div className="absolute left-1/2 top-0 flex h-full flex-col items-center">
              <div className="h-full w-px bg-white/50"></div>
              {/* Film perforations along timeline */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-3 w-3 rounded-full border border-white/70 bg-black"
                  style={{ top: `${i * 14}%` }}
                ></div>
              ))}
            </div>

            {/* Timeline events */}
            {timelineEvents.map((event, index) => (
              <motion.a
                href={`/career/${event.year.toLowerCase()}`} // Link to job-specific page
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
                className={`group relative mb-12 flex cursor-pointer ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-1/2 top-0 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-md dark:bg-gray-800"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="h-2 w-2 rounded-full bg-gray-800 dark:bg-gray-200"></div>
                </motion.div>

                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                  <motion.div
                    className="relative overflow-hidden rounded-lg bg-white/10 p-6 shadow-md backdrop-blur-sm dark:bg-gray-800/80"
                    whileHover={{
                      boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    {/* Animated film grain on hover */}
                    <motion.div
                      className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100"
                      initial={false}
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                        opacity: [0, 0.1, 0, 0.15, 0],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 1.5,
                        ease: "linear",
                      }}
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
                        backgroundSize: "200px",
                      }}
                    />

                    <span className="inline-block rounded-full bg-gradient-to-r from-gray-700 to-gray-900 px-3 py-1 text-xs font-medium text-white">
                      {event.year}
                    </span>
                    <h4 className="mt-2 text-lg font-bold text-white dark:text-white">{event.title}</h4>
                    <p className="text-sm font-medium text-gray-300 dark:text-gray-300">{event.company}</p>
                    <p className="mt-2 text-sm text-gray-400 dark:text-gray-400">{event.description}</p>

                    {/* View details text that appears on hover */}
                    <motion.div
                      className="mt-4 flex items-center justify-end opacity-0 group-hover:opacity-100"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-xs font-medium text-white">View details</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="mb-12 text-center font-serif text-2xl font-bold text-white dark:text-white sm:text-3xl">
            Technical Skills
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg bg-white/10 p-6 shadow-md backdrop-blur-sm dark:bg-gray-800/80"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white">
                  {skill.icon}
                </div>
                <h4 className="mb-3 text-lg font-bold text-white dark:text-white">{skill.name}</h4>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300 dark:text-gray-300">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-gray-500"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

