"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type ImageModalProps = {
  src: string;
  alt: string;
};

export default function ImageModal({ src, alt }: ImageModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group relative block w-full cursor-zoom-in"
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={900}
          className="w-full rounded-xl object-contain transition duration-300 group-hover:scale-[1.02]"
        />

        <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/0 transition group-hover:bg-black/20">
          <span className="rounded-full border border-white/20 bg-black/60 px-4 py-2 text-sm text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100">
            Click to expand
          </span>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[95vh] max-w-[95vw]"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute -right-3 -top-3 z-10 rounded-full border border-white/20 bg-black/80 p-2 text-white transition hover:bg-white/10"
              >
                <X size={20} />
              </button>

              <Image
                src={src}
                alt={alt}
                width={2000}
                height={1600}
                className="max-h-[90vh] w-auto rounded-2xl object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
