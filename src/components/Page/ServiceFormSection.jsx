function ServiceFormSection({ title, text }) {
  return (


    <section className="page-form-section">
      <div className="sml-wrapper">


        <div className="page-form-section-grid">
          <div className="page-form-section-content">

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
                    <label htmlFor="message">Message</label>
                </div>

                <div className="form-row form-row-submit">
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


