import cx80Img from "../assets/images/vehicles/cx-80.webp";
import bt50Img from "../assets/images/vehicles/bt-50.webp";
import bt50Img2 from "../assets/images/vehicles/bt-50-2.webp";
import mx5Img from "../assets/images/vehicles/mx-5.webp";
import mazda3Img from "../assets/images/vehicles/mazda3.webp";


const vehicles = [

  {
    id      : 1,
    title   : "Mazda CX-80 Touring",
    price   : 64990,
    year    : 2026,
    mileage : 3000,
    image   : cx80Img,
    bodytype : "SUV",
    fuel : "Unleaded",
    transmission : "Auto",
  },

  {
    id      : 2,
    title   : "Mazda BT-50 Ute SP Pickup",
    price   : 63990,
    year    : 2026,
    mileage : 20000,
    image   : bt50Img,
    bodytype : "Ute",
    fuel : "Unleaded",
    transmission : "Auto",
  },

  {
    id      : 3,
    title   : "MX-5",
    price   : 58990,
    year    : 2026,
    mileage : 7500,
    image   : mx5Img,
    bodytype : "Sedan",
    fuel : "Unleaded",
    transmission : "Auto",
  },

  {
    id      : 4,
    title   : "Mazda3",
    price   : 28990,
    year    : 2025,
    mileage : 1575,
    image   : mazda3Img,
    bodytype : "Hatch",
    fuel : "Unleaded",
    transmission : "Auto",
  },

  {
    id      : 5,
    title   : "Mazda BT-50 Ute",
    price   : 81450,
    year    : 2026,
    mileage : 3500,
    image   : bt50Img2,
    bodytype : "Ute",
    fuel : "Unleaded",
    transmission : "Auto",
  }

]

export default vehicles;