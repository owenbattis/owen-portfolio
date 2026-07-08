"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-6 pb-24 pt-24 md:pb-32 md:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            Strategic Marketing Graduate
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
            Strategy,
            <br />
            creativity,
            <br />
            and global perspective.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            I am a Strategic Marketing graduate from the University of
            Wisconsin–River Falls focused on creating impactful solutions
            through business strategy, customer insights, international
            experience, and emerging technology.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
            >
              Explore My Work
            </Link>

            <Link
              href="/resume"
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 font-medium text-white transition hover:border-violet-400/40 hover:bg-white/[0.06]"
            >
              Resume
            </Link>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-bold">B.S.</p>

              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                Strategic
                <br />
                Marketing
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold">#3</p>

              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                GLO-BUS
                <br />
                Worldwide Ranking
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold">Korea</p>

              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                Korea University
                <br />
                Sejong Campus
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex items-start justify-center md:justify-end"
        >
          <div className="-mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-violet-500/5 md:-mt-12">
            <div className="relative h-[520px] w-[380px] overflow-hidden rounded-2xl">
              <Image
                src="/profile.png"
                alt="Owen Battis"
                fill
                sizes="(min-width: 768px) 760px, 100vw"
                quality={95}
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
