import cx5nextgen from "../../assets/images/range/all-new-mazda-cx-5.webp";
import hero from "../../assets/images/models/cx-5/hero.webp";
import heroMobile from "../../assets/images/models/cx-5/hero-m.webp";
import testDrive from "../../assets/images/models/cx-5/testdrive.webp";
import brochure from "../../assets/images/models/cx-5/brochure.pdf";

const cx5nextgenModel = {  
  
  id            : 3,
  slug          : "cx-5",
  title         : "Mazda CX-5",
  menuTitle     : "CX-5",
  subtitle      : "Next-Gen",
  description   : "Medium SUV | 5 seats",
  tags          : ["suv"],
  image         : cx5nextgen,
  isFeaturedPage: false,
  sections      :[
    { type: "hero",
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
    titleEyebrow  : "Mazda CX-5",
    title         : "The next generation is coming",
    image         : hero,
    imageMobile   : heroMobile
  },   
  summary : {
    title     : "The CX-5 you know has evolved",
    text      : 
    [
      "One of Australia’s most loved SUVs has raised the bar once again. Meet the Next-Generation Mazda CX-5. With an evolved Kodo design, more space to stretch out, superior handling, smarter tech and advanced safety, it’s built for epic escapes or trips to the store – wherever life leads, it’s ready for it all.",
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
    description : "Built for absolute confidence. Book a test drive today.",
    brochure    : brochure
  }


};

export default cx5nextgenModel;