import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import HeaderNavbar from "./HeaderNavbar";
import HeaderContact from "./HeaderContact";

import logo from "../../assets/images/logo.svg";

import "./HeaderV3.css"

function HeaderV3() {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => { setScrolled(window.scrollY > 50); };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const toggleMenu = () => { setMenuOpen(!menuOpen); };

    useEffect(() => {
        if (menuOpen) { document.body.classList.add("show-mobile-menu"); } 
        else { document.body.classList.remove("show-mobile-menu"); }
        return () => { document.body.classList.remove("show-mobile-menu"); };
    }, [menuOpen]);

    const closeMenu = () => { setMenuOpen(false); };


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

                        <div className="header-title">
                            <img src={logo} alt="" width="78" height="71" />
                            <h2>Dealer Name City</h2>
                        </div>

                        <div className="navbar">
                            <HeaderNavbar closeMenu={closeMenu} />
                        </div>
                                               

                        <div className="menu-button-mobile" id="menu-btn" onClick={toggleMenu}>
                            <svg className="icon-menu"><use href="/icons.svg#icon-menu"></use></svg>
                        </div>

                    </div>
                </div>
            </div>

            <div className="menu-mobile">
                <HeaderNavbar closeMenu={closeMenu} />    
            </div>        

        </header>
    );
}

export default HeaderV3;