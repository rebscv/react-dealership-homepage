import "./PageHero.css";

function PageHero({ title, text, image, imageMobile, alt }) {
  return (
    <section className="page-hero">
      <div className="full-wrapper">

        {image && (
          <picture>
            {imageMobile && (<source media="(max-width: 767px)" srcSet={imageMobile} />)}            
            <img src={image} alt={alt || title || ""} fetchPriority="high" />                            
          </picture>
        )}

        <div className="page-hero-content">
          {title && <h1>{title}</h1>}
          {text && <p>{text}</p>}
        </div>

      </div>
    </section>
  );
}

export default PageHero;


