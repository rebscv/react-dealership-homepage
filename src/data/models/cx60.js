import cx60 from "../../assets/images/range/cx-60.webp";
import hero from "../../assets/images/models/cx-60/hero.webp";
import heroMobile from "../../assets/images/models/cx-60/hero-m.webp";
import intro from "../../assets/images/models/cx-60/intro.webp";
import featureIntroImg from "../../assets/images/models/cx-60/featured-intro.webp";
import featurePerformance1Img from "../../assets/images/models/cx-60/featured-performance-1.webp";
import featurePerformance2Img from "../../assets/images/models/cx-60/featured-performance-2.webp";
import featurePerformance3Img from "../../assets/images/models/cx-60/featured-performance-3.webp";
import featureTechnology1Img from "../../assets/images/models/cx-60/featured-technology-1.webp";
import featureTechnology2Img from "../../assets/images/models/cx-60/featured-technology-2.webp";
import featureTechnology3Img from "../../assets/images/models/cx-60/featured-technology-3.webp";
import featureDesign1Img from "../../assets/images/models/cx-60/featured-design-1.webp";
import featureDesign2Img from "../../assets/images/models/cx-60/featured-design-2.webp";
import featureDesign3Img from "../../assets/images/models/cx-60/featured-design-3.webp";

import hightlightsEngine from "../../assets/images/models/global/engine.webp";
import hightlightsPhev from "../../assets/images/models/global/phev.webp";
import hightlightsPetrol from "../../assets/images/models/global/petrol-type.webp";
import hightlightsSeats from "../../assets/images/models/global/seats.webp";

import RhodiumWhiteMetallic from "../../assets/images/models/cx-60/colours/rhodium-white-metallic.webp"
import SonicSilverMetallic from "../../assets/images/models/cx-60/colours/sonic-silver-metallic.webp"
import MachineGreyMetallic from "../../assets/images/models/cx-60/colours/machine-grey-metallic.webp"
import SoulRedCrystalMetallic from "../../assets/images/models/cx-60/colours/soul-red-crystal-metallic.webp"
import DeepCrystalBlueMica from "../../assets/images/models/cx-60/colours/deep-crystal-blue-mica.webp"
import QuartzMetallic from "../../assets/images/models/cx-60/colours/quartz-metallic.webp"
import ZirconSandMetallic from "../../assets/images/models/cx-60/colours/zircon-sand-metallic.webp"
import JetBlackMica from "../../assets/images/models/cx-60/colours/jet-black-mica.webp"

import blackClothInterior from "../../assets/images/models/cx-60/interior-colours/black-cloth.webp"
import blackmaztexInterior from "../../assets/images/models/cx-60/interior-colours/black-maztex.webp"
import blackLeatherInterior from "../../assets/images/models/cx-60/interior-colours/black-leather.webp"
import reveraStoneLeatherInterior from "../../assets/images/models/cx-60/interior-colours/revera-stone-leather.webp"
import blackNappaLeathererInterior from "../../assets/images/models/cx-60/interior-colours/black-nappa-leather.webp"
import tanNappaLeatherInterior from "../../assets/images/models/cx-60/interior-colours/tan-nappa-leather.webp"
import pureWhiteNappaLeatherInterior from "../../assets/images/models/cx-60/interior-colours/pure-white-nappa-leather.webp"

import blackClothInteriorThumb from "../../assets/images/models/cx-60/interior-colours/black-cloth-thumb.webp"
import blackmaztexInteriorThumb from "../../assets/images/models/cx-60/interior-colours/black-maztex-thumb.webp"
import blackLeatherInteriorThumb from "../../assets/images/models/cx-60/interior-colours/black-leather-thumb.webp"
import reveraStoneLeatherInteriorThumb from "../../assets/images/models/cx-60/interior-colours/revera-stone-leather-thumb.webp"
import blackNappaLeathererInteriorThumb from "../../assets/images/models/cx-60/interior-colours/black-nappa-leather-thumb.webp"
import tanNappaLeatherInteriorThumb from "../../assets/images/models/cx-60/interior-colours/tan-nappa-leather-thumb.webp"
import pureWhiteNappaLeatherInteriorThumb from "../../assets/images/models/cx-60/interior-colours/pure-white-nappa-leather-thumb.webp"

import technology1Video from "../../assets/images/models/cx-60/technology-1.mp4";
import technology2Video from "../../assets/images/models/cx-60/technology-2.mp4";
import technology3Video from "../../assets/images/models/cx-60/technology-3.mp4";

