import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>Luxury Jewelry</h5>
            <p>Discover our exquisite collection of fine jewelry, crafted with precision and passion.</p>
            <div className="social-icons">
              <a href="https://facebook.com" className="me-3" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://instagram.com" className="me-3" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://twitter.com" className="me-3" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faPinterest} size="lg" />
              </a>
            </div>
          </Col>
          
          <Col md={2} className="mb-4">
            <h5>Shop</h5>
            <ul className="list-unstyled">
              <li><Link to="/products?category=necklaces" className="text-light">Necklaces</Link></li>
              <li><Link to="/products?category=rings" className="text-light">Rings</Link></li>
              <li><Link to="/products?category=earrings" className="text-light">Earrings</Link></li>
              <li><Link to="/products?category=bracelets" className="text-light">Bracelets</Link></li>
              <li><Link to="/products?category=watches" className="text-light">Watches</Link></li>
            </ul>
          </Col>
          
          <Col md={2} className="mb-4">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-light">About Us</Link></li>
              <li><Link to="/contact" className="text-light">Contact</Link></li>
              <li><Link to="/careers" className="text-light">Careers</Link></li>
              <li><Link to="/blog" className="text-light">Blog</Link></li>
            </ul>
          </Col>
          
          <Col md={4}>
            <h5>Newsletter</h5>
            <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="d-flex">
              <input type="email" className="form-control me-2" placeholder="Your email" />
              <button type="submit" className="btn btn-outline-light">Subscribe</button>
            </form>
          </Col>
        </Row>
        
        <hr className="my-4 bg-light" />
        
        <Row className="text-center">
          <Col>
            <p className="mb-0">&copy; {new Date().getFullYear()} Luxury Jewelry. All rights reserved.</p>
            <div className="mt-2">
              <Link to="/privacy" className="text-light me-3">Privacy Policy</Link>
              <Link to="/terms" className="text-light me-3">Terms of Service</Link>
              <Link to="/shipping" className="text-light">Shipping Information</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;