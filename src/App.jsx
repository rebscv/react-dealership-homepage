import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import VehicleDetail from "./pages/VehicleDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vehicle/:id" element={<VehicleDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
