import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import useIsMobile from "../../hooks/useIsMobile";

function HeaderNavbar({ closeMenu, toggleModelMenu, closeModelMenu }) {

    const [openSubmenu, setOpenSubmenu] = useState(null);
    const isMobile = useIsMobile(1024);

    const toggleSubmenu = (menu) => { setOpenSubmenu(openSubmenu === menu ? null : menu) };

    const handleParentClick = (menu) => (e) => {
        if (isMobile) { e.preventDefault(); toggleSubmenu(menu); }
    };

    useEffect(() => { if (!isMobile) { setOpenSubmenu(null); }}, [isMobile]);

    return (

        <nav>
            <Link to="" onClick={closeMenu}>Home</Link>
            <Link to="#" className="nav-models-link" onClick={(e) => { e.preventDefault(); toggleModelMenu(); }}>Models</Link>
            <Link to="stock" onClick={closeMenu}>Stock</Link>
            <Link to="offers" onClick={closeMenu}>Latest Offers</Link>

            <div className={`nav-item ${isMobile && openSubmenu !== "service" ? "" : "active"}`}>
                <NavLink to="service" onClick={handleParentClick("service")}>
                    Service
                </NavLink>
                <div className={`nav-submenu ${isMobile && openSubmenu !== "service" ? "hidden" : ""}`}>
                    <NavLink to="service" onClick={closeMenu}>Service Overview</NavLink>
                    <NavLink to="book-a-service" onClick={closeMenu}>Book a Service</NavLink>
                    <NavLink to="accessories" onClick={closeMenu}>Accessories</NavLink>
                </div>
            </div>       
            
            <Link to="finance" onClick={closeMenu}>Finance</Link>
            <Link to="about" onClick={closeMenu}>About Us</Link>
            <Link to="contact" onClick={closeMenu}>Contact Us</Link>
        </nav>

    );
}

export default HeaderNavbar;