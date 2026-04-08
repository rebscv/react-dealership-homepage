import useEmblaCarousel from "embla-carousel-react";
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
        className: "slide-dark hero-text-bottom",
        image: heroImage1,
        imageMobile: heroImageMobile1,
    },
    {
        id: 2,
        title: "Mazda CX-5",
        subtitle: "The next generation is here.",
        buttonText: "Explore Now",
        className: "slide-dark hero-text-top",
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
    const [emblaRef] = useEmblaCarousel({ loop: true });

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
                                    <div><button>{slide.buttonText}</button></div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )

}

export default HeroSlider