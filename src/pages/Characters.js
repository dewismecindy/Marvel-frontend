import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const sizePicture = "/portrait_uncanny.";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend2--by69g8q6y9vr.code.run/characters?page=${currentPage}&pageSize=100`
        );
        setData(response.data);
        setIsLoading(false);
        setTotalPages(Math.ceil(response.data.total / 100));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={i === currentPage ? "active" : ""}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return <div className="pagination">{pages}</div>;
  };

  return isLoading ? (
    <p>En cours de chargement</p>
  ) : (
    <div>
      {pagination()}
      {data.results.map((result, index) => {
        return (
          <Link key={result.id} to={`/characters/${result.id}`}>
            <div>
              <p>🦸‍♂️ {result.name} 🦸‍♂️</p>
              {result.description && <p>___________________________</p>}
              <p>{result.description}</p>

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
      {pagination()}
    </div>
  );
};

export default Characters;
