import useEmblaWithDots from "../../hooks/useEmblaCarouselWithDots";
import { useState, useEffect } from "react";

import "./ModelGrades.css";

function ModelGrades({ intro, tabs, menuTitle, version }) {

  const [activeTab, setActiveTab] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);  

  if (!tabs?.length) return null;

  const activeSlides = tabs[activeTab].slides;
  const showNavigation = activeSlides.length > 1;
  const showTabs = tabs.length > 1;

  const { emblaRef, emblaApi, selectedIndex, scrollSnaps, scrollTo, resetAutoplay, scrollNext, scrollPrev } = useEmblaWithDots(
    {
      loop: false,
      align: "start",
      breakpoints: { "(min-width:768px)": { slidesToScroll: 2 }, "(min-width:1024px)": { slidesToScroll: 3 }, "(min-width:1440px)": { slidesToScroll: 4 } }
    }, 0)


  // Add inactive state to next/prev buttons
  useEffect(() => {
    if (!emblaApi) return;
    const updateButtons = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };

    updateButtons();

    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    }

  }, [emblaApi]);

  useEffect(() => { if (!emblaApi) return; emblaApi.reInit(); emblaApi.scrollTo(0, true); }, [activeTab, emblaApi] );


  return (

    <section className={`${intro?.bgColour || ""} model-grades full-slider-m`}>

      <span id={intro?.anchorLink || "specs"} className="model-anchor"></span>

      <div className="lrg-wrapper">

        <div className="section-title t-center">
          {intro.title && <h2 className="h4">{intro.title}</h2>}      
          {intro.subtitle && <p className="h2">{intro.subtitle}</p>}              
        </div>



        {showTabs && (

          <div className="model-grade-tabs">
            <div className="tabs-overflow">
              <div className="page-contact-tabs-nav default-tabs">

                {tabs.map((tab, index) => (
                  <button key={tab.label} className={`model-grade-tab ${activeTab === index ? "active" : ""}`} onClick={() => setActiveTab(index)}>
                    {tab.label}
                  </button>
                ))}

              </div>
            </div>
          </div>

        )}



        <div className="embla model-grade-slider no-dot arrows-outside">

          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container grid-xl-four-cols grid-d-three-cols grid-l-two-cols">

              {activeSlides.map((slide, index) => (
                <div key={slide.id ?? index} className={`embla__slide ${index === selectedIndex ? "is-active" : ""}`}>
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
                      <a href={`/${version}/book-a-test-drive?model=${encodeURIComponent(menuTitle)}`} className="btn btn-primary">Book a Test Drive</a>
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>


          {showNavigation && (

            <div className="embla__dots__container no-autoplay-dots">
                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (

                        <button key={index} className={`embla__dot ${index === selectedIndex ? "is-active" : ""}`} onClick={() => {scrollTo(index); resetAutoplay();}} >
                            {index === selectedIndex && (<span className="embla__dot-progress" />)}
                        </button>

                    ))}
                </div>
            </div>

          )}

          {showNavigation && (

            <div className="embla__arrows__container">

                <button className={`embla__prev ${prevBtnDisabled ? "is-disabled" : ""}` } onClick={() => { scrollPrev(); resetAutoplay(); }}>
                    <svg className="icon-arrow-left"><use href="/icons.svg#icon-arrow-left"></use></svg>
                </button>

                <button className={`embla__next ${nextBtnDisabled ? "is-disabled" : ""}` } onClick={() => { scrollNext(); resetAutoplay(); }}>
                    <svg className="icon-arrow-right"><use href="/icons.svg#icon-arrow-right"></use></svg>                   
                </button>

            </div>

          )}


        </div>


      </div>        
    </section>
  );
}

export default ModelGrades;