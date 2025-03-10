import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Card className="border-0 cartier-product-card h-100">
      <Link to={`/products/${product.id}`} className="text-decoration-none">
        <div className="product-image-container overflow-hidden">
          <Card.Img 
            variant="top" 
            src={product.image} 
            className="product-image"
            style={{ height: "300px", objectFit: "cover" }}
          />
        </div>
        <Card.Body className="text-center px-0 pt-4">
          <Card.Title className="fw-light text-uppercase mb-2">{product.name}</Card.Title>
          <Card.Text className="text-muted small mb-2">
            {product.category && product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Card.Text>
          <Card.Text className="fw-light">
            ${product.price.toLocaleString()}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default ProductCard;
