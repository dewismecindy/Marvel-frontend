import logo from "../assets/logositemarvel.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  const handleSearch = (event) => {
    const value = event.target.value;
    props.setSearch(value);
  };
  return (
    <header>
      <Link to={"/"}>
        <img src={logo} alt="logo Marvel" />
      </Link>
      <Link
        to={"/"}
        onClick={() => {
          props.setSearch("");
        }}
      >
        Characters
      </Link>
      <Link
        to={"/comics"}
        onClick={() => {
          props.setSearch("");
        }}
      >
        Comics
      </Link>
      <Link to={"/favoris"}>Favoris</Link>
      <input
        type="text"
        placeholder="Search"
        value={props.search}
        onChange={handleSearch}
      />
    </header>
  );
};
export default Header;
