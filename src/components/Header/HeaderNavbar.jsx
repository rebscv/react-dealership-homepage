import { Link } from "react-router-dom";

function HeaderNavbar({ closeMenu }) {
    return (

        <nav>
            <Link to="" onClick={closeMenu}>Home</Link>
            <Link to="stock" onClick={closeMenu}>Stock</Link>
            <Link to="offers" onClick={closeMenu}>Latest Offers</Link>

            <div className="nav-item">
                <Link to="service" onClick={closeMenu}>Service</Link>
                <div className="nav-submenu">
                    <Link to="service" onClick={closeMenu}>Service Overview</Link>
                    <Link to="book-a-service" onClick={closeMenu}>Book a Service</Link>
                    <Link to="parts" onClick={closeMenu}>Parts</Link>
                </div>
            </div>                
            
            <Link to="finance" onClick={closeMenu}>Finance</Link>
            <Link to="about" onClick={closeMenu}>About Us</Link>
            <Link to="contact" onClick={closeMenu}>Contact Us</Link>
        </nav>

    );
}

export default HeaderNavbar;