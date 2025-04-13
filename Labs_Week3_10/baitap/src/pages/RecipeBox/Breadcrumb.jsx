import React from "react";
import { Link } from "react-router-dom";
const Breadcrumb = () => (
  <div className="flex items-center mb-6 text-sm text-gray-500">
    <Link to="/" className=" no-underline text-black hover:text-pink-500">
      Home
    </Link>
    <span className="mx-2">{">"}</span>
    <span className="text-pink-500">Your Recipe Box</span>
  </div>
);

export default Breadcrumb;
