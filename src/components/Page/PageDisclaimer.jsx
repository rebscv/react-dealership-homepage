import "./PageDisclaimer.css";

function PageDisclaimer({ items, bgColour }) {

  return (

    <section className={`page-disclaimer ${bgColour}`}>      
      <div className="sml-wrapper">
        

        {items.map((para, i) => ( <p key={i}>{para}</p> ))}


      </div>
    </section>

  );
}

export default PageDisclaimer;


