// This is a mock API service that simulates API calls
// In a real application, this would make actual HTTP requests

import { allProducts } from '../data/productData';

// Simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const productService = {
  // Get all products with optional filters
  async getProducts(filters = {}) {
    await delay(500); // Simulate network delay
    
    let filteredProducts = [...allProducts];
    
    // Apply search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filteredProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
      );
    }
    
    // Apply category filter
    if (filters.categories && filters.categories.length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        filters.categories.includes(product.category)
      );
    }
    
    // Apply price range filter
    if (filters.priceRange) {
      filteredProducts = filteredProducts.filter(product => 
        product.price >= filters.priceRange.min && 
        product.price <= filters.priceRange.max
      );
    }
    
    // Apply sorting
    if (filters.sortBy) {
      switch (filters.sortBy) {
        case 'price-low':
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          filteredProducts.sort((a, b) => b.rating - a.rating);
          break;
        default:
          // 'featured' - no specific sorting
          break;
      }
    }
    
    return filteredProducts;
  },
  
  // Get a single product by ID
  async getProductById(id) {
    await delay(300);
    return allProducts.find(product => product.id === parseInt(id));
  }
};