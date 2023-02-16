import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-backend2--by69g8q6y9vr.code.run/characters"
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return;
};
export default Home;
