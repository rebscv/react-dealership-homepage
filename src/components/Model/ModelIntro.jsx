function ModelIntro ({ title, paragraphs, image, cta, menuTitle, version }) {

  if (!title && !paragraphs) return null;

  return (
    <section className="model-intro">
      <div className="lrg-wrapper">

        
        
        <div className="grid-d-two-cols">

          <div className="center-img">
            {image && <img src={image} alt="" />}
          </div>

          <div className="center-content">
            <div className="grid">

                {title && <h2>{title}</h2>}

                {paragraphs && paragraphs.map((para, i) => ( <p key={i}>{para}</p> )) }

                {cta && <div><a href={`/${version}/book-a-test-drive?model=${encodeURIComponent(menuTitle)}`} className="btn btn-primary">{cta}</a></div>}

              </div>
          </div>



        </div>


      </div>
    </section>
  );

}

export default ModelIntro;
