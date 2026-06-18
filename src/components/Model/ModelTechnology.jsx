import "./ModelTechnology.css";

function ModelTechnology({ intro, columns }) {  

  if (!columns) return null;

  return (
    <section className={`${intro?.bgColour || ""} model-technology`}>

      <span id={intro?.anchorLink || "technology"} className="model-anchor"></span>

      <div className="std-wrapper">

        <div className="section-title t-center">
          {intro?.title && <h2 className="h4">{intro.title}</h2>}      
          {intro?.subtitle && <p className="h2">{intro.subtitle}</p>}
        </div>

        <div className="grid-d-three-cols grid-l-two-cols">

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