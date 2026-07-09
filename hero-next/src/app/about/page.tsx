export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-32 text-white">
      <section className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          About the course
        </p>

        <h1 className="hero-title mb-6 text-5xl font-extrabold tracking-tight">
          About TOXIC 101
        </h1>

        <p className="text-lg leading-8 text-slate-300">
          TOXIC 101 is a fictional premium course created to practice Next.js,
          React components, routing, props, conditional rendering and rendering
          data from JSON.
        </p>
      </section>
    </main>
  );
}
