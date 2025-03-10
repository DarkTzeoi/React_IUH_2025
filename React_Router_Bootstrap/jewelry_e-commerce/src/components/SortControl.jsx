import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const SortControl = ({ sortBy, onSortChange, totalProducts, loading }) => {
  return (
    <Row className="mb-3 align-items-center">
      <Col xs={12} md={6}>
        <p className="mb-md-0">
          {loading ? 'Loading products...' : `Showing ${totalProducts} products`}
        </p>
      </Col>
      <Col xs={12} md={6}>
        <Form.Select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          disabled={loading}
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Customer Rating</option>
          <option value="newest">Newest First</option>
        </Form.Select>
      </Col>
    </Row>
  );
};

export default SortControl;