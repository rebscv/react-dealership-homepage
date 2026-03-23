
import Hero from "../components/Hero/Hero";
import QuickLinks from "../components/QuickLinks";
import FeaturedVehicles from "../components/FeaturedVehicles/FeaturedVehicles";

function HomePage() {
  return (
    <>
      <div>Header</div>
      <Hero />
      <QuickLinks />
      <FeaturedVehicles />
      <div>Welcome</div>
      <div>Footer</div>
    </>
  )
}

export default HomePage
