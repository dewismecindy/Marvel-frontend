import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Card from "../components/Card";

const Comics = (props) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const skip = counter * 100 - 100;
        const response = await axios.get(
          `https://site--marvel-backend2--by69g8q6y9vr.code.run/comics?title=${props.search}&skip=${skip}`
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
    <div>
      <div>
        <Pagination counter={counter} setCounter={setCounter} />
      </div>
      <div>
        {data.results.map((comics) => {
          return (
            <Card
              key={comics._id}
              id={comics._id}
              name={comics.title}
              description={comics.description}
              image={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
              handleFavorites={props.handleFavorites}
              type="comics"
            />
          );
        })}
      </div>
      <div>
        <Pagination counter={counter} setCounter={setCounter} />
      </div>
    </div>
  );
};

export default Comics;
