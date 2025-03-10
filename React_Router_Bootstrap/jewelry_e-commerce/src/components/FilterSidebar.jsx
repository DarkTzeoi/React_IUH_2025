import React, { forwardRef } from 'react';
import { Card, Form, Button, Accordion } from 'react-bootstrap';
import { categories } from '../data/productData';

const FilterSidebar = forwardRef(({ 
  selectedCategories, 
  handleCategoryChange, 
  priceRange, 
  handlePriceChange,
  resetFilters 
}, ref) => {
  return (
    <div ref={ref} className="filter-sidebar d-none d-md-block">
      <Card className="mb-4">
        <Card.Header>Categories</Card.Header>
        <Card.Body>
          <Form>
            {categories.map((category) => (
              <Form.Check
                key={category.id}
                type="checkbox"
                id={`category-${category.id}`}
                label={category.name}
                checked={selectedCategories.includes(category.id)}
                onChange={() => handleCategoryChange(category.id)}
                className="mb-2"
              />
            ))}
          </Form>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>Price Range</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Min Price: ${priceRange.min}</Form.Label>
              <Form.Range
                min={0}
                max={5000}
                step={100}
                value={priceRange.min}
                onChange={(e) => handlePriceChange(e, "min")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Max Price: ${priceRange.max}</Form.Label>
              <Form.Range
                min={0}
                max={5000}
                step={100}
                value={priceRange.max}
                onChange={(e) => handlePriceChange(e, "max")}
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      
      {(selectedCategories.length > 0 || priceRange.min > 0 || priceRange.max < 5000) && (
        <Button 
          variant="outline-secondary" 
          className="w-100 mt-3"
          onClick={resetFilters}
        >
          Reset Filters
        </Button>
      )}
    </div>
  );
});

FilterSidebar.displayName = 'FilterSidebar';

export default FilterSidebar;