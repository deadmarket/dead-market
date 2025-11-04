export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-zinc-400">© {new Date().getFullYear()} DEAD MARKET — All rights reserved.</p>
        <div className="flex items-center gap-4 text-xs text-zinc-400">
          <a href="#" className="hover:text-zinc-200">Privacy</a>
          <a href="#" className="hover:text-zinc-200">Terms</a>
          <a href="#" className="hover:text-zinc-200">Contact</a>
        </div>
      </div>
    </footer>
  );
}
