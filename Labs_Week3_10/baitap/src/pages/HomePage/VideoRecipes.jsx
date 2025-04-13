import React, { useEffect, useState } from "react";

import RecipeCard from "../../components/RecipeCard";
const VideoRecipes = ({ recipe, loading, error, cart }) => {
  if (loading) {
    return (
      <div className="container px-4 py-12 mx-auto">
        <h2 className="mb-2 text-4xl font-semibold text-center text-pink-500">
          Recipes With Videos
        </h2>
        <p className="mb-10 text-center text-gray-600">
          Cooking Up Culinary Creations with Step-by-Step Videos
        </p>
        <div className="text-center">Đang tải món ăn có video...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container px-4 py-12 mx-auto">
        <h2 className="mb-2 text-4xl font-semibold text-center text-pink-500">
          Recipes With Videos
        </h2>
        <p className="mb-10 text-center text-gray-600">
          Cooking Up Culinary Creations with Step-by-Step Videos
        </p>
        <div className="text-center text-red-500">Lỗi: {error}</div>
      </div>
    );
  }
  return (
    <div className="container px-4 py-12 mx-auto">
      <h2 className="mb-2 text-4xl font-semibold text-center text-pink-500">
        Recipes With Videos
      </h2>
      <p className="mb-10 text-center text-gray-600">
        Cooking Up Culinary Creations with Step-by-Step Videos
      </p>

      <div className="grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-4">
        {recipe.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            image={recipe.image}
            title={recipe.title}
            time={recipe.time}
            hasVideo={true}
            recipe={recipe}
            cart={cart}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoRecipes;
