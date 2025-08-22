// components/ChargingStations.jsx
import React from "react";

const ChargingStations = () => {
  const levels = [
    { id: 1, title: "Səviyyə 1", power: "20 kW", charging: "30 dəqiqə" },
    { id: 2, title: "Səviyyə 2", power: "45 kW", charging: "25 dəqiqə" },
    { id: 3, title: "Səviyyə 3", power: "50 kW", charging: "20 dəqiqə" },
    { id: 4, title: "Səviyyə 4", power: "65 kW", charging: "15 dəqiqə" },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
        {/* Sol tərəf mətn */}
        <div>
          <h2 className="text-6xl font-bold text-gray-900 mb-4">100+</h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            İctimai Stansiyalar
          </h3>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
            İş yerlərində şarj imkanları elektrikli avtomobil sürücülərinə rahatlıq
            yaradır və şirkətin dayanıqlılıqla yanaşı ətraf mühitə olan məsuliyyətini
            nümayiş etdirir.
          </p>
          <div className="flex justify-center lg:justify-start">
            <img
              src="/images/adapter.jpg"
              alt="Şarj cihazı"
              className="mt-10 w-full max-w-[1200px] lg:max-w-[1600px] h-auto"
            />
          </div>
        </div>

        {/* Sağ tərəf səviyyələr */}
        <div className="grid grid-cols-2 gap-6">
          {levels.map((level) => (
            <div
              key={level.id}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition"
            >
              <div className="text-green-500 text-6xl mb-6">
                ⚡ {/* ikon əvəzinə şəkil də qoya bilərsən */}
              </div>
              <h4 className="text-xl font-semibold text-gray-800">
                {level.title}
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Güc: {level.power}
              </p>
              <p className="text-sm text-gray-600">
                Şarj vaxtı: {level.charging}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChargingStations;
