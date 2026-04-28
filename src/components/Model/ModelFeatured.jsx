import { useState } from "react";
import "./ModelFeatured.css";

function ModelFeatured ({ featured }) {

  const [activeTab, setActiveTab] = useState(0);

  const { intro, tabs } = featured;
  const activeRows = tabs[activeTab].rows;  

  return (
    <section className="model-features dark-grey-bg dark-bg" style={{ backgroundImage: `url(${intro.image})` }}>
      <div className="std-wrapper no-padding-bottom">

        <div className="section-header grid t-center">
          <h2>{intro.title}</h2>
          <p>{intro.description}</p>
        </div>

      </div>

      <div className="std-wrapper">
        <div className="featured-tabs default-tabs">
          {tabs.map((tab, index) => (
            <button key={tab.label} className={activeTab === index ? "active" : ""} onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>


        <div>
          <div className="grid-d-three-cols">

          {activeRows.map((row, index) => (
            <div key={row.title} className={`featured-row ${index % 2 !== 0 ? "reverse" : ""}`}>

              <div className="grid">              
                <div><img src={row.image} alt={row.title} /></div>
                <div className="row-text grid">
                  <h3>{row.title}</h3>
                  <p>{row.description}</p>
                </div>
              </div>

            </div>
          ))}

          </div>
        </div>


      </div>        
    </section>
  );

}

export default ModelFeatured
