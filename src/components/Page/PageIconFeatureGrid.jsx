import PageIconFeatureItem from "./PageIconFeatureItem";

import "./PageIconFeatureGrid.css";

function PageIconFeatureGrid({ title, items = [], gridClass, wrapperClass }) {
  return (

    <section className="page-icon-feature-grid">
      <div className={wrapperClass || `std-wrapper`}>


        {title && <h2 className="page-icon-feature-grid-title t-center">{title}</h2>}


        <div className={`page-icon-feature-grid-items ${gridClass}`}>
          {items.map((item, index) => (<PageIconFeatureItem key={index} {...item} />))}
        </div>



      </div>
    </section>

  );
}

export default PageIconFeatureGrid;