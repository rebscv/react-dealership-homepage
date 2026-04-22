import "./VehicleCard.css";
import { Link, useLocation } from "react-router-dom";

function VehicleCard({ id, image, title, price, year, mileage }) {

    const location = useLocation();

    const match = location.pathname.match(/^\/(version-\d+)/);
    const basePath = match ? `/${match[1]}` : "";

    return (
        <div className="vehicle-card">
            <Link to={`${basePath}/vehicle/${id}`}>
                <img src={image} alt={title} />
            </Link>
            

            <div className="vehicle-info">
                <h4>{title}</h4>
                <p className="price">${price.toLocaleString()}</p>
            
                <div className="vehicle-meta">
                    <span>{year}</span>
                    <span>{mileage.toLocaleString()} km</span>
                </div>

                <Link to={`${basePath}/vehicle/${id}`}>
                    <button>View Details</button>
                </Link>
            </div>
        </div>
    );

}

export default VehicleCard;