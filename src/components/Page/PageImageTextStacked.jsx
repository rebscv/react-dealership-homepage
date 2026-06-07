import "./PageImageTextStacked.css";

function PageImageTextStacked({ title, text, image, alt, bgColour, cta }) {
  return (
    <section className={`page-image-text-stacked ${bgColour || ''}`}>      
      <div className="full-wrapper">


        <div className="img-content">{image && ( <img src={image} alt={alt || title || ""} fetchPriority="high" /> )}</div>


        <div className="text-content grid">
          {title && <h2>{title}</h2>}
          {text && <p>{text}</p>}
          {cta && <div><a href="#enquire" className="btn btn-primary smooth-scroll">{cta}</a></div>}
        </div>


      </div>
    </section>
  );
}

export default PageImageTextStacked;