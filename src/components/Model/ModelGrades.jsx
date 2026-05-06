import useEmblaWithDots from "../../hooks/useEmblaCarouselWithDots";
import "./ModelGrades.css";


function ModelGrades({ grades }) {  


  const { intro, slides } = grades;
  if (!slides) return null;

      const { emblaRef, emblaApi, selectedIndex, scrollSnaps, scrollTo, resetAutoplay, scrollNext, scrollPrev } = useEmblaWithDots(
        {
          loop: true,
          loop: true, 
          breakpoints: { "(min-width:480px)": { slidesToScroll: 2 }, "(min-width:768px)": { slidesToScroll: 3 }, "(min-width:1024px)": { slidesToScroll: 4 } }
        }, 4000);

  return (
    <section className="model-grades">
      <div className="lrg-wrapper">

        <div className="section-title t-center">
          {intro.title && <h2 className="h4">{intro.title}</h2>}      
          {intro.subtitle && <p className="h2">{intro.subtitle}</p>}              
        </div>

        <div className="embla model-grade-slider" ref={emblaRef}>


          <div className="embla__container grid-d-four-cols">

            {slides.map((slide, index) => (
              <div key={slides.id ?? index} className={`embla__slide ${index === selectedIndex ? "is-active" : ""}`}>
                <div className="model-grade-slide">

                  <div className="model-grade-img">
                    {slide.image && <img src={slide.image} alt={slide.title} />}
                  </div>

                  <div className="model-grade-text">

                    <div className="model-grade-name-row">
                      {slide.title && <h3>{slide.title}</h3>}
                      <div>
                        <div className="model-grade-driveaway">Driveaway from</div>
                        {slide.price && <div className="model-grade-price">{slide.price}</div> }
                      </div>
                    </div>                 

                    <div className="model-grade-features-row">
                      {slide.featuresTitle &&<div className="model-grade-features-title">{slide.featuresTitle}</div>}
                      <ul>
                        {Array.isArray(slide.features) ? (slide.features.map((para, i) => (<li key={i}>{para}</li>))) : ( slide.features && <li>{slide.features}</li> ) }
                      </ul>
                    </div>

                  </div>

                  <div className="model-grade-cta">
                    <a href="" className="btn btn-primary">Book a Test Drive</a>
                  </div>

                </div>
              </div>
            ))}

          </div>


          <div className="embla__dots__container">
              <div className="embla__dots">
                  {scrollSnaps.map((_, index) => (

                      <button key={index} className={`embla__dot ${index === selectedIndex ? "is-active" : ""}`} onClick={() => {scrollTo(index); resetAutoplay();}} >
                          {index === selectedIndex && (<span className="embla__dot-progress" />)}
                      </button>

                  ))}
              </div>
          </div>


          <div className="embla__arrows__container">

              <button className="embla__prev" onClick={() => { scrollPrev(); resetAutoplay(); }}>
                  <svg className="icon-arrow-left"><use href="/icons.svg#icon-arrow-left"></use></svg>
              </button>

              <button className="embla__next" onClick={() => { scrollNext(); resetAutoplay(); }}>
                  <svg className="icon-arrow-right"><use href="/icons.svg#icon-arrow-right"></use></svg>                   
              </button>

          </div>


        </div>


      </div>        
    </section>
  );
}

export default ModelGrades;