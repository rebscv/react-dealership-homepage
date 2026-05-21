
import VehicleCard from "../VehicleCard/VehicleCard";

function VehicleStock({ vehicles }) {
    

    return (
        <>
            {vehicles.map((car) => ( <VehicleCard key={car.id} {...car} /> ))}
        </>
    );

}

export default VehicleStock;