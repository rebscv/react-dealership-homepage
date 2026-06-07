import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { span } from "framer-motion/client";

function ServiceFormSection({ title, text, bgColour }) {

  const [serviceDate, setServiceDate] = useState(null);

  return (

    
    <section className={`page-form-section ${bgColour}`}>
      <div className="sml-wrapper">


        <span id="enquire" className="anchor"></span>
        <div className="page-form-section-grid">
          <div className="page-form-section-content grid">

            <div className="grid t-center">
              {title && <h2>{title}</h2>}
              {text && <p>{text}</p>}
            </div>
          

            <div className="page-form-section-form">              
              <form>

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


                <div className="grid-d-two-cols">


                <div className="form-row form-row-date-picker">
                  <DatePicker
                    name="date"
                    selected={serviceDate}
                    onChange={(date) => setServiceDate(date)}
                    dateFormat="EEE, dd MMM yyyy"
                    minDate={new Date()}
                    placeholderText="Preffered Service Date"
                    className="form-input"
                  />
                  <label htmlFor="date">Date</label>
                </div>

                <div className="form-row form-row-select">                   
                    <select id="time" name="time" type="time" required>
                      <option value="">Please select</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="9:30 AM">9:30 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="12:00 AM">12:00 AM</option>
                      <option value="12:30 AM">12:30 AM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="1:30 PM">1:30 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="2:30 PM">2:30 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="3:30 PM">3:30 PM</option>
                      <option value="4:30 PM">4:30 PM</option>
                      <option value="4:30 PM">4:30 PM</option>
                    </select>
                    <label htmlFor="time">Prefrered Service Time</label>
                </div>

                </div>



                <div className="form-row form-row-textarea">                                    
                    <textarea id="message" name="message" placeholder="How can we help?" />
                    <label htmlFor="message">Message</label>
                </div>

                <div className="form-row form-row-submit t-center">
                    <button type="submit" className="btn btn-primary">Enquire Now</button>
                </div>


              </form>
            </div>

          </div>

        </div>


      </div>
    </section>
  );
}

export default ServiceFormSection;


