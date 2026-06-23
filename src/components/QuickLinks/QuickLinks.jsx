import QuickLinkCard from "./QuickLinkCard"
import { useLocation } from "react-router-dom"
import "./QuickLinks.css"

import ServiceImg from "../../assets/images/quicklinks/service.webp"
import FinanceImg from "../../assets/images/quicklinks/finance.webp"
import OffersImg from "../../assets/images/quicklinks/offers.webp"

function QuickLinks() {

  const location = useLocation();
  const version = location.pathname.split("/")[1];
  const basePath = `/${version}`;

  const links = [
    {
      id            : 1,
      title         : "Service",
      description   : "Book a genuine Mazda Service",
      url           : `${basePath}/service`,
      image         : ServiceImg
    },
    {
      id            : 2,
      title         : "Finance",
      description   : "Explore Finance your way",
      url           : `${basePath}/finance`,
      image         : FinanceImg
    },
    {
      id            : 3,
      title         : "Offers",
      description   : "Designed to give you more",
      url           : `${basePath}/offers`,
      image         : OffersImg
    }
  ]

  if (version === "version-3" ) {
    return(

    <section className="quicklinks grey-bg">
      <div className="full-wrapper">

          <div className="grid-d-three-cols ">

            {links.map((link) => (
              <QuickLinkCard key={link.id} {...link} />
            ))}

          </div>


      </div>
    </section>

    );
  }

  return (
    <section className="quicklinks">

      <div className="std-wrapper">

        <div className="grid-d-three-cols">

          {links.map((link) => (
          <QuickLinkCard key={link.id} {...link} />
        ))}

        </div>

      </div>

    </section>
  )

}

export default QuickLinks
