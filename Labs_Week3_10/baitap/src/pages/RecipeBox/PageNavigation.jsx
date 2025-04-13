import React from "react";
const PageNavigation = ({
  currentPage,
  totalPages,
  handlePageChange,
  handlePrevPage,
  handleNextPage,
  getPageNumbers,
}) => (
  <div className="flex items-center justify-center mt-10 space-x-2">
    <button
      onClick={handlePrevPage}
      disabled={currentPage === 1}
      className={`flex items-center justify-center w-10 h-10 rounded-full ${
        currentPage === 1
          ? "text-gray-400 bg-gray-100 cursor-not-allowed"
          : "text-gray-700 bg-gray-200 hover:bg-gray-300"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>

    {getPageNumbers().map((number) => (
      <button
        key={number}
        onClick={() => handlePageChange(number)}
        className={`flex items-center justify-center w-10 h-10 rounded-full ${
          currentPage === number
            ? "text-white bg-pink-500"
            : "text-gray-700 bg-gray-200 hover:bg-gray-300"
        }`}
      >
        {number}
      </button>
    ))}

    <button
      onClick={handleNextPage}
      disabled={currentPage === totalPages}
      className={`flex items-center justify-center w-10 h-10 rounded-full ${
        currentPage === totalPages
          ? "text-gray-400 bg-gray-100 cursor-not-allowed"
          : "text-gray-700 bg-gray-200 hover:bg-gray-300"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>
);

export default PageNavigation;
