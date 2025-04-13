import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import WhiteLogo from "../assets/white_chefify.png";
const Footer = () => {
  return (
    <footer className="container-lg bg-dark ro">
      <Row>
        <Col lg={6}>
          <h5 className="txt-title">About Us</h5>
          <p className="txt">
            Welcome to our website, a wonderful place to explore and learn how
            to cook like a pro
          </p>

          <Form className="d-flex my-4">
            <Form.Control
              className="w-50 me-3 "
              placeholder="Enter your email"
            />
            <button className="footer-send">Send</button>
          </Form>

          <div className="term">
            <img src={WhiteLogo} alt="logo" />
            <span className="txt mx-3">2023 Chefify Company</span>
            <span className="txt">Terms of Service| Privacy Policy</span>
          </div>
        </Col>

        <Col lg={3}>
          <h5 className="txt-title">Learn More</h5>
          <p className="txt">Our Cooks</p>
          <p className="txt">See Our Features</p>
          <p className="txt">FAQ</p>

          <h5 className="txt-title mt-5">Shop</h5>
          <p className="txt">Gift Subscription</p>
          <p className="txt">Send Us Feedback</p>
        </Col>
        <Col lg={3}>
          <h5 className="txt-title">Recipes</h5>
          <p className="txt">What to Cook This Week</p>
          <p className="txt">Pasta</p>
          <p className="txt">Dinner</p>
          <p className="txt">Healthy</p>
          <p className="txt">Vegetarian</p>
          <p className="txt">Vegan</p>
          <p className="txt">Christmas</p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