import safety1Video from "../../assets/images/models/cx-60/safety-1.mp4";
import safety2Video from "../../assets/images/models/cx-60/safety-2.mp4";
import safety3Video from "../../assets/images/models/cx-60/safety-3.mp4";
import safety4Video from "../../assets/images/models/cx-60/safety-4.mp4";
import safety5Video from "../../assets/images/models/cx-60/safety-5.mp4";

import gradePureImg from "../../assets/images/models/cx-60/pure-grade.webp";
import gradeEvolveImg from "../../assets/images/models/cx-60/evolve-grade.webp";
import gradeTouringImg from "../../assets/images/models/cx-60/touring-grade.webp";
import gradeGTImg from "../../assets/images/models/cx-60/gt-grade.webp";
import gradeAzamiImg from "../../assets/images/models/cx-60/azami-grade.webp";

import brochure from "../../assets/images/models/cx-60/cx-60-brochure.pdf";


import { image, title } from "framer-motion/client";

const cx60Model = {  

  id            : 6,
  slug          : "cx-60",
  title         : "Mazda CX-60",
  menuTitle     : "CX-60",
  subtitle      : "New",
  description   : "Medium SUV | 5 seats",
  tags          : ["suv"],
  image         : cx60,    
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
    { type: "featured",
      data: "featured"
    },
    { type: "colours",
      data: "colours"
    },
    { type: "technology",
      data: "technology"
    },
    { type: "modelColumnSlider",
      data: "safetySlider"
    },
    { type: "grades",
      data: "grades"
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
    title: "New Mazda CX-60",
    tagline: "Look Forward to It",
    image: hero,
    imageMobile: heroMobile
  }, 

  highlights:  {
    anchorLink: "highlights",
    items: [        
      { 
        label: "Hybrid Engine",
        value: "2.5L Plug-in Hybrid (PHEV)",
        image: hightlightsPhev
      },
      { 
        label : "Diesel / Petrol",
        value : "3.3L Mild Hybrid Turbo",
        image : hightlightsPetrol
      },
      {
        label: "Petrol Engine", 
        value: "2.5L SkyActiv-G (RWD)",
        image : hightlightsEngine
      },
      {
        label: "Seating", 
        value: "5 Seats",
        image : hightlightsSeats
      }
    ]
  },    

      
  intro: {
    title: "Ready for wherever the road takes you",
    paragraphs: [
      "Experience true power and exhilaration in the new Mazda CX-60. With three powertrain options, from a RWD 2.5L Petrol SkyActiv-G to a rear-biased AWD turbocharged Inline-6 Hybrid or Plug-in Hybrid, it’s built for those who welcome what’s next.",
      "Plus, with intelligent technology and advanced safety features designed for how you like to drive, the road ahead feels even more rewarding."
    ],
    image : intro,
    cta: "Book a  Test Drive",

  },

  featured: {
    intro: {
      bgColour: "dark-grey-bg dark-bg",
      title: "Make the road ahead all yours",
      description: "The new Mazda CX-60 has everything you need to make the next chapter your best yet. Thoughtfully designed with the latest smart tech, and built to exhilarate. It's the kind of drive that you'll look forward to, every time.",
      image: featureIntroImg,
      anchorLink: "overview",
    },

    tabs: [
      {
        label: "Performance",
        rows : [
          {
            title         : "A More Refined Drive",
            description   : "Get behind the wheel, with performance that delivers a more powerful, smooth and responsive drive.",
            image         : featurePerformance1Img
          },
          {
            title         : "Uncompromising Performance",
            description   : "Experience the power of Plug-in Hybrid with 241kW engine and 500Nm of torque, delivering an impressive 2.5 tonnes of towing capacity.",
            image         : featurePerformance2Img
          },
          {
            title         : "Move Forward With Hybrid",
            description   : "Choose from either a powerful Plug-in Hybrid, or 3.3L Hybrid Turbo Petrol or Diesel powertrain. All with a responsive rear-biased AWD system that keeps you connected through every turn.",
            image         : featurePerformance3Img
          }
        ]
      },

      {
        label : "Technology",
        rows : [
          {
            title : "A More Connected Journey",
            description : [
                "A 12.3” touchscreen display with wireless Apple CarPlay® and Android Auto™ that keeps you connected and entertained.",
                "(12.3” touchscreen only available on selected grade)"
              ],
            image : featureTechnology1Img
          },
          {
            title : "Intelligent Safety",
            description : "Advanced safety and driver assist technology protects every drive with traffic, pedestrian and bicycle detection, Lane Departure Warning for safer highway driving, and 360° view cameras to manoeuvre tight spaces with ease.",
            image : featureTechnology2Img
          },
          {
            title : "Personalise Your Drive",
            description : [
                "With 250 personalised settings*, like optimal driving positioning, audio settings, connectivity preferences and customisable safety alerts; CX-60 makes every drive uniquely yours.",
                "(*Personalisation only available on selected grades)"
              ],
            image : featureTechnology3Img
          }
        ]
      },

      {
        label: "Design",
        rows : [
          {
            title : "Design That Moves You",
            description : "Every curve crafted by hand, the 7th Gen Kodo Design creates a sense of constant motion, even when standing still.",
            image : featureDesign1Img
          },
          {
            title : "Where Less Is More",
            description : "A light-filled, spacious cabin—where every element seamlessly balances form and function, inviting tranquility and harmony into every corner.",
            image : featureDesign2Img
          },
          {
            title         : "Space To Settle In",
            description   : "Load up, stretch out and enjoy every moment along the way with generous legroom and 477L of cargo space.",
            image         : featureDesign3Img
          }
        ]
      }
    ]
    
  },

  colours: {
    anchorLink  : "design",  
    title       : "Design",
    subtitle    : "It's your way forward",
    description : "Whether you’re after something bold, refined, or a bit of both, there’s a CX-60 that’s perfectly suited to you and your journey.",
    exterior: {
    tabLabel: "Exterior",
    options: [
      {
        name      : "Rhodium White Metallic",
        colorCode : "#cccccc",
        image     : RhodiumWhiteMetallic
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
      },
      {
        name      : "Jet Black Mica",
        colorCode : "#2A2A2A",
        image     : JetBlackMica
      },
      {
        name      : "Soul Red Crystal Metallic",
        colorCode : "#d80004",
        image     : SoulRedCrystalMetallic
      },
      {
        name      : "Deep Crystal Blue Mica",
        colorCode : "#121c3f",
        image     : DeepCrystalBlueMica
      },
      {
        name      : "Platinum Quartz Metallic",
        colorCode : "#B2AB9E",
        image     : QuartzMetallic
      },
      {
        name      : "Zircon Sand Metallic",
        colorCode : "#A99B7D",
        image     : ZirconSandMetallic
      }
    ]
  },

  interior: {
    tabLabel: "Interior",
    options: [
      {
        name        : "Black Cloth",
        image       : blackClothInterior,
        imageThumb  : blackClothInteriorThumb
      },
      {
        name        : "Black Maztex",
        image       : blackmaztexInterior,
        imageThumb  : blackmaztexInteriorThumb
      },
      {
        name        : "Black Leather",
        image       : blackLeatherInterior,
        imageThumb  : blackLeatherInteriorThumb
      },

      {
        name        : "Revera Stone Leather",
        image       : reveraStoneLeatherInterior,
        imageThumb  : reveraStoneLeatherInteriorThumb
      },
      {
        name        : "Black Nappa Leatherer",
        image       : blackNappaLeathererInterior,
        imageThumb  : blackNappaLeathererInteriorThumb
      },
      {
        name        : "Tan Nappa Leather",
        image       : tanNappaLeatherInterior,
        imageThumb  : tanNappaLeatherInteriorThumb
      },
      {
        name        : "Pure White Nappa Leather",
        image       : pureWhiteNappaLeatherInterior,
        imageThumb  : pureWhiteNappaLeatherInteriorThumb
      }

    ]
  }
  

  },

  technology : {
    intro: {
      bgColour    : "grey-bg",
      title       : "Technology",
      subtitle    : "Technology that anticipates your needs"
    },
    columns : [
      {
        title       : "360° View Monitor",
        description : [
          "Advanced 360° exterior view and rear sensors enable you to reverse with confidence, for a perfect park every time.",
          "(See through function shown available on selected grades only)"
        ],
        video       : technology1Video
      },
      {
        title       : "Heated and Ventilated Seats",
        description : [
          "Enjoy ideal comfort in any condition with temperature adjustable seats. Just sit back and relax.",
          "(Available on selected grades only)"          
        ],
        video       : technology2Video
      },
      {
        title       : "Hands-free Power Tailgate",
        description : [
          "When your hands are full, feel the ease of tailgate opening by simply moving your foot under the sensor.",
          "(Available on selected grades only)"
        ],
        video       : technology3Video
      }
    ]

  },    

  safetySlider: {
    
    intro: {
      eyebrowTitle  : "Safety",
      title         : "Protecting The Road Ahead",
      description   : "Experience intelligent safety that cares for you and the world around you. The new Mazda CX-60 Hybrid introduces advanced technologies designed to protect the driver, the passengers, and others using the road."

    },
    slides : [
      {
        title : "Smart Brake Support (SBS)",
        description : [
          "Helping you stay in control, this advanced technology can prevent accidents by sending alerts of an impending impact or, if necessary, apply the brakes."
        ],
        video : safety1Video
      },

      {
        title : "i-Adaptive Cruise Control",
        description : [
          "Drive with increased confidence assisted by intuitive tech that reads traffic signs automatically adjusts the speed of the vehicle."
        ],
        video : safety2Video
      },

      {
        title : "Mazda Radar Cruise Control (MRCC) with Cruising & Traffic Support (CTS)",
        description : [
          "Stay protected by reducing driver fatigue when following a vehicle in heavy traffic. MRCC assists the driver with accelerator, brake, and steering functions.",
          "(Cruising and Traffic Support - CTS available on selected grades only)"
        ],
        video : safety3Video    
      },
      
      {
        title : "360° Safety Camera System",
        description : [
          "Enhance your road vision with See-through View technology that ensures drivers are always able to see their surrounding environment clearly.",
          "(See through function shown available on selected grades only)"
        ],
        video : safety4Video
      },
      
      {
        title : "Active Driving Display",
        description : [
          "Get more of every moment with technology that displays current speed, recognises traffic signs, and shows key navigation information on the windshield, so it’s always on sight. Standard on all grades."
        ],
        video : safety5Video
      }

    ]

  },

  grades: {      
    intro: {
      bgColour    : "grey-bg",
      title       : "Specifications",
      subtitle    : "Choose your grade",
    },
    tabs : [
      {
        label : "Default Grade",
        slides : [            
          {
            title           : "Pure",
            price           : "$47,990†",
            featuresTitle   : "Base features:",
            features : [
              "Mazda Connect With Apple Carplay® And Android Auto™ (Wireless And USB)",
              "Active Driving Display",
              "360° view monitor",
              "Black cloth seat trim with 8-way manual driver's seat adjustment",
              "18-inch grey metallic alloy wheels",
              "8 speaker audio system with DAB+ and USB-C",
              "Blind Spot Monitoring (BSM) with vehicle exit warning",
              "Smart Brake Support (SBS)",
              "Mazda Intelligent Drive Select (Mi-Drive)",
              "8-speed automatic transmission"
            ],
            image : gradePureImg
          },

          {
            title           : "Evolve",
            price           : "$54,780†",
            featuresTitle   : "In addition to Pure:",
            features : [
              "Black Maztex trim with 8-way manual driver's seat adjustment",
              "Cruising & Traffic Support (CTS)",
              "Remote operated power tailgate",
              "Wireless Phone Charging (QI)",
              "360° View Monitor with see through view",
              "Driver monitoring",
              "Front Cross Traffic Alert (FCTA)",
              "See key features explainedcompare full specsBuild Your CX-60"
            ],
            image : gradeEvolveImg
          },

          {
            title           : "Touring",
            price           : "$57,906†",              
            featuresTitle   : "In addition to Evolve: Black leather seat trim",
            features : [
              "Power seat adjustment (driver &amp; passenger) with position memory (driver)",
              "Heated front seats (driver and passenger)",
              "Exterior mirror memory",
              "Rear console with LED lamp"
            ],
            image : gradeTouringImg
          },

          {
            title           : "GT",
            price           : "$67,990†",
            featuresTitle   : "In addition to Touring:",
            features : [
              "20-inch black metallic alloy wheels",
              "Hands-free remote operated power tailgate",
              "Panoramic sunroof",
              "Heated steering wheel and heated seats",
              "Premium Bose® Audio with 12 speakers",
              "Personalise system (auto restoration of settings)",
              "Adaptive LED Headlamps (ALH)"
            ],
            image : gradeGTImg
          },

          {
            title           : "Azami",
            price           : "$74,786†",
            featuresTitle   : "In addition to GT:",
            features : [
              "Nappa leather seats",
              "Ventilated front seats",
              "Frameless interior mirror",
              "20-inch black metalllic &amp; machined alloy wheels",
              "Personalise system with easy entry &amp; driving position guide"
            ],
            image : gradeAzamiImg
          }
        ]
      }
    ]
  },

  cta : {
    model       : "CX-60",
    description : "Experience true power and exhilaration in the new Mazda CX-60. Book a test drive today.",
    image       : RhodiumWhiteMetallic,
    brochure    : brochure
  }

};

export default cx60Model;