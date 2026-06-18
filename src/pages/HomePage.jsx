import { useLocation } from "react-router-dom";
import "./homePage.css";

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
        
        <Range />

        <section className="welcome-section">
          <div className="std-wrapper">
            <div className="grid-l-two-cols grid-l-reverse">


              <div className="centre-img">
                <img src="/src/assets/images/homepage/welcome.webp" alt="Mazda Eletric Cars" />
              </div>

              <div className="center-content">
                <div className="grid">
                  <h1><span>Welcome to Mazda Dealername</span>We All Feel It</h1>
                  <p>Zoom-Zoom is at the heart of everything we do. It’s a celebration of the joy of motion in all its forms. Whether that’s accelerating down an open road with the wind in your hair, kicking up mud off the beaten track, or being lulled to sleep in the backseat after a big day. No matter how you experience that Zoom-Zoom feeling, our commitment to craft and cutting-edge technologies ensures you feel it every time you get into a Mazda.</p>
                  
                  <div>
                    <div className="btn-flex">
                      <a href="/about-us" className="btn btn-primary">Learn More</a>
                      <a href="/contact-us" className="btn btn-primary">Contact Us</a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {(isVersion2 || isVersion3) ? <FeaturedVehiclesSlider /> : <FeaturedVehicles />}

        
      </div>
    </>
  )
}

export default HomePage
