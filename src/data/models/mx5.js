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

import ultimateImg from "../../assets/images/models/mx-5/ultimate-drivers-car.webp";

import performanceImg1 from "../../assets/images/models/mx-5/more-thrills.webp";
import performanceImg2 from "../../assets/images/models/mx-5/precise-performance.webp";
import performanceImg3 from "../../assets/images/models/mx-5/refined-power.webp";

import connectedTechnologyImgHero from "../../assets/images/models/mx-5/connected-technology.webp";
import connectedTechnologyImg1 from "../../assets/images/models/mx-5/all-access.webp";
import connectedTechnologyImg2 from "../../assets/images/models/mx-5/stay-connected.webp";
import connectedTechnologyImg3 from "../../assets/images/models/mx-5/mymazda-app.webp";
import connectedTechnologyImg4 from "../../assets/images/models/mx-5/open-road.webp";

import intelligentTechnologyVideo1 from "../../assets/images/models/mx-5/advance-keyless-entry.mp4";
import intelligentTechnologyVideo2 from "../../assets/images/models/mx-5/heated-seats.mp4";
import intelligentTechnologyVideo3 from "../../assets/images/models/mx-5/wireless-entertainment.mp4";

import safetyVideo1 from "../../assets/images/models/mx-5/blind-spot-monitoring-bsm.mp4";
import safetyVideo2 from "../../assets/images/models/mx-5/lane-departure-warning-ldw.mp4";
import safetyVideo3 from "../../assets/images/models/mx-5/smart-city-brake-support-scbs.mp4";
import safetyVideo4 from "../../assets/images/models/mx-5/rear-cross-traffic-alert-rcta.mp4";
import safetyVideo5 from "../../assets/images/models/mx-5/adaptive-led-headlamps-alh.mp4";
import safetyVideo6 from "../../assets/images/models/mx-5/traffic-sign-recognition-tsr.mp4";

import GradeSoftTopRoadster from "../../assets/images/models/mx-5/roadster.webp";
import GradeSoftTopRoadsterGt from "../../assets/images/models/mx-5/roadster-gt.webp";
import GradeSoftTopRoadsterGtRs from "../../assets/images/models/mx-5/roadster-gt-rs.webp";
import GradeRfGt from "../../assets/images/models/mx-5/rf-gt.webp";
import GradeRfGtBlackRoof from "../../assets/images/models/mx-5/rf-gt-black-roof.webp";
import GradeRfGtGs from "../../assets/images/models/mx-5/rf-gt-gs.webp";

import brochure from "../../assets/images/models/mx-5/mx-5-brochure.pdf";
import mx5TestDrive from "../../assets/images/models/mx-5/mx-5.webp";


