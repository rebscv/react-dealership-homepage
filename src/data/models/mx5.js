import mx5 from "../../assets/images/range/mx-5.webp";
import hero from "../../assets/images/models/cx-60/hero.webp";

const mx5Model = {
  
  
    id            : 5,
    slug          : "mx-5",
    title         : "Mazda MX-5",
    menuTitle      : "MX-5",
    subtitle      : "",
    description   : "Soft Top",
    tags          : ["sports"],
    image         : mx5,

    hero: {
      title: "New Mazda CX-60",
      tagline: "Look Forward to It",
      image: hero,
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
      description : "Experience true power and exhilaration in the new Mazda CX-60. Book a test drive today.",
    }


};

export default mx5Model;