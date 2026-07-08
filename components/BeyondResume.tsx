"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Competitive Mindset",
    text: "Years of competitive soccer shaped how I approach teamwork, preparation, and continuous improvement.",
  },
  {
    title: "Learning Through Challenges",
    text: "Rock climbing and snowboarding reflect my interest in learning new skills, adapting quickly, and embracing challenges.",
  },
  {
    title: "Global Perspective",
    text: "Living and studying in South Korea expanded my understanding of different cultures, communication styles, and perspectives.",
  },
  {
    title: "Creating & Exploring",
    text: "From AI projects to gaming communities, I enjoy experimenting with technology and building creative solutions.",
  },
];

export default function BeyondResume() {
  return (
    <section id="beyond" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
          Beyond The Resume
        </p>

        <h2 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
          The experiences that shape how I work.
        </h2>

        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid gap-6 py-10 md:grid-cols-[300px_1fr]"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>

              <p className="max-w-3xl text-zinc-400">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
