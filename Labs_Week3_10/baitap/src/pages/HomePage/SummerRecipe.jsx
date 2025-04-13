import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "../../components/RecipeCard";
const SummerRecipe = ({ recipe, loading, error, cart }) => {
  if (loading) {
    return (
      <div className="container px-4 py-12 mx-auto">
        <h1 className="mb-2 text-4xl font-semibold text-center text-pink-500">
          This Summer Recipes
        </h1>
        <p className="mb-10 text-center text-gray-600">
          We have all your Independence Day sweets covered.
        </p>
        <div className="text-center">Đang tải món ăn...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container px-4 py-12 mx-auto">
        <h1 className="mb-2 text-4xl font-semibold text-center text-pink-500">
          This Summer Recipes
        </h1>
        <p className="mb-10 text-center text-gray-600">
          We have all your Independence Day sweets covered.
        </p>
        <div className="text-center text-red-500">Lỗi: {error}</div>
      </div>
    );
  }
  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="mb-2 text-4xl font-semibold text-center text-pink-500">
        This Summer Recipes
      </h1>
      <p className="mb-10 text-center text-gray-600">
        We have all your Independence Day sweets covered.
      </p>

      <div className="grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-4">
        {recipe.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            image={recipe.image}
            title={recipe.title}
            time={recipe.time}
            recipe={recipe}
            cart={cart}
          />
        ))}
      </div>
    </div>
  );
};

export default SummerRecipe;
