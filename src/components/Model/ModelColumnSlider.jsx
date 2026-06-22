import { img } from "framer-motion/client";
import useEmblaWithDots from "../../hooks/useEmblaCarouselWithDots";

import "./ModelColumnSlider.css";

function ModelColumnSlider({ intro, slides }) {  

  if (!slides) return null;

  const { emblaRef, emblaApi, selectedIndex, scrollTo, resetAutoplay, scrollNext, scrollPrev, } = useEmblaWithDots({ loop: true, align: "center" }, 4000);

  return (
    <section className={`${intro?.bgColour || ""} model-column-slider`}>

      <span id={intro?.anchorLink || "safety"} className="model-anchor"></span>

      <div className="lrg-wrapper t-center">

        <div className="section-title t-center grid">
          {intro.title && ( <h2>{intro.eyebrowTitle && ( <span className="title-eyebrow">{intro.eyebrowTitle}</span> )}{intro.title}</h2> )}
        </div>

        {intro.text && <p>{intro.text}</p>}

        <div className="embla model-column-slider">

          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">

              {slides.map((slide, index) => (
                <div key={slides.id ?? index} className={`embla__slide ${index === selectedIndex ? "is-active" : ""}`}>
                  <div className="model-column-slide">

                    <div>

                      {slide.video && <video preload="none" muted autoPlay loop playsInline poster={slide.videoPoster || ""}><source type="video/mp4" src={slide.video} /></video>}
                      {slide.image && <img src={slide.image} alt={slide.alt || slide.title || ""} />}


                    </div>
                    <div className="model-column-slide-text grid">
                      {slide.title && <h3>{slide.title}</h3>}

                      {Array.isArray(slide.description) ? 
                        (slide.description.map((para, i) => (<p key={i}>{para}</p>))) : (slide.description && <p>{slide.description}</p> )
                      }

                    </div>

                  </div>
                </div>
              ))}

            </div>
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

export default ModelColumnSlider;