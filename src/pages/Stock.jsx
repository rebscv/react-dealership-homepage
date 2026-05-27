import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import VehicleStock from "../components/VehicleStock/VehicleStock";
import vehicles from "../data/vehicles";

import "./stock.css"
import { object } from "framer-motion/client";

function Stock() {

    const [selectedBodyType, setSelectedBodyType] = useState("");
    const [selectedFuel, setSelectedFuel] = useState("");
    const [selectedTransmission, setSelectedTransmission] = useState("");
    const [selectedModel, setSelectedModel] = useState("");
    const [searchTerm, setsearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("latest");

    const models = [...new Set(vehicles.map((car) => car.model))].sort();
    const years = vehicles.map((car) => car.year);   
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);  
    const prices = vehicles.map((car) => car.price);
    const minPrice = Math.floor(Math.min(...prices) / 5000) * 5000;
    const maxPrice = Math.ceil(Math.max(...prices) / 5000) * 5000;

    const [selectedMinYear, setSelectedMinYear] = useState(minYear);
    const [selectedMaxYear, setSelectedMaxYear] = useState(maxYear);
    const [selectedMinPrice, setSelectedMinPrice] = useState(minPrice);
    const [selectedMaxPrice, setSelectedMaxPrice] = useState(maxPrice);

    const handleMinYearChange = (e) => { const value = Math.min(Number(e.target.value), selectedMaxYear - 1); setSelectedMinYear(value); };
    const handleMaxYearChange = (e) => { const value = Math.max(Number(e.target.value), selectedMinYear + 1); setSelectedMaxYear(value); };
    const handleMinPriceChange = (e) => { const value = Math.min(Number(e.target.value), selectedMaxPrice - 5000); setSelectedMinPrice(value); };
    const handleMaxPriceChange = (e) => { const value = Math.max(Number(e.target.value), selectedMinPrice + 5000); setSelectedMaxPrice(value); };


    const filteredVehicles = vehicles

    .filter((car) => {

        const bodyMatch = selectedBodyType === "" || car.bodytype === selectedBodyType;
        const fuelMatch = selectedFuel === "" || car.fuel === selectedFuel;
        const transmissionMatch = selectedTransmission === "" || car.transmission === selectedTransmission;
        const modelMatch = selectedModel === "" || car.model === selectedModel;

        const yearMatch = 
            car.year >= selectedMinYear &&
            car.year <= selectedMaxYear;

        const priceMatch = 
            car.price >= selectedMinPrice &&
            car.price <= selectedMaxPrice;

        const searchMatch = searchTerm.trim() === "" || Object.values(car).some((value) => String(value).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));

        return bodyMatch && fuelMatch && transmissionMatch && modelMatch && yearMatch && priceMatch && searchMatch;

    })
    
    .sort((a, b) => {

        switch (sortOption) {
            case "latest": return b.id - a.id;
            case "price-high": return b.price - a.price;
            case "price-low": return a.price - b.price;
            case "year-new": return b.year - a.year;
            case "year-old": return a.year - b.year;
            case "mileage-low": return a.mileage - b.mileage;
            case "mileage-hight": return a.mileage - b.mileage;
            case "model-az": return a.model.localeCompare(b.model);
            case "model-za": return b.model.localeCompare(a.model);
            default: return 0;
        }

    });

    const filtersActive =
        selectedBodyType !== "" ||
        selectedFuel !== "" ||
        selectedTransmission !== "" ||
        selectedModel !== "" ||
        selectedMinYear !== minYear ||
        selectedMaxYear !== maxYear ||
        selectedMinPrice !== minPrice ||
        selectedMaxPrice !== maxPrice ||
        searchTerm.trim() !== "";

    const clearFilters = () => {
        setSelectedBodyType("");
        setSelectedFuel("");
        setSelectedTransmission("");
        setSelectedModel("");
        setSelectedMinYear(minYear);
        setSelectedMaxYear(maxYear);
        setSelectedMinPrice(minPrice);
        setSelectedMaxPrice(maxPrice);
        setsearchTerm("");
    };

    return (
        <section className="stock-content">
            <div className="std-wrapper">

                <div className="stock-filter-head">
                    <h1>Our Stock</h1>
                    <p>Discover our wide range of Mazda vehicles at Mazda Hometown</p>
                </div>

                <div className="stock-filter">

                    <h3>Keyword Search</h3>
                    
                    <div className="stock-filter-row">

                        <div className="stock-filter-search-col">
                            <label for="stock-search">Search</label>
                            <input type="text" id="stock-search" value={searchTerm} onChange={(e) => setsearchTerm(e.target.value)} placeholder="Search by make, model, body type..." />
                        </div>

                        <div className="stock-filter-col stock-filter-show-mobile">
                            <label htmlFor="sort-option">Sort by</label>
                            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} id="sort-bg">
                                <option value="latest">Recently Added</option>
                                <option value="price-high">Price (High - Low)</option>
                                <option value="price-low">Price (Low - High)</option>
                                <option value="year-new">Year (Newest - Oldest)</option>
                                <option value="year-old">Year (Oldest - Newest)</option>
                                <option value="mileage-low">KMs (Low - High)</option>
                                <option value="mileage=high">KMs (High - Low)</option>
                                <option value="model-az">Model (A - Z)</option>
                                <option value="model-za">Model (Z - A)</option>
                            </select>
                        </div>

                        <div className="stock-filter-btn-col">
                            <button onClick={clearFilters} className="btn btn-primary">Clear Filters</button>
                        </div>                 

                    </div>

                    <h3>Filter & Sort Stock</h3>

        
                    <div className="stock-filter-row stock-filter-toggle-mobile">

                        <div className="stock-filter-col">
                            <label htmlFor="model-filter">Model</label>
                            <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)} id="model-filter">
                                <option value="">All</option>
                                {models.map((model) => ( <option key={model} value={model}>{model}</option> ))}
                            </select>
                        </div>

                        <div className="stock-filter-col">
                            <label htmlFor="body-filter">Body Type</label>
                            <select value={selectedBodyType} onChange={(e) => setSelectedBodyType(e.target.value)} id="body-filter">
                                <option value="">All</option>
                                <option value="SUV">SUV</option>
                                <option value="Sedan">Sedan</option>
                                <option value="Hatch">Hatch</option>
                                <option value="Ute">Ute</option>                                
                            </select>                            
                        </div>

                        <div className="stock-filter-col">
                            <label htmlFor="fuel-filter">Fuel</label>
                            <select value={selectedFuel} onChange={(e) => setSelectedFuel(e.target.value)} id="fuel-filter">
                                <option value="">All</option>
                                <option value="Petrol">Petrol</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Electric">Electric</option>
                            </select>
                        </div>
     
                        <div className="stock-filter-col">
                            <label>Price Range</label>
                            <div className="range-slider-container">
                                <span className="range-slider-results">${Number(selectedMinPrice).toLocaleString()} - ${Number(selectedMaxPrice).toLocaleString()}</span> 
                                <div className="range-slider">
                                    <input type="range" min={minPrice} max={maxPrice} step="5000" value={selectedMinPrice} onChange={handleMinPriceChange} className="range-input range-input-min" />
                                    <input type="range" min={minPrice} max={maxPrice} step="5000" value={selectedMaxPrice} onChange={handleMaxPriceChange} className="range-input range-input-max" />
                                    <div className="range-slider-active" style={{
                                        left: `${((selectedMinPrice - minPrice) / (maxPrice - minPrice)) * 100}%`,
                                        width: `${((selectedMaxPrice - selectedMinPrice) / (maxPrice - minPrice)) * 100}%`
                                    }}/>
                                </div>
                            </div>

                        </div>

                        <div className="stock-filter-col">                            
                            <label>Year Range</label>
                            <div className="range-slider-container">
                                <span className="range-slider-results">{selectedMinYear} - {selectedMaxYear}</span>   
                                <div className="range-slider">
                                    <input type="range" min={minYear} max={maxYear} value={selectedMinYear} onChange={handleMinYearChange} className="range-input range-input-min" />
                                    <input type="range" min={minYear} max={maxYear} value={selectedMaxYear} onChange={handleMaxYearChange} className="range-input range-input-max" />
                                    <div className="range-slider-active" style={{
                                        left: `${((selectedMinYear - minYear) / (maxYear - minYear)) * 100}%`,
                                        width: `${((selectedMaxYear - selectedMinYear) / (maxYear - minYear)) * 100}%`
                                    }}/>
                                </div> 
                            </div>                                                    
                        </div> 


                        <div className="stock-filter-col">
                            <label htmlFor="sort-option">Sort by</label>
                            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} id="sort-bg">
                                <option value="latest">Recently Added</option>
                                <option value="price-high">Price (High - Low)</option>
                                <option value="price-low">Price (Low - High)</option>
                                <option value="year-new">Year (Newest - Oldest)</option>
                                <option value="year-old">Year (Oldest - Newest)</option>
                                <option value="mileage-low">KMs (Low - High)</option>
                                <option value="mileage=high">KMs (High - Low)</option>
                                <option value="model-az">Model (A - Z)</option>
                                <option value="model-za">Model (Z - A)</option>
                            </select>
                        </div>

                        
                    </div>
                </div>


                <div className="stock-results-message">
                    <p>
                        Showing {" "}
                        <strong>
                            {filteredVehicles.length}{" "}
                            {filtersActive 
                                ? filteredVehicles.length === 1
                                    ? "matching vehicle"
                                    : "matching vehicles"
                                : filteredVehicles.length === 1
                                    ? "vehicle"
                                    : "vehicles"
                            }
                        </strong>{" "}
                         at Mazda Hometown
                    </p>
                </div>


                <AnimatePresence mode="wait">
                    <motion.div className="stock-all-vehicles"
                        key={`${selectedBodyType}-${selectedFuel}-${selectedTransmission}-${selectedModel}-${selectedMinYear}-${selectedMaxYear}-${selectedMinPrice}-${sortOption}-${searchTerm}`}
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