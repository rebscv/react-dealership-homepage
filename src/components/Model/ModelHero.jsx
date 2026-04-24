import "./modelhero.css"

function ModelHero ({ title, tagline, image }) {

  return (
    <section className="model-hero">


            <picture>
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
