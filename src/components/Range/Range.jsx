import "./range.css"
import zoomzoom from "../../assets/images/homepage/zoom-zoom.gif";

import RangeCard from "./RangeCard";
import models from "../../data/models";
import { useState } from "react";


function Range () {

    // Costants
    const tabs = ["featured", "suv", "ute", "sports", "hatchSedan", "electricHybrid"];
    const tabLabels = {featured: "Featured", suv: "SUVs", ute: "Utes", sports: "Sports", hatchSedan: "Hatch & Sedans", electricHybrid: "Eletric & Hybrid"};    

    // States
    const [activeTab, setActiveTab] = useState("featured");    

    const filteredModels = activeTab === "all" ? models : models.filter(car => car.tags?.includes(activeTab));

    return (
        <section className="range grey-bg">
            <div className="std-wrapper t-center">

                <h2>Find Your <img src={zoomzoom} width={250} height={47} alt="Zoom Zoom" /></h2>

                <div className="tabs-overflow">
                    <div className="range-tabs default-tabs">
                        {tabs.map((tab) => (
                            <button key={tab} className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)}>
                                {tabLabels[tab]}
                            </button>
                        ))}
                    </div>
                </div>

            </div>

            <div className="std-wrapper no-padding-top t-center">

                <div key={activeTab} className="grid grid-xl-four-cols grid-d-three-cols grid-t-two-cols range-model-grid">
                    {filteredModels.map((car, index) => (
                        <RangeCard key={car.slug} {...car} style={{ animationDelay: `${index * 0.1}s` }} />
                    ))}
                </div>

            </div>
        </section>
    );

}

export default Range;