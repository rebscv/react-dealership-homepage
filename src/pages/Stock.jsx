import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import VehicleStock from "../components/VehicleStock/VehicleStock";
import vehicles from "../data/vehicles";

import "./stock.css"

function Stock() {

    const [selectedBodyType, setSelectedBodyType] = useState("All");
    const [selectedFuel, setSelectedFuel] = useState("All");
    const [selectedTransmission, setSelectedTransmission] = useState("All");

    const filteredVehicles = vehicles.filter((car) => {

        const bodyMatch = selectedBodyType === "All" || car.bodytype === selectedBodyType;
        const fuelMatch = selectedFuel === "All" || car.fuel === selectedFuel;
        const bodyTransmission = selectedTransmission === "All" || car.transmission === selectedTransmission;        
        return bodyMatch && fuelMatch && bodyTransmission;

    });

    const clearFilters = () => {
        setSelectedBodyType("All");
        setSelectedFuel("All");
        setSelectedTransmission("All");
    };

    return (
        <section className="stock-content">
            <div className="std-wrapper">
                <h1>Our Stock</h1>
                <p>Find the perfect Mazda for you</p>

                <div className="stock-filter">

                    <div className="stock-filter-col">
                        <label htmlFor="body-filter">Body Type</label>
                        <select value={selectedBodyType} onChange={(e) => setSelectedBodyType(e.target.value)} id="body-filter">
                            <option value="All">All</option>
                            <option value="SUV">SUV</option>
                            <option value="Sedan">Sedan</option>
                            <option value="Hatch">Hatch</option>
                            <option value="Ute">Ute</option>
                            
                        </select>
                        
                    </div>

                    <div className="stock-filter-col">
                        <label htmlFor="fuel-filter">Fuel</label>
                        <select value={selectedFuel} onChange={(e) => setSelectedFuel(e.target.value)} id="fuel-filter-filter">
                            <option value="All">All</option>
                            <option value="Petrol">Petrol</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Electric">Electric</option>
                        </select>
                    </div>

                    <div className="stock-filter-col">
                        <label htmlFor="transission-filter">Transmission</label>
                        <select value={selectedTransmission} onChange={(e) => setSelectedTransmission(e.target.value)} id="transission-filter-filter">
                            <option value="All">All</option>
                            <option value="Auto">Auto</option>
                            <option value="Manual">Manual</option>
                        </select>
                    </div>

                    <div className="stock-filter-col">
                        <button onClick={clearFilters} className="btn btn-primary">Clear Filters</button>
                    </div>

                </div>



                    <AnimatePresence mode="wait">
                        <motion.div className="stock-all-vehicles"
                            key={`${selectedBodyType}-${selectedFuel}-${selectedTransmission}`} 
                            initial={{ opacity: 0.5 }} 
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0.5 }} 
                            transition={{ duration: 0.2, ease: "easeInOut" }}>

                                {filteredVehicles.length > 0 ? (

                                    <div className="grid-d-four-cols">
                                        <VehicleStock vehicles={filteredVehicles} />
                                    </div>

                                ) : (

                                    <div className="stock-content-no-results grid">
                                        <h3>No vehicles found</h3>
                                        <p>Try adjusting or clearing your filters.</p>
                                    </div>

                                )}




                            
                        </motion.div>
                    </AnimatePresence>

            </div>
        </section>
    );
}

export default Stock;