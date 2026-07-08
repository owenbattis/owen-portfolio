"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy, Gamepad2, Cpu, ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            Featured Work
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
            Strategy, product, and innovation.
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-zinc-400">
            A collection of projects showcasing business strategy, analytical
            thinking, product development, and creative technology solutions.
          </p>
        </motion.div>

        {/* GLO-BUS Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group mt-16"
        >
          <Link href="/work/globus" className="block">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-violet-400/20 hover:bg-violet-500/[0.02] md:p-10">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-50" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
                    <Trophy className="h-5 w-5 text-violet-400" />
                  </div>
                  <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
                    Featured Case Study
                  </p>
                </div>

                <h2 className="mt-6 text-4xl font-bold md:text-5xl">GLO-BUS</h2>

                <p className="mt-2 text-lg text-zinc-300">
                  Global Business Simulation — International Best-Strategy
                  Invitational Invitee
                </p>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
                  Led a team through a semester-long global business simulation,
                  making real-time strategic decisions across marketing,
                  production, finance, and operations to compete against
                  thousands of teams worldwide.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    ["#3", "Game-to-Date Score"],
                    ["#3", "Earnings Per Share"],
                    ["#9", "Stock Price"],
                    ["#27", "Return on Equity"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-white/8 bg-white/[0.03] px-5 py-4"
                    >
                      <p className="text-2xl font-bold text-violet-400">
                        {value}
                      </p>
                      <p className="mt-1 text-xs text-zinc-500">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-zinc-300 transition group-hover:text-violet-300">
                  View Case Study
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Secondary Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 grid gap-6 md:grid-cols-2"
        >
          {/* SWDASH */}
          <Link href="/work/swdash" className="group block">
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-violet-400/20 hover:bg-violet-500/[0.02]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
                <Gamepad2 className="h-5 w-5 text-violet-400" />
              </div>

              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-violet-400/70">
                Community Product
              </p>

              <h3 className="mt-2 text-2xl font-bold group-hover:text-violet-300">
                SWDASH
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                A community-built dashboard tool for Scapewatch — recognized by
                the game's creator and later integrated into the official game
                experience.
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm text-zinc-500 transition group-hover:text-violet-300">
                View Case Study
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* AI & Automation */}
          <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
              <Cpu className="h-5 w-5 text-violet-400" />
            </div>

            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-violet-400/70">
              Technology & Innovation
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              AI Automation & Creative Technology
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Exploring local AI workflows, automation systems, and creative
              technology applications to improve productivity and develop new
              solutions.
            </p>

            <div className="mt-5 rounded-lg border border-white/8 bg-white/[0.03] px-4 py-3">
              <p className="text-xs text-zinc-500">
                Currently exploring new applications of AI and automation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
