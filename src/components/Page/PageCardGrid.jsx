import PageCardItem from "./PageCardItem";



function PageCardGrid({ title, text, items = [], columns = 2 }) {
  return (

    <section className="page-card-grid">
      <div className="std-wrapper">

        <div className="grid t-center">
          {title && <h2 className="page-icon-feature-grid-title t-center">{title}</h2>}
          {text && <p>{text}</p>}
        </div>

        <div className="page-card-grid-items grid-d-three-cols grid-l-two-cols">
          {items.map((item, index) => (<PageCardItem key={index} {...item} />))}
        </div>

      </div>
    </section>

  );
}

export default PageCardGrid;