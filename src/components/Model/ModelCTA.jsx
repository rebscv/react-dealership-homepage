function ModelCTA ({ model, description, image, brochure, menuTitle, version }) {


    return (
    <section className="model-intro">
      <div className="sml-wrapper t-center">   


        <p className="h4">{menuTitle}</p>
        <h2>Your Next Steps</h2>
        {description && <p>{description}</p>}

        {image && <div><img src={image} alt={model}  /></div>}

        <div><a href={`/${version}/book-a-test-drive?model=${encodeURIComponent(menuTitle)}`} className="btn btn-primary">Book a Test Drive</a></div>
        <div><a href={brochure} className="btn-underline" target="_blank">Download Brochure</a></div>


      </div>
    </section>
    );

}

export default ModelCTA;
