import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer>

            <div className="footer-columns">

                <div className="footer-col">
                    <h4>Models</h4>
                </div>

                <div className="footer-col">
                    <h4>Buy</h4>
                    <Link to="/stock">Stock</Link>
                    <Link to="/offers">Latest Offers</Link>
                    <Link to="/finance">Finance</Link>
                </div>

                <div className="footer-col">
                    <h4>Own</h4>
                    <Link to="/book-a-service">Book a Service</Link>
                    <Link to="/parts">Parts</Link>
                </div>

                <div className="footer-col">
                    <h4>Discover</h4>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>    

            </div>

            <p>© 2026 Dealership</p>
        </footer>
    );
}

export default Footer;