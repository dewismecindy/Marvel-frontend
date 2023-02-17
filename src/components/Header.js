import logo from "../assets/logositemarvel.png";
import { useState } from "react";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Search term:", searchTerm);
    // Faire une requête API avec le terme de recherche saisi
  };
  return (
    <header>
      <img src={logo} alt="logo Marvel" />
      <button>Personnages</button>
      <button>Comics</button>
      <button>Favoris</button>
      <button>S'inscrire</button>
      <button>Se connecter</button>
      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="search-input">Rechercher</label>
        <input
          type="text"
          id="search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Rechercher</button>
      </form>
    </header>
  );
};
export default Header;
