import logo from "../assets/logositemarvel.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Video from "./Video";

const Header = ({ handleToken, userToken }) => {
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
      <div className="header-container">
        <div className="logo">
          <Link to="/Characters">
            <img className="logo-image" src={logo} alt="logo Marvel" />
          </Link>
        </div>{" "}
        <div className="container-search">
          {" "}
          <form className="search-bare" onSubmit={handleSearchSubmit}>
            <label htmlFor="search-input"></label>
            <input
              type="text"
              id="search-input"
              placeholder="Entrez le nom de vos personnages préférez"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button type="submit">Rechercher</button>
          </form>
        </div>
        <div className="login-container">
          {" "}
          {!userToken ? (
            <>
              <div className="buttons-login">
                {" "}
                <Link to="/SignUp">
                  <button>S'inscrire</button>
                </Link>
                <Link to="/Login">
                  <button>Se connecter</button>
                </Link>
              </div>
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
          )}{" "}
        </div>
      </div>
      <div className="video-container">
        <Video />
      </div>
      <div className="button-container">
        {" "}
        <div className="button-group">
          {" "}
          <Link to="/Characters">
            <button>Personnages</button>
          </Link>
          <Link to="/Comics">
            <button>Comics</button>
          </Link>
          <Link to="/Favoris">
            <button>Favoris</button>
          </Link>{" "}
        </div>
      </div>{" "}
      <div className="titre-personnage">
        <h2> Quel est votre personnage préféré ? </h2>
      </div>
    </header>
  );
};
export default Header;
