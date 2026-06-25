import mazda3img from "../../assets/images/range/mazda3.webp";
import hero from "../../assets/images/models/mazda3/hero.webp";
import heroMobile from "../../assets/images/models/mazda3/hero-m.webp";
import testDrive from "../../assets/images/models/mazda3/testdrive.webp";
import brochure from "../../assets/images/models/mazda3/brochure.pdf";

const mazda3 = {  

  id            : 11,
  slug          : "mazda3",
  title         : "Mazda3",
  menuTitle     : "Mazda3",
  description   : "Hatch | Sedan",
  tags          : ["hatchSedan"],
  image         : mazda3img,
  isFeaturedPage: false,
  sections      : [
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
    titleEyebrow  : "Mazda3",
    title         : "Own the moment",
    image         : hero,
    imageMobile   : heroMobile
  },
  summary : {
    title     : "Own The Moment",
    text      : 
    [ 
      "In Mazda3 it’s not about where you’re going—it’s about how you get there. Every drive is a chance to appreciate the moment for yourself. Acceleration with a flutter of excitement and the simple pleasure of sporty handling. All wrapped up in an iconic style that turns heads and sets you apart.",
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
    description : "Feel the freedom to handle anything in style with responsive dynamics in tune with yours. Book a test drive today.",
    brochure    : brochure
  }


};

export default mazda3;