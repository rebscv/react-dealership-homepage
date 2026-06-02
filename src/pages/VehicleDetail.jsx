import { useParams, Link, useLocation } from  "react-router-dom";
import { useEffect } from "react";
import vehicles from "../data/vehicles";
import "./VehicleDetail.css";

function VehicleDetail() {

    const { id } = useParams();
    const location = useLocation ();

    const vehicle = vehicles.find((v) => v.id === Number(id));
    
    const versionPath = location.pathname.split("/")[1];
    const versionLink = (page) => `/${versionPath}/${page}`;

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 360) {
                document.body.classList.add("vd-top-scrolling");
            } else {
                document.body.classList.remove("vd-top-scrolling");
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        
        return () => {
            window.addEventListener("scroll", handleScroll);
            document.body.classList.remove("vd-top-scrolling");
        };


    }, []);

    

    if (!vehicle) {
        return <p>Vehicle not found</p>
    }

    return (
        <>
        <section className="vehicle-details-content grey-bg">

            {/* Start Block */}
            <div className="vd-top-bar">
                <div className="std-wrapper">

                    <div className="vd-top-bar-grid">

                        <div className="vd-top-bar-img">
                            <img src={vehicle.image} alt={vehicle.title} width="500" />    
                        </div>

                        <div className="h1"><span>{vehicle.year}</span> {vehicle.title}</div>

                        <div className="vd-price">
                            <div className="h2">${vehicle.price.toLocaleString()}</div>
                            <div className="vd-price-driveaway">Drive away</div>
                        </div>

                        <div>
                            <a href="#enquire" className="btn btn-primary">Enquire Now</a>
                        </div>

                    </div>

                </div>
            </div>


            {/* Start Block */}
            <div className="std-wrapper">
                <div className="grid-d-two-cols grid-d-reverse d-grid-cols-40-60">


                    <div>
                        <div className="vd-overview">


                            <div className="vd-overview-title-img-price grid">
                                <h1><span>{vehicle.year}</span> {vehicle.title}</h1>

                                <div className="vd-price">
                                    <h2>${vehicle.price.toLocaleString()}</h2>
                                    <div>Drive away</div>
                                </div>      


                                <div className="hide-desktop">
                                    <div className="vd-img">
                                        <img src={vehicle.image} alt={vehicle.title} width="500" />                      
                                    </div>
                                </div>
                            </div>
                            

                            <div>
                                <div className="vd-meta">

                                    <div>
                                        <div className="vd-meta-title">
                                            <svg className="icon-kms"><use href="/icons.svg#icon-kms"></use></svg>
                                            <span>Mileage</span>
                                        </div>
                                        <div className="vd-meta-text">{vehicle.mileage.toLocaleString()} km</div>
                                    </div>

                                    <div>
                                        <div className="vd-meta-title">
                                            <svg className="icon-car"><use href="/icons.svg#icon-car"></use></svg>
                                            <span>Body Type</span>
                                        </div>
                                        <div className="vd-meta-text">{vehicle.bodytype.toLocaleString()}</div>
                                    </div>

                                    <div>
                                        <div className="vd-meta-title">
                                            <svg className="icon-petrol"><use href="/icons.svg#icon-petrol"></use></svg>Fuel Type
                                            <span>Fuel</span>
                                        </div>
                                        <div className="vd-meta-text">{vehicle.fuel.toLocaleString()}</div>
                                    </div>

                                    <div>
                                        <div className="vd-meta-title">
                                            <svg className="icon-transmission"><use href="/icons.svg#icon-transmission"></use></svg>
                                            <span>Transmission</span>                                        
                                        </div>
                                        <div className="vd-meta-text">{vehicle.transmission.toLocaleString()}</div>
                                    </div>

                                </div>
                            </div>

                            

                            <div>
                                <span id="enquire" className="anchor"></span>
                                <form action="">

                                    <h4>Get in touch</h4>

                                    <div className="form-row">                                    
                                        <input id="fullName" name="fullName" type="text" placeholder="Full Name" required />
                                        <label htmlFor="fullName">Full Name</label>
                                    </div>

                                    <div className="form-row">                                    
                                        <input id="phone" name="phone" type="tel" placeholder="Phone" required />
                                        <label htmlFor="phone">Phone</label>
                                    </div>

                                    <div className="form-row">                                    
                                        <input id="email" name="email" type="email" placeholder="Email" required />
                                        <label htmlFor="email">Email</label>
                                    </div>

                                    <div className="form-row form-row-textarea">                                    
                                        <textarea id="message" name="message" placeholder="Message" />
                                        <label htmlFor="message">Message</label>
                                    </div>

                                    <div className="form-row form-row-submit">
                                        <button type="submit" className="btn btn-primary">Enquire Now</button>
                                    </div>

                                </form>
                            </div>

                            <div className="grid">
                                <h4>Interested in finance?</h4>
                                <p>Complete your car purchase all in one place - contact our dealership. Get to know our dealership as they assist you in finding car finance that suits your journey with Mazda Finance.</p>
                                <Link to={versionLink("finance")}><div className="btn btn-underline">Learn More</div></Link>
                            </div>

                        </div>
                    </div>



                    <div>
                        <div className="grid">


                            <div className="vd-img">
                                <img src={vehicle.image} alt={vehicle.title} width="500" />                      
                            </div>

                            <h3>Vehicle Features</h3>
                            <p>{vehicle.title} lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum ante ut metus consectetur, eu accumsan nibh porttitor. Etiam nec commodo nunc, sit amet ullamcorper nulla. Aliquam ultrices eget odio in commodo. Fusce et euismod est. Phasellus nec nisi ac enim finibus sodales. Donec facilisis volutpat risus, ac congue dui rutrum ac. Nunc eget dolor sed metus consectetur bibendum vel sed lacus.</p>

                            <h3>Summary</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum ante ut metus consectetur, eu accumsan nibh porttitor. Etiam nec commodo nunc, sit amet ullamcorper nulla. Aliquam ultrices eget odio in commodo. Fusce et euismod est. Phasellus nec nisi ac enim finibus sodales. Donec facilisis volutpat risus, ac congue dui rutrum ac. Nunc eget dolor sed metus consectetur bibendum vel sed lacus.</p>
                            <p>In vestibulum velit eget nisl porta, vel tincidunt odio vehicula. Praesent risus sapien, placerat eu magna nec, scelerisque faucibus orci. Duis ornare arcu ante, non ultrices urna fermentum pretium. Nam condimentum tristique orci, ac finibus leo elementum sed. Aenean quam lacus, tempor eget dignissim et, condimentum nec orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam eu libero augue. Sed egestas accumsan ante, sed pretium urna vestibulum eu.</p>


                            <div className="vd-specs grid">

                                <h3>Specifications</h3>
                                <p>Etiam ac faucibus urna. Fusce cursus tortor odio, ac ornare neque placerat a. Integer nec molestie mi, vel tincidunt eros. Morbi molestie aliquet turpis, et porta libero commodo nec.</p>

                                <div className="vd-specs-content grid">

                                    <div className="vd-specs-row">
                                        <div>Drivetrain</div>
                                        <div>FWD</div>
                                    </div>
                                    
                                    <div className="vd-specs-row">
                                        <div>Engine type</div>
                                        <div>2.0l 4-cyl petrol</div>
                                    </div>

                                    <div className="vd-specs-row">
                                        <div>Fuel consumption (ADR 81/02) - combined</div>
                                        <div>6.3 l/100km<sup> (1)</sup></div>
                                    </div>

                                    <div className="vd-specs-row">
                                        <div>Fuel tank capacity</div>
                                        <div>48l</div>
                                    </div>


                                    <div className="vd-specs-row">
                                        <div>Maximum power</div>
                                        <div>110kW</div>
                                    </div>

                                    <div className="vd-specs-row">
                                        <div>Maximum torque</div>
                                        <div>195Nm</div>
                                    </div>

                                    <div className="vd-specs-row">
                                        <div>Recommended fuel</div>
                                        <div>Unleaded (91RON)</div>
                                    </div>

                                    <div className="vd-specs-row">
                                        <div>Transmission type</div>
                                        <div>6-sp auto</div>  
                                    </div>   

                                </div>


                            </div>  


                        </div>
                    </div>



                </div>
            </div>

        </section>

        <section className="vehicle-details-footer">
            <div className="std-wrapper t-center">

                <h2>Your Next Steps</h2>

                <div className="grid-d-three-cols">

                    
                    <div className="block-col">
                        <div className="grid">
                            <div>
                            <svg className="icon-buy"><use href="/icons.svg#icon-buy"></use></svg>
                            <h4>Ready to buy?</h4>
                            </div>
                            <p>Speak to our Sales Team today and drive away in your dream Mazda</p>
                            <div><a href="#enquire" className="btn btn-primary">Enquire More</a></div>
                        </div>
                    </div>


                    
                    <div className="block-col">
                        <div className="grid">
                            <div>
                            <svg className="icon-finance"><use href="/icons.svg#icon-finance"></use></svg>
                            <h4>Need financing?</h4>
                            </div>
                            <p>Convenience and confidence with Mazda Finance. It's finance, your way</p>
                            <Link to={versionLink("finance")}><div className="btn btn-primary">Learn More</div></Link>
                            
                        </div>
                    </div>


                    
                    <div className="block-col">
                        <div className="grid">
                            <div>
                            <svg className="icon-contact"><use href="/icons.svg#icon-contact"></use></svg>
                            <h4>Got a question?</h4>
                            </div>
                            <p>Speak to our Sales Team today for advice on buying the right Mazda for you.</p>
                            <div><a href="#enquire" className="btn btn-primary">Enquire More</a></div>
                        </div>
                    </div>


                </div>
            </div>
        </section>


        
        </>
    );

}

export default VehicleDetail;

