import "./VehicleCard.css";
import { Link } from "react-router-dom";

function VehicleCard({ id, image, title, price, year, mileage }) {

    return (
        <div className="vehicle-card">
            <img src={image} alt={title} />

            <div className="vehicle-info">
                <h3>{title}</h3>
                <p className="price">${price.toLocaleString()}</p>
            
                <div className="vehicle-meta">
                    <span>{year}</span>
                    <span>{mileage.toLocaleString()} km</span>
                </div>

                <Link to={`/vehicle/${id}`}>
                    <button>View Details</button>
                </Link>
            </div>
        </div>
    );

}

export default VehicleCard;