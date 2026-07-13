import type { Metadata } from "next";
import Link from "next/link";
import courses from "@/data/courses.json";
import { notFound } from "next/navigation";

interface CoursePageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { id } = await params;

  const courseId = Number(id);
  const course = courses.find((course) => course.id === courseId);

  if (!course) {
    return {
      title: "Course not found | TOXIC 101",
      description: "The requested course could not be found.",
    };
  }

  return {
    title: `${course.title} | TOXIC 101`,
    description: course.description,
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;

  const courseId = Number(id);

  const course = courses.find((course) => course.id === courseId);

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-32 text-white">
      <section className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          {course.level} course
        </p>

        <h1 className="hero-title mb-6 text-5xl font-extrabold tracking-tight md:text-6xl">
          {course.title}
        </h1>

        <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
          {course.description}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <span className="rounded-full border border-cyan-400 px-5 py-2 text-cyan-400">
            {course.level}
          </span>

          <span className="text-2xl font-extrabold">{course.price}</span>

          {course.popular && (
            <span className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold uppercase text-slate-950">
              Popular
            </span>
          )}
        </div>
        <Link
          href="/"
          className="mt-10 inline-block text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          ← Back to all courses
        </Link>
      </section>
    </main>
  );
}
