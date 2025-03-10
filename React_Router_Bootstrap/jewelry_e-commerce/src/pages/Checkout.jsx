import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Accordion,
  Alert,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faCreditCard,
  faMoneyBill,
  faShieldAlt,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { useCart } from "../contexts/CartContext";
import { getProductImage } from "../utils/imageUtils";

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    // Process order
    alert("Thank you for your order! It has been placed successfully.");
    clearCart();
    navigate("/");
  };

  if (cart.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <Container className="py-5">
      <h1 className="mb-4">Checkout</h1>
      <Row>
        <Col lg={8}>
          <Card className="mb-4">
            <Card.Body>
              <h5 className="mb-3">Shipping Information</h5>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your first name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your last name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control required type="email" placeholder="Email" />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control required type="text" placeholder="Address" />
                  <Form.Control.Feedback type="invalid">
                    Please provide your address.
                  </Form.Control.Feedback>
                </Form.Group>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>City</Form.Label>
                      <Form.Control required type="text" placeholder="City" />
                      <Form.Control.Feedback type="invalid">
                        Please provide your city.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={3} className="mb-3">
                    <Form.Group>
                      <Form.Label>State</Form.Label>
                      <Form.Control required type="text" placeholder="State" />
                      <Form.Control.Feedback type="invalid">
                        Please provide your state.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={3} className="mb-3">
                    <Form.Group>
                      <Form.Label>Zip</Form.Label>
                      <Form.Control required type="text" placeholder="Zip" />
                      <Form.Control.Feedback type="invalid">
                        Please provide your zip code.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <h5 className="mt-4 mb-3">Payment Information</h5>
                <Form.Group className="mb-3">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Card Number"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your card number.
                  </Form.Control.Feedback>
                </Form.Group>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Expiration Date</Form.Label>
                      <Form.Control required type="text" placeholder="MM/YY" />
                      <Form.Control.Feedback type="invalid">
                        Please provide the expiration date.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>CVV</Form.Label>
                      <Form.Control required type="text" placeholder="CVV" />
                      <Form.Control.Feedback type="invalid">
                        Please provide the CVV.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-100 mt-3"
                >
                  Place Order
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Order Summary</h5>
            </Card.Header>
            <Card.Body>
              {cart.map((item) => (
                <Row key={item.id} className="mb-3 align-items-center">
                  <Col xs={3}>
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={getProductImage(item.id) || item.image}
                        alt={item.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <p className="mb-0 small">{item.name}</p>
                    <p className="text-muted small mb-0">
                      Qty: {item.quantity}
                    </p>
                  </Col>
                  <Col xs={3} className="text-end">
                    <p className="mb-0">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </Col>
                </Row>
              ))}
              <hr />
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="d-flex justify-content-between mb-0 fw-bold">
                <span>Total</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
