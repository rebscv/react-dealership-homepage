import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import HeaderNavbar from "./HeaderNavbar";
import HeaderContact from "./HeaderContact";
import HeaderVehicleMenu from "./HeaderVehicleMenu";

import logo from "../../assets/images/logo.svg";

import "./HeaderV3.css"

function HeaderV3() {

    // Const
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [modelMenuOpen, setModelMenuOpen] = useState(false);

    // States
    const toggleMenu = () => { setMenuOpen(!menuOpen); };
    const closeMenu = () => { setMenuOpen(false); };    
    const toggleModelMenu = () => { setModelMenuOpen(prev => !prev); }
    const closeModelMenu = () => { setModelMenuOpen(false); }

    // Helpers
    const handleLogoClick = () => {
        closeMenu();
        closeModelMenu();
    }

    // Effects
    useEffect(() => {
        const handleScroll = () => { setScrolled(window.scrollY > 50); };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);   

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

    // Helper Functions
    const handleMobileMenuClick = () => { toggleMenu(); closeModelMenu(); }

    return (
        <header className={`header-v3 ${scrolled ? "scrolled" : ""}`}>

            <div className="top-header-container">
                <div className="std-wrapper">
                    <div className="top-header-grid"><HeaderContact /></div>
                </div>
            </div>

            <div className="header-container">
                <div className="std-wrapper">
                    <div className="header-grid">

                        <Link to="/version-3" className="header-title" onClick={handleLogoClick}>
                            <img src={logo} alt="" width="78" height="71" />
                            <h2>Mazda Hometown</h2>
                        </Link>

                        <div className="navbar">
                            <HeaderNavbar closeMenu={closeMenu} toggleModelMenu={toggleModelMenu} closeModelMenu={closeModelMenu} menuOpen={menuOpen} />
                        </div>
                                               

                        <div className="menu-button-mobile" id="menu-btn" onClick={handleMobileMenuClick}>
                            <svg className="icon-menu"><use href="/icons.svg#icon-menu"></use></svg>
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

export default HeaderV3;