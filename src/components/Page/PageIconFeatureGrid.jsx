import PageIconFeatureItem from "./PageIconFeatureItem";

import "./PageIconFeatureGrid.css";

function PageIconFeatureGrid({ title, items = [], className }) {
  return (

    <section className="page-icon-feature-grid">
      <div className="std-wrapper">


        {title && <h2 className="page-icon-feature-grid-title">{title}</h2>}


        <div className={`page-icon-feature-grid-items ${className}`}>
          {items.map((item, index) => (<PageIconFeatureItem key={index} {...item} />))}
        </div>



      </div>
    </section>

  );
}

export default PageIconFeatureGrid;