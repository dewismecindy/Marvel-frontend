import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch()
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=8vWOSfgLGHhWmQAZ&limit=100`
      )
      .then((res) => {
        setCharacters(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher un personnage"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="character-list">
        {filteredCharacters.map((character) => (
          <div className="character-card" key={character._id}>
            <Link to={`/comics/${character._id}`}>
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
              />
              <h3>{character.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
