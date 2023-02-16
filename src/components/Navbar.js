import { Link } from "react-router-dom";
import logo from "../assets/logositemarvel.png";
import entete from "../assets/entetemarvel.jpg";

const Navbar = ({ url }) => {
  return (
    <div>
      <div>
        <Link to="/">
          <img src={logo} alt="Marvel" />
          <img src={entete} alt="avengers" />
        </Link>
      </div>
      <div className="button-nav-bar">
        <Link to="/">Personnages</Link>
      </div>
      <div className="button-nav-bar">
        <Link to="/comics">Comics</Link>
      </div>
      <div className="button-nav-bar">
        <Link to="/favoris">Favoris</Link>
      </div>
    </div>
  );
};

export default Navbar;
