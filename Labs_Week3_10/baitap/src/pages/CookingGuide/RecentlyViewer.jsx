import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "../../components/RecipeCard";
const RecentlyViewer = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchSeafoodMeals = async () => {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );

    return response.data.meals.slice(0, 4).map((meal) => ({
      id: meal.idMeal,
      title: meal.strMeal,
      image: meal.strMealThumb,
      time: `${Math.floor(Math.random() * 30) + 15} minutes`,
    }));
  };

  useEffect(() => {
    setLoading(true);
    fetchSeafoodMeals()
      .then((processedMeals) => {
        setRecipes(processedMeals);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching from TheMealDB:", err);
        setError(err.message || "Có lỗi xảy ra khi tải dữ liệu");
        setLoading(false);
      });
  }, []);
  return (
    <div className="mt-10">
      <h3 className="w-56">Your Recently Viewed</h3>
      <div className="grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-4 my-10">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            image={recipe.image}
            title={recipe.title}
            time={recipe.time}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewer;
