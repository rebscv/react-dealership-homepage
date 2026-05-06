import useEmblaWithDots from "../../hooks/useEmblaCarouselWithDots";

import "./ModelSafety.css";

function ModelSafety({ safety }) {  


  const { intro, slides } = safety;
  if (!slides) return null;

  const { emblaRef, emblaApi, selectedIndex, scrollTo, resetAutoplay, scrollNext, scrollPrev, } = useEmblaWithDots({ loop: true, align: "center" }, 4000);

  return (
    <section className="model-safety">
      <div className="lrg-wrapper">

        <div className="section-title t-center">
          {intro.title && <h2 className="h4">{intro.title}</h2>}      
          {intro.subtitle && <p className="h2">{intro.subtitle}</p>}              
        </div>

        <div className="embla model-saftey-slider" ref={emblaRef}>


          <div className="embla__container">

            {slides.map((slide, index) => (
              <div key={slides.id ?? index} className={`embla__slide ${index === selectedIndex ? "is-active" : ""}`}>
                <div className="model-saftey-slide">

                  <div>

                    <video preload="none" muted autoPlay loop playsInline poster="">
                      <source type="video/mp4" src={slide.video} />
                    </video>

                  </div>
                  <div className="model-saftey-slide-text grid">
                    {slide.title && <h3>{slide.title}</h3>}

                    {Array.isArray(slide.description) ? 
                      (slide.description.map((para, i) => (<p key={i}>{para}</p>))) : (slide.description && <p>{slide.description}</p> )
                    }

                  </div>

                </div>
              </div>
            ))}

          </div>


          <div className="embla__dots__container">
              <div className="embla__dots">
                  {slides.map((_, index) => (

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

export default ModelSafety;