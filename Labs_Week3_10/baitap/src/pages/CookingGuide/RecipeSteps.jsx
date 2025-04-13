import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const RecipeSteps = ({ recipes }) => {
  const steps = recipes.strInstructions
    ? recipes.strInstructions.split("\r\n").filter((step) => step.trim() !== "")
    : [];
  return (
    <div>
      <div className="relative">
        <img
          src={recipes.strMealThumb}
          alt={recipes.strMeal}
          className="object-cover w-full rounded-xl"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center w-12 h-12 transition-colors duration-300 bg-pink-500 rounded-full shadow-md cursor-pointer hover:bg-pink-600">
            <Link to={recipes.strYoutube}>
              <FaRegPlayCircle color="white" size="30px" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-4 text-base text-gray-700 bg-gray-100  rounded-md step"
          >
            <p className="font-bold text-xl text-pink-600 mr-2">
              Step {index + 1}:
            </p>
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSteps;
