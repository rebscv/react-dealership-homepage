import useEmblaCarouselWithDots from "embla-carousel-react";

import VehicleCard from "../VehicleCard/VehicleCard";
import "./FeaturedVehicles.css";
import vehicles from "../../data/vehicles";


function FeaturedVehicles() {
    

    return (
        <section className="featured-vehicles">
            <div className="std-wrapper">

                <h2>Find your dream Mazda</h2>

                <div className="grid-d-three-cols grid-t-two-cols">
                    {vehicles.slice(0, 6).map((car) => (
                        <VehicleCard key={car.id} {...car} />
                    ))}
                </div>

            </div>
        </section>
    );

}

export default FeaturedVehicles;