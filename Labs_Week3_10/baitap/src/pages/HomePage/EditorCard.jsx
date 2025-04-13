import React, { useState, useEffect } from "react";
import axios from "axios";
import { chefs } from "../../data/RecipeData";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const EditorPickCard = ({
  image,
  title,
  time,
  chef,
  description,
  chefImage,
}) => {
  const [isSaved, setIsSaved] = useState(false);

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="flex w-full overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-xl">
      <div className="w-[200px] min-w-[200px] h-[200px] overflow-hidden ">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full flex items-center rounded-xl mt-4"
        />
      </div>

      <div className="relative flex-1 p-4">
        <button
          className=" float-end"
          onClick={toggleSave}
          aria-label={isSaved ? "Bỏ lưu công thức" : "Lưu công thức"}
        >
          <div className="flex items-center justify-center w-8 h-8 transition-colors duration-200 bg-white rounded-full shadow-md hover:bg-pink-50">
            {isSaved ? (
              <FaHeart className="text-pink-500" />
            ) : (
              <FaRegHeart className="text-pink-500" />
            )}
          </div>
        </button>

        <h3 className="mr-8 text-xl font-semibold">{title}</h3>

        <p className="mb-4 text-sm text-gray-500">{time}</p>

        <div className="flex items-center mb-3">
          <img
            src={chefImage}
            alt={chef}
            className="object-cover w-8 h-8 mr-2 rounded-full"
          />
          <span className="text-sm font-medium text-gray-700">{chef}</span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

const EditorsPick = () => {
  const [editorPicks, setEditorPicks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Call API from TheMealDB to get dessert list using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
        );

        // Get the first 4 meals and add random chef info + description
        const processedMeals = response.data.meals.slice(0, 4).map((meal) => {
          const randomChef = chefs[Math.floor(Math.random() * chefs.length)];

          const descriptions = [
            `${meal.strMeal}: A wonderful dessert carefully selected by our editorial team. This dish is not only delicious but also offers a unique culinary experience...`,
            `${meal.strMeal}: This exquisite dessert is a must-try for anyone with a sweet tooth. Our editors have selected it for its remarkable flavors and textures...`,
            `${meal.strMeal}: A perfectly balanced sweet treat that has impressed our culinary experts. Featuring traditional techniques with modern presentation...`,
            `${meal.strMeal}: One of our editor's favorite desserts that combines incredible taste with beautiful presentation. A true masterpiece of culinary art...`,
          ];

          // Select a random English description
          const randomDescription =
            descriptions[Math.floor(Math.random() * descriptions.length)];

          return {
            id: meal.idMeal,
            title: meal.strMeal,
            image: meal.strMealThumb, // Use TheMealDB image URL
            time: `${Math.floor(Math.random() * 25) + 10} minutes`, // Random time between 10-35 minutes
            chef: randomChef.name,
            chefImage: randomChef.image,
            description: randomDescription,
          };
        });

        setEditorPicks(processedMeals);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching from TheMealDB:", err);
        setError(err.message || "An error occurred while loading data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container px-4 py-12 mx-auto">
        <h2 className="mb-2 text-4xl font-semibold text-center text-pink-500">
          Editor's pick
        </h2>
        <p className="mb-10 text-center text-gray-600">
          Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
        </p>
        <div className="text-center">Loading recommended dishes...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container px-4 py-12 mx-auto">
        <h2 className="mb-2 text-4xl font-semibold text-center text-pink-500">
          Editor's pick
        </h2>
        <p className="mb-10 text-center text-gray-600">
          Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
        </p>
        <div className="text-center text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-12 mx-auto">
      <h2 className="mb-2 text-4xl font-semibold text-center text-pink-500">
        Editor's Picks
      </h2>
      <p className="mb-10 text-center text-gray-600">
        Handpicked recipes from our culinary experts
      </p>

      <div className="grid grid-cols-1 gap-8 mx-auto max-w-8xl md:grid-cols-2">
        {editorPicks.map((recipe) => (
          <EditorPickCard
            key={recipe.id}
            image={recipe.image}
            title={recipe.title}
            time={recipe.time}
            chef={recipe.chef}
            chefImage={recipe.chefImage}
            description={recipe.description}
          />
        ))}
      </div>
    </div>
  );
};

export default EditorsPick;
