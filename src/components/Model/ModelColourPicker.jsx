import { useState } from "react";
import "./ModelColourPicker.css";

function ModelColourPicker ({ colours }) {

  const { title, subtitle, description, options } = colours;

  const [ selected, setSelected ] = useState(0);

  if (!options || options.length === 0) return null;

  return (
    <section className="model-colour-picker">
      <div className="std-wrapper t-center">
        
        <div className="section-header model-colour-picker-title">
          {title && <h2 className="h4">{title}</h2>}
          {subtitle && <h3 className="h2">{subtitle}</h3>}
        </div>
        {description && <p>{description}</p>}

        <div className="colour-image">
          <img src={options[selected].image} alt={options[selected].name} />
        </div>

        <p className="colour-name">
          {options[selected].name}
        </p>

        <div className="colour-dots">
          {options.map((colour, index) => (

              <div
                key={colour.name}
                className={`colour-dot ${selected === index ? "active" : ""}`}                
                onClick={() => setSelected(index)}
                aria-label={colour.name}>
                <div className="colour-dot-inner" style={{ backgroundColor: colour.colorCode }}  />
                
              </div>

          ))}
        </div>


      </div>
    </section>
  );

}

export default ModelColourPicker;
