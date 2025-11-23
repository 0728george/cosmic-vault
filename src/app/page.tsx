import { documents } from "@/data/documents";
import { StarsBackground } from '@/components/StarsBackground';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <StarsBackground />
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00f0ff]">
          Cosmic Vault
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-16 leading-relaxed">
          Permanent archive of public-domain and freely-licensed knowledge.
          <br />
          Humanity’s backup against digital amnesia.
        </p>
        <SearchInterface />
      </div>
      <footer className="absolute bottom-8 text-gray-500 text-sm">
        © 2025 Cosmic Vault • All content public domain
      </footer>
    </main>
  );
}
