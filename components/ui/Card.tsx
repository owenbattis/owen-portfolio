import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border border-white/10
        bg-white/[0.03]
        p-8
        transition-all
        duration-300
        hover:border-violet-400/40
        hover:bg-white/[0.05]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
