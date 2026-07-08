interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
        {eyebrow}
      </p>

      <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
        {title}
      </h1>

      {description && (
        <p className="mt-6 text-xl leading-relaxed text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}
