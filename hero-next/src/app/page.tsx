import Hero from "@/components/hero";
import CharacterCard from "@/components/character-card";
import { getCharacters } from "@/data/characters";

export default async function Home() {
  const data = await getCharacters();

  const characters = data.results.slice(0, 8);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Multiverse faculty
        </p>

        <h2 className="hero-title mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
          Meet our most toxic experts
        </h2>

        <p className="mb-12 max-w-2xl text-lg leading-8 text-slate-300">
          Character data is fetched from an external REST API and rendered
          dynamically with React components.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </section>
    </main>
  );
}
