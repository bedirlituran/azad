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
            alt="Electric Car Charging"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div>
          <p className="text-emerald-400 uppercase text-xs tracking-widest mb-2">
            Electric vehicle
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
            Charging into the Future — <br /> Silent Power Unleashed
          </h2>
          <p className="text-gray-500 text-base mb-8">
            Public charging stations play a crucial role in supporting electric
            vehicle adoption by providing drivers with access to charging
            infrastructure while away from home or work.
          </p>

          {/* Button */}
          <button className="bg-emerald-400 hover:bg-emerald-500 transition text-black font-medium px-6 py-3 rounded-full flex items-center gap-2">
            Read More <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
