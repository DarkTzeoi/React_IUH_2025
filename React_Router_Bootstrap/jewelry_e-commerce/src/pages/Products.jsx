import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";

// Import your product data
import { allProducts } from "../data/productData";

const Products = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get("category");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(categoryParam || "all");

  // Categories for the filter
  const categories = [
    { id: "all", name: "All Collections" },
    { id: "rings", name: "Rings" },
    { id: "necklaces", name: "Necklaces" },
    { id: "bracelets", name: "Bracelets" },
    { id: "earrings", name: "Earrings" },
  ];

  useEffect(() => {
    setLoading(true);

    // Filter products based on selected category
    setTimeout(() => {
      let filteredProducts = [...allProducts];

      if (activeCategory !== "all") {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === activeCategory
        );
      }

      setProducts(filteredProducts);
      setLoading(false);
    }, 500);
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="cartier-products-page">
      {/* Hero Banner */}
      <div className="position-relative mb-5">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop"
          alt="Jewelry Collections"
          className="w-100"
          style={{
            height: "400px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="display-4 fw-light text-uppercase mb-3">
            Our Collections
          </h1>
          <p className="lead">
            Discover timeless elegance and exceptional craftsmanship
          </p>
        </div>
      </div>

      <Container>
        {/* Improved Category Navigation */}
        <div className="elegant-category-nav mb-5">
          <ul className="list-unstyled d-flex justify-content-center flex-wrap">
            {categories.map((category) => (
              <li key={category.id} className="mx-3 mb-2">
                <button
                  className={`btn btn-link text-uppercase px-2 py-1 elegant-nav-link ${
                    activeCategory === category.id ? "active" : ""
                  }`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Collection Description */}
        <div className="text-center mb-5">
          <h2 className="fw-light text-uppercase mb-3">
            {categories.find((cat) => cat.id === activeCategory)?.name ||
              "All Collections"}
          </h2>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            Each piece in our collection embodies the perfect balance between
            timeless elegance and contemporary design, crafted with exceptional
            attention to detail and the finest materials.
          </p>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <Row>
              {products.map((product) => (
                <Col lg={3} md={4} sm={6} key={product.id} className="mb-5">
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>

            {products.length === 0 && (
              <div className="text-center py-5">
                <h3 className="fw-light">No products found</h3>
                <p>Please try another category</p>
              </div>
            )}
          </>
        )}
      </Container>

      {/* Collection Highlight */}
      <div className="bg-light py-5 mt-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1000&auto=format&fit=crop"
                alt="Featured Collection"
                className="w-100"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </Col>
            <Col md={6}>
              <div className="ps-md-5">
                <h2 className="fw-light text-uppercase mb-4">
                  The Trinity Collection
                </h2>
                <p className="mb-4">
                  Created in 1924, the Trinity ring is a timeless emblem of
                  style and elegance. Three intertwined bands in white, yellow,
                  and rose gold symbolize love, fidelity, and friendship.
                </p>
                <Button
                  variant="outline-dark"
                  className="text-uppercase px-4 py-2 fw-light"
                  href="/collections/trinity"
                >
                  Discover
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Products;
