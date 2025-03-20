"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white dark:text-white sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-300 dark:text-gray-300">
            Have a project in mind or want to discuss potential collaborations? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg bg-white/10 p-8 shadow-xl backdrop-blur-sm dark:bg-gray-800/80"
          >
            <h3 className="mb-6 text-2xl font-bold text-white dark:text-white">Send a Message</h3>

            {isSubmitted ? (
              <div className="flex h-64 flex-col items-center justify-center rounded-lg border border-gray-500 bg-gray-900/20 p-6 dark:bg-gray-900/20">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-800 dark:bg-gray-700">
                  <Send className="h-8 w-8 text-white dark:text-white" />
                </div>
                <h4 className="mb-2 text-xl font-bold text-white dark:text-white">Message Sent!</h4>
                <p className="text-center text-gray-300 dark:text-gray-300">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-white dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-600 bg-white/5 px-4 py-2 text-white backdrop-blur-sm focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400/50 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white dark:focus:border-gray-400 dark:focus:ring-gray-400/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-white dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-600 bg-white/5 px-4 py-2 text-white backdrop-blur-sm focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400/50 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white dark:focus:border-gray-400 dark:focus:ring-gray-400/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white dark:text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full rounded-md border border-gray-600 bg-white/5 px-4 py-2 text-white backdrop-blur-sm focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400/50 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white dark:focus:border-gray-400 dark:focus:ring-gray-400/50"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-gray-700 to-gray-900 px-6 py-3 text-base font-medium text-white shadow-md transition-all hover:from-gray-800 hover:to-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between rounded-lg bg-white/10 p-8 shadow-xl backdrop-blur-sm dark:bg-gray-800/80"
          >
            <div>
              <h3 className="mb-6 text-2xl font-bold text-white dark:text-white">Connect With Me</h3>
              <p className="mb-8 text-gray-300 dark:text-gray-300">
                Whether you're looking for a developer for your next project, have a question about my work, or just
                want to say hello, I'm always open to new connections and conversations.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:hello@example.com"
                  className="block rounded-lg border border-gray-600 bg-white/5 p-4 transition-colors hover:border-gray-400 hover:bg-gray-900/20 dark:border-gray-700 dark:bg-gray-700/50 dark:hover:border-gray-400 dark:hover:bg-gray-900/20"
                >
                  <div className="text-lg font-medium text-white dark:text-white">Email</div>
                  <div className="text-gray-300 dark:text-gray-300">hello@example.com</div>
                </a>

                <a
                  href="tel:+1234567890"
                  className="block rounded-lg border border-gray-600 bg-white/5 p-4 transition-colors hover:border-gray-400 hover:bg-gray-900/20 dark:border-gray-700 dark:bg-gray-700/50 dark:hover:border-gray-400 dark:hover:bg-gray-900/20"
                >
                  <div className="text-lg font-medium text-white dark:text-white">Phone</div>
                  <div className="text-gray-300 dark:text-gray-300">+1 (234) 567-890</div>
                </a>
              </div>
            </div>

            <div className="mt-8">
              <div className="mb-4 text-lg font-medium text-white dark:text-white">Follow Me</div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white transition-colors hover:bg-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white transition-colors hover:bg-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white transition-colors hover:bg-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

