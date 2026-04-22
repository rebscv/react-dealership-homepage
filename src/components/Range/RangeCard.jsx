import { Link, useLocation } from "react-router-dom";
import "./RangeCard.css"

function ModelCard({ id, image, title, description }) {

    const location = useLocation();

    const match = location.pathname.match(/^\/(version-\d+)/);
    const basePath = match ? `/${match[1]}` : "";

    return (
        <div className="range-card">
            <Link to={`${basePath}/vehicle/${id}`}>
                <div className="range-img"><img src={image} alt={title} /></div>
                <div className="range-info">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    );

}

export default ModelCard;