import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"; // Untuk Tailwind CSS atau CSS lainnya
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Profil from "./pages/Profil";
import PrestasisPage from "./pages/Prestasi";
import Mapel from "./pages/Mapel";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/prestasi" element={<PrestasisPage />} />
        <Route path="/mapel" element={<Mapel />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
