import { useSearchParams } from "react-router-dom";

import models from "../../data/models/index";



function TestDriveFormSection({ title, text, bgColour }) {

  const [searchParams] = useSearchParams();
  const selectedModel = searchParams.get("model") || "";
  
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
                    <select id="model" name="model" required defaultValue={selectedModel}>

                      <option value="">Select a model</option>
                      {models.map((model) => (<option key={model.id} value={model.menuTitle}>{model.menuTitle}</option>))}

                    </select>
                    <label htmlFor="model">Model</label>
                </div>

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
                    <textarea id="message" name="message" placeholder="How can we help?" />
                    <label htmlFor="message">Message</label>
                </div>

                <div className="form-row form-row-submit t-center">
                    <button type="submit" className="btn btn-primary">Book Now</button>
                </div>


              </form>
            </div>

          </div>

        </div>


      </div>
    </section>
  );
}

export default TestDriveFormSection;


