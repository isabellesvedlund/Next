import Hero from "@/components/hero";
import CourseCard from "@/components/course_card";
import courses from "@/data/courses.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Premium curriculum
        </p>

        <h2 className="hero-title mb-12 text-4xl font-extrabold tracking-tight md:text-5xl">
          Choose your toxic transformation
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              price={course.price}
              level={course.level}
              popular={course.popular}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
