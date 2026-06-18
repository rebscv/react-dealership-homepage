import bt50 from "../../assets/images/range/bt-50.webp";
import hero from "../../assets/images/models/bt-50/hero.webp";
import heroMobile from "../../assets/images/models/bt-50/hero-m.webp";
import goAllInImg from "../../assets/images/models/bt-50/go-all-in.webp";

import interiorImg1 from "../../assets/images/models/mx-5/interior-1.webp";
import interiorImg2 from "../../assets/images/models/mx-5/interior-2.webp";
import interiorImg3 from "../../assets/images/models/mx-5/interior-3.webp";
import exteriorImg1 from "../../assets/images/models/mx-5/exterior-1.webp";
import exteriorImg2 from "../../assets/images/models/mx-5/exterior-2.webp";
import exteriorImg3 from "../../assets/images/models/mx-5/exterior-3.webp";

import iceWhite from "../../assets/images/models/bt-50/colours/ice-white.webp";

import blackClothInterior from "../../assets/images/models/bt-50/interior-colours/black-cloth.webp";
import blackLeatherInterior from "../../assets/images/models/bt-50/interior-colours/black-leather.webp";
import blackTerracottaMaztexClothInterior from "../../assets/images/models/bt-50/interior-colours/black-terracotta-maztex-cloth.webp";
import blackClothInteriorThumb from "../../assets/images/models/bt-50/interior-colours/black-cloth-thumb.webp";
import blackLeatherInteriorThumb from "../../assets/images/models/bt-50/interior-colours/black-leather-thumb.webp";
import blackTerracottaMaztexClothInteriorThumb from "../../assets/images/models/bt-50/interior-colours/black-terracotta-maztex-cloth-thumb.webp";

import safetyVideo1 from "../../assets/images/models/mx-5/blind-spot-monitoring-bsm.mp4";

import fleetImg from "../../assets/images/models/bt-50/fleet.webp";
import financeImg from"../../assets/images/models/bt-50/finance.webp";

