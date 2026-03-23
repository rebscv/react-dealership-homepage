import "./VehicleCard.css";

function VehicleCard({ image, title, price, year, mileage }) {

    return (
        <div className="vehicle-car">
            <img src={image} alt={title} />

            <div className="whicle-info">
                <h3>{title}</h3>
                <p className="price">${price.toLocaleString()}</p>
            

                <div ckassName="vehicle-meta">
                    <span>{year}</span>
                    <span>{mileage.toLocaleString()} km</span>
                </div>

                <button>View Details</button>
            </div>
        </div>
    );

}

export default VehicleCard;