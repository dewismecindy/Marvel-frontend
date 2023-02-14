import "./App.css";

/* Les import de packages */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
/* import Footer from "./components/Footer"; */

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<Home />}></Route>
        {/* Infos sur un seul personnage */}
        <Route path="/character/:id" element={<Character />}></Route>
        {/* INfos sur la BD concernée */}
        <Route path="/comics" element={<Comics />}></Route>
        {/* infos sur TOUT les personnages */}
        <Route path="/characters" element={<Characters />}></Route>
        {/* infos sur les personnages favoris de l'utilisateur */}
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
