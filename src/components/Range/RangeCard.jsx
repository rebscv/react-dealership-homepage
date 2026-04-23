import { Link, useLocation } from "react-router-dom";
import "./RangeCard.css"

function ModelCard({ id, slug, image, title, subtitle, description, tags, style }) {

    const location = useLocation();

    const match = location.pathname.match(/^\/(version-\d+)/);
    const basePath = match ? `/${match[1]}` : "";

    return (
        <div className={`range-card ${tags?.join(" ") || ""}`} style={style}>
            <Link to={`${basePath}/model/${slug}`}>
                <div className="range-img"><img src={image} alt={title} /></div>
                <div className="range-info">
                    <p>{subtitle}</p>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    );

}

export default ModelCard;