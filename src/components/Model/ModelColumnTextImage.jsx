function ModelColumnTextImage ({ bgColour, title, eyebrowTitle, text, image, alt, anchorLink, wrapperClass, gridClass }) {

  if (!text) return null;

  return (
    <section className={`${bgColour || ""} model-colum-text-image`}>

      {anchorLink && <span id={anchorLink} className="model-anchor"></span>}


      <div className={`${wrapperClass || `std-wrapper`}`}>
        <div className={`${gridClass || `grid-l-two-cols`} `}>

          <div className="center-content">
            <div className="grid">

              {title && ( <h2>{eyebrowTitle && ( <span className="title-eyebrow">{eyebrowTitle}</span> )}{title}</h2> )}       
              {Array.isArray(text) ? text.map((para, i) => <p key={i}>{para}</p> ) : <p>{text}</p> }
              

            </div>
          </div>

          <div className="center-img">
            {image && ( <img src={image} alt={alt || title || ""} fetchPriority="high" /> )}
          </div>


        </div>        
      </div>


    </section>
  );

}

export default ModelColumnTextImage;
