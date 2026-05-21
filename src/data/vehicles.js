import cx80Img from "../assets/images/vehicles/cx-80.webp";
import cx80Img2 from "../assets/images/vehicles/cx-80-2.webp";
import cx90Img from "../assets/images/vehicles/cx-90.webp";
import cx30Img from "../assets/images/vehicles/cx-30.webp";
import cx6eImg from "../assets/images/vehicles/cx-6e.webp";
import bt50Img from "../assets/images/vehicles/bt-50.webp";
import bt50Img2 from "../assets/images/vehicles/bt-50-2.webp";
import mx5Img from "../assets/images/vehicles/mx-5.webp";
import mazda3Img from "../assets/images/vehicles/mazda3.webp";


const vehicles = [

  {
    id      : 1001,
    title   : "Mazda CX-80 Touring",
    price   : 64990,
    year    : 2026,
    mileage : 3000,
    image   : cx80Img,
    bodytype : "SUV",
    fuel : "Hybrid",
    transmission : "Auto",
  },

  {
    id      : 1002,
    title   : "Mazda BT-50 Ute SP Pickup",
    price   : 63990,
    year    : 2026,
    mileage : 20000,
    image   : bt50Img,
    bodytype : "Ute",
    fuel : "Petrol",
    transmission : "Auto",
  },

  {
    id      : 1003,
    title   : "MX-5 Roadster GT",
    price   : 58990,
    year    : 2024,
    mileage : 7500,
    image   : mx5Img,
    bodytype : "Convertible",
    fuel : "Petrol",
    transmission : "Manual",
  },

  {
    id      : 1004,
    title   : "Mazda3 Touring",
    price   : 28990,
    year    : 2025,
    mileage : 1575,
    image   : mazda3Img,
    bodytype : "Hatch",
    fuel : "Petrol",
    transmission : "Auto",
  },

  {
    id      : 1005,
    title   : "Mazda CX-6e GT",
    price   : 58490,
    year    : 2026,
    mileage : 1790,
    image   : cx6eImg,
    bodytype : "SUV",
    fuel : "Electric",
    transmission : "Auto",
  },

  {
    id      : 1006,
    title   : "Mazda BT-50 Ute GP Pickup",
    price   : 81450,
    year    : 2021,
    mileage : 3500,
    image   : bt50Img2,
    bodytype : "Ute",
    fuel : "Petrol",
    transmission : "Manual",
  },

  {
    id      : 1007,
    title   : "Mazda CX-5 AKERA",
    price   : 55190,
    year    : 2024,
    mileage : 94500,
    image   : cx30Img,
    bodytype : "SUV",
    fuel : "Petrol",
    transmission : "Manual",
  },

  {
    id      : 1008,
    title   : "Mazda CX-90 Touring",
    price   : 60990,
    year    : 2018,
    mileage : 12500,
    image   : cx90Img,
    bodytype : "SUV",
    fuel : "Hybrid",
    transmission : "Auto",
  },

  {
    id      : 1009,
    title   : "Mazda CX-80 GT",
    price   : 69840,
    year    : 2024,
    mileage : 4250,
    image   : cx80Img2,
    bodytype : "SUV",
    fuel : "Hybrid",
    transmission : "Auto",
  }

]

export default vehicles;