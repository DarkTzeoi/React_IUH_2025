import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Breadcrumb from "./Breadcrumb";
import ProfileHeader from "./ProfileHeader";
import RecipeGrid from "./RecipeGrid";
import RecipeTabs from "./RecipeTabs";
import PageNavigation from "./PageNavigation";
import MainLayout from "../../layout/MainLayout";
const RecipeBox = () => {
  const [activeTab, setActiveTab] = useState("saved");
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(8);
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    // Gọi API từ TheMealDB để lấy danh sách món ăn
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );

        const processedMeals = response.data.meals.map((meal) => {
          return {
            id: meal.idMeal,
            title: meal.strMeal,
            image: meal.strMealThumb,
            time: `${Math.floor(Math.random() * 30) + 10} minutes`,
          };
        });

        setAllRecipes(processedMeals);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  // Tính toán các trang
  useEffect(() => {
    // Lấy công thức cho trang hiện tại
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = allRecipes.slice(
      indexOfFirstRecipe,
      indexOfLastRecipe
    );
    setSavedRecipes(currentRecipes);
  }, [currentPage, allRecipes, recipesPerPage]);

  // Tính tổng số trang
  const totalPages = Math.ceil(allRecipes.length / recipesPerPage);

  // Hàm chuyển đổi trang
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  // Hàm lùi về trang trước
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  // Hàm tiến tới trang tiếp theo
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  // Tạo mảng số trang để hiển thị
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 2; // Số trang hiển thị tối đa

    if (totalPages <= maxVisiblePages) {
      // Nếu tổng số trang ít, hiển thị tất cả
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Khi có nhiều trang, hiển thị một phạm vi giới hạn
      let startPage = Math.max(1, currentPage - 1);
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

      // Điều chỉnh lại nếu ở cuối
      if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  return (
    <MainLayout>
      <Breadcrumb />
      <ProfileHeader />
      <RecipeTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <RecipeGrid loading={loading} recipes={savedRecipes} />

      {!loading && totalPages > 1 && (
        <PageNavigation
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          getPageNumbers={getPageNumbers}
        />
      )}

      {/* Khoảng trống ở cuối */}
      <div className="h-8"></div>
    </MainLayout>
  );
};

export default RecipeBox;
