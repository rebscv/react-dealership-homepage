function PageImageText({ title, text, image, alt, bgColour, cta }) {
  return (
    <section className={`page-image-text ${bgColour}`}>      
      <div className="full-wrapper">

      <div className="grid-l-two-cols">

        <div className="center-img">{image && ( <img src={image} alt={alt || title || ""} fetchPriority="high" /> )}</div>

        <div className="center-content">
        <div className="grid">
          {title && <h2>{title}</h2>}
          {text && <p>{text}</p>}
          {cta && <div><a href="#enquire" className="btn btn-primary smooth-scroll">{cta}</a></div>}

        </div>
        </div>

      </div>


      </div>
    </section>
  );
}

export default PageImageText;