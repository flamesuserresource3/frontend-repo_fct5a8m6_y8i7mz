import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_50%)]" />
      <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-[#06402B]"
          >
            Profil Desa
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-gray-700 leading-relaxed"
          >
            Desa Jati adalah komunitas yang tumbuh di tengah hamparan hijau dengan potensi alam
            dan budaya yang kaya. Kami berkomitmen membangun desa yang berkelanjutan dan sejahtera.
          </motion.p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-5 rounded-xl bg-emerald-50 ring-1 ring-emerald-100"
            >
              <p className="text-sm text-emerald-900">Visi</p>
              <p className="font-medium text-emerald-950">Terwujudnya desa hijau, mandiri, dan berdaya saing</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-5 rounded-xl bg-emerald-50 ring-1 ring-emerald-100"
            >
              <p className="text-sm text-emerald-900">Misi</p>
              <ul className="list-disc ml-5 text-emerald-950 text-sm space-y-1">
                <li>Pemberdayaan ekonomi warga</li>
                <li>Pelestarian lingkungan</li>
                <li>Pelayanan publik yang transparan</li>
              </ul>
            </motion.div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
          ].map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt={`Foto ${i + 1}`}
              className="rounded-lg object-cover h-40 w-full"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
