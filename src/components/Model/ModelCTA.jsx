function ModelCTA ({ model, description, image, brochure }) {


    return (
    <section className="model-intro">
      <div className="sml-wrapper t-center">
        



              <p className="h4">{model}</p>
              <h2>Your Next Steps</h2>
              <p>{description}</p>

              <div><img src={image} alt={model}  />   </div>

              <div><a href={`/book-a-test-drive?vehicle=${encodeURIComponent(model)}`} className="btn btn-primary">Book a Test Drive</a></div>
              <div><a href={brochure} className="btn-underline" target="_blank">Download Brochure</a></div>

            




      </div>
    </section>
    );

}

export default ModelCTA;
