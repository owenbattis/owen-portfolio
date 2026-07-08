"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SwdashDemo from "./SwdashDemo";

const technologies = [
  "React",
  "TypeScript",
  "UI/UX Design",
  "Data Visualization",
  "User Research",
  "Product Development",
];

export default function SwdashCaseStudy() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        {/* Back Button */}
        <div className="flex justify-end">
          <Link
            href="/work"
            className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            ← Back to Case Studies
          </Link>
        </div>

        {/* Hero */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:p-16">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              Featured Project
            </p>

            <h1 className="mt-6 text-6xl font-bold tracking-tight md:text-8xl">
              SWDASH
            </h1>

            <h2 className="mt-6 max-w-3xl text-2xl font-semibold leading-relaxed text-zinc-200 md:text-3xl">
              Turning player frustration into an officially integrated game
              tool.
            </h2>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-zinc-400">
              A community-built dashboard designed to simplify Scapewatch's
              complex systems, organize gameplay data, and help players make
              faster, smarter decisions.
            </p>

            <div className="mt-12 grid gap-6 border-t border-white/10 pt-10 md:grid-cols-3">
              <div>
                <p className="text-2xl font-bold">Built</p>
                <p className="mt-2 text-sm text-zinc-500">
                  Independently developed community tool
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">Designed</p>
                <p className="mt-2 text-sm text-zinc-500">
                  Around real player workflows
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-violet-400">Integrated</p>
                <p className="mt-2 text-sm text-zinc-500">
                  Adopted into the official game experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Demo */}
        <section className="mt-28">
          <h2 className="text-4xl font-bold">Interactive Demo</h2>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-400">
            A portfolio recreation of SWDASH using mock data. The original tool
            connects with live game information, but this demo showcases the
            interface, organization, and user experience.
          </p>

          <div className="mt-12 flex justify-center">
            <SwdashDemo />
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="mt-32">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-red-500/10 bg-red-500/[0.03] p-8 md:p-10"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-red-400/80">
                The Problem
              </p>
              <h2 className="mt-4 text-3xl font-bold">
                Data everywhere, answers nowhere.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                Scapewatch gives players access to a lot of information, but
                it's scattered across different menus, panels, and systems.
                Players were constantly switching between screens, doing mental
                math, and losing time just trying to figure out basic things.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: "🔍", text: "XP rates, kill speeds, and efficiency — all calculated by hand" },
                  { icon: "📋", text: "Barter prices and deal quality hidden behind multiple clicks" },
                  { icon: "⏱️", text: "No session tracking — players couldn't measure their own progress" },
                  { icon: "🧩", text: "Important data like food healing and damage logs had no central view" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 text-base">{item.icon}</span>
                    <p className="text-sm leading-relaxed text-zinc-400">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl border border-emerald-500/10 bg-emerald-500/[0.03] p-8 md:p-10"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-400/80">
                The Solution
              </p>
              <h2 className="mt-4 text-3xl font-bold">
                One dashboard. Everything you need.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                SWDASH pulls live game data into a single overlay panel that
                runs alongside gameplay. Every stat, rate, and log is
                calculated automatically and organized into tabs players
                actually use.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: "📊", label: "XP Tracker", text: "Live session stats, XP rates, and level-up predictions" },
                  { icon: "⚔️", label: "Slay Panel", text: "Current task, kill speed, master progression" },
                  { icon: "💰", label: "Barter Intel", text: "Price tracking, deal tagging, trade history" },
                  { icon: "🍖", label: "Food & HP", text: "Healing efficiency, overheal tracking, damage log" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 text-base">{item.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-zinc-200">{item.label}</p>
                      <p className="text-sm text-zinc-500">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recognition */}
        <section className="mt-32 rounded-3xl border border-violet-400/30 bg-violet-500/[0.08] p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
            Recognition
          </p>

          <h2 className="mt-5 text-4xl font-bold">
            Implemented into the official game
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-zinc-300">
            What started as a community-built tool became part of the official
            Scapewatch experience. The project showed how identifying user
            problems and building practical solutions can create meaningful
            product improvements.
          </p>
        </section>

        {/* Closing */}
        <section className="mt-32 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
                Takeaway
              </p>
              <h2 className="mt-4 text-3xl font-bold">
                Find a real problem, build the right solution.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                SWDASH started because players were frustrated — and instead of
                waiting for someone else to fix it, I built the tool myself.
                Understanding the users, designing around their actual
                workflows, and shipping something people wanted to use every
                day is what made this project successful enough to be adopted
                into the game itself.
              </p>
            </div>
            <div className="lg:col-span-2">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Built With
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {technologies.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/8 bg-white/[0.05] px-4 py-1.5 text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
