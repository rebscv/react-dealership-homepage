import PageAccordianItems from "./PageAccordianItems";


function PageAccordian({ title, text, bgColour, cta, items = [] }) {


  return (
    <section className={`page-accordian-content ${bgColour}`}>      
      <div className="sml-wrapper">

        {title && <h2 className="t-center">{title}</h2>}
        {text && <p>{text}</p>}
        
      
        <div className="page-accordian-items">
          {items.map((item, index) => (<PageAccordianItems key={index} {...item} />))}
        </div>

        {cta && <div><a href="#enquire" className="btn btn-primary">{cta}</a></div>}


      </div>
    </section>
  );
}

export default PageAccordian;


