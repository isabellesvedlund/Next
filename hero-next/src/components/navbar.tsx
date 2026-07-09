import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-bold text-cyan-400">
          TOXIC 101
        </Link>

        <div className="flex gap-6 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-cyan-400">
            Home
          </Link>

          <Link href="/about" className="hover:text-cyan-400">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
