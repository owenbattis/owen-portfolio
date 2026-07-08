export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold">Owen Battis</p>

          <p className="mt-1 text-sm text-zinc-500">
            Strategic Marketing Graduate
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-zinc-400">
          <a href="/resume" className="transition hover:text-white">
            Resume
          </a>

          <a href="/contact" className="transition hover:text-white">
            Contact
          </a>

          <a
            href="https://www.linkedin.com/in/owen-battis/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl text-sm text-zinc-600">
        © {new Date().getFullYear()} Owen Battis. All rights reserved.
      </div>
    </footer>
  );
}
