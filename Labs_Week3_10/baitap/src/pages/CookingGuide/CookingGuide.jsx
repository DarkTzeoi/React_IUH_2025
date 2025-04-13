import React, { useEffect, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import BreadcrumbCooking from "./BreadcrumbCooking";

import Infor from "./Infor";
import Recipe from "./Recipe";
import RecipeSteps from "./RecipeSteps";
import { meals, sampleNotes } from "../../data/RecipeData";
import RecipeComments from "./RecipeComments";
import RecentlyViewer from "./RecentlyViewer";
const CookingGuide = () => {
  const [recipes, setRecipes] = useState([]);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    setRecipes(meals[2]);
  }, []);
  useEffect(() => {
    setNotes(sampleNotes);
  }, []);
  return (
    <MainLayout>
      <BreadcrumbCooking />
      <div className="row">
        <div className="col-5">
          <div className="intro">
            <h1>How to make a Apam balik</h1>
            <p>
              It seems like there may be a misunderstanding. If you're asking
              how a user can make a Apam balik, the process would be identical
              to the recipe I shared earlier. It involves preparing the
              strawberries, making the shortcakes, preparing whipped cream, and
              finally assembling the shortcake.
            </p>
          </div>
          <Infor />
          <Recipe recipes={recipes} />
        </div>
        <div className="col-7">
          <RecipeSteps recipes={recipes} />
        </div>
      </div>
      <RecipeComments notes={notes} />
      <RecentlyViewer />
    </MainLayout>
  );
};

export default CookingGuide;
