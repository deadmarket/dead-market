"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-zinc-400">Chapter I — AW/25</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05]">
            <span className="bg-gradient-to-b from-zinc-50 to-zinc-300 bg-clip-text text-transparent">Gothic minimalism</span>{" "}
            engineered for presence.
          </h1>
          <p className="mt-6 max-w-xl text-zinc-300">Monochrome silhouettes. Architectural lines. Limited drops crafted in small batches.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#shop" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,.05)]">Shop the Drop →</a>
            <a href="#lookbook" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium border border-zinc-800 hover:border-zinc-700">View Lookbook</a>
          </div>
        </motion.div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="relative aspect-[16/8] w-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
          <Image src="https://images.unsplash.com/photo-1520975922284-9e0ce8270c04?q=80&w=2000&auto=format&fit=crop" alt="Hero" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
