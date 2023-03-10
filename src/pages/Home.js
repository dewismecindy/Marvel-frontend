import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const sizePicture = "/portrait_uncanny.";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-backend2--by69g8q6y9vr.code.run/characters"
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
    <div>
      {data.results.map((results, index) => {
        return (
          <Link to={`/characters/${results._id}`}>
            <div key={results._id}> </div>
            <p>{results.name}</p>
            {results.description && <p>___________________________</p>}
            <p>{results.description}</p>

            <img
              src={
                results.thumbnail.path +
                sizePicture +
                results.thumbnail.extension
              }
              alt="characters"
            />
          </Link>
        );
      })}
    </div>
  );
};
export default Home;
