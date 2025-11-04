"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/70 border-b border-zinc-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="text-2xl font-black tracking-widest">DEAD MARKET</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <a href="#shop" className="hover:text-zinc-50">Shop</a>
          <a href="#lookbook" className="hover:text-zinc-50">Lookbook</a>
          <a href="#about" className="hover:text-zinc-50">About</a>
        </nav>
      </div>
    </header>
  );
}
