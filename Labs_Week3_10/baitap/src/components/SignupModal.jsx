import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { BiShow, BiHide } from "react-icons/bi";
import { AiOutlineApple } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
const SignupModal = ({ isOpen, onClose, openLoginModal }) => {
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLoginClick = () => {
    onClose();
    openLoginModal();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="relative w-full max-w-md p-6 mx-4 bg-white rounded-lg">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute p-2 text-gray-500 transition duration-200 rounded-full top-4 right-4 hover:bg-gray-100"
        >
          <IoMdClose size="30px" />
        </button>

        <div className="mb-6 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Sign up</h2>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {/* First name and Last name in a grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block mb-1 text-sm text-gray-700"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter first name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block mb-1 text-sm text-gray-700"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter last name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 text-sm text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@email.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter at least 8 characters"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
              >
                {showPassword ? <BiShow size="20px" /> : <BiHide size="20px" />}
              </button>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="text-gray-600">
                By signing up, I agree with the{" "}
                <span className="text-pink-500">Terms of Use</span> &{" "}
                <span className="text-pink-500">Privacy Policy</span>
              </label>
            </div>
          </div>

          {/* Signup Button */}
          <button
            onClick={handleLoginClick}
            type="submit"
            className="w-full py-2 text-white bg-pink-500 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          >
            Sign up
          </button>

          {/* Already have account */}
          <div className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <span
              className="text-pink-500 cursor-pointer hover:underline"
              onClick={handleLoginClick}
            >
              Log in
            </span>
          </div>

          {/* OR divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-3 text-sm text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleLoginClick}
              type="button"
              className="flex items-center justify-center w-10 h-10 text-white bg-red-500 rounded-full hover:bg-red-600"
            >
              <AiFillGoogleCircle size="20px" />
            </button>
            <button
              onClick={handleLoginClick}
              type="button"
              className="flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-full hover:bg-blue-700"
            >
              <FaFacebook />
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full hover:bg-gray-800"
              onClick={handleLoginClick}
            >
              <AiOutlineApple size="20px" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
