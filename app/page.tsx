import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <Hero />
      <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        <img src="https://images.unsplash.com/photo-1582582429419-34c98d81b5e8" alt="Editorial 1" className="object-cover w-full h-[400px] opacity-80 hover:opacity-100 transition" />
        <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4" alt="Editorial 2" className="object-cover w-full h-[400px] opacity-80 hover:opacity-100 transition" />
        <img src="https://images.unsplash.com/photo-1600185365223-8c3b87e5f1e7" alt="Editorial 3" className="object-cover w-full h-[400px] opacity-80 hover:opacity-100 transition" />
      </section>

      <section className="text-center p-12 md:p-24">
        <p className="text-xl md:text-2xl font-light tracking-wide italic text-gray-300">
          “We design silence. We craft symbols. We reject excess.”
        </p>
      </section>

      <footer className="text-gray-500 text-sm pb-8">
        © Dead Market 2025
      </footer>
    </main>
  );
}
