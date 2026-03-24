import { useParams } from  "react-router-dom";
import vehicles from "../data/vehicles";

function VehicleDetail() {

    const { id } = useParams();

    const vehicle = vehicles.find((v) => v.id === Number(id));

    if (!vehicle) {
        return <p>Vehicle not found</p>
    }

    return (
        <div style={{ padding: "40px" }}>
            <img src={vehicle.image} alt={vehicle.title} width="500" />

            <h1>{vehicle.title}</h1>
            
            <p><strong>Price:</strong> ${vehicle.price.toLocaleString()}</p>

            <p><strong>Year:</strong> {vehicle.year}</p>

            <p><strong>Mileage:</strong> {vehicle.mileage.toLocaleString()} km</p>

        </div>
    );

}

export default VehicleDetail;