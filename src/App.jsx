import { BrowserRouter, Routes, Route } from "react-router-dom";

import Version1Layout from "./layouts/Version1Layout";
import Version2Layout from "./layouts/Version2Layout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import HomePage from "./pages/HomePage"
import Stock from "./pages/Stock";
import VehicleDetail from "./pages/VehicleDetail";
import Service from "./pages/Service";
import BookService from "./pages/BookService";
import Parts from "./pages/Parts";
import Finance from "./pages/Finance";
import Offers from "./pages/Offers";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      
      <ScrollToTop />

      <Routes>

        <Route path="/version-1">
          <Route element={<Version1Layout />}>

            <Route index element={<HomePage />} />
            <Route path="stock" element={<Stock />} />
            <Route path="vehicle/:id" element={<VehicleDetail />} />
            <Route path="service" element={<Service />} />
            <Route path="book-a-service" element={<BookService />} />
            <Route path="parts" element={<Parts />} />
            <Route path="finance" element={<Finance />} />
            <Route path="offers" element={<Offers />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />

          </Route>
        </Route>

        <Route path="/version-2">
          <Route element={<Version2Layout />}>

            <Route index element={<HomePage />} />
            <Route path="stock" element={<Stock />} />
            <Route path="vehicle/:id" element={<VehicleDetail />} />
            <Route path="service" element={<Service />} />
            <Route path="book-a-service" element={<BookService />} />
            <Route path="parts" element={<Parts />} />
            <Route path="finance" element={<Finance />} />
            <Route path="offers" element={<Offers />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />

          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App
