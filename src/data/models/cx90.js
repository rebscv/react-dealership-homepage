import cx90 from "../../assets/images/range/cx-90.webp";
import hero from "../../assets/images/models/cx-90/hero.webp";
import heroMobile from "../../assets/images/models/cx-90/hero-m.webp";
import testDrive from "../../assets/images/models/cx-90/testdrive.webp";
import brochure from "../../assets/images/models/cx-90/brochure.pdf";

const cx70Model = {  

  id            : 9,
  slug          : "cx-90",
  title         : "Mazda CX-90",
  menuTitle     : "CX-90",
  description   : "Large SUV | 6-7 seats",
  tags          : ["suv", "electricHybrid"],
  image         : cx90,
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
    titleEyebrow  : "First-Ever Hybrid Mazda CX-90",
    title         : "All In Perfect Balance",
    image         : hero,
    imageMobile   : heroMobile
  },
  summary : {
    title     : "The Joy of Balance",
    text      : 
    [ 
      "Step into the First-Ever Hybrid Mazda CX-90 and feel the perfect balance in every detail. Where driving perfection meets family comfort to create an effortless drive for everyone to enjoy. With the CX-90, it’s not just about the destination—it’s about making every journey something special.",
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
    description : "Control your drive, and customise your performance. Book a test drive today.",
    brochure    : brochure
  }


};

export default cx70Model;