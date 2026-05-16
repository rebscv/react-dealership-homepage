import useEmblaWithDots from "../../hooks/useEmblaCarouselWithDots";

import VehicleCard from "../VehicleCard/VehicleCard";
import vehicles from "../../data/vehicles";

import "./FeaturedVehiclesSlider.css";


function FeaturedVehiclesSlider() {
    
    const { emblaRef, emblaApi, selectedIndex, scrollSnaps, scrollTo, resetAutoplay, scrollNext, scrollPrev, } = useEmblaWithDots({ loop: true, 
        breakpoints: {
            "(min-width:480px)": { slidesToScroll: 2 }, "(min-width:768px)": { slidesToScroll: 3 }, "(min-width:1280px)": { slidesToScroll: 4 }
        }
    }, 4000);

    return (
        
        <section className="featured-vehicles grey-bg full-slider-m">
            <div className="std-wrapper">

                <h2 className="t-center">Featured Vehicles</h2>


                <div className="embla arrows-outside" ref={emblaRef}>
                    <div className="embla__container grid-t-two-cols grid-l-three-cols grid-xl-four-cols">

                        {vehicles.map((car) => (
                            <div className="embla__slide" key={car.id}>
                                <div>
                                    <VehicleCard {...car} />
                                </div>
                            </div>
                        ))}


                    </div>


                    <div className="embla__dots__container">
                        <div className="embla__dots">
                            {scrollSnaps?.map((_, index) => (

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

export default FeaturedVehiclesSlider;