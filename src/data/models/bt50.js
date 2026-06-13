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
      title: "New Mazda CX-60",
      tagline: "Look Forward to It",
      image: hero,
      imageMobile: heroMobile,
    },

    highlights: {
      items: [
        { 
          label: "Hybrid Engine",
          value: "2.5L Plug-in Hybrid (PHEV)",
        },
        { 
          label : "Diesel / Petrol",
          value : "3.3L Mild Hybrid Turbo",
        },
        {
          label: "Petrol Engine", 
          value: "2.5L SkyActiv-G (RWD)",
        },
        {
          label: "Seating", 
          value: "5 Seats",
        }
      ]
    },

    cta : { 
      description : "Experience true power and exhilaration in the new Mazda CX-60. Book a test drive today."
    }

};

export default bt50Model;