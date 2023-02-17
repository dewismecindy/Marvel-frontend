import logo from "../assets/logositemarvel.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Video from "./Video";

const Header = (handleToken, userToken) => {
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
      {" "}
      <Link to="/Characters">
        <img src={logo} alt="logo Marvel" />
      </Link>
      {!userToken ? (
        <>
          {" "}
          <Link to="/SignUp">
            <button>S'inscrire</button>
          </Link>
          <Link to="/Login">
            <button>Se connecter</button>
          </Link>
        </>
      ) : (
        <Link>
          <button
            onClick={() => {
              handleToken();
            }}
          >
            Se déconnecter
          </button>
        </Link>
      )}
      <Link to="/Characters">
        <button>Personnages</button>
      </Link>
      <Link to="/Comics">
        <button>Comics</button>
      </Link>
      <Link to="/Favoris">
        <button>Favoris</button>
      </Link>
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
      {/*  <Video /> */} {/* positionner correctement la video à la fin  */}
    </header>
  );
};
export default Header;
