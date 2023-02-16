import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Favoris from "./pages/Favoris";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Cookies from "js-cookie";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [search, setSearch] = useState("");
  const baseUrl = "https://lereacteur-vinted-api.herokuapp.com";
  const handleToken = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 1, sameSite: "strict" });
    } else {
      Cookies.remove("token");
    }
    setToken(token);
  };

  return (
    <BrowserRouter>
      <Header
        token={token}
        handleToken={handleToken}
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element={<Home search={search} baseUrl={baseUrl} />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/character/:characterId" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:characterId" element={<Comics />} />
        <Route path="/favoris" element={<Favoris />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
