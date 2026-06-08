import PageContactCard from "./PageContactCard";

function PageContactTabs({ title, text, wrapperClass, items = [] }) {
  return (
    <section className="page-contact-tabs">
        <span id="learn-more" className="anchor"></span>
        <div className={`${wrapperClass || "std-wrapper"} t-center`}>

        {title && <h2>{title}</h2>}
        {text && <p>{text}</p>}

        <div>

          {items.map((item, index) => (<PageContactCard key={index} {...item} />))}

        </div>


      </div>
    </section>
  );
}

export default PageContactTabs;