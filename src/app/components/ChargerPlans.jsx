import React from "react";

export default function ChargingPlans() {
  const plans = [
    {
      name: "Home Charger",
      power: "3.5 KW",
      price: "$129",
      features: [
        "✓ Up to 60 miles of range per hour",
        "✓ Free service and updates",
        "✓ 24/7 professional support",
        "✓ Mobile app monitoring",
      ],
      popular: false,
    },
    {
      name: "Public Station",
      power: "18 KW",
      price: "$1799",
      features: [
        "✓ Fast charging up to 200 miles/hour",
        "✓ Free service and updates",
        "✓ Priority support 24/7",
        "✓ Smart monitoring system",
      ],
      popular: true, // bu ən önə çıxan olacaq
    },
    {
      name: "Commercial Pro",
      power: "50 KW",
      price: "$4999",
      features: [
        "✓ Ultra-fast charging up to 350 miles/hour",
        "✓ Free lifetime service",
        "✓ Dedicated account manager",
        "✓ Full analytics dashboard",
      ],
      popular: false,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Text Section */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Rent Station and Save Your Money
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the best charging solution for your needs. Whether at home,
            in public, or for commercial use, we have a plan that suits you.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative border rounded-2xl shadow-lg bg-white p-8 flex flex-col justify-between 
              transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular ? "border-blue-500" : "border-gray-200"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 text-center mb-4">
                  Power: <span className="font-medium">{plan.power}</span>
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
                {plan.popular ? "Get Started" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
