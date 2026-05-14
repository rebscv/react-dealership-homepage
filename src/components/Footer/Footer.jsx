
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import models from "../../data/models";

import "./Footer.css";

function Footer({ version = 1 }) {
    const location = useLocation();
    const match = location.pathname.match(/^\/(version-\d+)/);
    const basePath = match ? `/${match[1]}` : "";

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    // v2 + v3 both use accordion behaviour on mobile
    const isAccordion = (version === 2 || version === 3) && isMobile;

    return (
        <footer>
            <div className="std-wrapper">
                <div className="grid-xl-five-cols grid-d-four-cols grid-l-three-cols">

                    
                    <div>
                    <div className="grid footer-contact">
                        <h3>Get In Touch</h3>


                        <div>
                        <h4>Phone</h4>
                        <p>(03) 9900 9000</p>
                        </div>

                        <div>
                        <h4>Address</h4>
                        <p>123 Street, City, VIC, 3000</p>
                        </div>

                        <div>
                        <h4>Trading Hours</h4>
                        <p>
                            Mon - Fri: 9:00am - 5:00pm<br />
                            Sat: 10:00am - 5:00pm<br />
                            Sun: Closed
                        </p>
                        </div>

                        <div>
                        <h4>Follow Us</h4>
                        <ul className="social-list">
                            <li><a href=""><svg className="icon-facebook"><use xlinkHref="/icons.svg#icon-facebook"></use></svg></a></li>
                            <li><a href=""><svg className="icon-youtube"><use xlinkHref="/icons.svg#icon-youtube"></use></svg></a></li>
                            <li><a href=""><svg className="icon-instagram"><use xlinkHref="/icons.svg#icon-instagram"></use></svg></a></li>
                        </ul>
                        </div>


                    </div>
                    </div>

                    <div>
                        <div className="grid">
                        <h3 className="foot-head" onClick={() => isAccordion && toggleSection("models")}>
                            <div>Models</div> {isAccordion && <span>{openSection === "models" ? "-" : "+"}</span>}
                        </h3>

                        <div className={isAccordion && openSection !== "models" ? "footer-col hidden" : "footer-col"}>
                            {models.map((model) => (
                                <Link key={model.slug} to={`${basePath}/models/${model.slug}`}>{model.menuTitle}</Link>
                            ))}
                        </div>

                        </div>
                    </div>



                    <div>
                        <div className="grid">
                        <h3 className="foot-head" onClick={() => isAccordion && toggleSection("buy")}>
                            <div>Buy</div> {isAccordion && <span>{openSection === "buy" ? "-" : "+"}</span>}
                        </h3>
                        <div className={isAccordion && openSection !== "buy" ? "footer-col hidden" : "footer-col"}>
                            <Link to={`${basePath}/stock`}>Stock</Link>
                            <Link to={`${basePath}/offers`}>Latest Offers</Link>
                            <Link to={`${basePath}/finance`}>Finance</Link>
                            <Link to={`${basePath}/Book a Test Drive`}>Book a Test Drive</Link>
                        </div>
                        </div>
                    </div>

                    <div>
                        <div className="grid">
                        <h3 className="foot-head" onClick={() => isAccordion && toggleSection("own")}>
                            <div>Own</div> {isAccordion && <span>{openSection === "own" ? "-" : "+"}</span>}
                        </h3>
                        <div className={isAccordion && openSection !== "own" ? "footer-col hidden" : "footer-col"}>
                            <Link to={`${basePath}/book-a-service`}>Book a Service</Link>
                            <Link to={`${basePath}/parts`}>Parts</Link>
                            <Link to={`${basePath}/mymazda`}>MyMazda</Link>
                            <Link to={`${basePath}/recalls`}>Recalls</Link>
                            <Link to={`${basePath}/roadside-assistance`}>Roadside Assistance</Link>
                            <Link to={`${basePath}/warranty`}>Warranty</Link>
                            <Link to={`${basePath}/help-support`}>Help & Support</Link>
                            <Link to={`${basePath}/faqs`}>FAQs</Link>
                        </div>
                        </div>
                    </div>

                    <div>
                        <div className="grid">
                        <h3 className="foot-head" onClick={() => isAccordion && toggleSection("discover")}>
                            <div>Discover</div> {isAccordion && <span>{openSection === "discover" ? "-" : "+"}</span>}
                        </h3>
                        <div className={isAccordion && openSection !== "discover" ? "footer-col hidden" : "footer-col"}>
                            <Link to={`${basePath}/about`}>About Us</Link>
                            <Link to={`${basePath}/contact`}>Contact Us</Link>
                        </div>
                    </div>
                    </div>

                </div>
                <div className="copyright">
                    <div>© 2026 Mazda Dealer Name City</div>
                    <div><a href="#" target="_blank">General Policies</a></div>
                    <div><a href="#" target="_blank">Privacy Policies</a></div>
                    <div><a href="#" target="_blank">Complaints</a></div>
                    <div><a href="#" target="_blank">Sitemap</a></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;