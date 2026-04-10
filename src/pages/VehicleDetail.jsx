import { useParams } from  "react-router-dom";
import vehicles from "../data/vehicles";
import "./VehicleDetail.css";

function VehicleDetail() {

    const { id } = useParams();

    const vehicle = vehicles.find((v) => v.id === Number(id));

    if (!vehicle) {
        return <p>Vehicle not found</p>
    }

    return (
        <section className="vehicle-details-content">
            <div className="std-wrapper">

                <div className="grid-d-two-cols">

                    <div>
                        
                        <h1>{vehicle.title}</h1>
                        <div>Year: {vehicle.year}</div>
                        <img src={vehicle.image} alt={vehicle.title} width="500" />

                        <div className="grid-d-four-cols">
                            <div>
                                <div><strong>Mileage:</strong></div>
                                <div>{vehicle.mileage.toLocaleString()} km</div>
                            </div>
                            <div>
                                <div><strong>Body Type:</strong></div>
                                <div>{vehicle.bodytype.toLocaleString()}</div>
                            </div>
                            <div>
                                <div><strong>Fuel:</strong></div>
                                <div>{vehicle.fuel.toLocaleString()}</div>
                            </div>
                            <div>
                                <div><strong>Transmission:</strong></div>
                                <div>{vehicle.transmission.toLocaleString()}</div>
                            </div>
                        </div>

                    </div>

                    <div>  
                                                                      
                        <div className="vd-price">
                            <h2>${vehicle.price.toLocaleString()}</h2>
                            <div>Drive away</div>
                        </div>
                        
                        <div>
                            <form className="vd-form" action="">

                                <div className="vd-form-row">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" />
                                </div>

                                <div className="vd-form-row">
                                <label htmlFor="fullName">Full Name</label>
                                <input id="fullName" name="fullName" type="text" required />
                                </div>

                                <div className="vd-form-row">
                                <label htmlFor="phone">Phone</label>
                                <input id="phone" name="phone" type="tel" required />
                                </div>

                                <div className="vd-form-row">
                                <label htmlFor="email">Email</label>
                                <input id="email" name="email" type="email" required />
                                </div>

                                <div className="vd-form-row">
                                <button type="submit" className="btn-primary">Enquire Now</button>
                                </div>

                            </form>
                        </div>

                    </div>

                </div>

                <div>
                    <h3>Vehicle Features</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis tempor eros, sed efficitur nunc. Maecenas finibus nunc in tortor mollis tincidunt vitae at justo. Proin a orci a risus sodales gravida.</p>
                </div>

                <div className="vd-specs">

                    <h3>Specifications</h3>

                    <div className="vd-specs-content">

                        <div className="vd-specs-row">
                            <div>Drivetrain</div>
                            <div><strong>FWD</strong></div>
                        </div>
                        
                        <div className="vd-specs-row">
                        <div>Engine type</div>
                        <div><strong>2.0l 4-cyl petrol</strong></div>
                        </div>

                        <div className="vd-specs-row">
                        <div>Fuel consumption (ADR 81/02) - combined</div>
                        <div><strong>6.3 l/100km</strong><sup> (1)</sup></div>
                        </div>

                        <div className="vd-specs-row">
                        <div>Fuel tank capacity</div>
                        <div><strong>48l</strong></div>
                        </div>


                        <div className="vd-specs-row">
                        <div>Maximum power</div>
                        <div><strong>110kW</strong></div>
                        </div>

                        <div className="vd-specs-row">
                        <div>Maximum torque</div>
                        <div><strong>195Nm</strong></div>
                        </div>

                        <div className="vd-specs-row">
                        <div>Recommended fuel</div>
                        <div><strong>Unleaded (91RON)</strong></div>
                        </div>

                        <div className="vd-specs-row">
                        <div>Transmission type</div>
                        <div><strong>6-sp auto</strong></div>  
                        </div>   

                    </div>


                </div>

            </div>
        </section>

    );

}

export default VehicleDetail;

