import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import useIsMobile from "../../hooks/useIsMobile";

function HeaderNavbar({ closeMenu, toggleModelMenu, closeModelMenu, menuOpen }) {

    // const
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const isMobile = useIsMobile(1024);

    // States 
    const toggleSubmenu = (menu) => { setOpenSubmenu(openSubmenu === menu ? null : menu) };

    // Effects
    const handleParentClick = (menu) => (e) => { if (isMobile) { e.preventDefault(); toggleSubmenu(menu); }};
    const handleNavClick = () => { setOpenSubmenu(null); closeMenu();};
    useEffect(() => { if (!isMobile) { setOpenSubmenu(null); }}, [isMobile]);
    useEffect(() => { if (!menuOpen) { setOpenSubmenu(null); }}, [menuOpen]);

    return (

        <nav>
            <Link to="" onClick={handleNavClick}>Home</Link>
            <Link to="#" className="nav-models-link" onClick={(e) => { e.preventDefault(); toggleModelMenu(); }}>Models</Link>
            <Link to="stock" onClick={handleNavClick}>Stock</Link>
            <Link to="offers" onClick={handleNavClick}>Latest Offers</Link>

            <div className={`nav-item ${isMobile && openSubmenu !== "service" ? "" : "active"}`}>
                <NavLink to="service" onClick={handleParentClick("service")}>
                    Service
                </NavLink>
                <div className={`nav-submenu ${isMobile && openSubmenu !== "service" ? "hidden" : ""}`}>
                    <NavLink to="service" onClick={handleNavClick}>Service Overview</NavLink>
                    <NavLink to="book-a-service" onClick={handleNavClick}>Book a Service</NavLink>
                    <NavLink to="accessories" onClick={handleNavClick}>Accessories</NavLink>
                </div>
            </div>       
            
            <Link to="finance" onClick={handleNavClick}>Finance</Link>
            <Link to="about" onClick={handleNavClick}>About Us</Link>
            <Link to="contact" onClick={handleNavClick}>Contact Us</Link>
        </nav>

    );
}

export default HeaderNavbar;