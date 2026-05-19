import VehicleStock from "../components/VehicleStock/VehicleStock";
import "./stock.css"

function Stock() {
    return (
        <section className="stock-content">
            <div className="std-wrapper">
                <h1>Our Stock</h1>
                <p>Finace the perfect Mazda for you</p>

                <div className="filters">
                    <p>Filters</p>
                </div>

                <div className="grid-d-four-cols">
                    <VehicleStock />
                </div>
            </div>
        </section>
    );
}

export default Stock;