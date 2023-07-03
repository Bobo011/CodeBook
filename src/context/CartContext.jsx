import { useContext, useReducer, createContext } from "react";
import { CartReducer } from "../reducers";

// Initial state for the cart
const cartInitialState = {
  cartList: [],
  total: 0,
};

// Create a context for the cart
const CartContext = createContext(cartInitialState);

export const CartProvider = ({ children }) => {
  // Use reducer to manage the state of the cart
  const [state, dispatch] = useReducer(CartReducer, cartInitialState);

  // Function to add a product to the cart
  function addToCart(product) {
    const updatedList = state.cartList.concat(product);
    const updatedTotal = state.total + product.price;

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedList,
        total: updatedTotal,
      },
    });
  }

  // Function to remove a product from the cart
  function removeFromCart(product) {
    const updatedList = state.cartList.filter((item) => item.id !== product.id);
    const updatedTotal = state.total - product.price;

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedList,
        total: updatedTotal,
      },
    });
  }

  // Function to clear the cart
  function clearCart() {
    dispatch({
      type: "CLEAR_CART",
      payload: {
        products: [],
        total: 0,
      },
    });
  }

  // Create a value object with the cart state and functions
  const value = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    removeFromCart,
    clearCart,
  };

  // Provide the value to the CartContext for the child components
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  // Consume the CartContext to access the cart state and functions
  const context = useContext(CartContext);
  return context;
};
