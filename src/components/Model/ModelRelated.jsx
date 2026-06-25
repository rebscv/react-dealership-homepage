import { Link, useLocation } from "react-router-dom";
import models from "../../data/models";
import  "./ModelRelated.css";


function ModelRelated ({ bgColour, title, text, models: relatedModelSlugs = [] }) {

  const location = useLocation();
  const version = location.pathname.split("/")[1];
  const relatedModels = models.filter ( model => relatedModelSlugs.includes(model.slug));

  return (
    <section className={`${bgColour || ""} model-related`}>
      <div className="std-wrapper">

        {title && <h2 className="t-center">{title}</h2>}
        {text && <p className="t-center">{text}</p>}

        <div className="grid-d-three-cols grid-t-two-cols">

          {relatedModels.map((model) => (
            <div key={model.slug} className="model-related-card t-center">
              <Link to={`/${version}/models/${model.slug}`} className="model-related-link" />
              <div className="model-related-img"><img src={model.image} alt={model.title} /></div>
              <h3>{model.menuTitle}</h3>
              {model.description && <p>{model.description}</p>}
            </div>
          ))}

        </div>

      </div>
    </section>
  );

}

export default ModelRelated;
