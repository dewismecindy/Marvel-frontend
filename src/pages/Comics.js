import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const sizePicture = "/portrait_uncanny.";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-backend2--by69g8q6y9vr.code.run/comics"
        );
        /* console.log(response.data); */
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
      {data.results.map((results, index) => {
        return (
          <Link to={`/comics/${results._id}`}>
            <div className="card-comics" key={results._id}>
              {" "}
              <p className="blaz-perso">{results.title}</p>
              {results.description && <p></p>}
              <p className="espace"></p>
              <img
                src={
                  results.thumbnail.path +
                  sizePicture +
                  results.thumbnail.extension
                }
                alt="comics"
              />{" "}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Comics;
