import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ChargingSection() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="w-full">
          <Image
            src="/images/car-charging.jpg" // öz şəkil yolunu buraya yaz
            alt="Elektrikli Avtomobilin Şarjı"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div>
          <p className="text-emerald-400 uppercase text-xs tracking-widest mb-2">
            Elektrikli avtomobil
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
            Gələcəyə Doğru Şarj — <br /> Səssiz Güc Azadlığı
          </h2>
          <p className="text-gray-500 text-base mb-8">
            İctimai şarj məntəqələri elektrikli avtomobillərin yayılmasında
            mühüm rol oynayır. Onlar sürücülərə evdən və işdən kənarda da
            enerji doldurma imkanı təqdim edir.
          </p>

          {/* Button */}
          <button className="bg-emerald-400 hover:bg-emerald-500 transition text-black font-medium px-6 py-3 rounded-full flex items-center gap-2">
            Ətraflı Oxu <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
