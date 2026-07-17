import Image from "next/image";
import Link from "next/link";
import type { Character } from "@/data/characters";

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">
      <Image
        src={character.image}
        alt={character.name}
        width={300}
        height={300}
        className="h-72 w-full object-cover"
      />

      <div className="p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cyan-400">
            {character.species}
          </span>

          <span className="text-sm text-slate-400">{character.status}</span>
        </div>

        <h2 className="mb-3 text-2xl font-extrabold text-white">
          {character.name}
        </h2>

        <p className="mb-2 text-sm text-slate-300">Last known location:</p>

        <p className="mb-6 font-semibold text-white">
          {character.location.name}
        </p>

        <Link
          href={`/characters/${character.id}`}
          className="block rounded-full border border-cyan-400 px-5 py-3 text-center font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
        >
          View character
        </Link>
      </div>
    </article>
  );
}
