import "./modelhero.css"

function ModelHero ({ title, tagline, image, imageMobile }) {

  return (
    <section className="model-hero">


            <picture>
              <source media="(min-width: 768px)" srcSet={image} />
              <source srcSet={imageMobile} />
              <img src={image} alt={title} fetchPriority="high" />                
            </picture>

            <div className="model-hero-text-container">
                <div className="model-hero-text">
                  <h1 className="model-hero-title">{title}</h1>
                  <p className="model-hero-tagline">{tagline}</p>
                </div>
            </div>


    </section>
  );

}



export default ModelHero
