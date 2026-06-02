function PageIntro({ title, text }) {
  return (
    <section className="page-intro">      
      <div className="sml-wrapper t-center">

        {title && <h2>{title}</h2>}
        {text && <p>{text}</p>}


      </div>
    </section>
  );
}

export default PageIntro;


