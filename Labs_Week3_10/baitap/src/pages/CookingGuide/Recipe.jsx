import React, { useEffect, useState } from "react";
import { meals } from "../../data/RecipeData";

const Recipe = ({ recipes }) => {
  return (
    <div className="border-2 border-dashed border-pink-500 rounded-lg">
      <ul>
        <li className="list-disc my-4 mx-3">Yield: 4 generous servings</li>
        {Array.from({ length: 10 }, (_, i) => {
          const ingredient = recipes[`strIngredient${i + 1}`];
          const measure = recipes[`strMeasure${i + 1}`];
          if (ingredient && ingredient.trim()) {
            return (
              <li key={i} className="list-disc my-4 mx-3">
                {measure} {ingredient}
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default Recipe;
