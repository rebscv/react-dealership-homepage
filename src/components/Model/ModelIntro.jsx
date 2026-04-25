function ModelIntro ({ title, paragraphs, cta }) {

  if (!title && !description) return null;

  return (
    <section className="model-intro">
      <div className="sml-wrapper t-center">

        {title && <h2>{title}</h2>}
        
        {paragraphs &&
          paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))
        }

        {cta &&
          <div className="">
            <a href="{cta.link}" className="btn btn-primary">{cta.label}</a>
          </div>
        }


        </div>
    </section>
  );

}

export default ModelIntro;
