import "./App.css";

/* Les import de packages */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

/* Les imports pages */
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Favoris from "./pages/Favoris";
import ComicsRelated from "./pages/ComicsRelated";

/* Les imports components*/
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [placeHolder, setPlaceHolder] = useState("");
  const [errorComics, setErrorComics] = useState("");
  const [errorCharacter, setErrorCharacter] = useState("");
  return (
    <Router>
      <Header url={url} />
      <Navbar />
      <Routes>
        {/* Page */}
        <Route
          path="/comics"
          element={
            <Comics
              error={error}
              setError={setError}
              setUrl={setUrl}
              placeHolder={placeHolder}
              setPlaceHolder={setPlaceHolder}
            />
          }
        ></Route>

        <Route path="/comics-related" element={<ComicsRelated />}></Route>

        <Route
          path="/favoris"
          element={
            <Favoris
              setUrl={setUrl}
              errorComics={errorComics}
              errorCharacter={errorCharacter}
              setErrorCharacter={setErrorCharacter}
            />
          }
        ></Route>

        <Route
          path="/"
          element={
            <Home
              error={error}
              setError={setError}
              placeHolder={placeHolder}
              setPlaceHolder={setPlaceHolder}
              setUrl={setUrl}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
