import "./App.css";

/* Les import de packages */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
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
  function SaveData(data) {
    let favoriteFromUser = [];
    favoriteFromUser = JSON.parse(localStorage.getItem("favorite")) || [];

    if (favoriteFromUser.some((id) => (id === data) === true)) {
      return alert`Ce personnage est correctement ajouté à vos favoris`;
    } else {
      favoriteFromUser.push(data);
      localStorage.setItem("favorite", JSON.stringify(favoriteFromUser));
      alert`Ce personnage est dèjà ajouté à vos favoris`;
    }
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/comics" element={<Comics />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route
          path="/character"
          element={<Character SaveData={SaveData} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
