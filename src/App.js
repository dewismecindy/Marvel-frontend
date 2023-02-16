import "./App.css";

/* Les import de packages */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

/* Les imports pages */

import Comics from "./pages/Comics";
import Favoris from "./pages/Favoris";
import ComicsRelated from "./pages/ComicsRelated";

/* Les imports components*/
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [placeHolder, setPlaceHolder] = useState("");
  const [errorComics, setErrorComics] = useState("");
  const [errorCharacter, setErrorCharacter] = useState("");
  return (
    <Router>
      <Header search={search} setSearch={setSearch} />
      <Navbar />
      <Routes>
        {/* Page */}
        <Route
          path="/comics"
          element={
            <Comics
              search={search}
              error={error}
              setError={setError}
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
              search={search}
              errorComics={errorComics}
              errorCharacter={errorCharacter}
              setErrorCharacter={setErrorCharacter}
            />
          }
        ></Route>

        <Route
          path="/"
          element={
            <ComicsRelated
              search={search}
              error={error}
              setError={setError}
              placeHolder={placeHolder}
              setPlaceHolder={setPlaceHolder}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
