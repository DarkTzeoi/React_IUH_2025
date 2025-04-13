import React, { useEffect, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import HeroSection from "./HeroSection";
import SummerRecipe from "./SummerRecipe";
import VideoRecipes from "./VideoRecipes";
import EditorsPick from "./EditorCard";
import WelcomeModal from "./WelcomeModal";
import axios from "axios";
import { useCart } from "../../RecipeContext/RecipeContext";
const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [hasVideo, setHasVideo] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <MainLayout>
      <HeroSection />
      <SummerRecipe
        recipe={recipes}
        loading={loading}
        error={error}
        cart={addToCart}
      />
      <VideoRecipes
        recipe={recipes}
        loading={loading}
        error={error}
        hasVideo={hasVideo}
        cart={addToCart}
      />
      <EditorsPick />
      <WelcomeModal isOpen={showModal} onClose={handleCloseModal} />
    </MainLayout>
  );
};

export default Home;
