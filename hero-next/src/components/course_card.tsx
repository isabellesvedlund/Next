interface CourseCardProps {
  title: string;
  description: string;
  price: string;
  level: string;
  popular: boolean;
}

export default function CourseCard({
  title,
  description,
  price,
  level,
  popular,
}: CourseCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">
      {popular && (
        <span className="mb-4 inline-block rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-950">
          Popular
        </span>
      )}

      <h3 className="mb-3 text-2xl font-bold text-white">{title}</h3>

      <p className="mb-6 leading-7 text-slate-300">{description}</p>

      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-cyan-400">{level}</span>
        <span className="text-xl font-extrabold text-white">{price}</span>
      </div>
    </article>
  );
}
