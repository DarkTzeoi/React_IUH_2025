import React from "react";
import Banner from "/Image 32.jpg";
import { Image } from "react-bootstrap";
import { GrLinkNext } from "react-icons/gr";
const HeroSection = () => {
  return (
    <div className="relative">
      <Image fluid src={Banner} alt="banner" />

      <div
        className="absolute max-w-md transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg top-1/2 left-1/4"
        style={{
          borderRadius: "12px",
          border: "1px dashed #854EF4FF",
        }}
      >
        <div className="relative">
          <div className="absolute z-10 px-8 py-2 font-medium text-center transform -translate-x-1/2 bg-yellow-400 rounded-xl left-1/2 -top-6">
            Recipe of the day
          </div>
        </div>

        <div className="px-12 py-10 pt-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-pink-500">
            Salad Caprese
          </h2>
          <p className="px-4 mb-10 text-center text-gray-600">
            Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella,
            herbs, olive oil, and balsamic vinegar create a refreshing dish for
            lunch or appetizer.
          </p>

          <div className="flex flex-col items-center mb-6">
            <div className="p-1.5 mb-2 bg-pink-100 rounded-full">
              <Image
                roundedCircle
                src="https://randomuser.me/api/portraits/women/25.jpg"
                alt="avatar"
                className="w-10"
              />
            </div>
            <span className="font-medium text-gray-700">Salad Caprese</span>
          </div>

          <a
            href="#"
            className="text-decoration-none inline-flex items-center px-5 py-3 text-white transition duration-300 bg-pink-500 rounded-xl hover:bg-pink-600"
          >
            <span className="me-2">View now</span>
            <GrLinkNext />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
