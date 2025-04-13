import React, { createContext, useContext, useState } from "react";
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (recipe) => {
    setItems((prevItem) => {
      const exitingItems = prevItem.find(
        (item) => item.idMeal === recipe.idMeal
      );
      if (exitingItems) {
        return prevItem.map((item) =>
          item.idMeal === recipe.idMeal
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItem, { ...recipe, quantity: 1 }];
      }
    });
  };
  const removeFromCart = (idMeal) => {
    setItems((prevItems) => {
      return prevItems
        .map((item) =>
          item.idMeal === idMeal
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); 
    });
  };
  return (
    <CartContext.Provider value={{ addToCart, items, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
