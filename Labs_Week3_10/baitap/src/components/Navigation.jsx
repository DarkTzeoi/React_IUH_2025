import React, { useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Form, Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Group 9.png";
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
const Navigation = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(isUserLoggedIn);
  }, []);
  const openLoginModal = (e) => {
    if (e) e.preventDefault();
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openSignupModal = (e) => {
    if (e) e.preventDefault();
    setIsSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    closeLoginModal();
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      e.preventDefault();
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  return (
    <Navbar bg="white" variant="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <div className="search flex justify-center items-center">
          <BiSearchAlt className="mx-2" />
          <input
            type="text"
            placeholder="What would you like to cook"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>

        <Nav className="ms-auto me-5">
          <Nav.Link className="text-secondary" as={Link} to={"/"}>
            What to cook
          </Nav.Link>
          <Nav.Link as={Link} to="/subcribe" className="text-secondary">
            Recipe
          </Nav.Link>
          <Nav.Link className="text-secondary">Ingredients</Nav.Link>
          <Nav.Link className="text-secondary">Occasions</Nav.Link>
          <Nav.Link className="text-secondary" as={Link} to="/about">
            About Us
          </Nav.Link>
        </Nav>
        {isLoggedIn ? (
          <div className="flex items-center ml-6 space-x-3">
            <Link
              to="/recipe-box"
              className="flex items-center px-4 py-2 space-x-2 text-pink-500 transition duration-200 bg-pink-100 rounded-lg hover:bg-pink-200 no-underline"
            >
              <img src="/check.png" alt="" />
              <span>Your Recipe Box</span>
            </Link>
            <Link
              to="#"
              onClick={handleLogout}
              className="flex items-center transition duration-200 transform hover:scale-110"
            >
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User Profile"
                className="w-8 h-8 border-2 border-pink-500 rounded-full"
              />
            </Link>
          </div>
        ) : (
          <div className="flex items-center ml-6 space-x-3">
            <button
              onClick={openLoginModal}
              className="text-pink-500 hover:underline "
            >
              Login
            </button>
            <button
              onClick={openSignupModal}
              className="px-4 py-2 text-white bg-pink-500 rounded-full hover:bg-pink-600"
            >
              Subscribe
            </button>
          </div>
        )}

        {/* Login Modal */}
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={closeLoginModal}
          onLoginSuccess={handleLoginSuccess}
        />

        {/* Signup Modal */}
        <SignupModal
          isOpen={isSignupModalOpen}
          onClose={closeSignupModal}
          openLoginModal={openLoginModal}
        />
      </Container>
    </Navbar>
  );
};

export default Navigation;
