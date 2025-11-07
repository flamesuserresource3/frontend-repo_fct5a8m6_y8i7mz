import { Home, Info } from "lucide-react";
import { motion } from "framer-motion";

const HeaderHero = () => {
  return (
    <header className="relative overflow-hidden">
      {/* Top bar */}
      <div className="bg-[#06402B] text-white/95 backdrop-blur supports-[backdrop-filter]:bg-[#06402B]/95">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center ring-1 ring-white/20">
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

      {/* Hero */}
      <div className="relative isolate bg-gradient-to-b from-[#06402B] to-emerald-900 text-white">
        {/* Decorative animated orbs */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-10 -right-10 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-100 text-xs mb-4 ring-1 ring-white/20"
            >
              <Info className="h-4 w-4" />
              Selamat datang di website resmi Desa Jati
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight"
            >
              Hijau, Harmonis, dan Berdaya
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-white/90 leading-relaxed max-w-xl"
            >
              Pusat informasi, berita, dan produk unggulan desa. Jelajahi profil, visi & misi,
              simak kabar terbaru, serta lihat galeri kegiatan masyarakat Desa Jati.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <a
                href="#news"
                className="px-4 py-2 rounded-md bg-white text-[#06402B] font-medium shadow-sm hover:shadow-md transition shadow-white/10"
              >
                Lihat Berita
              </a>
              <a
                href="#catalog"
                className="px-4 py-2 rounded-md border border-white/30 text-white hover:bg-white/10 transition"
              >
                Katalog Produk
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-white/20 shadow-2xl">
              <motion.img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
                alt="Ilustrasi hamparan hijau desa"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHero;
