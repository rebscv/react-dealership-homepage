import { useState } from "react";
import "./ModelColourPicker.css";

function ModelColourPicker ({ colours }) {

  const { title, subtitle, description, exterior, interior } = colours;

  const [activeTab, setActiveTab] = useState("exterior");
  const [selectedExterior, setSelectedExterior] = useState(0);
  const [selectedInterior, setSelectedInterior] = useState(0);

  const activeSet = activeTab === "exterior" ? exterior : interior;
  const selectedIndex = activeTab === "exterior" ? selectedExterior : selectedInterior;
  const setSelected = activeTab === "exterior" ? setSelectedExterior : setSelectedInterior;

  if (!activeSet || !activeSet.options || !activeSet.options.length === 0) return null;

  return (
    <section className="model-colour-picker">
      <div className="std-wrapper t-center">
        
        <div className="section-title">
          {title && <h2 className="h4">{title}</h2>}
          {subtitle && <h3 className="h2">{subtitle}</h3>}
        </div>
        {description && <p>{description}</p>}


        <div className="colour-tabs default-tabs grey-bg">
          {exterior && (
            <button type="button" className={`colour-tab ${activeTab === "exterior" ? "active" : ""}`} onClick={() => setActiveTab("exterior")}>
              {exterior.tabLabel || "Exterior"}
            </button>
          )}

          {interior && (
            <button type="button" className={`colour-tab ${activeTab === "interior" ? "active" : ""}`} onClick={() => setActiveTab("interior")}>
              {interior.tabLabel || "Interior"}
            </button>
          )}
        </div>        


        <div className="colour-image">
          <img src={activeSet.options[selectedIndex].image} alt={activeSet.options[selectedIndex].name} />
        </div>

        <p className="colour-name">
          {activeSet.options[selectedIndex].name}
        </p>

        <div className="colour-dots">
          {activeSet.options.map((colour, index) => (
            <div
              key={colour.name}
              className={`colour-dot ${selectedIndex === index ? "active" : ""}`}
              onClick={() => setSelected(index)}
              role="button"
              tabIndex={0}
              aria-label={colour.name}
            >
              <div className="colour-dot-inner">
                {colour.imageThumb ? (
                  <img
                    src={colour.imageThumb}
                    alt={colour.name}
                    className="colour-dot-thumb"
                  />
                ) : (
                  <div
                    className="colour-dot-swatch"
                    style={{ backgroundColor: colour.colorCode }}
                  />
                )}
              </div>
            </div>
          ))}

        </div>


      </div>
    </section>
  );

}

export default ModelColourPicker;
