import cx6e from "../../assets/images/range/mazda-6e.webp";
import hero from "../../assets/images/models/cx-30/hero.webp";
import heroMobile from "../../assets/images/models/cx-30/hero-m.webp";
import testDrive from "../../assets/images/models/cx-30/testdrive.webp";
import brochure from "../../assets/images/models/cx-30/brochure.pdf";

const mazda6e = {  

  id            : 13,
  slug          : "cx-6e",
  title         : "Mazda CX-6E",
  menuTitle     : "CX-6E",
  description   : "Medium SUV | 5 Seats",
  tags          : ["suv", "electricHybrid"],
  image         : cx6e,
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
    titleEyebrow  : "Mazda CX-80",
    title         : "Different By Design",
    image         : hero,
    imageMobile   : heroMobile
  },
  summary : {
    title     : "Uniquely You",
    text      : 
    [ 
      "Every drive is a statement of your own with the Mazda CX-30. Express yourself every time you hit the road, from the places you go to the people you see, the CX-30 is crafted with precision, all for you.",
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
    description : "A true original, the Mazda CX-30 has been made to stand out from the crowd. Book a test drive today.",
    brochure    : brochure
  }


};

export default mazda6e;