"use client";
import Image from "next/image";

const ChargingSolutions = () => {
  const solutions = [
    {
      id: 1,
      title: "Ev Şarjı",
      img: "/images/1.jpg",
    },
    {
      id: 2,
      title: "İctimai Stansiyalar",
      img: "/images/2.jpg",
    },
    {
      id: 3,
      title: "Korporativ Həllər",
      img: "/images/3.jpg",
    },
  ];

  return (
    <section className="bg-[#0b1320] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h4 className="text-green-400 uppercase tracking-wider mb-2">
          Elektrikli Avtomobil
        </h4>
        <h2 className="text-3xl md:text-5xl font-bold leading-snug mb-12">
          Gərginliyi Artır, <br /> Yaşıl Gələcəyə Sür
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              {/* Şəkil */}
              <div className="overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-[350px] object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Yazı */}
              <div className="absolute bottom-6 left-6 text-lg font-medium transition-all duration-500 group-hover:-translate-y-2">
                {item.title} <span className="ml-1">↗</span>
              </div>

              {/* Overlay effekt */}
              <div className="absolute inset-0  bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        <button className="mt-12 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-full text-black font-semibold transition">
          Ətraflı Bax ↗
        </button>
      </div>
    </section>
  );
};

export default ChargingSolutions;
