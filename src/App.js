import "./App.css";

/* Les import de packages */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

/* Les imports pages */
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Favorites from "./pages/Favorites";
import Characters from "./pages/Characters";
import Character from "./pages/Character";

/* Les imports components*/
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<Home />}></Route>
        {/* Infos sur un seul personnage */}
        <Route path="/Character" element={<Character />}></Route>
        {/* INfos sur la BD concernée */}
        <Route path="/Comics" element={<Comics />}></Route>
        {/* infos sur TOUT les personnages */}
        <Route path="/Characters" element={<Characters />}></Route>
        {/* infos sur les personnages favoris de l'utilisateur */}
        <Route path="/Favorites" element={<Favorites />}></Route>
        <Footer />
      </Routes>
    </Router>
  );
}

export default App;
