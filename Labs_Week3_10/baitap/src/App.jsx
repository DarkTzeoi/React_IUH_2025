import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/HomePage/Home";
import RecipeBox from "./pages/RecipeBox/RecipeBox";
import SubscribePage from "./pages/Subcribe/SubcribePage";
import CookingGuide from "./pages/CookingGuide/CookingGuide";
import RecipeContext from "./RecipeContext/RecipeContext";
import Search from "./pages/SearchPage/Search";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <RecipeContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe-box" element={<RecipeBox />} />
          <Route path="/subcribe" element={<SubscribePage />} />
          <Route path="/cookingguide" element={<CookingGuide />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </RecipeContext>
  );
};

export default App;
