import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Favoris from "./pages/Favoris";

import Footer from "./components/Footer";
import Cookies from "js-cookie";
import { useState } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "./App.css";
import Character from "./pages/Character";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [search, setSearch] = useState("");
  const baseUrl = "https://site--marvel-backend2--by69g8q6y9vr.code.run";
  const handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 1, sameSite: "strict" });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
    setToken(token);
  };

  return (
    <div className="all">
      <BrowserRouter>
        <Header
          token={token}
          userToken={userToken}
          handleToken={handleToken}
          search={search}
          setSearch={setSearch}
        />{" "}
        <Routes>
          <Route
            path="/"
            element={<Characters search={search} baseUrl={baseUrl} />}
          />
          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:characterId" element={<Character />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/related-comics" element={<Comics />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route
            path="/signup"
            element={<SignUp handleToken={handleToken} />}
          />
          <Route path="/login" element={<Login handleToken={handleToken} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
