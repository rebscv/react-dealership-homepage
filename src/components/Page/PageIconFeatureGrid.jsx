import PageIconFeatureItem from "./PageIconFeatureItem";

import "./PageIconFeatureGrid.css";

function PageIconFeatureGrid({ title, items = [], gridClass, wrapperClass, cta }) {
  return (

    <section className="page-icon-feature-grid">
      <div className={wrapperClass || `std-wrapper`}>


        {title && <h2 className="page-icon-feature-grid-title t-center">{title}</h2>}


        <div className={`page-icon-feature-grid-items ${gridClass || ``} {}`}>
          {items.map((item, index) => (<PageIconFeatureItem key={index} {...item} />))}
        </div>

        {cta && <div className="t-center"><a href="#enquire" className="btn btn-primary smooth-scroll">{cta}</a></div>}


      </div>
    </section>

  );
}

export default PageIconFeatureGrid;