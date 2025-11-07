const Footer = () => {
  return (
    <footer id="contact" className="bg-[#06402B] text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold">Desa Jati</h4>
          <p className="text-sm text-white/80 mt-2">Jalan Raya Jati No. 1, Nusantara</p>
          <p className="text-sm text-white/80">Email: info@desajati.id</p>
          <p className="text-sm text-white/80">Telp: (021) 123-456</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Visi</h4>
          <p className="text-sm text-white/80 mt-2">Mewujudkan desa hijau, mandiri, dan berdaya saing melalui kolaborasi dan inovasi.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Misi</h4>
          <ul className="text-sm text-white/80 mt-2 space-y-1 list-disc ml-5">
            <li>Pemberdayaan ekonomi berbasis potensi lokal</li>
            <li>Pelestarian lingkungan dan budaya</li>
            <li>Pelayanan publik yang transparan</li>
          </ul>
        </div>
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
