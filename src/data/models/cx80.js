import cx30 from "../../assets/images/range/cx-30.webp";
import hero from "../../assets/images/models/cx-80/hero.webp";
import heroMobile from "../../assets/images/models/cx-80/hero-m.webp";
import testDrive from "../../assets/images/models/cx-80/testdrive.webp";
import brochure from "../../assets/images/models/cx-80/brochure.pdf";

const cx70Model = {  

  id            : 8,
  slug          : "cx-80",
  title         : "Mazda CX-80",
  menuTitle     : "CX-80",
  description   : "Large SUV | 6-7 seats",
  tags          : ["suv", "electricHybrid"],
  image         : cx30,
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
    titleEyebrow  : "7-seat All-Hybrid Mazda CX-80",
    title         : "for family discoveries",
    image         : hero,
    imageMobile   : heroMobile
  },
  summary : {
    title     : "Enjoy More Together",
    text      : 
    [ 
      "Every drive is an opportunity to discover more with your family in the 7-Seat All-Hybrid Mazda CX-80. Spaciously designed for everything family life brings with it and the latest tech for seamless connection.",
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
    description : "Peak performance, made simple. From winding roads to city streets, Mazda Mi-Drive modes put you in control of every moment. Book a test drive today.",
    brochure    : brochure
  }


};

export default cx70Model;