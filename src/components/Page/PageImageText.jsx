import "./PageImageText.css";

function PageImageText({ title, eyebrowTitle, text, tcs, image, imageBg, alt, bgColour, cta, gridClass, wrapperClass }) {
  return (
    <section className={`page-image-text ${bgColour || ''}`}>      
      <div className={`${wrapperClass || 'full-wrapper'}`}>

      <div className={`${gridClass || ''}`}>

        <div className="center-img">
          
          {image && ( <img src={image} alt={alt || title || ""} fetchPriority="high" /> )}

          {imageBg && ( <div className="page-image-text-bg"><img src={imageBg} alt={alt || title || ""} fetchPriority="high" /></div> )}
        
        </div>

        <div className="center-content">
          <div className="grid">
            
            {title && ( <h2>{eyebrowTitle && ( <span className="title-eyebrow">{eyebrowTitle}</span> )}{title}</h2> )}
            {text && (Array.isArray(text) ? text.map((para, i) => <p key={i}>{para}</p>) : <p>{text}</p> ) }
            {cta && <div><a href="#enquire" className="btn btn-primary smooth-scroll">{cta}</a></div>}
            {tcs && (Array.isArray(tcs) ? text.map((para, i) => <p key={i}><small>{para}</small></p>) : <p><small>{tcs}</small></p> ) }

          </div>
        </div>

      </div>


      </div>
    </section>
  );
}

export default PageImageText;