import "./ModelNav.css";

function ModelNav ({ nav, menuTitle, version }) {

  const { title, items, cta } = nav;

  return (
    <section className="model-nav dark-bg">
      <div className="std-wrapper">

        <div className="model-nav-flex">

          

          <div className="model-nav-title h4">{menuTitle}</div>

          <ul className="model-nav-list">
            {items.map((item, index) => (
              <li key={index}><a href={item.link} className="smooth-scroll">{item.name}</a></li>
            ))}
          </ul>

          <a href={`/${version}/book-a-test-drive?model=${encodeURIComponent(menuTitle)}`} className="btn btn-outline smooth-scroll">Book a Test Drive</a>

          

        </div>

      </div>    
    </section>
  );

}

export default ModelNav;
