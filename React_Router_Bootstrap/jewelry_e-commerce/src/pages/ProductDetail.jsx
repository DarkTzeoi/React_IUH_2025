import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Form,
  Tabs,
  Tab,
  ListGroup,
  Card,
} from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faTruck,
  faShieldAlt,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { allProducts } from "../data/productdata";
import { getProductImage } from "../utils/imageUtils";

// Mock reviews data
const reviews = [
  {
    id: 1,
    productId: 1,
    author: "Sarah J.",
    rating: 5,
    date: "2023-05-15",
    comment:
      "Absolutely stunning necklace! The diamond sparkles beautifully and the chain is sturdy. Highly recommend!",
  },
  {
    id: 2,
    productId: 1,
    author: "Michael T.",
    rating: 4,
    date: "2023-04-22",
    comment:
      "Bought this for my wife and she loves it. Great quality for the price.",
  },
  {
    id: 3,
    productId: 1,
    author: "Emily R.",
    rating: 5,
    date: "2023-03-10",
    comment:
      "Exceeded my expectations. The pendant is even more beautiful in person.",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // Simulate API call to fetch product details
    setLoading(true);
    setTimeout(() => {
      const foundProduct = allProducts.find((p) => p.id === parseInt(id));
      setProduct(foundProduct || null);

      // Find related products (same category)
      if (foundProduct) {
        const related = allProducts
          .filter(
            (p) =>
              p.category === foundProduct.category && p.id !== foundProduct.id
          )
          .slice(0, 4);
        setRelatedProducts(related);
      }

      setLoading(false);
    }, 500);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      // Show a toast or notification here
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= (product?.stock || 1)) {
      setQuantity(value);
    }
  };

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container className="py-5 text-center">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist or has been removed.</p>
        <Button as={Link} to="/products" variant="primary">
          Back to Products
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col md={6} className="mb-4 mb-md-0">
          {/* Update image source to use getProductImage */}
          <Image
            src={(product && getProductImage(product.id)) || product.image}
            alt={product.name}
            fluid
            className="product-image"
          />
        </Col>

        <Col md={6}>
          <h1 className="mb-3">{product.name}</h1>

          <div className="mb-3 text-warning">
            {"★".repeat(Math.floor(product.rating))}
            {"☆".repeat(5 - Math.floor(product.rating))}
            <span className="text-muted ms-2">({product.rating} rating)</span>
          </div>

          <h2 className="text-primary mb-4">${product.price.toFixed(2)}</h2>

          <p className="mb-4">{product.description}</p>

          <div className="mb-4">
            <p className={product.stock > 0 ? "text-success" : "text-danger"}>
              {product.stock > 0
                ? `In Stock (${product.stock} available)`
                : "Out of Stock"}
            </p>
          </div>

          <div className="d-flex align-items-center mb-4">
            <Form.Group className="me-3" style={{ width: "100px" }}>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                min="1"
                max={product.stock}
                value={quantity}
                onChange={handleQuantityChange}
              />
            </Form.Group>

            <Button
              variant="primary"
              size="lg"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="flex-grow-1"
            >
              Add to Cart
            </Button>
          </div>

          <Button variant="outline-danger" className="mb-4">
            <FontAwesomeIcon icon={faHeart} className="me-2" />
            Add to Wishlist
          </Button>

          <div className="product-info">
            <div className="d-flex mb-2">
              <FontAwesomeIcon icon={faTruck} className="me-3 text-muted" />
              <div>
                <strong>Free Shipping</strong>
                <p className="mb-0 text-muted">On orders over $100</p>
              </div>
            </div>

            <div className="d-flex mb-2">
              <FontAwesomeIcon icon={faShieldAlt} className="me-3 text-muted" />
              <div>
                <strong>2 Year Warranty</strong>
                <p className="mb-0 text-muted">
                  Full coverage for peace of mind
                </p>
              </div>
            </div>

            <div className="d-flex">
              <FontAwesomeIcon icon={faUndo} className="me-3 text-muted" />
              <div>
                <strong>30 Day Returns</strong>
                <p className="mb-0 text-muted">
                  If you're not completely satisfied
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="mb-4"
          >
            <Tab eventKey="description" title="Description">
              <Card.Body>
                <h4>Product Details</h4>
                <p>{product.description}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  facilisi. Sed euismod, nisl vel ultricies lacinia, nisl nisl
                  aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>

                <h4 className="mt-4">Specifications</h4>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex">
                    <strong className="me-3">Material:</strong>
                    <span>18K White Gold</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex">
                    <strong className="me-3">Gemstone:</strong>
                    <span>Diamond</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex">
                    <strong className="me-3">Carat Weight:</strong>
                    <span>0.5 ct</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex">
                    <strong className="me-3">Chain Length:</strong>
                    <span>18 inches</span>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Tab>

            <Tab eventKey="reviews" title="Reviews">
              <Card.Body>
                <h4 className="mb-4">Customer Reviews</h4>

                {reviews.filter((review) => review.productId === product.id)
                  .length > 0 ? (
                  reviews
                    .filter((review) => review.productId === product.id)
                    .map((review) => (
                      <Card key={review.id} className="mb-3">
                        <Card.Body>
                          <div className="d-flex justify-content-between mb-2">
                            <h5>{review.author}</h5>
                            <small className="text-muted">{review.date}</small>
                          </div>
                          <div className="text-warning mb-2">
                            {"★".repeat(review.rating)}
                            {"☆".repeat(5 - review.rating)}
                          </div>
                          <p className="mb-0">{review.comment}</p>
                        </Card.Body>
                      </Card>
                    ))
                ) : (
                  <p>No reviews yet. Be the first to review this product!</p>
                )}

                <Button variant="outline-primary" className="mt-3">
                  Write a Review
                </Button>
              </Card.Body>
            </Tab>

            <Tab eventKey="shipping" title="Shipping & Returns">
              <Card.Body>
                <h4>Shipping Information</h4>
                <p>
                  We offer free standard shipping on all orders over $100. For
                  orders under $100, a flat shipping rate of $10 applies.
                </p>
                <p>
                  Standard shipping typically takes 3-5 business days. Express
                  shipping is available for an additional fee and typically
                  takes 1-2 business days.
                </p>

                <h4 className="mt-4">Return Policy</h4>
                <p>
                  We offer a 30-day return policy for all products. If you're
                  not completely satisfied with your purchase, you can return it
                  within 30 days for a full refund or exchange.
                </p>
                <p>
                  Items must be returned in their original condition and
                  packaging. Custom or personalized items cannot be returned
                  unless there is a defect.
                </p>
              </Card.Body>
            </Tab>
          </Tabs>
        </Col>
      </Row>

      {relatedProducts.length > 0 && (
        <section>
          <h3 className="mb-4">You May Also Like</h3>
          <Row>
            {relatedProducts.map((relatedProduct) => (
              <Col md={3} key={relatedProduct.id} className="mb-4">
                <Card className="h-100 product-card">
                  {/* Update related product images */}
                  <Card.Img
                    variant="top"
                    src={
                      getProductImage(relatedProduct.id) || relatedProduct.image
                    }
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{relatedProduct.name}</Card.Title>
                    <div className="mb-2 text-warning">
                      {"★".repeat(Math.floor(relatedProduct.rating))}
                      {"☆".repeat(5 - Math.floor(relatedProduct.rating))}
                      <small className="text-muted ms-1">
                        ({relatedProduct.rating})
                      </small>
                    </div>
                    <Card.Text className="text-primary fw-bold">
                      ${relatedProduct.price.toFixed(2)}
                    </Card.Text>
                    <div className="mt-auto d-flex justify-content-between">
                      <Button
                        as={Link}
                        to={`/products/${relatedProduct.id}`}
                        variant="outline-secondary"
                        size="sm"
                      >
                        View Details
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => addToCart(relatedProduct)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      )}
    </Container>
  );
};

export default ProductDetail;
