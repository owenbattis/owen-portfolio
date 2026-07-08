import Hero from "@/components/Hero";
import CaseStudyPreview from "@/components/CaseStudyPreview";

const sections = [
  {
    title: "Experience",
    description:
      "Professional experience developing communication, organization, operations, and customer-focused problem solving.",
    link: "/experience",
  },
  {
    title: "Case Studies",
    description:
      "Explore detailed business projects including my globally ranked GLO-BUS business simulation and future technology projects.",
    link: "/work",
  },
  {
    title: "Education",
    description:
      "Academic background, international study abroad experience, and cultural immersion throughout South Korea.",
    link: "/education",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />

      <CaseStudyPreview />

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              Explore
            </p>

            <h2 className="mt-5 text-5xl font-bold tracking-tight md:text-6xl">
              Discover more.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {sections.map((section) => (
              <a
                key={section.title}
                href={section.link}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-violet-400/20 hover:bg-violet-500/[0.02]"
              >
                <h3 className="text-xl font-bold transition group-hover:text-violet-300">
                  {section.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {section.description}
                </p>

                <p className="mt-5 flex items-center gap-1.5 text-sm text-zinc-500 transition group-hover:text-violet-300">
                  Explore
                  <span className="transition group-hover:translate-x-1">→</span>
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
