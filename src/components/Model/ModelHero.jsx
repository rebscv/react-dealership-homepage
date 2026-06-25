import "./modelhero.css"

function ModelHero ({ title, tagline, titleEyebrow, image, imageMobile }) {

  return (
    <section className="model-hero">


            <picture>
              <source media="(min-width: 768px)" srcSet={image} />
              <source srcSet={imageMobile} />
              <img src={image} alt={title} fetchPriority="high" />                
            </picture>

            <div className="model-hero-text-container">
                <div className="model-hero-text">
                  
                  {title && <h1 className="model-hero-title">{titleEyebrow && <span className="model-hero-title-eyebrow">{titleEyebrow}</span>}<span>{title}</span> </h1>}
                </div>
            </div>


    </section>
  );

}



export default ModelHero
