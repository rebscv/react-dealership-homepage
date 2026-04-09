import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useState, useEffect } from "react";

import "./Footer.css";

function Footer({ version = 1 }) {

    const location = useLocation();
    const match = location.pathname.match(/^\/(version-\d+)/);
    const basePath = match ? `/${match[1]}` : "";

    
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => { setIsMobile(window.innerWidth < 768); }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [openSection, setOpenSection] = useState(null);
    const toggleSection = (section) => { setOpenSection(openSection === section ? null : section) };
    const isAccordion = version === 2 && isMobile;

    return (
        <footer>

            <div className="std-wrapper">
                <div className="grid-d-five-cols grid-l-three-cols">

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
                        <h4 onClick={() => isAccordion && toggleSection("models")}>
                            Models {isAccordion && <span>{openSection === "models" ? "-" : "+"}</span>}
                        </h4>
                        <div className={isAccordion && openSection !== "models" ? "hidden" : ""}>
                            My Model Links
                        </div>
                    </div>

                    <div>
                        <h4 onClick={() => isAccordion && toggleSection("buy")}>
                            Buy {isAccordion && <span>{openSection === "buy" ? "-" : "+"}</span>}
                        </h4>
                        <div className={isAccordion && openSection !== "buy" ? "hidden" : ""}>
                            <Link to={`${basePath}/stock`}>Stock</Link>
                            <Link to={`${basePath}/offers`}>Latest Offers</Link>
                            <Link to={`${basePath}/finance`}>Finance</Link>
                        </div>
                    </div>

                    <div>
                        <h4 onClick={() => isAccordion && toggleSection("own")}>
                            Own {isAccordion && <span>{openSection === "own" ? "-" : "+"}</span>}
                        </h4>
                        <div className={isAccordion && openSection !== "own" ? "hidden" : ""}>
                            <Link to={`${basePath}/book-a-service`}>Book a Service</Link>
                            <Link to={`${basePath}/parts`}>Parts</Link>
                        </div>
                    </div>

                    <div>
                        <h4 onClick={() => isAccordion && toggleSection("discover")}>
                            Discover {isAccordion && <span>{openSection === "discover" ? "-" : "+"}</span>}
                        </h4>
                        <div className={isAccordion && openSection !== "discover" ? "hidden" : ""}>
                            <Link to={`${basePath}/about`}>About Us</Link>
                            <Link to={`${basePath}/contact`}>Contact Us</Link>
                        </div>
                    </div>    

                </div>
                <p>© 2026 Dealership</p>
            </div>

        </footer>
    );
}

export default Footer;