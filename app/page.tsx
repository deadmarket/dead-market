"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div>
      <Header />
      <Hero />

      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Brut Minimalism", desc: "Clean lines, stark contrasts, purposeful silence in design." },
            { title: "Nocturnal Palette", desc: "Monochrome blacks with textured depth for a refined gothic tone." },
            { title: "Limited Drops", desc: "Numbered pieces, low volume, no reruns. Presence over ubiquity." },
          ].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.4, delay: i * 0.1 }} className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-lg">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">AW/25 Collection</h2>
          <a href="#" className="text-sm text-zinc-300 hover:text-zinc-50">View all →</a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Shadow Hoodie", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
            { title: "Ritual Tee", img: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1600&auto=format&fit=crop" },
            { title: "Nocturne Cargo", img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop" },
            { title: "Ashen Trench", img: "https://images.unsplash.com/photo-1544025161-4815e1e213ef?q=80&w=1600&auto=format&fit=crop" },
          ].map((p, i) => (
            <motion.a key={p.title} href="#" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.4, delay: i * 0.06 }} className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
              <div className="aspect-[3/4] w-full bg-zinc-900">
                <Image src={p.img} alt={p.title} width={800} height={1067} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/70 backdrop-blur px-3 py-2 text-sm flex items-center justify-between">
                  <span>{p.title}</span>
                  <span className="text-zinc-400">Shop →</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="lookbook" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
          <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
            {[
              "https://images.unsplash.com/photo-1520975922284-9e0ce8270c04?q=80&w=1600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop",
            ].map((src, i) => (
              <motion.div key={src} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.35, delay: i * 0.05 }} className="aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
                <Image src={src} alt="Lookbook" width={800} height={1000} className="h-full w-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 md:p-8 text-center">
          <h3 className="text-xl font-semibold">Join the DEAD MARKET list</h3>
          <p className="mt-2 text-sm text-zinc-300">Early access to drops, restocks, and secret collabs.</p>
          <form className="mt-6 flex gap-2 justify-center" onSubmit={(e)=>e.preventDefault()}>
            <input type="email" required placeholder="you@domain.com" className="w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none focus:border-zinc-600" />
            <button className="rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm hover:bg-zinc-800">Notify me</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
