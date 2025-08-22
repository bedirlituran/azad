import { ArrowUpRight } from "lucide-react";
import { Bolt, PlugZap, Cable, BatteryCharging } from "lucide-react";

export default function ElectricVehicleSection() {
  const features = [
    {
      icon: <Bolt className="text-emerald-400 w-8 h-8" />,
      title: "High Quality Stations",
      desc: "Workplace charging not only supports employees who drive electric cars",
    },
    {
      icon: <PlugZap className="text-emerald-400 w-8 h-8" />,
      title: "Quick Installations",
      desc: "Many electric utilities offer incentives or rebates to encourage the installation",
    },
    {
      icon: <Cable className="text-emerald-400 w-8 h-8" />,
      title: "Accessories Store",
      desc: "As electric cars become increasingly popular, understanding the nuances of charging",
    },
    {
      icon: <BatteryCharging className="text-emerald-400 w-8 h-8" />,
      title: "Renewable Energy",
      desc: "By understanding the various charging options and best practices, electric car",
    },
  ];

  return (
    <section className="bg-[#050d14] px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-emerald-400 uppercase text-xs tracking-widest mb-2">
          Electric vehicle
        </p>
        <div className="lg:flex lg:justify-between lg:items-start gap-10">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-snug max-w-xl">
            Driving Tomorrow Today: <br /> The Electric Evolution
          </h2>
          <p className="text-gray-300 text-sm max-w-lg mt-4 lg:mt-0">
            Practices such as avoiding occupying a charging space longer than
            necessary, adhering to posted time limits, and being mindful of
            charging station etiquette can help ensure.
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
