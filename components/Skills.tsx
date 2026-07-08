"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Marketing Strategy",
    description:
      "Developing strategies through consumer insights, market research, competitive analysis, and brand-focused thinking.",
    skills: [
      "Marketing Strategy",
      "Consumer Insights",
      "Market Research",
      "Brand Development",
    ],
  },
  {
    title: "Business Analysis",
    description:
      "Using analytical thinking and financial concepts to evaluate decisions, identify opportunities, and support business goals.",
    skills: [
      "Competitive Analysis",
      "Financial Analysis",
      "Excel",
      "Data Interpretation",
    ],
  },
  {
    title: "Global Perspective",
    description:
      "Applying cross-cultural communication and international experiences to understand different markets and perspectives.",
    skills: [
      "International Business",
      "Cross-Cultural Communication",
      "Adaptability",
    ],
  },
  {
    title: "Technology & Innovation",
    description:
      "Exploring AI tools and emerging technology to improve workflows, solve problems, and create new opportunities.",
    skills: ["AI Tools", "Automation", "Digital Platforms", "Problem Solving"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
          Capabilities
        </p>

        <h2 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
          Skills built through strategy, experience, and curiosity.
        </h2>

        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid gap-6 py-10 md:grid-cols-[300px_1fr]"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>

              <div>
                <p className="max-w-3xl text-zinc-400">{item.description}</p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
