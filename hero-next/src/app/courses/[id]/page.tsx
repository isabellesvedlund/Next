interface CoursePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-32 text-white">
      <section className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Dynamic course route
        </p>

        <h1 className="hero-title text-5xl font-extrabold">Course ID: {id}</h1>
      </section>
    </main>
  );
}
