function PageCardItem({ title, text, image, alt }) {
  return (
    <div className="page-card-item">      

      <div className="grid">

        <div>{image && ( <img src={image} alt={alt || title || ""} fetchPriority="high" /> )}</div>

        {title && <h2>{title}</h2>}
        {text && <p>{text}</p>}

      </div>


    </div>
  );
}

export default PageCardItem;


