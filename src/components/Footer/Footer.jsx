import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer>

            <div className="std-wrapper">

                <div className="grid-d-five-cols">

                    <div>
                        <h4>Get In Touch</h4>

                        <h5>Phone</h5>
                        <p>(03) 9900 9000</p>

                        <h5>Address</h5>
                        <p>123 Street, City, VIC, 3000</p>

                        <h5>Trading Hours</h5>
                        <p>
                            Mon - Fri: 9:00am - 5:00pm<br />
                            Sat: 10:00am - 5:00pm<br />
                            Sun: Closed
                        </p>

                        <h5>Follow Us</h5>
                        <p>Facebook</p>
                    </div>

                    <div>
                        <h4>Models</h4>
                    </div>

                    <div>
                        <h4>Buy</h4>
                        <Link to="/stock">Stock</Link>
                        <Link to="/offers">Latest Offers</Link>
                        <Link to="/finance">Finance</Link>
                    </div>

                    <div>
                        <h4>Own</h4>
                        <Link to="/book-a-service">Book a Service</Link>
                        <Link to="/parts">Parts</Link>
                    </div>

                    <div>
                        <h4>Discover</h4>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>    

                </div>

                <p>© 2026 Dealership</p>

            </div>

        </footer>
    );
}

export default Footer;