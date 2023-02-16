import React from "react";

const Pagination = ({ currentPage, totalPages, onChangePage }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page && "active"}`}
          >
            <button className="page-link" onClick={() => onChangePage(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
