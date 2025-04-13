import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import { PiWalletLight } from "react-icons/pi";
import { FaRegCheckCircle } from "react-icons/fa";
import logo from "../../assets/Group 9.png";
const SubscribePage = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const style_txt = {
    fontFamily: "Poppins",
    fontSize: "16px",
    lineHeight: "26px",
    fontWeight: "400",
    color: "#424955FF",
  };

  const style_title = {
    fontFamily: "Poppins",
    fontSize: "20px",
    lineHeight: "30px",
    fontWeight: "700",
    color: "#424955FF",
  };
  return (
    <MainLayout>
      {/* Breadcrumb */}
      <div className="flex items-center mb-8 text-sm text-gray-500">
        <Link to="/" className="no-underline text-gray-900 hover:text-pink-500">
          Recipe
        </Link>
        <span className="mx-2">{">"}</span>
        <span className="text-pink-500">Subscribe</span>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Left Column - Subscription Info */}
        <div className="flex flex-col justify-center">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            This recipe is exclusively available to subscribers
          </h2>

          <h1 className="mb-6 text-4xl font-bold text-pink-500">
            Join now to access effortless, hassle-free recipes
          </h1>

          <div className="mb-8 space-y-5">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center w-6 h-6 rounded-full">
                  <FaRegCheckCircle className="text-yellow-500" size={"20px"} />
                </div>
              </div>
              <p className="ml-3 text-gray-700">
                20,000+ recipes to suit all tastes and skill levels
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center w-6 h-6  rounded-full">
                  <FaRegCheckCircle className="text-yellow-500" size={"20px"} />
                </div>
              </div>
              <p className="ml-3 text-gray-700">
                Filter for diets, cook times, and more
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center w-6 h-6  rounded-full">
                  <FaRegCheckCircle className="text-yellow-500" size={"20px"} />
                </div>
              </div>
              <p className="ml-3 text-gray-700">
                Personal Recipe Box for favorites
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center w-6 h-6  rounded-full">
                  <FaRegCheckCircle className="text-yellow-500" size={"20px"} />
                </div>
              </div>
              <p className="ml-3 text-gray-700">
                Gain exclusive access to our subscriber-only mobile app.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-3xl font-bold text-gray-700">
              0.25USD / Week
            </h3>
            <p className="text-gray-600 text-lg">
              Billed as $1 every 4 weeks for the first year
            </p>
          </div>

          <button className="flex items-center justify-center text-lg w-full py-3 mb-3 text-white transition duration-300 bg-pink-500 rounded-lg hover:bg-pink-600">
            <PiWalletLight size={"20px"} className="me-1" />
            Subscribe Now
          </button>

          <p className="text-center text-pink-500">Cancel or Pause anytime</p>
        </div>

        {/* Right Column - Food Image */}
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Delicious Food"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* All Access subscription includes */}
      <div className="mt-20 mb-16">
        <h2
          className="mb-10  font-bold text-center text-pink-500"
          style={{ fontFamily: "Lora", fontSize: "40px" }}
        >
          An All Access subscription includes
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 text-center border border-gray-200 rounded-lg">
            <h3
              className="mb-4 text-xl font-semibold text-gray-800"
              style={style_title}
            >
              Cooking
            </h3>
            <p className="text-gray-600" style={style_txt}>
              Enjoy recipes, advice and inspiration for any occasion.
            </p>
          </div>

          <div className="p-6 text-center border border-gray-200 rounded-lg">
            <h3
              className="mb-4 text-xl font-semibold text-gray-800"
              style={style_title}
            >
              Wirecutter
            </h3>
            <p className="text-gray-600" style={style_txt}>
              Explore independent reviews for thousands of products.
            </p>
          </div>

          <div className="p-6 text-center border border-gray-200 rounded-lg">
            <h3
              className="mb-4 text-xl font-semibold text-gray-800"
              style={style_title}
            >
              Games
            </h3>
            <p className="text-gray-600" style={style_txt}>
              Unwind with Spelling Bee, Wordle, The Crossword
            </p>
          </div>

          <div className="p-6 text-center border border-gray-200 rounded-lg">
            <h3
              className="mb-4 text-xl font-semibold text-gray-800"
              style={style_title}
            >
              The Athletic
            </h3>
            <p className="text-gray-600" style={style_txt}>
              Discover in-depth, personalized sports journalism.
            </p>
          </div>
        </div>
      </div>

      {/* Subscribe to Chefify Cooking only */}
      <div className="py-16 text-center">
        <div className="flex justify-center mb-3">
          <div className="flex items-center">
            <img src={logo} alt="Chefify Logo" />
          </div>
        </div>

        <h2
          className="mb-6 text-3xl font-bold text-pink-500"
          style={{ fontFamily: "Lora", fontSize: "40px" }}
        >
          Subscribe to Chefify Cooking only
        </h2>

        <p className="max-w-2xl mx-auto mb-8 text-gray-600">
          Enjoy thousands of delicious recipes for every taste, plus advice and
          inspiration daily.
        </p>

        <div className="max-w-md mx-auto mb-6">
          <div className="p-4 mb-3 border border-gray-200 rounded-lg">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-gray-700">
                $2/month (Billed every 4 weeks)
              </span>
              <input
                type="radio"
                name="subscription"
                value="monthly"
                checked={selectedPlan === "monthly"}
                onChange={() => setSelectedPlan("monthly")}
                className="w-5 h-5 text-pink-500"
              />
            </label>
          </div>

          <div className="p-4 mb-6 border border-gray-200 rounded-lg">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-gray-700">
                $20/year (Billed one annually)
              </span>
              <input
                type="radio"
                name="subscription"
                value="yearly"
                checked={selectedPlan === "yearly"}
                onChange={() => setSelectedPlan("yearly")}
                className="w-5 h-5 text-pink-500"
              />
            </label>
          </div>

          <button className="flex items-center justify-center text-lg w-full py-3 mb-3 text-white transition duration-300 bg-pink-500 rounded-lg hover:bg-pink-600">
            <PiWalletLight size={"20px"} className="me-1" />
            Subscribe Now
          </button>

          <p className="text-center text-pink-500">Cancel or Pause anytime</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default SubscribePage;
