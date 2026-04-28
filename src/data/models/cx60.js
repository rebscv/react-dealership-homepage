import cx60 from "../../assets/images/range/cx-60.webp";
import hero from "../../assets/images/models/cx-60/hero.webp";
import intro from "../../assets/images/models/cx-60/intro.webp";

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