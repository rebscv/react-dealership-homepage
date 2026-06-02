function PageImageText({ title, text, image, alt }) {
  return (
    <section className="page-image-text">      
      <div className="full-wrapper">

      <div className="grid-d-two-cols">

        <div>{image && ( <img src={image} alt={alt || title || ""} fetchPriority="high" /> )}</div>

        <div>
          {title && <h2>{title}</h2>}
          {text && <p>{text}</p>}
        </div>

      </div>


      </div>
    </section>
  );
}

export default PageImageText;


