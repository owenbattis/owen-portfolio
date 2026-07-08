"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CaseStudyPreview() {
  return (
    <section className="px-6 pb-32">
      <div className="mx-auto max-w-6xl">
        {/* GLO-BUS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link href="/work/globus" className="group block">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-violet-400/20 hover:bg-violet-500/[0.02] md:p-14">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />

              <div className="relative">
                <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
                  Featured Case Study
                </p>

                <h2 className="mt-6 text-4xl font-bold md:text-5xl">
                  GLO-BUS Global Business Simulation
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
                  Ranked among the world's top-performing companies in a global
                  business strategy simulation by applying competitive analysis,
                  financial decision-making, and marketing strategy.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                  {[
                    { value: "#3", label: "Game-to-Date Score" },
                    { value: "#3", label: "Earnings Per Share" },
                    { value: "#9", label: "Stock Price" },
                    { value: "#27", label: "Return on Equity" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/8 bg-white/[0.03] px-5 py-4"
                    >
                      <p className="text-2xl font-bold text-violet-400">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex items-center gap-2 text-sm font-medium text-zinc-300 transition group-hover:text-violet-300">
                  View Full Case Study
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* SWDASH */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <Link href="/work/swdash" className="group block">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-violet-400/20 hover:bg-violet-500/[0.02]">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-violet-400/70">
                    Community Product
                  </p>
                  <h3 className="mt-2 text-2xl font-bold group-hover:text-violet-300">
                    SWDASH
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
                    A community-built dashboard for Scapewatch — recognized by
                    the game creator and integrated into the official game.
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2 text-sm text-zinc-500 transition group-hover:text-violet-300">
                  View Case Study
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
