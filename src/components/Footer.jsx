import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#06402B] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h4 className="text-lg font-semibold">Desa Jati</h4>
          <p className="text-sm text-white/80 mt-2">Jalan Raya Jati No. 1, Nusantara</p>
          <p className="text-sm text-white/80">Email: info@desajati.id</p>
          <p className="text-sm text-white/80">Telp: (021) 123-456</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <h4 className="text-lg font-semibold">Visi</h4>
          <p className="text-sm text-white/80 mt-2">Mewujudkan desa hijau, mandiri, dan berdaya saing melalui kolaborasi dan inovasi.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <h4 className="text-lg font-semibold">Misi</h4>
          <ul className="text-sm text-white/80 mt-2 space-y-1 list-disc ml-5">
            <li>Pemberdayaan ekonomi berbasis potensi lokal</li>
            <li>Pelestarian lingkungan dan budaya</li>
            <li>Pelayanan publik yang transparan</li>
          </ul>
        </motion.div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-white/70">
          © {new Date().getFullYear()} Pemerintah Desa Jati. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
