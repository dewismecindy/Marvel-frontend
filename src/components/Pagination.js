const pagination = () => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i} // ajouter une clé unique
        className={i === currentPage ? "active" : ""}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </button>
    );
  }
  return <div className="pagination">{pages}</div>;
};
