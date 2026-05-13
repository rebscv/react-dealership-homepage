import "./modelHighlights.css";

function ModelHighlights({ items }) {

  if (!items) return null;

  return (
    <section className="model-highlights">
      <div className="std-wrapper">

        <div className="grid-d-four-cols grid-m-two-cols">
          {items.map((item, index) => (
            <div>
  
              <div key={index} className="model-highlights-col">
  
                <div className="model-highlights-img">
                  <img src={item.image} alt={item.label}  />
                </div>
  
                <div className="model-hightlight-text">
  
                <p><small>{item.label}</small></p>
  
                {Array.isArray(item.value) ? (
                  item.value.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))
                ) : (
                  <p>{item.value}</p>
                )}
  
                </div>
  
              </div>
  
            </div>
          ))}
        </div>

      </div>        
    </section>
  );
}

export default ModelHighlights;