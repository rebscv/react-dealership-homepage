import "./PageCardGrid.css"

function PageCardItem({ title, text, image, btn, link, alt }) {
  return (
    <div className="page-card-item">      

    
      <div>{image && ( <img src={image} alt={alt || title || ""} fetchPriority="high" /> )}</div>

      <div className="page-card-item-text t-center">

        {title && <h3 className="h4">{title}</h3>}        
        {Array.isArray(text) ? (text.map((para, i) => ( <p key={i}>{para}</p> ))) : (<p>{text}</p>)}

      </div>

      {btn && <div className="page-card-item-btn"><a href={link} className="btn btn-primary">{btn}</a></div>}


    </div>
  );
}

export default PageCardItem;


