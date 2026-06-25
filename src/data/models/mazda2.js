import mazda2img from "../../assets/images/range/mazda2.webp";
import hero from "../../assets/images/models/mazda2/hero.webp";
import heroMobile from "../../assets/images/models/mazda2/hero-m.webp";
import testDrive from "../../assets/images/models/mazda2/testdrive.webp";
import brochure from "../../assets/images/models/mazda2/brochure.pdf";

const mazda2 = {  

  id            : 10,
  slug          : "mazda2",
  title         : "Mazda2",
  menuTitle     : "Mazda2",
  description   : "Hatch | Sedan",
  tags          : ["hatchSedan"],
  image         : mazda2img,
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
    titleEyebrow  : "New Mazda2",
    title         : "Moves Like You",
    image         : hero,
    imageMobile   : heroMobile
  },
  summary : {
    title     : "Restyled And Revamped",
    text      : 
    [ 
      "New Mazda2 comes with a stylish new look, improved performance and impressive efficiency. It’s been redesigned to move like you, because life never stops.",
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
    description : "Responsive handling and ready to journey with you. Book a test drive today.",
    brochure    : brochure
  }


};

export default mazda2;