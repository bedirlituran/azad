import Navbar from "./components/Navbar";
import BackgroundSlider from "./components/BackgroundSlider";
import SwipeUpButton from "./components/SwipeUpButton";
import ElectricVehicleSection from "./components/ElectricVehicleSection";
import ChargingSection from "./components/ChargingSection";
import ChargingStations from "./components/ChargingStations";
import ChargingSolutions from "./components/ChargingSolutions";
import ProductGrid from "./components/ProductGrid";
import ChargerPlans from "./components/ChargerPlans";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
          <Navbar/>
           <BackgroundSlider>
      <h1 className="text-4xl font-bold mb-4">Electric Car Charging Points</h1>
      <p className="text-lg">Modern electric vehicle charging systems.</p>
      <SwipeUpButton />
    </BackgroundSlider>
    <ElectricVehicleSection/>
    <ChargingSection/>
    <ChargingStations/>
    <ChargingSolutions/>
    <ProductGrid/>
    <ChargerPlans/>
<Footer/>
      </div>
  );
}
