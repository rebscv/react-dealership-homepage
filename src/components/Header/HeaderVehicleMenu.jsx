import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import models from "../../data/models";

import "./HeaderVehicleMenu.css";


function HeaderVehicleMenu({ closeModelMenu, closeMenu, menuOpen }) {

    // Constants
    const tabs = [ "featured", "suv", "ute", "sports", "hatchSedan", "electricHybrid" ];
    const tabLabels = { featured: "Featured", suv: "SUVs", ute: "Utes", sports: "Sports", hatchSedan: "Hatch & Sedans", electricHybrid: "Eletric & Hybrid" };
    const version = location.pathname.split("/")[1];
    const basePath = `/${version}`;
    
    // States
    const [activeTab, setActiveTab] = useState("featured");
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
            <AnimatePresence mode="sync">

                {!mobileCategory ? (

                    <motion.div className="mobile-model-categories-container" key="categories" initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ duration: 0.3, ease: "easeOut" }}>
                        <div className="mobile-model-categories">

                            <button className="mobile-menu-back" onClick={closeModelMenu}>
                                <span className="mobile-menu-back-arrow">←</span>
                                <span className="mobile-menu-back-title">Models</span>
                            </button>

                            {tabs.filter(tab => tab !== "all").map(tab => (
                                <button key={tab} onClick={() => setMobileCategory(tab)} className="mobile-model-category-button">
                                    <span>{tabLabels[tab]}</span><span>›</span>
                                </button>)
                            )}

                        </div>
                    </motion.div>
                    
                ) : (

                    <motion.div className="mobile-model-list-contianer" key={mobileCategory} initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.3, ease: "easeOut" }}>
                        <div className="mobile-model-list">

                            <button className="mobile-menu-back" onClick={() => setMobileCategory(null)}>
                                <span className="mobile-menu-back-arrow">←</span>
                                <span className="mobile-menu-back-title">{tabLabels[mobileCategory]}</span>
                            </button> 
                            
                            {mobileModels.map((model) => (
                                <Link key={model.slug} to={`${basePath}/models/${model.slug}`} className="mobile-model-list-button" onClick={handleModelClick}>
                                    <div className="mobile-model-list-txt">
                                        <div className="mobile-model-link-title">{model.menuTitle}</div>
                                        <div className="mobile-model-link-description">{model.description}</div>
                                        {model.isFeaturedPage && ( <span className="range-card-badge">Featured Model</span> )}
                                    </div>
                                    <div className="mobile-model-list-img">
                                        <img src={model.image} alt={model.menuTitle} />
                                    </div>                            
                                </Link>                        
                            ))}                            

                        </div>
                    </motion.div>

                )}

            </AnimatePresence>
        </div>

    ); }

    return (

        <div className="header-vehicle-menu">

            <div className="header-vehicle-menu-contianer">
                <div className="std-wrapper">
                    <div className="header-vehicle-menu-grid">


                        <div className="header-vehicle-menu-categories grid">
                            
                            <div className="header-vehicle-menu-categories-title" onClick={closeModelMenu}>Models</div>
                            <div className="header-vehicle-menu-categories-links">
                                {tabs.map((tab) => (
                                    <button key={tab} className={`h3 ${activeTab === tab ? "active" : ""}`} onClick={() => setActiveTab(tab)}>
                                        {tabLabels[tab]}
                                    </button>
                                ))}
                            </div>
                        </div>


                        <div className="header-vehicle-menu-models">
                            <div key={activeTab} className="grid-d-two-cols grid-xl-three-cols">
                                {filteredModels.map((model, index) => (
                                    <Link key={model.slug} to={`${basePath}/models/${model.slug}`} onClick={closeModelMenu} style={{ animationDelay: `${index * 0.1}s` }} className="header-vehicle-menu-model">
                                        {model.isFeaturedPage && ( <span className="range-card-badge">Featured Model</span> )}
                                        <div className="header-vehicle-menu-model-img"><img src={model.image} alt={model.menuTitle} /></div>
                                        <div className="header-vehicle-menu-model-title">{model.menuTitle}</div>
                                        <div className="header-vehicle-menu-model-description">{model.description}</div>
                                    </Link> 
                                ))}
                            </div>
                        </div>


                    </div>

                    <div className="header-vehicle-menu-close-btn" onClick={closeModelMenu}><svg className="icon-arrow-up"><use href="/icons.svg#icon-arrow-up"></use></svg></div>

                </div>
            </div>

            <div className="header-vehicle-menu-overlay" onClick={closeModelMenu}></div>
        </div>

    );
}

export default HeaderVehicleMenu;