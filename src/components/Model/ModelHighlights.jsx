import "./modelHighlights.css";

function ModelHighlights({ highlights }) {

  if (!highlights) return null;

  const { anchorLink, bgColour, items } = highlights;

  return (
    <section className={`model-highlights ${bgColour || 'dark-grey-bg dark-bg'}`}>

      {anchorLink && <span id={anchorLink} className="model-anchor"></span>}

      <div className="std-wrapper">

        <div className="grid-d-four-cols grid-m-two-cols">
          
            {items.map((item, index) => (
              
    
                <div key={index} className="model-highlights-col">
    
                  <div className="model-highlights-img">
                    {item.image && <img src={item.image} alt={item.label}  />}
                  </div>
    
                  <div className="model-hightlight-text">    
                    {item.label && <p><small>{item.label}</small></p>}
                    {Array.isArray(item.value) ? (item.value.map((para, i) => (<p key={i}>{para}</p>))) : (<p>{item.value}</p> )}    
                  </div>
    
                </div>    
              
              
            ))}
          
        </div>

      </div>        
    </section>
  );
}

export default ModelHighlights;