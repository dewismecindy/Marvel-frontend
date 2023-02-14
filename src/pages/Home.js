import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-marvel-api.herokuapp.com/comics/${characterID}"
        );
        console.log(response.data.comics);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return;
};
export default Home;
