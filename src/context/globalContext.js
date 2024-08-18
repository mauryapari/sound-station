'use client';
import { createContext, useContext, useMemo, useState } from 'react';
import { toast } from 'sonner';

// Create a GlobalContext
const GlobalContext = createContext();

// GlobalProvider to wrap the application
export const GlobalProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  // Add item to cart
  const addItemToCart = (item, val=1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.slug === item.slug);
      if (existingItem?.quantity<2 || val === -1) {
        toast.success(`${existingItem.name} quantity increased in the cart.`);
        return prevItems.map((i) =>
          i.slug === item.slug ? { ...i, quantity: i.quantity + val } : i
        );
      } else if(existingItem?.quantity>=2) {
        toast.warning(`${existingItem.name} quantity is already at maximum. You cannot add more than 2 quanity of any items`);
        return prevItems;
      } else {
        // Add new item to cart
        toast.success(`${item.name} added to the cart.`);
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.slug !== itemId));
    toast.success(`Item removed from the cart.`);
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]);
    toast.success(`Cart has been cleared.`);

  };

  const addItemToWishlist = (product) => {
    toast.success(`${product.name} added to wishlist.`);
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  }

  const removeItemFromWishList = () => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.slug));
    toast.success(`${product.name} removed from wishlist.`);
  }

  const clearWishlist = () => {
    setWishlist([]);
    toast.success(`Wishlist has been cleared.`);
  }

  const totalQuantity = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0.00);
  }, [cartItems]);

  return (
    <GlobalContext.Provider value={{cartItems, totalQuantity, totalPrice, wishlist , addItemToCart, addItemToWishlist, removeItemFromCart, removeItemFromWishList, clearCart, clearWishlist}}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook to use the GlobalContext in components
export const useGlobal = () => {
  return useContext(GlobalContext);
};
