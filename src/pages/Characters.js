import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const sizePicture = "/portrait_uncanny.";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend2--by69g8q6y9vr.code.run/characters`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>En cours de chargement</p>
  ) : (
    <div className="grid-container">
      {data.results.map((result, index) => {
        return (
          <Link key={result.id} to={"/character/:characterId"}>
            <div className="card-characters">
              <p className="blaz-perso"> {result.name} </p>
              {result.description && <p></p>}
              <p className="espace"></p>

              <img
                src={
                  result.thumbnail.path +
                  sizePicture +
                  result.thumbnail.extension
                }
                alt="characters"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Characters;
