import "./HeaderVehicleMenu.css";

import models from "../../data/models";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function HeaderVehicleMenu({ closeModelMenu, closeMenu, menuOpen }) {

    // Constants
    const tabs = ["all", "suv", "ute", "sports"];
    const tabLabels = {all: "All", suv: "SUV", ute: "Ute", sports: "Sports"};    

    // States
    const [activeTab, setActiveTab] = useState("all");
    const [mobileCategory, setMobileCategory] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);    

    // Effects
    useEffect (() =>  {
        const handleResize = () => { setIsMobile(window.innerWidth < 1024); };        
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!menuOpen) { setMobileCategory(null);}
    }, [menuOpen]);

    // Helper Functions
    const handleModelClick = () => { setMobileCategory(null); closeModelMenu(); closeMenu(); }

    // Derived Data
    const filteredModels = activeTab === "all" ? models : models.filter(car => car.tags?.includes(activeTab)); 
    const mobileModels = models.filter(model => model.tags?.includes(mobileCategory));

    if (isMobile) { return (

        <div className="header-vehicle-menu header-vehicle-menu-mobile">

            {!mobileCategory ? (
                <div className="mobile-model-categories">

                    <button className="mobile-menu-back" onClick={closeModelMenu}>
                        <span>←</span><span>Models</span>
                    </button>

                    {tabs.filter(tab => tab !== "all").map(tab => (
                        <button key={tab} onClick={() => setMobileCategory(tab)} className="mobile-menu-category">
                            <span>{tabLabels[tab]}</span><span>›</span>
                        </button>)
                    )}

                </div>
            ) : (
                <div className="mobile-model-list">

                    <button className="mobile-menu-back" onClick={() => setMobileCategory(null)}>
                        <span>←</span><span>{tabLabels[mobileCategory]}</span>
                    </button>

                    {mobileModels.map((model) => (
                        <Link key={model.slug} to={`/version-3/models/${model.slug}`} onClick={handleModelClick}>
                            <div>
                                <div className="h4">{model.menuTitle}</div>
                                <div>{model.description}</div>
                            </div>
                            <div>
                                <img src={model.image} alt="{model.menuTitle}" />
                            </div>                            
                        </Link>                        
                    ))}
                </div>
            )}

        </div>



    ); }

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