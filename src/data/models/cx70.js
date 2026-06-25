import cx70 from "../../assets/images/range/cx-70.webp";
import hero from "../../assets/images/models/cx-70/hero.webp";
import heroMobile from "../../assets/images/models/cx-70/hero-m.webp";
import testDrive from "../../assets/images/models/cx-70/testdrive.webp";
import brochure from "../../assets/images/models/cx-70/brochure.pdf";

const cx70Model = {  

  id            : 7,
  slug          : "cx-70",
  title         : "Mazda CX-70",
  menuTitle     : "CX-70",
  description   : "Large SUV | 5 seats",
  tags          : ["suv", "electricHybrid"],
  image         : cx70,
  isFeaturedPage: false,
  sections      :[
    {
      type: "hero",
      data: "hero"
    },
    { type: "modelText",
      data: "summary"
    },
    { type: "modelRelated",
      data: "relatedModels"
    },
    {
      type: "cta",
      data: "cta"
    }
  ],
    
  hero: {
    titleEyebrow  : "First-Ever All-Hybrid Mazda CX-70",
    title         : "For Your Entertainment",
    image         : hero,
    imageMobile   : heroMobile
  },
  summary : {
    title     : "A Drive You'll Never Want To End",
    text      : 
    [ 
      "Indulge in every journey with the First-Ever All-Hybrid Mazda CX-70. Designed to make driving a pure pleasure, every moment behind the wheel inspires you to go further. With exhilarating power, intuitive technology, and generous space all centred around you – this is driving at its finest.",
      "More information coming soon.",
      "We're currently updating this page with detailed model information, specifications, available grades and technology features. In the meantime, explore similar vehicles below or contact our team for the latest information."
    ]
  },
  relatedModels : {
    bgColour  : "grey-bg",
    title     : "Explore Similar Vehicles",
    text      : "You may also be interested in these models.",
    models    : ["cx-60", "mx-5", "bt-50"]
  },
  cta : {
    image       : testDrive,
    description : "Whether you’re after something bold, refined, or a bit of both, there’s a CX-70 that’s perfectly crafted to help you feel the pure joy of driving. Book a test drive today.",
    brochure    : brochure
  }


};

export default cx70Model;