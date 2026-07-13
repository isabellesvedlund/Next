import Link from "next/link";

export default function CourseNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <section className="max-w-2xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Course not found
        </p>

        <h1 className="hero-title mb-6 text-6xl font-extrabold tracking-tight">
          404
        </h1>

        <p className="mb-8 text-lg leading-8 text-slate-300">
          This toxic transformation does not exist, has been cancelled or was
          simply too powerful for the curriculum.
        </p>

        <Link
          href="/"
          className="inline-block rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:scale-105 hover:bg-cyan-300"
        >
          Back to courses
        </Link>
      </section>
    </main>
  );
}
