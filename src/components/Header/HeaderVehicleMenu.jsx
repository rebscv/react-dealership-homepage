import "./HeaderVehicleMenu.css";

import models from "../../data/models";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function HeaderVehicleMenu({ closeModelMenu }) {

    const tabs = ["all", "suv", "ute", "sports"];
    const tabLabels = {all: "All", suv: "SUV", ute: "Ute", sports: "Sports"};    
    const [activeTab, setActiveTab] = useState("all");

    const filteredModels = activeTab === "all" ? models : models.filter(car => car.tags?.includes(activeTab));
    

    return (

        <div className="header-vehicle-menu">
            <div className="std-wrapper">

                <div className="grid-d-two-cols d-grid-cols-10-40">

                    <div className="header-vehicle-menu-sidebar grid">

                        <div onClick={closeModelMenu}>Models</div>

                        <div className="header-vehicle-menu-sidebar-links">
                            {tabs.map((tab) => (
                                <button key={tab} className={`h3 ${activeTab === tab ? "active" : ""}`} onClick={() => setActiveTab(tab)}>
                                    {tabLabels[tab]}
                                </button>
                            ))}
                        </div>
                    </div>


                    <div className="grid-d-four-cols">
                        {filteredModels.map((model, index) => (

                            <Link key={model.slug} to={`/version-3/models/${model.slug}`} onClick={closeModelMenu} style={{ animationDelay: `${index * 0.1}s` }} className="header-vehicle-menu-model">
                                <div>
                                    <img src={model.image} alt={model.menuTitle} />
                                    <div className="h4">{model.menuTitle}</div>
                                    <div>{model.description}</div>
                                </div>
                            </Link> 

                        ))}
                    </div>


                </div>




            </div>
        </div>

    );
}

export default HeaderVehicleMenu;