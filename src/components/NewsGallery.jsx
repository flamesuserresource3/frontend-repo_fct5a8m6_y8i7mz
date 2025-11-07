import { Newspaper, Images } from "lucide-react";
import { motion } from "framer-motion";

const mockNews = [
  {
    title: "Panen Raya Padi Menggembirakan",
    date: "12 Okt 2025",
    excerpt:
      "Hasil panen tahun ini meningkat 20% berkat program irigasi terpadu dan penggunaan bibit unggul.",
    image:
      "https://images.unsplash.com/photo-1519121785383-3229633bb75b?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Pelatihan UMKM Produk Olahan Jati",
    date: "5 Okt 2025",
    excerpt:
      "Pelatihan menghasilkan 30 pelaku UMKM baru dengan fokus pada produk ramah lingkungan.",
    image:
      "https://images.unsplash.com/photo-1519377483941-d4c7b2b3a0d6?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Gotong Royong Bersih Desa",
    date: "28 Sep 2025",
    excerpt:
      "Warga berpartisipasi aktif membersihkan saluran air dan menanam 500 bibit pohon.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519377483941-d4c7b2b3a0d6?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1600&auto=format&fit=crop",
];

const NewsGallery = () => {
  return (
    <section className="bg-emerald-50">
      <div id="news" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center gap-2 mb-6">
          <Newspaper className="h-5 w-5 text-[#06402B]" />
          <h3 className="text-2xl font-bold text-[#06402B]">Berita Terbaru</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {mockNews.map((n, i) => (
            <motion.article
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-sm ring-1 ring-emerald-100 hover:shadow-md transition"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
            >
              <motion.img
                src={n.image}
                alt={n.title}
                className="h-40 w-full object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              />
              <div className="p-4">
                <p className="text-xs text-emerald-700 mb-1">{n.date}</p>
                <h4 className="font-semibold text-gray-900">{n.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{n.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div id="gallery" className="max-w-6xl mx-auto px-4 pb-16">
        <div className="flex items-center gap-2 mb-6">
          <Images className="h-5 w-5 text-[#06402B]" />
          <h3 className="text-2xl font-bold text-[#06402B]">Galeri</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryImages.map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt={`Galeri ${i + 1}`}
              className="h-40 w-full object-cover rounded-lg"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.04 * i }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGallery;
