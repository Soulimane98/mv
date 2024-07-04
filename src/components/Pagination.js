import React from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../store/moviesSlice";

const Pagination = ({ currentPage, totalPages }) => {
  const dispatch = useDispatch();

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  const renderPagination = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={
            i === currentPage
              ? "bg-green-400  hover:bg-green-600 text-gray-100 active"
              : "bg-green-400  hover:bg-green-600 text-gray-100"
          }
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-green-400  hover:bg-green-600"

      >
        Previous
      </button>
      {renderPagination()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-green-400  hover:bg-green-600"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
