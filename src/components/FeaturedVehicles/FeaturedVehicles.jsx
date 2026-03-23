import VehicleCard from "../VehicleCard/VehicleCard";
import "./FeaturedVehicles.css";
import cx80 from "../../assets/images/featured-vehicles/cx-80.webp";
import bt50 from "../../assets/images/featured-vehicles/bt-50.webp";
import mx5 from "../../assets/images/featured-vehicles/mx-5.webp";


const vehicles = [

  {
    id      : 1,
    title   : "Mazda CX-80",
    price   : "69990",
    year    : 2026,
    mileage : "3000",
    image   : cx80,
  },

  {
    id      : 2,
    title   : "Mazda BT-50 Ute",
    price   : "78990",
    year    : 2026,
    mileage : "20000",
    image   : bt50,
  },

  {
    id      : 3,
    title   : "MX-5",
    price   : "58990",
    year    : 2026,
    mileage : "7500",
    image   : mx5,
  },

]


function FeaturedVehicles() {

    return (
        <section>

            <h2>Featured Vehicles</h2>

            <div className="vehicle-grid">
                {vehicles.map((car) => (
                    <VehicleCard key={car.id} {...car} />
                ))}
            </div>

        </section>
    );

}

export default FeaturedVehicles;