import useEmblaWithDots from "../../hooks/useEmblaCarouselWithDots";
import "./HeroSlider.css";

import heroImage1 from "../../assets/images/banners/bt-50-hero-slide.webp";
import heroImageMobile1 from "../../assets/images/banners/bt-50-hero-slide-m.webp";

import heroImage2 from "../../assets/images/banners/cx-5-hero-slide.webp";
import heroImageMobile2 from "../../assets/images/banners/cx-5-hero-slide-m.webp";

import heroImage3 from "../../assets/images/banners/mx-5-hero-slide.webp";
import heroImageMobile3 from "../../assets/images/banners/mx-5-hero-slide-m.webp";

const slider = [
    {
        id: 1,
        title: "NEW MAZDA BT-50 UTE",
        subtitle: "Go all in. Get More Out.",
        buttonText: "Explore Now",
        className: "slide-dark",
        image: heroImage1,
        imageMobile: heroImageMobile1,
    },
    {
        id: 2,
        title: "Mazda CX-5",
        subtitle: "The next generation is here.",
        buttonText: "Explore Now",
        className: "slide-dark",
        image: heroImage2,
        imageMobile: heroImageMobile2,
    },
    {
        id: 3,
        title: "MAZDA MX-5",
        subtitle: "Unrivalled excitement.",
        buttonText: "Explore Now",
        className: "slide-dark",
        image: heroImage3,
        imageMobile: heroImageMobile3,
    },
];

function HeroSlider() {

    const { emblaRef, emblaApi, selectedIndex, scrollTo, resetAutoplay, scrollNext, scrollPrev, } = useEmblaWithDots({ loop: true }, 4000);

    return (
        <section className="hero-slider">
            <div className="embla" ref={emblaRef}>

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
                                    <div><button class="btn btn-primary">{slide.buttonText}</button></div>
                                </div>
                            </div>
                        </div>
                    ))}

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