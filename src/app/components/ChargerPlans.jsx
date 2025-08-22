import React from "react";

export default function ChargingPlans() {
  const plans = [
    {
      name: "Ev Şarj Cihazı",
      power: "3.5 kW",
      price: "₼129",
      features: [
        "✓ Saatda 60 mil məsafə üçün enerji",
        "✓ Pulsuz servis və yeniləmələr",
        "✓ 24/7 peşəkar dəstək",
        "✓ Mobil tətbiqlə izləmə",
      ],
      popular: false,
    },
    {
      name: "İctimai Stansiya",
      power: "18 kW",
      price: "₼1799",
      features: [
        "✓ Sürətli şarj — saatda 200 milədək",
        "✓ Pulsuz servis və yeniləmələr",
        "✓ Prioritet dəstək 24/7",
        "✓ Ağıllı izləmə sistemi",
      ],
      popular: true, // ən çox seçilən
    },
    {
      name: "Kommersiya Pro",
      power: "50 kW",
      price: "₼4999",
      features: [
        "✓ Ultra sürətli şarj — saatda 350 milədək",
        "✓ Ömürlük pulsuz servis",
        "✓ Şəxsi menecer dəstəyi",
        "✓ Tam analitika paneli",
      ],
      popular: false,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Başlıq hissə */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Stansiya İcarə Et və Puluna Qənaət Et
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ehtiyaclarınıza uyğun ən yaxşı şarj həllini seçin. İstər evdə,
            istər ictimai, istərsə də biznes üçün — bizdə sizə uyğun plan var.
          </p>
        </div>

        {/* Kartlar hissəsi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative border rounded-2xl shadow-lg bg-white p-8 flex flex-col justify-between 
              transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular ? "border-blue-500" : "border-gray-200"
              }`}
            >
              {/* Ən çox seçilən nişanı */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-4 py-1 rounded-full shadow-md">
                  Ən Çox Seçilən
                </span>
              )}

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 text-center mb-4">
                  Güc: <span className="font-medium">{plan.power}</span>
                </p>
                <p className="text-4xl font-bold text-blue-600 text-center mb-6">
                  {plan.price}
                </p>
                <ul className="text-gray-700 space-y-3 mb-8 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-medium transition ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {plan.popular ? "Başla" : "Ətraflı Bax"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
