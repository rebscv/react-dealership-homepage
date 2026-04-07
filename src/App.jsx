import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/vehicle/:id" element={<VehicleDetail />} />
        <Route path="/service" element={<Service />} />
        <Route path="/book-a-service" element={<BookService />} />
        <Route path="/parts" element={<Parts />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App
