export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-12 px-6 py-20 md:flex-row">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Next.js + Tailwind
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Bygg en modern startsida med en snygg Hero
          </h1>

          <p className="mb-8 text-lg leading-8 text-slate-300">
            En responsiv Hero-sektion byggd med Next.js, TypeScript och Tailwind
            CSS. Perfekt som första sida i ett modernt webbprojekt.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-cyan-400 px-8 py-4 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Kom igång
            </a>

            <a
              href="#"
              className="rounded-full border border-slate-600 px-8 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-slate-950"
            >
              Läs mer
            </a>
          </div>
        </div>

        <div className="relative h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"></div>

        <div className="absolute bottom-8 text-sm text-slate-500">
          Skapad med Next.js
        </div>
      </section>
    </main>
  );
}
