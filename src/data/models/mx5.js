import mx5 from "../../assets/images/range/mx-5.webp";
import hero from "../../assets/images/models/mx-5/hero.webp";
import heroMobile from "../../assets/images/models/mx-5/hero-m.webp";
import driveImg from "../../assets/images/models/mx-5/drive.webp";
import interiorImg1 from "../../assets/images/models/mx-5/interior-1.webp";
import interiorImg2 from "../../assets/images/models/mx-5/interior-2.webp";
import interiorImg3 from "../../assets/images/models/mx-5/interior-3.webp";
import exteriorImg1 from "../../assets/images/models/mx-5/exterior-1.webp";
import exteriorImg2 from "../../assets/images/models/mx-5/exterior-2.webp";
import exteriorImg3 from "../../assets/images/models/mx-5/exterior-3.webp";


const mx5Model = {  

  id            : 5,
  slug          : "mx-5",
  title         : "Mazda MX-5",
  menuTitle      : "MX-5",
  subtitle      : "",
  description   : "Soft Top",
  tags          : ["sports"],
  image         : mx5,
  sections      :[

    { type: "hero",
      data: "hero"
    },
    { type: "modelText",
      data: "introText"
    },
    { type: "featured",
      data: "featured"
    },
    { type: "cta",
      data: "cta"
    }

  ],

  nav: {
    items : [
      { name : "Overview", link : "#overview" },
      { name : "Design", link : "#design" },
      { name : "Technology", link : "#technology" },
      { name : "Safety", link : "#safety" },
      { name : "Specs", link : "#specs" }

    ],
    cta: "Book a Test Drive"
  },

  hero: {
    title: "MAZDA MX-5",
    tagline: "UNRIVALLED EXCITEMENT",
    image: hero,
    imageMobile: heroMobile,
  },

  introText: {
    title: "A DRIVE THAT’S ALL YOURS",
    text: "Mazda MX-5 is all for the joy of driving, pure and simple. Every inch designed to make you find excuses to drive. Connected from wheel to road at every moment. With refined design and exhilarating performance, the MX-5 invites you feel something you never have before.",
    image: driveImg,
    alt: "Diagonal top-view of the MX-5"
  },

  featured: {
    intro: {
      title: "STYLE ICON",
      description: "An undeniable style unlike any other. Mazda MX-5 expresses an elegant balance of history and innovation.",
      anchorLink: "design",
    },

    tabs: [
      {
        label: "Exterior",
        rows : [
          {
            title: "METALLIC AERO GREY",
            description: "A shade of grey designed to standout. Metallic Aero Grey gives Mazda MX-5 a sporty look.",
            image: interiorImg1
          },
          {
            title: "HEADLIGHTS",
            description: "Cut through the darkness and light up the night. Mazda MX-5 now comes with an even sleeker and more refined headlight design.",
            image: interiorImg2
          },
          {
            title: "17” ALLOY WHEELS",
            description: "Available in Machined or Black colour options, these wheel designs give your MX-5 a race track ready look.",
            image: interiorImg3
          },
        ]
      },
      {
        label : "Interior",
        rows : [
          {
            title: "CRAFTED TRIM",
            description: "An expanded range of classic colour trims bring a timeless quality to an already elegant interior. Available in Nappa Leather on select grades.",
            image: exteriorImg1
          },
          {
            title: "CENTRE OF ATTENTION",
            description: "The crafted details continue to the centre console, wrapped in a leather-like skin for a luxurious touch.",
            image: exteriorImg2
          },
          {
            title: "METER MASTERPIECE",
            description: "llluminated meter design combines form and function, with a classic racing feel.",
            image: exteriorImg3
          }
        ]
      }
    ]
    
  },

  cta : {
    description : "Experience true power and exhilaration in the new Mazda CX-60. Book a test drive today.",
  }


};

export default mx5Model;