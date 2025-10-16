import { createContext, useState } from "react";
import { food_list } from "../assets/assets";


// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItem((prev) => {
      // Check 1: Ensure the item exists and has a positive quantity
      if (!prev[itemId] || prev[itemId] <= 0) {
        return prev; // Do nothing if the item is not in the cart or already 0
      }

      const newCart = { ...prev };

      // Decrement the quantity
      newCart[itemId] -= 1;

      // CRITICAL: Remove if quantity reaches 0
      if (newCart[itemId] <= 0) {
        delete newCart[itemId];
      }

      return newCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
    //Same as =>
    // <StoreContext.Provider value={contextValue}>
    //     <App/>
    // </StoreContext.Provider>
  );
};

export default StoreContextProvider;
