import useEmblaCarouselWithDots from "embla-carousel-react";

import VehicleCard from "../VehicleCard/VehicleCard";
import "./FeaturedVehicles.css";
import vehicles from "../../data/vehicles";


function FeaturedVehicles() {
    

    return (
        <section className="featured-vehicles">
            <div className="std-wrapper">

                <h2>Featured Vehicles</h2>

                <div className="vehicle-grid">
                    {vehicles.map((car) => (
                        <VehicleCard key={car.id} {...car} />
                    ))}
                </div>

            </div>
        </section>
    );

}

export default FeaturedVehicles;