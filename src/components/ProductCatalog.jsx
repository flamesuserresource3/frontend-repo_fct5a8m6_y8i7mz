import { ShoppingBag } from "lucide-react";

const products = [
  {
    name: "Madu Hutan Jati",
    price: "Rp 60.000",
    image:
      "https://images.unsplash.com/photo-1505576633757-6f38b38d2ceb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Kopi Robusta Desa",
    price: "Rp 45.000",
    image:
      "https://images.unsplash.com/photo-1503481766315-7a586b20f66d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Kerajinan Bambu",
    price: "Rp 35.000",
    image:
      "https://images.unsplash.com/photo-1589739900260-2667f2bf1eb7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Teh Herbal Daun Jati",
    price: "Rp 25.000",
    image:
      "https://images.unsplash.com/photo-1547517023-7ca0c162f816?q=80&w=1200&auto=format&fit=crop",
  },
];

const ProductCatalog = () => {
  return (
    <section id="catalog" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-6">
          <ShoppingBag className="h-5 w-5 text-[#06402B]" />
          <h3 className="text-2xl font-bold text-[#06402B]">Katalog Produk Unggulan</h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div key={i} className="rounded-lg ring-1 ring-emerald-200 overflow-hidden bg-emerald-50">
              <img src={p.image} alt={p.name} className="h-36 w-full object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-emerald-950">{p.name}</h4>
                <p className="text-emerald-800 text-sm mt-1">{p.price}</p>
                <button className="mt-3 w-full bg-[#06402B] text-white py-2 rounded-md text-sm hover:opacity-90">Pesan</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
