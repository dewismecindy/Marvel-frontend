import { Link } from "react-router-dom";
import entete from "../assets/entetemarvel.jpg";

const Navbar = () => {
  return (
    <>
      <img src={entete} alt="avengers" />
      <div className="nav-bar">
        <div className="button-nav-bar">
          <Link to="/Characters">Personnages</Link>
        </div>
        <div className="button-nav-bar">
          <Link to="/Comics">Comics</Link>
        </div>
        <div className="button-nav-bar">
          <Link to="/Favorites">Favoris</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
