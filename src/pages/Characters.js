import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  /*  console.log(id); */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/characters" + id
        );
        /*  console.log(response.data); */
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>En cours de changement</p>
  ) : (
    <div>
      <h2>{data.name}</h2>
    </div>
  );
};
export default Characters;
