import Image from "next/image";

const products = [
  {
    id: 1,
    title: "2-Port Charging Station",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
    oldPrice: "$3,500.00",
    price: "$2,499.00",
    sale: true,
    img: "/images/p1.jpg",
  },
  {
    id: 2,
    title: "Home Charging Mini",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
    price: "$1,799.00",
    img: "/images/p2.jpg",
  },
  {
    id: 3,
    title: "18 kW Public Charger",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
    price: "$7,299.00",
     img: "/images/p3.jpg",
  },
  {
    id: 4,
    title: "Fast EV Charger",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
    price: "$4,200.00",
     img: "/images/p4.jpg",
  },
  {
    id: 5,
    title: "Wallbox Charger",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
    price: "$999.00",
        img: "/images/p5.jpg",
  },
  {
    id: 6,
    title: "Portable EV Charger",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
    price: "$650.00",
      img: "/images/p6.jpg",
  },
  {
    id: 7,
    title: "Solar Charging Station",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
    price: "$8,499.00",
       img: "/images/p7.jpg",
  },
  {
    id: 8,
    title: "Compact Charger",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
    price: "$499.00",
     img: "/images/p8.jpg",
  },
  {
    id: 9,
    title: "Smart EV Station",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
    price: "$3,299.00",
    img: "/images/p9.jpg",
  },
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h4 className="text-green-500 uppercase tracking-wide text-sm mb-2">
        Online Store
      </h4>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Popular Charging Stations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((item) => (
          <div
            key={item.id}
            className="relative border rounded-xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group"
          >
            {/* Sale Badge */}
            {item.sale && (
              <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                SALE
              </span>
            )}

            {/* Şəkil */}
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-64 object-contain transform transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Mətnlər */}
            <div className="p-5">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{item.desc}</p>

              <div className="mt-3">
                {item.oldPrice && (
                  <span className="line-through text-gray-400 text-sm mr-2">
                    {item.oldPrice}
                  </span>
                )}
                <span className="text-xl font-bold text-gray-900">
                  {item.price}
                </span>
              </div>

              <button className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
