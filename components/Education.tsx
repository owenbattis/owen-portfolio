"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const koreaHighlights = [
  {
    title: "Global Perspective",
    text: "Studying abroad at Korea University Sejong Campus expanded my understanding of international environments, cultural differences, and global communication.",
  },
  {
    title: "Exploring Korea",
    text: "Traveled throughout Korea including Seoul, Busan, Jeju, Jeonju, Daejeon, Sejong, Gongju, Cheongju, and more while experiencing different communities and regions.",
  },
  {
    title: "Culture & Creativity",
    text: "Studied Korean culture, language, ceramics, art history, and human resource management while experiencing museums, cafés, parks, and cultural sites.",
  },
];

const landscapePhotos = [
  { src: "/images/korea/image16.png", alt: "Sunset over the city skyline" },
  { src: "/images/korea/image4.png", alt: "Korea University campus in bloom" },
  { src: "/images/korea/image2.png", alt: "Traditional palace architecture" },
];

const portraitPhotos = [
  { src: "/images/korea/image9.png", alt: "Volcanic rock arch, Jeju Island" },
  { src: "/images/korea/image6.png", alt: "Handmade ceramic vase" },
  { src: "/images/korea/image5.png", alt: "Coastal skyride over the ocean" },
];

export default function Education() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            Education
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
            Business foundations and global experience.
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-zinc-400">
            My academic journey combines strategic marketing, international
            experience, and a curiosity for different cultures and perspectives.
          </p>
        </motion.div>

        <div className="mt-16 space-y-6">
          {/* UW-River Falls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">
                  University of Wisconsin–River Falls
                </h2>
                <p className="mt-1 text-sm font-medium text-zinc-300">
                  Bachelor of Science in Strategic Marketing
                </p>
              </div>
              <p className="text-xs uppercase tracking-widest text-violet-400/70">
                Dec 2025
              </p>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              Completed a business-focused marketing degree centered around
              strategy, consumer insights, international business, sales,
              research, finance, and analytics.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Major GPA: 3.85",
                "Dean's List",
                "Senior Merit",
                "Marketing Strategy",
                "International Business",
                "Business Analytics",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/8 bg-white/[0.05] px-3.5 py-1 text-xs text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Korea University */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.06] to-white/[0.02] p-6 md:p-10"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">
                  Korea University Sejong Campus
                </h2>
                <p className="mt-2 text-lg text-zinc-300">
                  International Study Abroad Experience
                </p>
              </div>
              <p className="text-xs uppercase tracking-widest text-violet-400/70">
                Spring 2025
              </p>
            </div>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-400">
              Completed a study abroad program through the University of
              Wisconsin System. Studied Korean culture, language, ceramics, art
              history, and human resource management while developing
              cross-cultural communication skills.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {koreaHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/8 bg-black/20 p-5"
                >
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Photo Gallery */}
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
              {landscapePhotos.map((photo) => (
                <div
                  key={photo.src}
                  className="relative h-[200px] overflow-hidden rounded-xl"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              ))}
              {portraitPhotos.map((photo) => (
                <div
                  key={photo.src}
                  className="overflow-hidden rounded-xl"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={1000}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="w-full h-auto transition duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Century College */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">Century College</h2>
                <p className="mt-1 text-sm font-medium text-zinc-300">
                  Associate of Arts in Liberal Arts & Sciences
                </p>
              </div>
              <p className="text-xs uppercase tracking-widest text-violet-400/70">
                2021 – Dec 2023
              </p>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              Completed foundational coursework across humanities, social
              sciences, communication, and general education before transferring
              to the University of Wisconsin–River Falls.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/8 bg-white/[0.05] px-3.5 py-1 text-xs text-zinc-300">
                Graduated with Highest Distinction
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
