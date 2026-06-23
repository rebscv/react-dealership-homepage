import useEmblaWithDots from "../../hooks/useEmblaCarouselWithDots";
import { Link, useLocation } from "react-router-dom"
import "./HeroSlider.css";

import Bt50Hero from "../../assets/images/banners/bt-50-hero-slide.webp";
import Bt50HeroMobile from "../../assets/images/banners/bt-50-hero-slide-m.webp";

import cx60Hero from "../../assets/images/banners/cx-60-hero-slide.webp";
import cx60HeroMobile from "../../assets/images/banners/cx-60-hero-slide-m.webp";

import mx5Hero from "../../assets/images/banners/mx-5-hero-slide.webp";
import mx5HeroMobile from "../../assets/images/banners/mx-5-hero-slide-m.webp";


function HeroSlider() {

    const location = useLocation();
    const version = location.pathname.split("/")[1];
    const basePath = `/${version}`;

    const slider = [

        {
            id: 1,
            title: "NEW MAZDA BT-50 UTE",
            subtitle: "Go all in. Get More Out.",
            buttonText: "Explore Now",
            className: "slide-dark",
            image: Bt50Hero,
            imageMobile: Bt50HeroMobile,
            url: `${basePath}/models/bt-50`
        },
        {
            id: 2,
            title: "New Mazda CX-60",
            subtitle: "Look forward to it",
            buttonText: "Explore Now",
            className: "slide-dark",
            image: cx60Hero,
            imageMobile: cx60HeroMobile,
            url: `${basePath}/models/cx-60`
        },
        {
            id: 3,
            title: "MAZDA MX-5",
            subtitle: "Unrivalled excitement",
            buttonText: "Explore Now",
            className: "slide-dark",
            image: mx5Hero,
            imageMobile: mx5HeroMobile,
            url: `${basePath}/models/mx-5`
        },
    ];


    const { emblaRef, emblaApi, selectedIndex, scrollTo, resetAutoplay, scrollNext, scrollPrev, } = useEmblaWithDots({ loop: true }, 4000);

    return (
        <section className="hero-slider">
            <div className="embla">

                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">

                        {slider.map((slide) => (
                            <div className={`embla__slide ${slide.className}`} key={slide.id}>
                                <picture>
                                    <source media="(max-width: 767px)" srcSet={slide.imageMobile} />
                                    <img src={slide.image} alt={slide.title} fetchPriority="high" />
                                </picture>
                                <div className="hero-text-container">
                                    <div className="hero-text">
                                        <h2>{slide.title}</h2>
                                        <p>{slide.subtitle}</p>
                                        <div><Link to={slide.url} className="btn btn-primary">{slide.buttonText}</Link></div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                <div className="embla__dots__container">
                    <div className="embla__dots">
                        {slider.map((_, index) => (

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
          


        </section>
    )

}

export default HeroSlider