import { image, title, video } from "framer-motion/client";

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
    {
      type: "modelTextBgImage",
      data: "ultimateDriver"
    },
    {
      type: "featured",
      data: "featured"
    },

    { type: "colours",
      data: "colours"
    },
    {
      type: "modelText",
      data: "accessories"
    },
    {
      type: "modelColumns",
      data: "accessoriesColumns"
    },
    {
      type: "modelColumnSlider",
      data: "safetySlider"
    },
    {
      type: "modelColumnTextImage",
      data: "fleet"
    },
    {
      type: "modelColumnTextImage",
      data: "finance"
    },
    { type: "cta",
      data: "cta"
    }
  ],
  
  nav: {
    items : [
      { name : "Overview", link : "#overview" },
      { name : "Design", link : "#design" },
      { name : "Acessories", link : "#acessories" },
      { name : "Safety", link : "#safety" },
      { name : "Specs", link : "#specs" }

    ],
    cta: "Book a Test Drive"

  },   

  hero: {
    title           : "New Mazda BT-50 UTE",
    image           : hero,
    imageMobile     : heroMobile,
  },

  highlights : {
    bgColour : "white-bg",
    items: [
      {value : "6.6-7.8L /100km"},
      {value : "3.5 tonne towing"},
      {value : "Up to 1.2T payload"},
      {value : "Up to 140KW & 450 nm"}
    ]
  },

  ultimateDriver : {
    title           : "Go all in. Get More Out.",
    text            :
    [
      "When you give life your all, you need a ute that gives even more.The new BT-50 is built with power, durability, and grit - so you can get more out of every day."
    ],
    imageBg         : goAllInImg,
    bgColour        : "dark-bg",
    gridClass       : "grid-d-two-cols"
  },

  featured: {
    intro: {
      bgColour      : "dark-bg black-bg",
      title         : "Give it a challenge, It lives for this stuff.",
      description   : "A ute built for the hardest of yards and the steepest of challenges, with a durable design that doesn’t compromise on comfort, it's ready to take on the toughest tasks without breaking a sweat.",
      anchorLink    : "overview",
    },

    tabs: [
      {
        label: "Performance",
        rows : [
          {
            title          : "3.0L Turbo Diesel",
            description    : "Bring serious grunt, backed up by a powerful turbo diesel engine, delivering up to 140kW of power and 450Nm of torque. The BT-50 can tow up to 3.5 tonnes and hold up under heavy loads in the roughest conditions. For those who demand reliability, it's ready to go when you are.",
            image          : interiorImg1
          },
          {
            title          : "Making Heavy Loads Light Work",
            description    : "Always be ready to do the heavy lifting with up to a 1.2T payload. Combined with a powerful towing capacity, the BT-50 can haul while still carrying a full load in the tray, making it your best mate for work or play.",
            image          : interiorImg1
          },
          {
            title          : "4x4 Capability",
            description    : "Adventure off the beaten track with BT-50’s 4x4 capability for powerful traction and control in rugged terrain, with built-in features like hill descent control, hill start assist and a locking rear differential. Stay in control, even when the road gets rough, with a high ground clearance and underbody protection.",
            image          : interiorImg1
          }
        ]
      },
      {
        label : "Tech & Safety",
        rows : [
          {
            title          : "Smart Safety", 
            description    : "Experience the ultimate driving confidence with the BT-50. With a 5-star ANCAP safety rating, it’s packed with cutting-edge driver assist safety features like intelligent Adaptive Cruise Control (iACC), Rear Cross Traffic Brakes and more†, so you know you’re always in control.",
            image          : interiorImg1
          },
          {
            title          : "Off-Road Tech", 
            description    : "Whether you’re cruising the city streets or tackling remote terrains, you’re always in charge with the BT-50 customisable 7.0-inch driver display. Access real-time data from tyre-pressure, diff lock status and terrain angles. Plus, easily adjust settings on-the-fly to tackle changing terrain, avoiding tyre blowouts and traction loss — all at your fingertips.",
            image          : interiorImg1
          },
          {
            title          : "Stay Connected", 
            description    : "Stay on track, wherever the road takes you, with wireless Apple Car Play and Android Auto. Navigate remote routes with access to real-time or offline maps through your phone’s apps, get things done while you move with hands-free calls and messaging functionality, plus access connected apps for entertainment and planning on-the-go.",
            image          : interiorImg1
          }
        ]
      },
      {
        label : "Tough Design",
        rows : [
          {
            title          : "As tough as it looks", 
            description    : "The BT-50 is built to go the extra mile, and then some. Featuring new 18-inch wheels, a heavy-duty front grille and an overhauled design with durability at its core, it's always ready to handle more.",
            image          : interiorImg1
          },
          {
            title          : "Strong Where it Counts", 
            description    : "Extensive use of high tensile steel in the chassis provides the strength you need, while keeping things light. It's the solid foundation BT-50 is built on that means it's ready to back you all the way, wherever you go.",
            image          : interiorImg1
          },
          {
            title          : "Uncompromising Comfort", 
            description    : "Experience the ultimate comfort when you’re giving it heaps with the BT-50. Ample cabin space, remote engine start, heated front seats and premium features, means you can tackle it all while your mates and family sit back to enjoy a comfortable ride.",
            image          : interiorImg1
          }
        ]
      }
    ]
  },


  colours: {
    anchorLink  : "design",  
    title       : "Design",
    subtitle    : "Take a look around",
    description : "Explore every detail inside and out, find your ideal colour, and start building a BT-50 that's made your way.",
    exterior: {
      tabLabel: "Exterior",
      options: [
        {
          name      : "Ice White",
          colorCode : "#cccccc",
          image     : iceWhite
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
          name        : "Black Leather",
          image       : blackLeatherInterior,
          imageThumb  : blackClothInteriorThumb
        },
        {
          name        : "Black Terracotta Maztex Cloth",
          image       : blackTerracottaMaztexClothInterior,
          imageThumb  : blackTerracottaMaztexClothInteriorThumb
        }
      ]
    }
  },  

  accessories : {
    anchorLink    : "acessories",
    bgColour      : "black-bg dark-bg",
    wrapperClass  : "lrg-wrapper no-padding-bottom",
    eyebrowTitle  : "Accessories",
    title         : "Kit it out for whatever you're into",
    text          : "With plenty of ways to kit it out, from accessories to enhancements, you can make BT-50 match your lifestyle.",
  },

  accessoriesColumns: {
    intro : {
      bgColour      : "black-bg dark-bg",
      wrapperClass  : "lrg-wrapper",
      gridClass     : "grid-d-three-cols grid-t-two-cols"
    },
    columns : [
      {
        title         : "Give the Outdoors Heaps",
        description   : ["For those who love camping, getting muddy, and fighting off the mozzies. Add a snorkel, dual battery, premium bull bar and roof platform and go places you've never been before."],
        image         : blackClothInterior
      },
      {
        title         : "Give the Family Heaps",
        description   : ["There are families, and then there are 'ute families'. Load up the crew and hit the road, with a roller cover, locking tailgate and weather shields. There's everything you need for unforgettable family adventures."],
        image         : blackClothInterior
      },
      {
        title         : "Give the Worksite Heaps",
        description   : ["Every tool you need, right where you need it. Turn your BT-50 into the ultimate workmate, with a standard alloy tray, ladder rack, rubber mats, Electric Brake Controller, and a black nudge bar."],
        image         : blackClothInterior
      }

    ]
  },

  safetySlider: {      
    intro: {
      bgColour        : "grey-bg",
      eyebrowTitle    : "Safety",
      title           : "Serious about safety",      
      text            : ["Built to keep you safe inside and out. The BT-50 is packed full of intelligent safety features that has earned it a 5-star ANCAP safety rating, so you can Give It Heaps, with confidence."]
    },
    slides : [
      {
        video           : safetyVideo1,
        title           : "Trailer Sway Control (TSC)",
        description     : [
          "Adjusts brakes and torque levels to minimise trailers swaying from side to side."
        ]        
      },
      {
        video           : safetyVideo1,
        title           : "Rear Cross Traffic Brake (RCTB)",
        description     : [
          "When reversing, sensors detect vehicles approaching from the side and sound a warning or apply the brakes if necessary."
        ]        
      },
      {
        video           : safetyVideo1,
        title           : "Lane Departure Warning (LDW)",
        description     : [
          "Senses when you are straying from your lane at speeds over 60km/h and sounds a warning."
        ]        
      },
      {
        video           : safetyVideo1,
        title           : "BLIND SPOT MONITOR (BSM)",
        description     : [
          "Scans blind spots for unseen vehicles and alerts you of potentially hazardous lane changes."
        ]        
      },
      {
        video           : safetyVideo1,
        title           : "ADAPTIVE CRUISE CONTROL (ACC)",
        description     : [
          "Detects the vehicle in front and adjusts your cruising speed to maintain a safe distance."
        ]        
      },
      {
        video           : safetyVideo1,
        title           : "HILL DESCENT CONTROL (HDC)",
        description     : [
          "Maintains smooth and steady control when descending steep slopes."
        ]        
      }
    ]
  },

  fleet : {
    bgColour      : "dark-bg black-bg",
    wrapperClass  : "lrg-wrapper",
    gridClass     : "",
    title         : "Mazda fleet",
    text          : "Built tough to handle the demands of your business. The new 2.2L BT-50 XS in 4x2 and 4x4 variants work as hard as your team does. With power, reliability, and advanced safety features, it’s the ute you can depend on to keep your business moving forward. Get in touch with a Mazda Fleet Specialist today.",
    image         : fleetImg
  },

  finance : {
    bgColour      : "dark-bg black-bg",
    wrapperClass  : "lrg-wrapper no-padding-top",
    gridClass     : "grid-l-two-cols grid-l-reverse",
    title         : "Finance your way",
    text          : [
      "With Mazda’s flexible finance options, there’s no need to wait. Start giving it heaps today by getting into your BT-50 sooner than you think.",
      "You can enjoy a new Mazda more often with the reassurance of a GFV* as well as lower monthly repayments^."
    ],
    image         : financeImg
  },

  cta : { 
    description : "Experience true power and exhilaration in the new Mazda CX-60. Book a test drive today.",
    image       : iceWhite
  }

};

export default bt50Model;