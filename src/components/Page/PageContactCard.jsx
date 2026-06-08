function PageContactCard({ title, text, address, phone, hours, mapLink, mapUrl }) {
  return (

      <div className="page-contact-card-content">

        <div className="grid-l-two-cols no-gaps white-bg">

            <div className="center-content">
                <div className="page-contact-card-content-grid grid">


                    
                    {title && <h3>{title}</h3>}

                    <div className="page-contact-card-details">

                        {address && 
                            <div className="page-contact-details-row">
                                <svg className="icon-phone-outline"><use href="/icons.svg#icon-phone-outline"></use></svg>
                                <div>{address}</div>
                            </div>
                        }


                        {phone && 
                            <div className="page-contact-details-row">
                                <svg className="icon-location"><use href="/icons.svg#icon-location"></use></svg>
                                <a href={`tel:${phone}`}>{phone}</a>
                            </div>
                        }


                        {hours && <div>{Array.isArray(hours) ? (hours.map((para, i) => ( <div key={i}>{para}</div> ))) : (<div>{hours}</div>)}</div>}


                    </div>

                    {mapLink && <div><a href={mapLink} target="blank" className="btn btn-primary">Get Directions</a></div>}
                </div>
            </div>

            <div>
                <iframe src={mapUrl} width="600" height="450" style={{ border: 0 }} loading="lazy"></iframe>
            </div>

        </div>




        

      </div>

  );
}

export default PageContactCard;