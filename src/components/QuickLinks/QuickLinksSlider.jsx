import QuickLinkCard from "./QuickLinkCard"
import "./QuickLinksSlider.css"
import ServiceImg from "../../assets/images/quicklinks/quicklink.webp"

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
      image         : ServiceImg
    },

    {
      id            : 3,
      title         : "Offers",
      description   : "Designed to give you more",
      url           : "/offers",
      image         : ServiceImg
    }
  ]

  return (
    <section className="quicklinks">

      <div className="std-wrapper">

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
