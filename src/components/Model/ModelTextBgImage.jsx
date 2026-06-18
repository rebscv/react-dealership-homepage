import "./ModelTextBgImage.css"

function ModelTextBgImage({ title, text, imageBg, bgColour, wrapperClass, gridClass, anchorLink }) {
  return (

    <section className={`model-text-bg-image ${bgColour || ''}`} style={{ backgroundImage: `url(${imageBg})` }}>

      {anchorLink && <span id={anchorLink} className="model-anchor"></span>}

      <div className={`${wrapperClass || 'lrg-wrapper'}`}>

      <div className={`${gridClass || ''} no-gaps`}>

        <div className="center-img model-text-bg-mobile-image">
          <img src={imageBg} alt="" />
        </div>

        <div className="center-content">
          <div className="grid">
            
            {title && ( <h2>{title}</h2> )}
            {text && (Array.isArray(text) ? text.map((para, i) => <p key={i}>{para}</p>) : <p>{text}</p> ) }

          </div>
        </div>

      </div>

      </div>
    </section>
  );
}

export default ModelTextBgImage;