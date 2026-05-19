
import VehicleCard from "../VehicleCard/VehicleCard";
import vehicles from "../../data/vehicles";


function VehicleStock() {
    

    return (
        <>
            {vehicles.map((car) => ( <VehicleCard key={car.id} {...car} /> ))}
        </>
    );

}

export default VehicleStock;