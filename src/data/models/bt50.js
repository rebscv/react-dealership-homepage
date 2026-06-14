import bt50 from "../../assets/images/range/bt-50.webp";
import hero from "../../assets/images/models/bt-50/hero.webp";
import heroMobile from "../../assets/images/models/bt-50/hero-m.webp";

const bt50Model = {
  
  
    id            : 4,
    slug          : "bt-50",
    title         : "Mazda BT-50",
    menuTitle     : "BT-50",
    subtitle      : "New",
    description   : "Single | Freestyle | Dual Cab",
    tags          : ["ute"],
    image         : bt50,
    sections      :[

      { type: "hero",
        data: "hero"
      },

      { type: "highlights",
        data: "highlights"
      },

      { type: "intro",
        data: "intro"
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
      title: "New Mazda BT-50 UTE",
      image: hero,
      imageMobile: heroMobile,
    },

    highlights: {
      items: [
        {value: "6.6-7.8L /100km"},
        {value: "3.5 tonne towing"},
        {value: "Up to 1.2T payload"},
        {value: "Up to 140KW & 450 nm"}
      ]
    },

    cta : { 
      description : "Experience true power and exhilaration in the new Mazda CX-60. Book a test drive today."
    }

};

export default bt50Model;