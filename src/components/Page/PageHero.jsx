import { div } from "framer-motion/client";
import "./PageHero.css";

function PageHero({ title, eyebrow, text, image, imageMobile, alt }) {
  return (
    <section className="page-hero">
      <div className="full-wrapper">

        {image && (
          <div className="page-hero-img">
            <picture>
              {imageMobile && (<source media="(max-width: 767px)" srcSet={imageMobile} />)}            
              <img src={image} alt={alt || title || ""} fetchPriority="high" />                            
            </picture>
          </div>
        )}

        <div className="page-hero-content">
          {title && <h1> {eyebrow && <span className="page-hero-eyebrow">{eyebrow}</span>} {title}</h1>}
          {text && <p>{text}</p>}
        </div>

      </div>
    </section>
  );
}

export default PageHero;


