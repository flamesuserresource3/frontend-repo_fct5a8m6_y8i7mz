import { Home, Info } from "lucide-react";

const HeaderHero = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="bg-[#06402B] text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
              <Home className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-wide">Desa Jati</h1>
              <p className="text-xs text-white/80">Desa hijau, masa depan berdaya</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-emerald-200 transition-colors">Profil</a>
            <a href="#news" className="hover:text-emerald-200 transition-colors">Berita</a>
            <a href="#gallery" className="hover:text-emerald-200 transition-colors">Galeri</a>
            <a href="#catalog" className="hover:text-emerald-200 transition-colors">Katalog</a>
            <a href="#contact" className="hover:text-emerald-200 transition-colors">Kontak</a>
          </nav>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#06402B] to-emerald-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-100 text-xs mb-4">
              <Info className="h-4 w-4" />
              Selamat datang di website resmi Desa Jati
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">Hijau, Harmonis, dan Berdaya</h2>
            <p className="mt-4 text-white/90 leading-relaxed">
              Pusat informasi, berita, dan produk unggulan desa. Jelajahi profil, visi dan misi,
              simak kabar terbaru, serta lihat galeri kegiatan masyarakat Desa Jati.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#news" className="px-4 py-2 rounded-md bg-white text-[#06402B] font-medium shadow hover:shadow-md transition">Lihat Berita</a>
              <a href="#catalog" className="px-4 py-2 rounded-md border border-white/30 text-white hover:bg-white/10 transition">Katalog Produk</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-white/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
                alt="Ilustrasi hamparan hijau desa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHero;
