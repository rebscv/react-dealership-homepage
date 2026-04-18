import QuickLinkCard from "./QuickLinkCard"
import "./QuickLinksSlider.css"

import ServiceImg from "../../assets/images/quicklinks/service.webp"
import FinanceImg from "../../assets/images/quicklinks/finance.webp"
import OffersImg from "../../assets/images/quicklinks/offers.webp"

function QuickLinksSlider() {
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

  return (
    <section className="quicklinks">

      <div className="full-wrapper">

        <div className="grid-d-three-cols">

          {links.map((link, index) => (
            <QuickLinkCard
              key={link.id}
              title={link.title}
              description={link.description}
              url={link.url}
              image={link.image}
            />
          ))}

        </div>

      </div>

    </section>
  )

}


export default QuickLinksSlider
