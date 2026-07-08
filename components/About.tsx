"use client";

import { motion } from "framer-motion";

const strengths = [
  {
    title: "Marketing Strategy",
    text: "I approach business challenges through consumer insights, competitive analysis, and strategic decision-making.",
  },
  {
    title: "Global Perspective",
    text: "My international experience studying at Korea University strengthened my ability to understand different cultures, markets, and perspectives.",
  },
  {
    title: "Technology & Innovation",
    text: "I enjoy exploring emerging technology and AI tools to improve workflows, solve problems, and discover new opportunities.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            About
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
            Strategy, curiosity, and a global mindset.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-zinc-400">
            I am a Strategic Marketing graduate from the University of
            Wisconsin–River Falls with a passion for understanding how
            businesses grow, how consumers make decisions, and how new
            technologies can create better solutions.
          </p>

          <p className="mt-5 max-w-3xl text-xl leading-relaxed text-zinc-400">
            Through experiences in competitive business simulations,
            international study, and technology exploration, I have developed a
            mindset focused on learning quickly, adapting to challenges, and
            creating meaningful results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {strengths.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-violet-400/20 hover:bg-violet-500/[0.02]"
            >
              <h3 className="text-lg font-bold group-hover:text-violet-300">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
