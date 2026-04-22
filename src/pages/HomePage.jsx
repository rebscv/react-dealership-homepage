import { useLocation } from "react-router-dom";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import HeroSlider from "../components/Hero/HeroSlider";
import QuickLinks from "../components/QuickLinks/QuickLinks";
import Range from "../components/Range/Range";
import FeaturedVehicles from "../components/FeaturedVehicles/FeaturedVehicles";
import FeaturedVehiclesSlider from "../components/FeaturedVehicles/FeaturedVehiclesSlider";
import Footer from "../components/Footer/Footer";

function HomePage() {

  const location = useLocation();
  const isVersion2 = location.pathname.includes("version-2");
  const isVersion3 = location.pathname.includes("version-3");

  return (
    <>
      <div className="container">

        {(isVersion2 || isVersion3) ? <HeroSlider /> : <Hero />}

        <QuickLinks version={isVersion3 ? 3 : isVersion2 ? 2 : 1} />
        
        {isVersion3 && <Range />}

        <section>
          <div className="std-wrapper">
            <h1>Welcome to Dealername</h1>
            <p>Welcome to our dealership. Explore our range of new and used vehicles.</p>
          </div>
        </section>

        {(isVersion2 || isVersion3) ? <FeaturedVehiclesSlider /> : <FeaturedVehicles />}

        
      </div>
    </>
  )
}

export default HomePage
