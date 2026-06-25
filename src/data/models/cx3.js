import cx3 from "../../assets/images/range/cx-3.webp";
import hero from "../../assets/images/models/cx-3/hero.webp";
import heroMobile from "../../assets/images/models/cx-3/hero-m.webp";
import testDrive from "../../assets/images/models/cx-3/testdrive.webp";
import brochure from "../../assets/images/models/cx-3/brochure.pdf";

const cx3Model = {  

  id            : 1,
  slug          : "cx-3",
  title         : "Mazda CX-3",
  menuTitle     : "CX-3",
  subtitle      : "",
  description   : "Small SUV | 5 seats",
  tags          : ["suv"],
  image         : cx3,
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

  hero : {
    titleEyebrow    : "Mazda CX-3",
    title           : "The day is yours",
    image           : hero,
    imageMobile     : heroMobile
  },
  summary : {
    title     : "Classic Elegance",
    text      : 
    [
      "A stylish space, to call your own. Mazda CX-3 has been crafted for total comfort in a compact SUV form.",
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
    description : "Mazda CX-3 comes with exceptional performance and agile handling as standard. Book a test drive today.",
    brochure    : brochure
  }

};

export default cx3Model;