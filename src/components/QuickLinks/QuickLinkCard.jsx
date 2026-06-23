import { Link } from "react-router-dom";

function QuickLinkCard({ title, description, url, image }) {

  return (
    <div className="quicklink-card">
        <Link to={url}></Link>
        <div className="q-img"><img src={image} alt={title} /></div>
        <div className="q-text">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="btn btn-underline">Find Out More</div>
        </div>  
    </div>
  )
}

export default QuickLinkCard