import { image } from "framer-motion/client";

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
    {
      type: "modelText",
      data: "introText"
    },
    {
      type: "featured",
      data: "featured"
    },
    {
      type: "modelTextBgImage",
      data: "ultimateDriver"
    },
    {
      type: "modelColumnSlider",
      data: "performanceSlider"
    },
    {
      type: "modelText",
      data: "connectedTechnology"
    },
    {
      type: "modelColumns",
      data: "connectedTechnologyColumns"
    },
    {
      type: "modelColumns",
      data: "technologyColumns"
    },
    {
      type: "modelColumnSlider",
      data: "safetySlider"
    },
    { type: "grades",
      data: "grades"
    },
    {
      type: "cta",
      data: "cta"
    }
  ],

  nav: {
    items : [
      { name : "Design", link : "#design" },
      { name : "Performance", link : "#performance" },
      { name : "Technology", link : "#technology" },
      { name : "Safety", link : "#safety" },
      { name : "Specs", link : "#specs" }

    ],
    cta: "Book a Test Drive"
  },

  hero: {
    title         : "MAZDA MX-5",
    tagline       : "UNRIVALLED EXCITEMENT",
    image         : hero,
    imageMobile   : heroMobile,
  },

  introText: {
    wrapperClass  : "std-wrapper",
    title         : "A DRIVE THAT’S ALL YOURS",
    text          : "Mazda MX-5 is all for the joy of driving, pure and simple. Every inch designed to make you find excuses to drive. Connected from wheel to road at every moment. With refined design and exhilarating performance, the MX-5 invites you feel something you never have before.",
    image         : driveImg,
    alt           : "Diagonal top-view of the MX-5"
  },

  featured: {
    intro: {
      bgColour      : "grey-bg",
      title         : "STYLE ICON",
      description   : "An undeniable style unlike any other. Mazda MX-5 expresses an elegant balance of history and innovation.",
      anchorLink    : "design"
    },
    tabs: [
      {
        label: "Exterior",
        rows : [
          {
            title         : "METALLIC AERO GREY",
            description   : "A shade of grey designed to standout. Metallic Aero Grey gives Mazda MX-5 a sporty look.",
            image         : interiorImg1
          },
          {         
            title         : "HEADLIGHTS",
            description   : "Cut through the darkness and light up the night. Mazda MX-5 now comes with an even sleeker and more refined headlight design.",
            image         : interiorImg2
          },
          {
            title         : "17” ALLOY WHEELS",
            description   : "Available in Machined or Black colour options, these wheel designs give your MX-5 a race track ready look.",
            image         : interiorImg3
          },
        ]
      },
      {
        label : "Interior",
        rows : [
          {
            title         : "CRAFTED TRIM",
            description   : "An expanded range of classic colour trims bring a timeless quality to an already elegant interior. Available in Nappa Leather on select grades.",
            image         : exteriorImg1
          },
          {
            title         : "CENTRE OF ATTENTION",
            description   : "The crafted details continue to the centre console, wrapped in a leather-like skin for a luxurious touch.",
            image         : exteriorImg2
          },
          {
            title         : "METER MASTERPIECE",
            description   : "llluminated meter design combines form and function, with a classic racing feel.",
            image         : exteriorImg3
          }
        ]
      }
    ]    
  },

  ultimateDriver : {
    anchorLink      : "performance",
    title           : "The Ultimate Drivers Car",
    text            : "The perfectly balanced Mazda MX-5, offers the most responsive driving experience yet, with every aspect of its performance meticulously refined for pure exhilaration. ",
    imageBg         : ultimateImg,
    bgColour        : "dark-bg",
    gridClass       : "grid-d-two-cols"
  },

  performanceSlider : {      
    intro: {
      title         : "Heart Racing Performance",
      description   : "Performance with an unmatched attention to detail, for a feeling that's hard to describe.",
      anchorLink    : "heart-racing-performance"
    },
    slides : [
      {
        title : "More Thrills",
        description : [ "Enhanced performance for an excitement experience. Mazda MX-5 makes you feel alive with agilie and intuitive handling that connects you to the road." ],
        image : performanceImg1,
        alt : "Happy couple driving the MX-50"
      },
      {
        title : "Precise Performance",
        description : [ "Performance with an unparalleled attention to detail. Adopting Asymmetric Limited Slip Differential, Mazda MX-5 offers precise response steering, improved stability, enhancing the driving feel for your enjoyment." ],
        image : performanceImg2,
        alt : "Red MX-50 Convertible"
      },
      {
        title : "Refined Power",
        description : [ "DSC-TRACK prevents wheel spin without dropping torque, so you can challenge your skills on the track. Meanwhile Kinematic Posture Control and a grounded tyre position gives adds responsiveness, putting the driver in control of every second." ],
        image : performanceImg3,
        alt : "MX-50 Convertible driving on road"
      } 
    ]
  },

  connectedTechnology : {
    anchorLink    : "technology",
    bgColour      : "grey-bg",
    wrapperClass  : "lrg-wrapper model-text-reverse",
    title         : "Connected Technology",
    text          : "The first Mazda Connected Vehicle, Mazda MX-5 gives you enhanced control over every moment.",
    image         : connectedTechnologyImgHero,
  },

  connectedTechnologyColumns: {
    intro : {
      bgColour      : "grey-bg",
      wrapperClass  : "lrg-wrapper no-padding-top",
      gridClass     : "grid-d-four-cols grid-t-two-cols",
      anchorLink    : "technology-content"
    },
    columns : [
      {
        title         : "All Access",
        description   : [ "A large 8.8-inch LCD touchscreen makes it simple to access everything you need, all in one place." ],
        image         : connectedTechnologyImg1
      },
      {
        title         : "Stay Connected",
        description   : [ "Experience enhanced wireless phone connectivity so you’re always in the moment, at every turn." ],
        image         : connectedTechnologyImg2
      },
      {
        title         : "Mymazda App",
        description   : [ "Feel at ease with connected services to assist you in case of an emergency, calling an ambulance and talking to an operator for you." ],
        image         : connectedTechnologyImg3
      },
      {
        title         : "Open Road",
        description   : [ "Escape the everyday with fold down roof mechanics and space for weekend adventures." ],
        image         : connectedTechnologyImg4
      }
    ]
  },

  technologyColumns: {      
    intro: {
      anchorLink    : "intelligent-technology",
      title         : "Intelligent Technology",
      gridClass     : "grid-d-four-cols grid-t-two-cols"
    },
    columns : [
      {
        title       : "Advanced Keyless Entry",
        description : ["Advanced keyless entry on GT grade and above means you can gain access without fumbling for keys."],
        video       : intelligentTechnologyVideo1
      },
      {
        title       : "Heated Seats",
        description : ["Never be left cold on chilly mornings with heated seats. Available on GT grade and above."],
        video       : intelligentTechnologyVideo2
      },
      {
        title       : "Wireless Entertainment",
        description : ["Wireless Apple CarPlay® and Android™ Auto come standard across all grades. Seamlessly connecting your phone and car."],
        video       : intelligentTechnologyVideo3
      },
      {
        title       : "See Every Angle",
        description : ["Whether you’re parking or opening your door, reverse camera and sensors let you get the job done with ease. Standard across all grades."],
        video       : safetyVideo1
      }
    ]
  },

  safetySlider: {      
    intro: {
      bgColour       : "grey-bg",
      title           : "Safety Features",
      text            : ["Safety rules supreme in Mazda MX-5, with a range of smart and intuitive features designed to keep you well and truly out of harm’s way."]
    },
    slides : [
      {
        title         : "Blind Spot Monitoring (BSM)",
        description   : [
          "Blind Spot Monitoring (BSM) scans external mirrors’ blind spots up to 50m behind your vehicle, while radars detect unseen vehicles to alert you of any potential hazardous lane changes."
        ],
        video         : safetyVideo1
      },
      {
        title         : "Lane Departure Warning (LDW)",
        description   : [
          "Lane Departure Warning (LDW) monitors road markings and alerts you if you’re straying from your lane.",
          "If no action is taken, it will apply corrective steering to help guide you back."
        ],
        video         : safetyVideo2
      }, 
      {
        title         : "Smart City Brake Support (SCBS)",
        description   : [
          "Smart City Brake Support (SCBS). At forward speeds of 4-80km/h SCBS-F monitors the vehicle or pedestrian in front to assess the likelihood of a collision. If there is a high risk, the system will warn you and brake automatically if needed. SCBS-R works with reverse speeds of 2-8km/h."
        ],
        video         : safetyVideo3
      }, 
      {
        title         : "Rear Cross Traffic Alert (RCTA)",
        description   : [
          "Rear Cross Traffic Alert (RCTA) assists you when you're reversing, by warning if a car is approaching from either side."
        ],
        video         : safetyVideo4
      }, 
      {
        title         : "Adaptive LED Headlamps (ALH)",
        description   : [
          "Adaptive LED Headlamps (ALH) individually controls a number of LEDs to broaden visibility at low speeds, avoid dazzling others on high beam, and extend vision at highway speeds.",
          "Available on all GT grades"
        ],
        video         : safetyVideo5
      },
      {
        title         : "Traffic Sign Recognition (TSR)",
        description   : [
          "Traffic Sign Recognition (TSR) detects Stop, speed limit, and No Entry signs and projects the signs onto your Active Driving Display to ensure you don't miss a thing."
        ],
        video         : safetyVideo6
      }
    ]
  },

  grades: {      
    intro: {
      title       : "Specifications",
      subtitle    : "Choose your grade",
    },

    tabs: [
      {
        label : "Soft-top",
        slides :
        [
          {
            image           : GradeSoftTopRoadster,
            title           : "Roadster",
            price           : "$47,382†",
            featuresTitle   : "Base Features",
            features        :
            [
              "17-inch black metallic alloy wheels",
              "Mazda Connect widescreen display with wireless Apple Carplay® and Android Auto™",
              "Mazda Connected Services",
              "Blind Spot Monitoring (BSM)",
              "Limited-Slip Differential (MT only)",
              "Headlamps (LED) with auto on/off function",
              "Rain-sensing wipers",
              "Climate control air-conditioning",
              "Cruise control",
              "Parking sensors (Rear)"
            ]
          },
          {
            image           : GradeSoftTopRoadsterGt,
            title           : "Roadster GT",
            price           : "$54,309†",
            featuresTitle   : "In addtion to Roadster",
            features        :
            [
              "Black Leather Heated Seats",
              "Adaptive LED Headlights (ALH)",
              "Premium Bose® audio with 9 speakers",
              "17-inch machined alloy wheels",
              "Power mirrors (body coloured with heating)",
              "Advanced Keyless Entry"
            ]
          },
          {
            image           : GradeSoftTopRoadsterGtRs,
            title           : "Roadster GT RS",
            price           : "$57,435†",
            featuresTitle   : "In addtion to Roadster GT",
            features        :
            [
              "17-inch gunmetal grey BBS forged alloy wheels",
              "Bilstein Suspension Dampers",
              "Brembo Front Brakes",
              "Suspension front tower brace bar",
              "Power mirrors (piano black with heating)"
            ]
          }
        ]
      },
      {
        label : "RF",
        slides :
        [
          {
            image           : GradeRfGt,
            title           : "RF GT",
            price           : "$58,998†",
            featuresTitle   : "Base features:",
            features        :
            [
              "17-inch machined alloy wheels",
              "Mazda Connect widescreen display with wireless Apple Carplay® and Android Auto™",
              "Mazda Connected Services",
              "Black Leather Heated Seats",
              "Adaptive LED Headlights (ALH)",
              "Premium Bose® audio with 9 speakers",
              "Advanced Keyless Entry",
              "Blind Spot Monitoring (BSM)",
              "Climate control air-conditioning",
              "Limited-Slip Differential (Manual only)"
            ]
          },
          {
            image           : GradeRfGtBlackRoof,
            title           : "RF GT Black Roof",
            price           : "$61,627†",
            featuresTitle   : "In addition to RF GT:",
            features        :
            [
              "Hand painted black roof",
              "Tan Nappa Leather Seat Trim"
            ]
          },
          {
            image           : GradeRfGtGs,
            title           : "RF GT RS",
            price           : "$62,124†",
            featuresTitle   : "In addition to RF GT Black Roof:",
            features        :
            [
              "17-inch gunmetal grey BBS forged alloy wheels",
              "Bilstein Suspension Dampers",
              "Brembo Front Brakes",
              "Suspension front tower brace bar"
            ]
          }
        ]
      }
    ]

  },

  cta : {
    bgColour    : "grey-bg",
    description : "Experience true power and exhilaration in the new Mazda CX-60. Book a test drive today.",
    brochure    : brochure,
    image       : mx5TestDrive
  }


};

export default mx5Model;