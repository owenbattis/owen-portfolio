"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ImageModal from "./ImageModal";

const achievements = [
  {
    label: "Game-to-Date Score (GTDS)",
    value: "#3 Worldwide",
  },
  {
    label: "Earnings Per Share (EPS)",
    value: "#3 Worldwide",
  },
  {
    label: "Stock Price",
    value: "#9 Worldwide",
  },
  {
    label: "Return on Equity (ROE)",
    value: "#27 Worldwide",
  },
];

const images = [
  {
    src: "/images/case-studies/globus-rankings.png",
    title: "Global Ranking Recognition",
    description:
      "Official GLO-BUS recognition confirming global performance rankings.",
  },
  {
    src: "/images/case-studies/globus-decisions.png",
    title: "Strategic Decision Dashboard",
    description:
      "Year 12 decisions showing market share, segment performance, pricing, and competitive strategy.",
  },
  {
    src: "/images/case-studies/globus-results.png",
    title: "Class Performance Comparison",
    description:
      "Final simulation comparison showing performance against competing teams.",
  },
];

export default function GlobusCaseStudy() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-end">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            ← Back to Featured Work
          </Link>
        </div>

        <p className="mt-10 text-sm uppercase tracking-[0.3em] text-violet-400">
          Case Study
        </p>

        <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
          GLO-BUS Global Business Simulation
        </h1>

        <p className="mt-4 text-xl text-violet-400">
          International Best-Strategy Invitational Invitee
        </p>

        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-zinc-400">
          Managed a simulated global company through competitive decision making
          across marketing, finance, operations, R&D, human resources, and
          strategy. The simulation required analyzing market data, responding to
          competitors, and maximizing long-term shareholder value.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-8"
        >
          <h2 className="text-3xl font-bold">Global Rankings</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.label}
                className="rounded-2xl border border-white/10 bg-black/20 p-5"
              >
                <p className="whitespace-nowrap text-3xl font-bold">
                  {achievement.value}
                </p>

                <p className="mt-2 text-sm text-zinc-400">
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <section className="mt-24">
          <h2 className="text-4xl font-bold">Evidence & Strategy</h2>

          <p className="mt-5 max-w-3xl text-lg text-zinc-400">
            Supporting documentation from the simulation showing strategic
            decisions, competitive positioning, and final results.
          </p>

          <div className="mt-12 space-y-12">
            {images.map((image) => (
              <div
                key={image.src}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-2xl font-semibold">{image.title}</h3>

                <p className="mt-3 text-zinc-400">{image.description}</p>

                <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
                  <ImageModal src={image.src} alt={image.title} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
