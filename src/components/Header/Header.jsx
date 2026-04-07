import { Link } from "react-router-dom";
import HeaderContact from "./HeaderContact";
import "./Header.css"

function Header() {
    return (
        <header>

            <div className="header-container">
                <div className="std-wrapper header-grid">

                    <div className="header-title">
                        <h2>Dealership</h2>
                    </div>



                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/stock">Stock</Link>
                        <Link to="/offers">Latest Offers</Link>

                        <div className="nav-item">
                            <Link to="/service">Service</Link>
                            <div className="nav-submenu">
                                <Link to="/service">Service Overview</Link>
                                <Link to="/book-a-service">Book a Service</Link>
                                <Link to="/parts">Parts</Link>
                            </div>
                        </div>                
                        
                        <Link to="/finance">Finance</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact Us</Link>
                    </nav>

                    <HeaderContact />

                </div>
            </div>           

        </header>
    );
}

export default Header;