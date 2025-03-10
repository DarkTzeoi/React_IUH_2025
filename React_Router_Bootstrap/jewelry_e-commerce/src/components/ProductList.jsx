import React from 'react';
import { Row, Col, Spinner, Alert } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ products, loading, error, onAddToCart }) => {
  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-5">
        <h3>No products found</h3>
        <p>Try adjusting your filters or search criteria</p>
      </div>
    );
  }

  return (
    <Row>
      {products.map((product) => (
        <Col md={6} lg={3} key={product.id} className="mb-4">
          <ProductCard 
            product={product} 
            onAddToCart={() => onAddToCart(product)}
          />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;