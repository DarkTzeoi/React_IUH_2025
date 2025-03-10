import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { getProductImage } from "../utils/imageUtils";

// Import all product images to ensure they're available
import diamondNecklace from "../assets/images/diamond-pendant-necklace.jpg";
import sapphireRing from "../assets/images/sapphire-ring.jpg";
import pearlEarrings from "../assets/images/pearl-earrings.jpg";
import goldBracelet from "../assets/images/gold-bracelet.jpg";
import silverNecklace from "../assets/images/silver-chain-necklace.jpg";
import diamondEarrings from "../assets/images/diamond-stud-earrings.jpg";
import weddingBand from "../assets/images/gold-wedding-band.jpg";
import charmBracelet from "../assets/images/charm-bracelet.jpg";
import rubyPendant from "../assets/images/ruby-pendant.jpg";
import emeraldRing from "../assets/images/emerald-ring.jpg";
import tennisBracelet from "../assets/images/diamond-tennis-bracelet.jpg";
import hoopEarrings from "../assets/images/hoop-earrings.jpg";

// Create an image map for easy lookup
const imageMap = {
  1: diamondNecklace,
  2: sapphireRing,
  3: pearlEarrings,
  4: goldBracelet,
  5: silverNecklace,
  6: diamondEarrings,
  7: weddingBand,
  8: charmBracelet,
  9: rubyPendant,
  10: emeraldRing,
  11: tennisBracelet,
  12: hoopEarrings,
};

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart, getCartTotal } =
    useCart();

  if (cart.length === 0) {
    return (
      <Container className="py-5 text-center">
        <h1 className="mb-4">Your Cart</h1>
        <p>Your cart is empty.</p>
        <Button as={Link} to="/products" variant="primary">
          Continue Shopping
        </Button>
      </Container>
    );
  }

  // Update the image source in the cart items:
  return (
    <Container className="py-5">
      <h1 className="mb-4">Your Cart</h1>
      <Row>
        <Col lg={8}>
          <Card className="mb-4">
            <Card.Body>
              {cart.map((item) => (
                <Row key={item.id} className="mb-3 align-items-center">
                  <Col xs={3} md={2}>
                    <div
                      className="cart-image-container"
                      style={{
                        height: "80px",
                        width: "80px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={getProductImage(item.id) || item.image} 
                        alt={item.name} 
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                  </Col>

                  <Col xs={9} md={4}>
                    <h5>{item.name}</h5>
                    <p className="text-muted small mb-0">
                      ${item.price.toFixed(2)}
                    </p>
                  </Col>

                  <Col xs={6} md={3} className="mt-3 mt-md-0">
                    <div className="d-flex align-items-center">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                      >
                        -
                      </Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </Button>
                    </div>
                  </Col>

                  <Col xs={6} md={3} className="text-end mt-3 mt-md-0">
                    <p className="fw-bold mb-0">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <Button
                      variant="link"
                      className="text-danger p-0 mt-2"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              ))}
            </Card.Body>
          </Card>

          <div className="d-flex justify-content-between">
            <Button as={Link} to="/products" variant="outline-primary">
              Continue Shopping
            </Button>
            <Button variant="outline-danger" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </Col>

        <Col lg={4} className="mt-4 mt-lg-0">
          <Card>
            <Card.Header>
              <h5 className="mb-0">Order Summary</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3 fw-bold">
                <span>Total</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <Button
                as={Link}
                to="/checkout"
                variant="primary"
                className="w-100"
              >
                Proceed to Checkout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
