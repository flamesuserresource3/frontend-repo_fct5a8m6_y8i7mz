import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="catalog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-6">
          <ShoppingBag className="h-5 w-5 text-[#06402B]" />
          <h3 className="text-2xl font-bold text-[#06402B]">Katalog Produk Unggulan</h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={i}
              className="group rounded-xl ring-1 ring-emerald-200 overflow-hidden bg-gradient-to-b from-emerald-50 to-white"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
            >
              <div className="relative h-40 w-full overflow-hidden">
                <motion.img
                  src={p.image}
                  alt={p.name}
                  className="h-40 w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-emerald-950">{p.name}</h4>
                <p className="text-emerald-800 text-sm mt-1">{p.price}</p>
                <button className="mt-3 w-full bg-[#06402B] text-white py-2 rounded-md text-sm hover:opacity-95 active:opacity-90">Pesan</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
