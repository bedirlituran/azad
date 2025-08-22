import { ArrowUpRight } from "lucide-react";
import { Bolt, PlugZap, Cable, BatteryCharging } from "lucide-react";

export default function ElectricVehicleSection() {
  const features = [
    {
      icon: <Bolt className="text-emerald-400 w-8 h-8" />,
      title: "Yüksək Keyfiyyətli Stansiyalar",
      desc: "İş yerlərində şarj imkanları elektrikli avtomobil sürücülərinə əlavə rahatlıq yaradır.",
    },
    {
      icon: <PlugZap className="text-emerald-400 w-8 h-8" />,
      title: "Sürətli Quraşdırma",
      desc: "Bir çox enerji şirkətləri şarj məntəqələrinin quraşdırılmasını dəstəkləmək üçün güzəştlər təqdim edir.",
    },
    {
      icon: <Cable className="text-emerald-400 w-8 h-8" />,
      title: "Aksesuar Mağazası",
      desc: "Elektrikli avtomobillərin populyarlığı artdıqca, şarj prosesinin incəliklərini anlamaq vacibdir.",
    },
    {
      icon: <BatteryCharging className="text-emerald-400 w-8 h-8" />,
      title: "Bərpa Olunan Enerji",
      desc: "Müxtəlif şarj üsullarını və ən yaxşı təcrübələri öyrənərək daha ekoloji və qənaətli seçim edin.",
    },
  ];

  return (
    <section className="bg-[#050d14] px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-emerald-400 uppercase text-xs tracking-widest mb-2">
          Elektrikli avtomobil
        </p>
        <div className="lg:flex lg:justify-between lg:items-start gap-10">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-snug max-w-xl">
            Sabahı Bu Gündən Sür: <br /> Elektrikli İnqilab
          </h2>
          <p className="text-gray-300 text-sm max-w-lg mt-4 lg:mt-0">
            Lazım olduğundan artıq şarj məntəqəsini tutmamaq, vaxt limitlərinə
            riayət etmək və ümumi etik qaydalara əməl etmək hər kəs üçün rahat
            istifadəni təmin edir.
          </p>
        </div>

        {/* Features */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="border-l border-gray-800 pl-5 flex flex-col gap-4"
            >
              {item.icon}
              <div>
                <h3 className="text-white font-semibold text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </div>
              <ArrowUpRight className="text-emerald-400 w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
