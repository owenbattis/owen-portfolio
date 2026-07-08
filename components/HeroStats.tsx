"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "2nd Worldwide",
    label: "GLO-BUS GTDS Ranking",
  },
  {
    value: "3.85",
    label: "Major GPA",
  },
  {
    value: "Korea University",
    label: "Study Abroad Experience",
  },
];

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mt-16 grid max-w-3xl grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3"
    >
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-2xl font-bold">{stat.value}</p>

          <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
        </div>
      ))}
    </motion.div>
  );
}
