import "./ModelText.css";

function ModelText ({ bgColour, title, eyebrowTitle, text, image, alt, anchorLink, wrapperClass }) {

  return (
    <section className={`${bgColour || ""} model-text`}>

      {anchorLink && <span id={anchorLink} className="model-anchor"></span>}


      <div className={`${wrapperClass || `sml-wrapper`} t-center`}>

        {title && ( <div className="section-title t-center"><h2>{eyebrowTitle && ( <span className="title-eyebrow">{eyebrowTitle}</span> )}{title}</h2></div> )}       

        {Array.isArray(text) ? text.map((para, i) => <p key={i}>{para}</p> ) : <p>{text}</p> }
        {image && ( <div className="model-text-img"><img src={image} alt={alt || title || ""} fetchPriority="high" /> </div>)}

      </div>


    </section>
  );

}

export default ModelText;
