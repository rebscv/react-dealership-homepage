import PageCardItem from "./PageCardItem";

function PageCardGrid({ title, items = [], columns = 2 }) {
  return (

    <section className="page-icon-feature-grid">
      <div className="std-wrapper">


        {title && <h2 className="page-icon-feature-grid-title t-center">{title}</h2>}


        <div className="page-icon-feature-grid-items grid-d-two-cols" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
          {items.map((item, index) => (<PageCardItem key={index} {...item} />))}
        </div>


      </div>
    </section>

  );
}

export default PageCardGrid;