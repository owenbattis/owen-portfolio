"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, ExternalLink } from "lucide-react";

export default function Resume() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            Resume
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
            Experience & qualifications.
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-zinc-400">
            Marketing strategy, business development, analytics, and
            international experience — here's everything in one place.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              <ExternalLink className="h-4 w-4" />
              View Full Resume
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-full border border-white/10 px-7 py-3 text-sm font-medium text-zinc-300 transition hover:border-violet-400/50 hover:text-white"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>

            <a
              href="https://www.linkedin.com/in/owen-battis/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 px-7 py-3 text-sm font-medium text-zinc-300 transition hover:border-violet-400/50 hover:text-white"
            >
              <span className="flex h-4 w-4 items-center justify-center rounded-sm border border-violet-400/40 text-[10px] font-bold text-violet-400">
                in
              </span>
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-4 md:p-6"
        >
          <div className="overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/40">
            <Image
              src="/images/resume-preview.png"
              alt="Owen Battis Resume Preview"
              width={1200}
              height={1600}
              className="h-auto w-full"
              priority
            />
          </div>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              label: "Education",
              value: "B.S. Strategic Marketing",
              sub: "UW-River Falls · 3.853 GPA",
            },
            {
              label: "International",
              value: "Korea University",
              sub: "Study Abroad · Global Business & Culture",
            },
            {
              label: "Experience",
              value: "Administrative Assistant",
              sub: "Industrial Health Services Network · 2020–Present",
            },
          ].map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-[11px] uppercase tracking-widest text-violet-400">
                {item.label}
              </p>
              <p className="mt-3 text-lg font-semibold">{item.value}</p>
              <p className="mt-1 text-sm text-zinc-500">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
