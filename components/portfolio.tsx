"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Remote Work Productivity and Performance Monitoring Tool",
    description:
      "A tool designed to monitor the productivity and performance of remote workers. It analyzes work hours, productivity levels, and performance metrics to provide detailed reports.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    github: "#",
    color: "from-gray-700 to-gray-900",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description:
      "An AI-powered application that generates marketing content based on user prompts and brand guidelines.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Python", "TensorFlow", "OpenAI"],
    link: "#",
    github: "#",
    color: "from-gray-700 to-gray-900",
  },
  {
    id: 3,
    title: "Real-time Collaboration Tool",
    description:
      "A collaborative workspace allowing teams to work together on documents, designs, and code in real-time.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "WebSockets", "Express", "PostgreSQL"],
    link: "#",
    github: "#",
    color: "from-gray-700 to-gray-900",
  },
  {
    id: 4,
    title: "Open-source Course Platform",
    description:
      "An open-source course platform that functions like a social media network, allowing users to share their own courses. Participants can offer their courses for free or as paid content while engaging with the community.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "next.js", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
    color: "from-gray-700 to-gray-900",
  },
]

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <section id="portfolio" className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white dark:text-white sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-300 dark:text-gray-300">
            A selection of my most significant work, each project telling its own unique story of challenges and
            solutions.
          </p>
        </motion.div>

        <div className="mt-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
                className="group relative overflow-hidden rounded-lg bg-white/10 shadow-xl backdrop-blur-sm dark:bg-gray-800/80"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Cinematic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="mb-2">
                    <div
                      className={`inline-block rounded-full bg-gradient-to-r ${project.color} px-3 py-1 text-xs font-medium text-white`}
                    >
                      Featured Project
                    </div>
                  </div>

                  <h3 className="mb-2 text-2xl font-bold text-white">{project.title}</h3>

                  <p className="mb-4 text-sm text-white/80">{project.description}</p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full bg-white/20 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      className="flex items-center gap-1 text-sm font-medium text-white transition-colors hover:text-gray-300"
                    >
                      <span>View Project</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-1 text-sm font-medium text-white transition-colors hover:text-gray-300"
                    >
                      <span>Source Code</span>
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Cinematic hover effect */}
                <AnimatePresence>
                  {activeProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-gray-700/20 backdrop-blur-[2px]"
                    ></motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-lg font-medium text-white transition-colors hover:text-gray-300 dark:text-white dark:hover:text-gray-300"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

