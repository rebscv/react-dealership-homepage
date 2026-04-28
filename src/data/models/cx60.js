import cx60 from "../../assets/images/range/cx-60.webp";
import hero from "../../assets/images/models/cx-60/hero.webp";
import intro from "../../assets/images/models/cx-60/intro.webp";
import featureIntroImg from "../../assets/images/models/cx-60/featured-intro.webp";
import featurePerformanceImg from "../../assets/images/models/cx-60/performance.webp";
import featureTechnologyImg from "../../assets/images/models/cx-60/technology.webp";
import featureDesignImg from "../../assets/images/models/cx-60/design.webp";

import RhodiumWhiteMetallic from "../../assets/images/models/cx-60/colours/rhodium-white-metallic.webp"
import SonicSilverMetallic from "../../assets/images/models/cx-60/colours/sonic-silver-metallic.webp"
import MachineGreyMetallic from "../../assets/images/models/cx-60/colours/machine-grey-metallic.webp"
import SoulRedCrystalMetallic from "../../assets/images/models/cx-60/colours/soul-red-crystal-metallic.webp"
import DeepCrystalBlueMica from "../../assets/images/models/cx-60/colours/deep-crystal-blue-mica.webp"

const cx60Model = {
  
  
    id            : 6,
    slug          : "cx-60",
    title         : "Mazda CX-60",
    subtitle      : "New",
    description   : "Medium SUV | 5 seats",
    tags          : ["suv"],
    image         : cx60,

    hero: {
      title: "New Mazda CX-60",
      tagline: "Look Forward to It",
      image: hero,
    },

    highlights: [
      { label: "Hybrid Engine", value: "2.5L Plug-in Hybrid (PHEV)" },
      { label: "Diesel / Petrol", value: "3.3L Mild Hybrid Turbo" },
      { label: "Petrol Engine", value: "2.5L SkyActiv-G (RWD)" },
      { label: "Seating", value: "5 Seats" }
    ],
        
    intro: {
      title: "Ready for wherever the road takes you",
      paragraphs: [
        "Experience true power and exhilaration in the new Mazda CX-60. With three powertrain options, from a RWD 2.5L Petrol SkyActiv-G to a rear-biased AWD turbocharged Inline-6 Hybrid or Plug-in Hybrid, it’s built for those who welcome what’s next.",
        "Plus, with intelligent technology and advanced safety features designed for how you like to drive, the road ahead feels even more rewarding."
      ],
      image : intro,
      cta: {
        label: "Book a  Test Drive",
        link: "/book-a-test-drive"
      }

    },

    featured: {
      intro: {
        title: "Make the road ahead all yours",
        description: "The new Mazda CX-60 has everything you need to make the next chapter your best yet. Thoughtfully designed with the latest smart tech, and built to exhilarate. It’s the kind of drive that you'll look forward to, every time.",
        image: featureIntroImg
      },

      tabs: [

        {
          label: "Performance",
          rows: [
            {
              title         : "A More Refined Drive",
              description   : "Get behind the wheel, with performance that delivers a more powerful, smooth and responsive drive.",
              image         : featurePerformanceImg
            },
            {
              title         : "Performance col 2",
              description   : "Get behind the wheel, with performance that delivers a more powerful, smooth and responsive drive.",
              image         : featurePerformanceImg
            },
            {
              title         : "Performance col 3",
              description   : "Get behind the wheel, with performance that delivers a more powerful, smooth and responsive drive.",
              image         : featurePerformanceImg
            }
          ]
        },

        {
          label : "Technology",
          rows: [
            {
              title         : "Uncompromising Performance",
              description   : "Experience the power of Plug-in Hybrid with 241kW engine and 500Nm of torque, delivering an impressive 2.5 tonnes of towing capacity.",
              image         : featureTechnologyImg
            },
            {
              title         : "Technology col 2",
              description   : "Experience the power of Plug-in Hybrid with 241kW engine and 500Nm of torque, delivering an impressive 2.5 tonnes of towing capacity.",
              image         : featureTechnologyImg
            },
            {
              title         : "Technology col 3",
              description   : "Experience the power of Plug-in Hybrid with 241kW engine and 500Nm of torque, delivering an impressive 2.5 tonnes of towing capacity.",
              image         : featureTechnologyImg
            }
          ]
        },

        {
          label: "Design",
          rows: [
            {
              title         : "Move Forward With Hybrid",
              description   : "Choose from either a powerful Plug-in Hybrid, or 3.3L Hybrid Turbo Petrol or Diesel powertrain. All with a responsive rear-biased AWD system that keeps you connected through every turn.",
              image         : featureDesignImg
            },
            {
              title         : "Design col 2",
              description   : "Choose from either a powerful Plug-in Hybrid, or 3.3L Hybrid Turbo Petrol or Diesel powertrain. All with a responsive rear-biased AWD system that keeps you connected through every turn.",
              image         : featureDesignImg
            },
            {
              title         : "Design col 3",
              description   : "Choose from either a powerful Plug-in Hybrid, or 3.3L Hybrid Turbo Petrol or Diesel powertrain. All with a responsive rear-biased AWD system that keeps you connected through every turn.",
              image         : featureDesignImg
            }
          ]
        }
      ]
    },

    colours: {
      title       : "Design",
      subtitle    : "It's your way forward",
      description : "Whether you’re after something bold, refined, or a bit of both, there’s a CX-60 that’s perfectly suited to you and your journey.",
      options: [
        {
          name      : "Rhodium White Metallic",
          colorCode : "#cccccc",
          image     : RhodiumWhiteMetallic
        },
        {
          name      : "Deep Crystal Blue Mica",
          colorCode : "#121c3f",
          image     : DeepCrystalBlueMica
        },
        {
          name      : "Soul Red Crystal Metallic",
          colorCode : "#d80004",
          image     : SoulRedCrystalMetallic
        },
        {
          name      : "Sonic Silver Metallic",
          colorCode : "#999999",
          image     : SonicSilverMetallic
        },
        {
          name      : "Machine Grey Metallic",
          colorCode : "#666666",
          image     : MachineGreyMetallic
        }
      ]
    },

    gallery: [
    ],


    specs: [
    ],


    technology: [
    ],


    safety: [
    ]



};

export default cx60Model;