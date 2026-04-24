import "./modelHighlights.css"

function ModelHighlights ({ items }) {

  if (!items) return null;

  return (
    <section className="model-highlights">
      <div className="std-wrapper">

        <div className="grid-d-four-cols">
          {items.map((item, index) => (
            <div key={index} className="model-highlights-col">
              <p><small>{item.label}</small></p>
              <p>{item.value}</p>              
            </div>
          ))}
        </div>

      </div>        
    </section>
  );

}

export default ModelHighlights
