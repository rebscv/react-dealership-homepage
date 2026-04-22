import QuickLinkCard from "./QuickLinkCard"
import "./QuickLinksSlider.css"

import useEmblaWithDots from "../../hooks/useEmblaCarouselWithDots";
import useIsMobile from "../../hooks/useIsMobile";

import ServiceImg from "../../assets/images/quicklinks/service.webp"
import FinanceImg from "../../assets/images/quicklinks/finance.webp"
import OffersImg from "../../assets/images/quicklinks/offers.webp"

const links = [
  {
    id            : 1,
    title         : "Service",
    description   : "Book a genuine Mazda Service",
    url           : "/service",
    image         : ServiceImg
  },
  {
    id            : 2,
    title         : "Finance",
    description   : "Explore Finance your way",
    url           : "/finance",
    image         : FinanceImg
  },
  {
    id            : 3,
    title         : "Offers",
    description   : "Designed to give you more",
    url           : "/offers",
    image         : OffersImg
  }
]



function QuickLinksSlider() {

  const { emblaRef, emblaApi, selectedIndex, scrollTo, resetAutoplay, } = useEmblaWithDots({ loop: false, align: "start", 
    breakpoints: { "(min-width:768px)": { slidesToScroll: 2 } }
  }, 4000);

  const isMobile = useIsMobile(1024);

  return (


    <section className="quicklinks">
      <div className="full-wrapper">

        {isMobile ? (

            <div className="embla" ref={emblaRef}>
                <div className="embla__container">

                    {links.map((link, index) => (
                        <div className={`embla__slide ${link.className}`} key={link.id}>
                          
                          <QuickLinkCard {...link} />
                          
                        </div>
                    ))}

                </div>

                <div className="embla__dots__container">
                    <div className="embla__dots">
                        {links.map((_, index) => (

                            <button key={index} className={`embla__dot ${index === selectedIndex ? "is-active" : ""}`} onClick={() => {scrollTo(index); resetAutoplay();}} >
                                {index === selectedIndex && (<span className="embla__dot-progress" />)}
                            </button>

                        ))}
                    </div>
                </div>

            </div>

        ) : (

          <div className="grid-d-three-cols">

            {links.map((link) => (
              <QuickLinkCard {...link} />
            ))}

          </div>

        )}



      </div>
    </section>
  )

}


export default QuickLinksSlider
