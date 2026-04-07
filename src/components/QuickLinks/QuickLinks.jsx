import QuickLinkCard from "./QuickLinkCard"

function QuickLinks() {
  const links = [
    {
      id            : 1,
      title         : "Service",
      description   : "Book a genuine Mazda Service",
      url           : "/service"
    },

    {
      id            : 2,
      title         : "Finance",
      description   : "Explore Finance your way",
      url           : "/finance"
    },

    {
      id            : 3,
      title         : "Offers",
      description   : "Designed to give you more",
      url           : "/offers"
    }
  ]

  return (
    <section className="quicklinks">

      <div className="std-wrapper">
        {links.map((link, index) => (
          <QuickLinkCard
            key={link.id}
            title={link.title}
            description={link.description}
            url={link.url}
          />
        ))}
      </div>

    </section>
  )

}

export default QuickLinks
