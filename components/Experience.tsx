"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    date: "Jan 2020 – Present",
    role: "Administrative Assistant",
    company: "Industrial Health Services Network, Inc.",
    location: "Hudson, WI",
    description:
      "Supporting daily business operations through financial administration, data management, reporting support, and organizational coordination.",
    highlights: [
      "Manage accounts payable and receivable processes, including invoice tracking, payment records, and financial documentation.",
      "Maintain internal databases and organized records to support reporting accuracy and business operations.",
      "Coordinate scheduling, prepare meeting materials, and provide administrative support across company activities.",
    ],
    skills: [
      "Business Operations",
      "Financial Administration",
      "Data Management",
      "Process Coordination",
    ],
    current: true,
  },
  {
    date: "July 2019 – Dec 2020",
    role: "Electronic Sales Associate",
    company: "Target Corporation",
    location: "Hudson, WI",
    description:
      "Delivered customer-focused sales support while developing product expertise and communication skills across consumer technology categories.",
    highlights: [
      "Exceeded sales goals by providing personalized product recommendations and guiding customers through purchasing decisions.",
      "Developed expertise across electronics categories including televisions, gaming, audio, mobile devices, and accessories.",
      "Supported organized product displays, inventory accuracy, and efficient department operations.",
    ],
    skills: [
      "Customer Experience",
      "Sales Strategy",
      "Product Knowledge",
      "Communication",
    ],
    current: false,
  },
];

export default function Experience() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            Experience
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
            Business, operations, and customer strategy.
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-zinc-400">
            My professional experience combines administrative operations,
            financial coordination, customer engagement, and strategic problem
            solving.
          </p>
        </motion.div>

        <div className="mt-16 space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">
                    <Briefcase className="h-5 w-5 text-violet-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-bold">{exp.role}</h2>
                      {exp.current && (
                        <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm font-medium text-zinc-300">
                      {exp.company}
                    </p>
                    <div className="mt-1 flex items-center gap-1.5 text-xs text-zinc-500">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <p className="text-xs uppercase tracking-widest text-violet-400/70">
                  {exp.date}
                </p>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-zinc-400">
                {exp.description}
              </p>

              <ul className="mt-5 space-y-2.5">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-zinc-400">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/60" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/8 bg-white/[0.05] px-3.5 py-1 text-xs text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
