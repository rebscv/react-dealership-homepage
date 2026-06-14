function ModelText ({ title, text, image, alt, anchorLink, wrapperClass }) {

  if (!text) return null;

  return (
    <section className="model-text">

      {anchorLink && <span id={anchorLink} className="model-anchor"></span>}


      <div className={`${wrapperClass || `sml-wrapper`} t-center`}>

        {title && <h2>{title}</h2>}
        {Array.isArray(text) ? text.map((para, i) => <p key={i}>{para}</p> ) : <p>{text}</p> }
        {image && ( <div><img src={image} alt={alt || title || ""} fetchPriority="high" /> </div>)}

      </div>


    </section>
  );

}

export default ModelText;
