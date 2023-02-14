import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = ({ character }) => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const characterID = character._id;
  const pictureOfCOmics = "/portrait_medium.";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-backend2--by69g8q6y9vr.code.run/comics/${characterID}"
        );
        /* console.log(response.data); */
        console.log(response.data.comics);
        setData(response.data.comics);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [characterID]);

  return isLoading ? (
    <p>Chargement</p>
  ) : (
    <div>
      <Link
        className="carroussel"
        to="/ComicsCharacter"
        state={{ character: character }}
      >
        {data.map((element) => {
          return (
            <img
              key={element._id}
              src={
                element.thumbnail.path +
                pictureOfCOmics +
                element.thumbnail.extension
              }
              alt="comics of character"
            />
          );
        })}
      </Link>
    </div>
  );
};
export default Home;
