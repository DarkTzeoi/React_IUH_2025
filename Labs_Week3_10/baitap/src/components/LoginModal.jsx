import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) return;
    localStorage.setItem("isLoggedIn", "true");

    setIsLoading(true);

    // Giả lập đăng nhập thành công sau 1 giây
    setTimeout(() => {
      setIsLoading(false);
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    }, 1000);
  };

  /* eslint-disable-next-line no-unused-vars */
  const handleSocialLogin = (provider) => {
    setIsLoading(true);
    localStorage.setItem("isLoggedIn", "true");
    // Giả lập đăng nhập thành công sau 1 giây
    setTimeout(() => {
      setIsLoading(false);
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-5xl overflow-hidden bg-white rounded-lg shadow-xl">
        <button
          onClick={onClose}
          className="absolute p-2 text-gray-500 transition duration-200 rounded-full top-4 right-4 hover:bg-gray-100"
          disabled={isLoading}
        >
          <IoMdClose size="30px" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Phần hình ảnh và khẩu hiệu bên trái */}
          <div className="relative w-full md:w-1/2 bg-cyan-200">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white bg-cyan-500 bg-opacity-20">
              <div className="max-w-md">
                <h2 className="mb-6 text-3xl font-bold">
                  "Embrace the art of cooking, where flavors come alive!"
                </h2>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Delicious food"
              className="object-cover w-full h-full opacity-80"
            />
          </div>

          {/* Form đăng nhập bên phải */}
          <div className="w-full p-8 md:w-1/2">
            <h1 className="mb-8 text-3xl font-bold text-gray-800">Login</h1>

            <p className="mb-4 text-gray-600">Enter your email to log in.</p>

            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                  disabled={isLoading}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 mb-6 text-white transition duration-300 bg-pink-500 rounded-md hover:bg-pink-600 disabled:bg-pink-300"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Continue"}
              </button>
            </form>

            <div className="relative mb-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative">
                <span className="px-3 text-sm text-gray-500 bg-white">OR</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-red-500 transition duration-300 border border-gray-300 rounded-md hover:bg-gray-50 disabled:bg-gray-100"
                onClick={() => handleSocialLogin("google")}
                disabled={isLoading}
              >
                <FaGoogle color="red" />
                <span>Continue with Google</span>
              </button>

              <button
                className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-blue-500 transition duration-300 border border-gray-300 rounded-md hover:bg-gray-50 disabled:bg-gray-100"
                onClick={() => handleSocialLogin("facebook")}
                disabled={isLoading}
              >
                <FaFacebookF color="blue" />
                <span>Continue with Facebook</span>
              </button>

              <button
                className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-gray-700 transition duration-300 border border-gray-300 rounded-md hover:bg-gray-50 disabled:bg-gray-100"
                onClick={() => handleSocialLogin("apple")}
                disabled={isLoading}
              >
                <FaApple />
                <span>Continue with Apple</span>
              </button>
            </div>

            <div className="mt-6 text-xs text-center text-gray-500">
              By continuing, you agree to the updated{" "}
              <a href="#" className="text-pink-500 hover:underline">
                Terms of Sale
              </a>
              ,{" "}
              <a href="#" className="text-pink-500 hover:underline">
                Terms of Service
              </a>
              , and{" "}
              <a href="#" className="text-pink-500 hover:underline">
                Privacy Policy
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
