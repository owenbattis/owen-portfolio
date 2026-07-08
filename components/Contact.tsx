"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            Get in Touch
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
            Let's work together.
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-zinc-400">
            I'm always open to connecting with professionals, recruiters, and
            organizations looking for someone passionate about marketing
            strategy, business development, and building things that matter.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          <a
            href="mailto:battisowen@gmail.com"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-violet-400/30 hover:bg-violet-500/[0.04]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
              <Mail className="h-5 w-5 text-violet-400" />
            </div>
            <p className="mt-4 text-lg font-semibold group-hover:text-violet-300">
              Email
            </p>
            <p className="mt-1 text-sm text-zinc-500">battisowen@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/owen-battis/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-violet-400/30 hover:bg-violet-500/[0.04]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
              <span className="text-sm font-bold text-violet-400">in</span>
            </div>
            <p className="mt-4 text-lg font-semibold group-hover:text-violet-300">
              LinkedIn
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              linkedin.com/in/owen-battis
            </p>
          </a>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
              <MapPin className="h-5 w-5 text-violet-400" />
            </div>
            <p className="mt-4 text-lg font-semibold">Location</p>
            <p className="mt-1 text-sm text-zinc-500">
              Wisconsin, United States
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10">
                  <Briefcase className="h-4 w-4 text-violet-400" />
                </div>
                <h2 className="text-xl font-semibold">What I'm Looking For</h2>
              </div>
              <p className="mt-4 leading-relaxed text-zinc-400">
                Opportunities in marketing strategy, brand management, business
                development, and analytics. Open to full-time roles, internships,
                and collaborative projects.
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest text-zinc-500">
                Areas of Interest
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Marketing Strategy",
                  "Brand Management",
                  "Business Analytics",
                  "International Business",
                  "Product Development",
                  "Community Building",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/8 bg-white/[0.05] px-4 py-1.5 text-sm text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a
            href="mailto:battisowen@gmail.com"
            className="flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            <Mail className="h-4 w-4" />
            Send an Email
          </a>

          <a
            href="https://www.linkedin.com/in/owen-battis/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-8 py-3.5 text-sm font-medium text-zinc-300 transition hover:border-violet-400/50 hover:text-white"
          >
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
