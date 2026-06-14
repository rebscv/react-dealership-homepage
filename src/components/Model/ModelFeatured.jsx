import { useState } from "react";
import "./ModelFeatured.css";

function ModelFeatured ({ featured }) {

  const [activeTab, setActiveTab] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleTabClick = (index) => {
    if (index === activeTab) return;
    setIsFading(true);
    setTimeout(() => { setActiveTab(index); setIsFading(false); }, 300);
  };

  const { intro, tabs } = featured;
  const activeRows = tabs[activeTab].rows;  

  return (

    <section className={`model-features ${intro?.bgColour || ''}`} style={{ backgroundImage: `url(${intro.image})` }}>

      <span id={intro?.anchorLink || "features"} className="model-anchor"></span>

      <div className="std-wrapper no-padding-bottom">

        <div className="section-header grid t-center">
          <h2>{intro.title}</h2>
          <p>{intro.description}</p>
        </div>

      </div>

      <div className="std-wrapper">
        <div className="tabs-overflow">
          <div className="featured-tabs default-tabs">
            {tabs.map((tab, index) => (
              <button key={tab.label} className={activeTab === index ? "active" : ""} onClick={() => handleTabClick(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>


        <div>
          <div className={`grid-d-three-cols grid-l-two-cols tab-content ${isFading ? "fade-out" : "fade-in"}`}>

          {activeRows.map((row, index) => (
            <div key={row.title} className={`featured-row ${index % 2 !== 0 ? "reverse" : ""}`}>

              <div className="grid">              
                <div><img src={row.image} alt={row.title} /></div>
                <div className="row-text grid">
                  <h3>{row.title}</h3>

                  {Array.isArray(row.description) ? (
                    row.description.map((para, i) => ( <p key={i}>{para}</p> ))
                  ) : (<p>{row.description}</p>)}

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
