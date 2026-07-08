"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Featured Work", href: "/work" },
  { name: "Education", href: "/education" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-[#0d0d0f]/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        {/* Desktop nav */}
        <nav className="hidden justify-center px-6 py-5 md:flex">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-md">
            <Link
              href="/"
              className="rounded-full px-5 py-2 font-semibold tracking-tight text-white transition hover:bg-white/[0.08]"
            >
              Owen Battis
            </Link>

            <div className="h-5 w-px bg-white/10" />

            {links.map((link) => {
              const active =
                pathname === link.href ||
                (link.href === "/work" && pathname.startsWith("/work"));

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm transition-all ${
                    active
                      ? "bg-white text-black shadow-inner"
                      : "text-zinc-400 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Mobile nav */}
        <nav className="flex items-center justify-between px-5 py-4 md:hidden">
          <Link
            href="/"
            className="font-semibold tracking-tight text-white"
          >
            Owen Battis
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile menu dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-96 border-t border-white/10" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 px-5 py-4">
            {links.map((link) => {
              const active =
                pathname === link.href ||
                (link.href === "/work" && pathname.startsWith("/work"));

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`rounded-xl px-4 py-3 text-sm transition-all ${
                    active
                      ? "bg-violet-500/10 text-violet-300"
                      : "text-zinc-400 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      <div className="h-20" />
    </>
  );
}
