import "./App.css";

/* Les import de packages */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Les imports pages */
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Favorites from "./pages/Favorites";
import Characters from "./pages/Characters";
import Character from "./pages/Character";

/* Les imports  components*/
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/comics" element={<Comics />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/character" element={<Character />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
