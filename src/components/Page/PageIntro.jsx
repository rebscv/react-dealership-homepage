function PageIntro({ title, text, cta }) {
  return (
    <section className="page-intro">      
      <div className="sml-wrapper t-center">

        {title && <h2>{title}</h2>}
        {text && <p>{text}</p>}
        {cta && <div><a href="#enquire" className="btn btn-primary smooth-scroll">{cta}</a></div>}


      </div>
    </section>
  );
}

export default PageIntro;