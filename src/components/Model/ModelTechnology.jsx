import "./ModelTechnology.css";

function ModelTechnology({ technology }) {  

  const { intro, columns } = technology;

  if (!columns) return null;

  return (
    <section className="model-technology">
      <div className="std-wrapper">

        <div className="section-title t-center">
          {intro.title && <h2 className="h4">{intro.title}</h2>}      
          {intro.subtitle && <p className="h2">{intro.subtitle}</p>}              
        </div>

        <div className="grid-d-three-cols">

          {columns.map((col, index) => (
            <div key={index} className="model-technology-col grid">

              {col.video && (
                <video preload="none" muted autoPlay loop playsInline width="100%">
                  <source src={col.video} type="video/mp4" />
                </video>
              )}

              {col.title && <h3>{col.title}</h3>}
              {Array.isArray(col.description) ? 
                (col.description.map((para, i) => (<p key={i}>{para}</p>))) : (col.description && <p>{col.description}</p> )
              }

            </div>
          ))}

        </div>



      </div>        
    </section>
  );
}

export default ModelTechnology;