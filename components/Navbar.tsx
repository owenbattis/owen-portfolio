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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-[#0d0d0f]/80 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav className="flex justify-center px-6 py-5">
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
      </header>

      <div className="h-20" />
    </>
  );
}
