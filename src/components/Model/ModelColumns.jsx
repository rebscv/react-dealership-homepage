function ModelColumns({ columns, intro }) {  

  if (!columns) return null;

  

  return (
    <section className={`${intro?.bgColour || ""} model-columns`}>

      <span id={intro?.anchorLink || "safety"} className="model-anchor"></span>

      <div className={intro.wrapperClass || `lrg-wrapper`}>

        
        {intro.title && ( <div className="section-title t-center"><h2>{intro.eyebrowTitle && ( <span className="title-eyebrow">{intro.eyebrowTitle}</span> )}{intro.title}</h2></div> )}
        

        <div className={intro.gridClass || `grid-d-three-cols`}>

          {columns.map((column, index) => (

            <div key={index}>
              <div className="grid">
                {column.video && <video preload="none" muted autoPlay loop playsInline poster=""><source type="video/mp4" src={column.video} /></video>}
                {column.image && <img src={column.image} />}
                {column.title && <h3>{column.title}</h3>}
                {Array.isArray(column.description) ? (column.description.map((para, i) => (<p key={i}>{para}</p>))) : (column.description && <p>{column.description}</p> ) }
              </div>
            </div>

          ))}

        </div>



      </div>    
    </section>
  );
}

export default ModelColumns;