const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-[#06402B]">Profil Desa</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Desa Jati adalah komunitas yang tumbuh di tengah hamparan hijau dengan potensi alam
            dan budaya yang kaya. Kami berkomitmen membangun desa yang berkelanjutan dan sejahtera.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-emerald-50">
              <p className="text-sm text-emerald-900">Visi</p>
              <p className="font-medium text-emerald-950">Terwujudnya desa hijau, mandiri, dan berdaya saing</p>
            </div>
            <div className="p-4 rounded-lg bg-emerald-50">
              <p className="text-sm text-emerald-900">Misi</p>
              <ul className="list-disc ml-5 text-emerald-950 text-sm space-y-1">
                <li>Pemberdayaan ekonomi warga</li>
                <li>Pelestarian lingkungan</li>
                <li>Pelayanan publik yang transparan</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img className="rounded-lg object-cover h-40 w-full" src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop" alt="Kegiatan warga" />
          <img className="rounded-lg object-cover h-40 w-full" src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1200&auto=format&fit=crop" alt="Panorama sawah" />
          <img className="rounded-lg object-cover h-40 w-full" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop" alt="Produk lokal" />
          <img className="rounded-lg object-cover h-40 w-full" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop" alt="Balai desa" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
