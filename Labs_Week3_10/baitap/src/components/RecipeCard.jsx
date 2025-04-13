import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import { useCart } from "../RecipeContext/RecipeContext";
const RecipeCard = ({ recipe, image, title, time, hasVideo = false, cart }) => {
  const [isSaved, setIsSaved] = useState(false);
  const { addToCart } = useCart();
  const toggleSave = (e) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
  };
  return (
    <div className="flex flex-col h-full overflow-hidden transition duration-300 bg-white border border-gray-100 shadow-sm rounded-2xl hover:-translate-y-2 hover:shadow-xl">
      <Link to="/cookingguide" className="no-underline">
        <div className="relative">
          <img src={image} alt={title} className="object-cover w-full h-48" />
          {/* Vòng tròn hồng ở giữa chỉ hiển thị khi hasVideo là true */}
          {hasVideo && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center justify-center w-12 h-12 transition-colors duration-300 bg-pink-500 rounded-full shadow-md cursor-pointer hover:bg-pink-600">
                <FaRegPlayCircle color="white" size="30px" />
              </div>
            </div>
          )}
        </div>
      </Link>

      <div className="flex flex-col flex-grow p-4">
        <div>
          <button
            className=" float-end"
            onClick={() => {
              cart(recipe);
              alert("Save Successful");
            }}
            aria-label={isSaved ? "Bỏ lưu công thức" : "Lưu công thức"}
          >
            <div className="flex items-center justify-center w-8 h-8 transition-colors duration-200 bg-white rounded-full shadow-md hover:bg-pink-50">
              {isSaved ? (
                <FaBookmark className="text-pink-500" size="20px" />
              ) : (
                <FaRegBookmark className="text-pink-500" size="20px" />
              )}
            </div>
          </button>
          <h3 className="mb-1 text-lg font-medium text-gray-800">{title}</h3>

          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-pink-500 bg-pink-100 rounded-xl px-2 py-1">
              {time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
