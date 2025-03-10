import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  Card,
  Button,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";

// Mock data for featured products
const featuredProducts = [
  {
    id: 1,
    name: "Diamond Pendant Necklace",
    price: 1299.99,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
    category: "necklaces",
  },
  {
    id: 2,
    name: "Sapphire Engagement Ring",
    price: 2499.99,
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    category: "rings",
  },
  {
    id: 3,
    name: "Pearl Earrings",
    price: 899.99,
    image:
      "https://images.unsplash.com/photo-1704957205218-d436eac4c607?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGVhcmwlMjBFYXJyaW5nc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "earrings",
  },
  {
    id: 4,
    name: "Gold Bracelet",
    price: 1599.99,
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
    category: "bracelets",
  },
];

// Mock data for collections
// In the collections array, update the trinity collection link
const collections = [
  {
    id: "love",
    name: "LOVE Collection",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1000&auto=format&fit=crop",
    description: "Iconic designs that celebrate everlasting love",
  },
  {
    id: "trinity",
    name: "TRINITY Collection",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1000&auto=format&fit=crop",
    description:
      "Three intertwined bands symbolizing love, fidelity, and friendship",
  },
  {
    id: "panthère",
    name: "PANTHÈRE Collection",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1000&auto=format&fit=crop",
    description: "Bold and elegant designs inspired by the panther",
  },
];

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="cartier-inspired">
      {isLoading ? (
        <div className="text-center py-5">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <div className="hero-section position-relative">
            <img
              className="w-100"
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury Jewelry"
              style={{
                height: "80vh",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
              <h1 className="display-3 fw-light mb-4">TIMELESS ELEGANCE</h1>
              <p className="lead mb-4">
                Discover our exquisite collection of fine jewelry
              </p>
              <Button
                as={Link}
                to="/products"
                variant="outline-light"
                size="lg"
                className="px-5 py-3"
              >
                Explore Collections
              </Button>
            </div>
          </div>

          {/* Brand Statement */}
          <div className="text-center py-5 bg-white">
            <Container className="py-4">
              <h2 className="fw-light mb-4">CRAFTSMANSHIP & EXCELLENCE</h2>
              <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
                For over a century, we have been creating exceptional jewelry
                that combines timeless design with unparalleled craftsmanship.
                Each piece is a testament to our heritage of excellence.
              </p>
            </Container>
          </div>

          {/* Featured Collections */}
          <div className="bg-light py-5">
            <Container>
              <h2 className="text-center fw-light mb-5">ICONIC COLLECTIONS</h2>
              <Row>
                {collections.map((collection) => (
                  <Col md={4} key={collection.id} className="mb-4">
                    <div className="position-relative collection-card">
                      <img
                        src={collection.image}
                        alt={collection.name}
                        className="w-100"
                        style={{ height: "400px", objectFit: "cover" }}
                      />
                      <div
                        className="position-absolute bottom-0 start-0 w-100 p-4 text-white"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                        }}
                      >
                        <h3 className="fw-light">{collection.name}</h3>
                        <p>{collection.description}</p>

                        <Button
                          as={Link}
                          to={
                            collection.id === "trinity"
                              ? "/collections/trinity"
                              : `/products?collection=${collection.id}`
                          }
                          variant="outline-light"
                          className="mt-2"
                        >
                          Discover
                        </Button>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>

          {/* Featured Products */}
          <Container className="py-5">
            <h2 className="text-center fw-light mb-5">SIGNATURE CREATIONS</h2>
            <Row>
              {featuredProducts.map((product) => (
                <Col md={3} sm={6} key={product.id} className="mb-4">
                  <Card className="border-0 product-card">
                    <div className="product-image-container">
                      <Card.Img
                        variant="top"
                        src={product.image}
                        className="product-image"
                        style={{ height: "300px", objectFit: "cover" }}
                      />
                    </div>
                    <Card.Body className="text-center px-0 pt-4">
                      <Card.Title className="fw-light">
                        {product.name}
                      </Card.Title>
                      <Card.Text className="text-muted">
                        ${product.price.toLocaleString()}
                      </Card.Text>
                      <Button
                        as={Link}
                        to={`/products/${product.id}`}
                        variant="outline-dark"
                        className="mt-2 px-4"
                      >
                        View Details
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>

          {/* Brand Experience */}
          <div className="bg-dark text-white py-5">
            <Container className="py-4 text-center">
              <h2 className="fw-light mb-4">THE EXPERIENCE</h2>
              <Row className="justify-content-center">
                <Col md={4} className="mb-4">
                  <h4 className="fw-light">Exceptional Service</h4>
                  <p>Personalized attention from our dedicated experts</p>
                </Col>
                <Col md={4} className="mb-4">
                  <h4 className="fw-light">Bespoke Creations</h4>
                  <p>Custom designs tailored to your unique vision</p>
                </Col>
                <Col md={4} className="mb-4">
                  <h4 className="fw-light">Lifetime Care</h4>
                  <p>Ongoing maintenance to preserve your treasured pieces</p>
                </Col>
              </Row>
              <Button
                as={Link}
                to="/about"
                variant="outline-light"
                className="mt-3 px-4"
              >
                Our Heritage
              </Button>
            </Container>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
