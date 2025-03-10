import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

// Mock data for Trinity collection products
const trinityProducts = [
  {
    id: 101,
    name: "Trinity Ring - Classic",
    price: 1350,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    description: "Three intertwined bands in white gold, yellow gold, and rose gold."
  },
  {
    id: 102,
    name: "Trinity Ring - Diamond",
    price: 3200,
    image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=1000&auto=format&fit=crop",
    description: "The iconic three bands adorned with brilliant-cut diamonds."
  },
  {
    id: 103,
    name: "Trinity Ring - Slim",
    price: 1050,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    description: "A delicate interpretation of the Trinity ring with slender bands."
  },
  {
    id: 104,
    name: "Trinity Ring - Large Model",
    price: 1650,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1000&auto=format&fit=crop",
    description: "Bold and statement-making with wider bands."
  },
  {
    id: 105,
    name: "Trinity Ring - Ceramic",
    price: 1450,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    description: "Contemporary design with black ceramic and gold bands."
  },
  {
    id: 106,
    name: "Trinity Ring - Paved",
    price: 4500,
    image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=1000&auto=format&fit=crop",
    description: "Fully paved with diamonds for ultimate luxury."
  }
];

const TrinityCollection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="trinity-collection">
      {isLoading ? (
        <div className="text-center py-5">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          {/* Hero Banner */}
          <div className="position-relative">
            <img
              className="w-100"
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2000&auto=format&fit=crop"
              alt="Trinity Collection"
              style={{ height: "70vh", objectFit: "cover", objectPosition: "center" }}
            />
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
              <h1 className="display-3 fw-light mb-3">TRINITY COLLECTION</h1>
              <p className="lead mb-0">Three bands. Three golds. Three meanings.</p>
            </div>
          </div>

          {/* Collection Story */}
          <div className="bg-white py-5">
            <Container className="py-4 text-center">
              <h2 className="fw-light mb-4">THE ICONIC DESIGN</h2>
              <Row className="justify-content-center">
                <Col md={8}>
                  <p className="lead mb-5">
                    Created in 1924, the Trinity ring is a timeless emblem of style and elegance.
                    Three intertwined bands in white, yellow, and rose gold symbolize love, fidelity, and friendship.
                  </p>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col md={4} className="mb-5">
                  <h4 className="fw-light mb-3">WHITE GOLD</h4>
                  <p>Symbolizing friendship, the white gold band represents the air and clarity of thought.</p>
                </Col>
                <Col md={4} className="mb-5">
                  <h4 className="fw-light mb-3">YELLOW GOLD</h4>
                  <p>Representing fidelity, the yellow gold band embodies the earth and commitment.</p>
                </Col>
                <Col md={4} className="mb-5">
                  <h4 className="fw-light mb-3">ROSE GOLD</h4>
                  <p>Signifying love, the rose gold band reflects the warmth of fire and passion.</p>
                </Col>
              </Row>
            </Container>
          </div>

          {/* Featured Image */}
          <div className="py-5 bg-light">
            <Container>
              <Row className="align-items-center">
                <Col lg={6}>
                  <img
                    src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop"
                    alt="Trinity Ring Close-up"
                    className="w-100"
                    style={{ height: "500px", objectFit: "cover" }}
                  />
                </Col>
                <Col lg={6} className="py-5">
                  <div className="ps-lg-5">
                    <h2 className="fw-light mb-4">CRAFTSMANSHIP</h2>
                    <p className="mb-4">
                      Each Trinity ring is meticulously crafted by skilled artisans who bring decades of expertise to every piece.
                      The three bands are carefully assembled to move freely while remaining perpetually intertwined.
                    </p>
                    <p>
                      The result is not just a piece of jewelry, but a work of art that embodies both technical precision and emotional significance.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          {/* Product Gallery */}
          <Container className="py-5">
            <h2 className="text-center fw-light mb-5">DISCOVER THE COLLECTION</h2>
            <Row>
              {trinityProducts.map((product) => (
                <Col md={4} key={product.id} className="mb-5">
                  <Card className="border-0 product-card">
                    <div className="product-image-container">
                      <Card.Img
                        variant="top"
                        src={product.image}
                        className="product-image"
                        style={{ height: "350px", objectFit: "cover" }}
                      />
                    </div>
                    <Card.Body className="text-center px-0 pt-4">
                      <Card.Title className="fw-light">{product.name}</Card.Title>
                      <Card.Text className="text-muted small mb-3">
                        {product.description}
                      </Card.Text>
                      <Card.Text className="mb-3">
                        ${product.price.toLocaleString()}
                      </Card.Text>
                      <Button
                        as={Link}
                        to={`/products/${product.id}`}
                        variant="outline-dark"
                        className="me-2"
                      >
                        Details
                      </Button>
                      <Button variant="dark">
                        Add to Cart
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>

          {/* Call to Action */}
          <div className="bg-dark text-white py-5 text-center">
            <Container>
              <h2 className="fw-light mb-4">EXPERIENCE TRINITY</h2>
              <p className="lead mb-4">
                Visit our boutique for a personalized consultation and to explore the complete Trinity collection.
              </p>
              <Button as={Link} to="/contact" variant="outline-light" className="px-4 py-2">
                Book an Appointment
              </Button>
            </Container>
          </div>
        </>
      )}
    </div>
  );
};

export default TrinityCollection;