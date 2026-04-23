import "./range.css"
import zoomzoom from "../../assets/images/homepage/zoom-zoom.gif";

import RangeCard from "./RangeCard";
import models from "../../data/models";
import { useState } from "react";


function Range () {

    const tabs = ["all", "suv", "ute", "sports"];
    const tabLabels = {all: "All", suv: "SUV", ute: "Ute", sports: "Sports"};    
    const [activeTab, setActiveTab] = useState("all");

    const filteredModels = activeTab === "all" ? models : models.filter(car => car.tags?.includes(activeTab));

    return (
        <section className="range">
            <div className="std-wrapper t-center">

                <h2>Find Your <img src={zoomzoom} width={250} height={47} alt="Zoom Zoom" /></h2>

                <div className="range-tabs">
                    {tabs.map((tab) => (
                        <button key={tab} className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)}>
                            {tabLabels[tab]}
                        </button>
                    ))}
                </div>

                <div className="grid grid-d-four-cols grid-l-three-cols grid-t-two-cols range-model-grid">
                    {filteredModels.map((car, index) => (
                        <RangeCard key={car.id} {...car} style={{ animationDelay: `${index * 0.1}s` }} />
                    ))}
                </div>

            </div>
        </section>
    );

}

export default Range;