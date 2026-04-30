import cx60 from "../../assets/images/range/cx-60.webp";
import hero from "../../assets/images/models/cx-60/hero.webp";
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

import RhodiumWhiteMetallic from "../../assets/images/models/cx-60/colours/rhodium-white-metallic.webp"
import SonicSilverMetallic from "../../assets/images/models/cx-60/colours/sonic-silver-metallic.webp"
import MachineGreyMetallic from "../../assets/images/models/cx-60/colours/machine-grey-metallic.webp"
import SoulRedCrystalMetallic from "../../assets/images/models/cx-60/colours/soul-red-crystal-metallic.webp"
import DeepCrystalBlueMica from "../../assets/images/models/cx-60/colours/deep-crystal-blue-mica.webp"

import technology1Video from "../../assets/images/models/cx-60/technology-1.mp4";
import technology2Video from "../../assets/images/models/cx-60/technology-2.mp4";
import technology3Video from "../../assets/images/models/cx-60/technology-3.mp4";

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
        description: "The new Mazda CX-60 has everything you need to make the next chapter your best yet. Thoughtfully designed with the latest smart tech, and built to exhilarate. It's the kind of drive that you'll look forward to, every time.",
        image: featureIntroImg
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

    technology : {
      intro: {
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
            "(Available on selected grades only)",
          ],
          video       : technology3Video
        }
      ]

    },    

    safety: [
    ]



};

export default cx60Model;