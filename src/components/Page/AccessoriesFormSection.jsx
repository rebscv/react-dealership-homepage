import { span } from "framer-motion/client";

function AccessoriesFormSection({ title, text, bgColour }) {

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

                <div className="form-row form-row-textarea">                                    
                    <textarea id="message" name="message" placeholder="How can we help?" />
                    <label htmlFor="message">Acccessories information</label>
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

export default AccessoriesFormSection;


