interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-white/10
        bg-white/[0.02]
        px-4
        py-2
        text-sm
        text-zinc-400
        transition
        hover:border-violet-400/40
        hover:text-white
      "
    >
      {children}
    </span>
  );
}
