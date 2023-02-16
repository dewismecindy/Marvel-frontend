import axios from "axios";
import { useEffect, useState } from "react";

import Pagination from "../components/Pagination";
import Card from "../components/Card";

const Characters = (props) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const skip = counter * 100 - 100;
        const response = await axios.get(
          `https://site--marvel-backend2--by69g8q6y9vr.code.run/characters?title=${props.search}&skip=${skip}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [props.search, counter]);
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className="container">
        <div className="pagination">
          <Pagination counter={counter} setCounter={setCounter} />
        </div>
        <div className="card-container">
          {data.results.map((character) => {
            return (
              <Card
                key={character._id}
                id={character._id}
                name={character.name}
                description={character.description}
                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                link={`/comics/${character._id}`}
                handleFavorites={props.handleFavorites}
                type="heroes"
              />
            );
          })}
        </div>
        <div className="pagination">
          <Pagination counter={counter} setCounter={setCounter} />
        </div>
      </div>
    </>
  );
};

export default Characters;
