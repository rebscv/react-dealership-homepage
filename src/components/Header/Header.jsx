import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import HeaderNavbar from "./HeaderNavbar";
import HeaderContact from "./HeaderContact";
import HeaderVehicleMenu from "./HeaderVehicleMenu";

import "./Header.css"

function Header() {

    // Const
    const [menuOpen, setMenuOpen] = useState(false);
    const [modelMenuOpen, setModelMenuOpen] = useState(false);

    // States
    const version = location.pathname.split("/")[1] || "version-1";
    const toggleMenu = () => { setMenuOpen(!menuOpen); };
    const closeMenu = () => { setMenuOpen(false); };    
    const toggleModelMenu = () => { setModelMenuOpen(prev => !prev); }
    const closeModelMenu = () => { setModelMenuOpen(false); }

    // Effects
    useEffect(() => {
        if (menuOpen) { document.body.classList.add("show-mobile-menu"); } 
        else { document.body.classList.remove("show-mobile-menu"); }
        return () => { document.body.classList.remove("show-mobile-menu"); };
    }, [menuOpen]);

    useEffect(() => {
        if (modelMenuOpen) { document.body.classList.add("show-model-menu"); } 
        else { document.body.classList.remove("show-model-menu"); }
        return () => { document.body.classList.remove("show-model-menu"); };
    }, [modelMenuOpen]);

    // Helpers
    const handleLogoClick = () => { closeMenu(); closeModelMenu(); }
    const handleMobileMenuClick = () => { toggleMenu(); closeModelMenu(); }

    return (
        <header>

            <div className="header-container">
                <div className="std-wrapper">
                    <div className="header-grid">

                        <div className="header-title">
                            <h2><Link to={`/${version}`} onClick={handleLogoClick}>Dealership</Link></h2>
                        </div>

                        <div className="navbar">
                            <HeaderNavbar closeMenu={closeMenu} toggleModelMenu={toggleModelMenu} closeModelMenu={closeModelMenu} menuOpen={menuOpen} />
                        </div>
                        

                        <HeaderContact />

                        <div className="menu-button-mobile" id="menu-btn" onClick={handleMobileMenuClick}>
                            <button>+</button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="menu-mobile">
                <HeaderNavbar closeMenu={closeMenu} toggleModelMenu={toggleModelMenu} closeModelMenu={closeModelMenu} menuOpen={menuOpen} />
            </div>

            <HeaderVehicleMenu closeModelMenu={closeModelMenu} closeMenu={closeMenu} menuOpen={menuOpen} />     

        </header>
    );
}

export default Header;