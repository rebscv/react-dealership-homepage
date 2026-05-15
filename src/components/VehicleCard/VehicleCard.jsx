import "./VehicleCard.css";
import { Link, useLocation } from "react-router-dom";

function VehicleCard({ id, image, title, price, year, mileage, bodytype, fuel, transmission }) {

    const location = useLocation();

    const match = location.pathname.match(/^\/(version-\d+)/);
    const basePath = match ? `/${match[1]}` : "";

    return (
        <div className="vehicle-card">
            <Link to={`${basePath}/vehicle/${id}`}>
                <img src={image} alt={title} />
            </Link>
            

            <div className="vehicle-info">
                <h4><span>{year}</span> {title}</h4>

                <div className="price"><span>${price.toLocaleString()}</span><span className="vehicle-info-driveaway">Driveaway</span></div>
            
                <div className="vehicle-meta">

                    <div className="vehilce-meta-row">
                        <span>Kilometres</span>
                        <span>{mileage.toLocaleString()} km</span>
                    </div>

                    <div className="vehilce-meta-row">
                        <span>Type</span>
                        <span>{bodytype}</span>
                    </div>
                    <div className="vehilce-meta-row">
                        <span>Fuel Type</span>
                        <span>{fuel}</span>
                    </div>
                    <div className="vehilce-meta-row">
                        <span>Transmission</span>
                        <span>{transmission}</span>
                    </div>


                </div>

                <Link to={`${basePath}/vehicle/${id}`}>
                    <button>View Details</button>
                </Link>
            </div>
        </div>
    );

}

export default VehicleCard;