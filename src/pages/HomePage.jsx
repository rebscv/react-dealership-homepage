
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import QuickLinks from "../components/QuickLinks/QuickLinks";
import FeaturedVehicles from "../components/FeaturedVehicles/FeaturedVehicles";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <>
      <div className="container">

        <Hero />
        <QuickLinks />
        <FeaturedVehicles />

        <section>
          <div className="std-wrapper">
            <h1>Welcome to Dealername</h1>
            <p>Welcome to our dealership. Explore our range of new and used vehicles.</p>
          </div>
        </section>
        
      </div>
    </>
  )
}

export default HomePage
