import React from "react";
import RecipeCard from "../../components/RecipeCard";
import { useCart } from "../../RecipeContext/RecipeContext";

const RecipeGrid = ({ loading, recipes }) => {
  const { items } = useCart();

  return (
    <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-4">
      {loading ? (
        <div className="text-center col-span-full">Đang tải dữ liệu...</div>
      ) : recipes.length === 0 ? (
        <div className="text-center col-span-full">
          Không có công thức nào được lưu.
        </div>
      ) : (
        recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            image={recipe.image}
            title={recipe.title}
            time={recipe.time}
            chef={recipe.chef}
            chefImage={recipe.chefImage}
          />
        ))
      )}
    </div>
  );
};

export default RecipeGrid;
