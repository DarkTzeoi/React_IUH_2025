import React from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../contexts/CartContext"; // Make sure you have this context

const Header = () => {
  const { cart } = useCart(); // Get cart from context

  // Calculate total items in cart  
  const cartItemCount = cart
    ? cart.reduce((total, item) => total + item.quantity, 0)
    : 0;

  return (
    <Navbar expand="lg" className="luxury-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Luxury Jewelry
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/" exact>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products">
              Collections
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/login">
              <FontAwesomeIcon icon={faUser} className="me-1" />
              Account
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart" className="position-relative">
              <FontAwesomeIcon icon={faShoppingCart} className="me-1" />
              Cart
              {cartItemCount > 0 && (
                <Badge
                  bg="danger"
                  pill
                  className="position-absolute cart-badge-animated"
                  style={{
                    top: "-5px",
                    right: "-5px",
                    fontSize: "0.6rem",
                    transition: "all 0.3s ease",
                    animation: "pulse 1.5s infinite",
                  }}
                >
                  {cartItemCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
