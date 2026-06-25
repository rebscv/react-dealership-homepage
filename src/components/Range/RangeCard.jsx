import { Link, useLocation } from "react-router-dom";
import "./RangeCard.css"
import { span } from "framer-motion/client";

function ModelCard({ id, slug, image, title, subtitle, description, tags, style, isFeaturedPage }) {

    const location = useLocation();

    const match = location.pathname.match(/^\/(version-\d+)/);
    const basePath = match ? `/${match[1]}` : "";

    return (
        <div className={`range-card ${tags?.join(" ") || ""}`} style={style}>
            <Link to={`${basePath}/models/${slug}`}>

                {isFeaturedPage && ( <span className="range-card-badge">Featured Model</span> )}

                <div className="range-img"><img src={image} alt={title} /></div>

                <div className="range-info">
                    <p>{subtitle}</p>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    {isFeaturedPage && ( <div><span className="range-card-badge">Featured Model</span></div> )}
                </div>

            </Link>
        </div>
    );

}

export default ModelCard;