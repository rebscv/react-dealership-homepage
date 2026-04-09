import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import HeaderNavbar from "./HeaderNavbar";
import HeaderContact from "./HeaderContact";

import "./Header.css"

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => { setMenuOpen(!menuOpen); };

    useEffect(() => {
        if (menuOpen) { 
            document.body.classList.add("show-mobile-menu"); 
        } 

        else { 
            document.body.classList.remove("show-mobile-menu"); 
        }

        return () => { 
            document.body.classList.remove("show-mobile-menu"); 
        };

    }, [menuOpen]);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header>

            <div className="header-container">
                <div className="std-wrapper">
                    <div className="header-grid">

                        <div className="header-title">
                            <h2>Dealership</h2>
                        </div>

                        <div className="navbar">
                            <HeaderNavbar closeMenu={closeMenu} />
                        </div>
                        

                        <HeaderContact />

                        <div className="menu-button-mobile" id="menu-btn" onClick={toggleMenu}>
                            <button>+</button>
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

export default Header;