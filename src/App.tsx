import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./layout/Sidebar";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
const App = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Sidebar state

  return (
    <Router>
      <div className="flex">
        {/* Sidebar with toggle control */}
        <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

        {/* Main Content (Moves with Sidebar) */}
        <div
          className={`bg-white flex-1 p-2 sm:p-8 transition-all ${
            isExpanded ? "ml-60" : "ml-16"
          }`}
        >
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
