export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-32 text-white">
      <section className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          About the course
        </p>

        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.8),0_0_22px_rgba(34,211,238,0.45)]">
          About TOXIC 101
        </h1>

        <p className="text-lg leading-8 text-slate-300">
          Welcome to TOXIC 101. This fictional course explores the humorous side
          of ambition, success and confidence through satire.
        </p>
      </section>
    </main>
  );
}
