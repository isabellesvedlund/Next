import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-32 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About the course
          </p>

          <h1 className="hero-title mb-6 text-5xl font-extrabold tracking-tight md:text-6xl">
            The world&apos;s first premium course in strategic toxicity.
          </h1>

          <p className="text-lg leading-8 text-slate-300">
            TOXIC 101 is a fictional course concept created to practice modern
            web development with Next.js, React components, routing, props, JSON
            data and conditional rendering.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            The idea is to combine satire, luxury branding and clean design into
            a playful landing page that feels like a real premium course
            platform.
          </p>
        </div>

        <section className="mb-20 grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-4xl font-extrabold text-cyan-400">12</p>
            <p className="mt-2 text-sm text-slate-300">Expert instructors</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-4xl font-extrabold text-cyan-400">25K</p>
            <p className="mt-2 text-sm text-slate-300">Fictional graduates</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-4xl font-extrabold text-cyan-400">4.9</p>
            <p className="mt-2 text-sm text-slate-300">Average rating</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-4xl font-extrabold text-cyan-400">100%</p>
            <p className="mt-2 text-sm text-slate-300">Dramatic confidence</p>
          </div>
        </section>

        <section className="mb-20 grid gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Our philosophy
            </p>

            <h2 className="hero-title mb-6 text-4xl font-extrabold tracking-tight">
              Confidence, chaos and clean component structure.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              The project is built around reusable React components. Instead of
              repeating the same code, different parts of the page are separated
              into smaller building blocks.
            </p>

            <p>
              Course data is stored in JSON and rendered dynamically, which
              makes the page easier to update and expand later.
            </p>
          </div>
        </section>

        <section className="grid items-center gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-[300px_1fr]">
          <Image
            src="/isabelle.png"
            alt="Dr. Isabelle Nordström"
            width={300}
            height={300}
            className="mx-auto h-64 w-64 rounded-full border-2 border-cyan-400 object-cover shadow-2xl shadow-cyan-400/30"
          />

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Meet your professor
            </p>

            <h2 className="mb-4 text-4xl font-extrabold">
              Dr. Isabelle Nordström
            </h2>

            <p className="text-lg leading-8 text-slate-300">
              A fictional toxicology professor and the face of TOXIC 101. This
              section shows how text, images and layout can work together to
              create a more complete page.
            </p>

            <a
              href="/"
              className="mt-8 inline-block rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:scale-105 hover:bg-cyan-300"
            >
              Back to courses
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
