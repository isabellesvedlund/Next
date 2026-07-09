import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-12 px-6 py-20 md:flex-row">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Dr. ISABELLE NORDSTRÖM - TOXICOLOGIST PROFESSOR
          </p>

          <div className="mb-6 flex items-center gap-5">
            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              TOXIC 101
            </h1>

            <Image
              src="/isabelle.png"
              alt="Dr. Isabelle Nordström"
              width={90}
              height={90}
              className="rounded-full border-2 border-cyan-400 object-cover"
            />
          </div>

          <p className="mb-8 text-lg leading-8 text-slate-300">
            Cutting edge course in toxicology. Be the hero of your own story -
            gaslight your way to success and become your best toxic self.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-cyan-400 px-8 py-4 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Get started.
            </a>

            <a
              href="#"
              className="rounded-full border border-slate-600 px-8 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-slate-950"
            >
              Learn more.
            </a>
          </div>
        </div>

        <div className="relative h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"></div>

        <div className="absolute bottom-8 text-sm text-slate-500">
          Website created by Isabelle Nordström Creative inc.
        </div>
      </section>
    </main>
  );
}
