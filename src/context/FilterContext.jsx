import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducers";

// Initial state for the filter
const filterInitialState = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  ratings: null,
};

// Create a context for the filtered products
const FilteredContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
  // Use reducer to manage the filter state
  const [state, dispatch] = useReducer(FilterReducer, filterInitialState);

  // Function to set the initial product list
  function initialProductList(products) {
    dispatch({
      type: "PRODUCT_LIST",
      payload: {
        products: products,
      },
    });
  }

  // Function to filter products based on best seller only
  function bestSeller(products) {
    return state.bestSellerOnly
      ? products.filter((product) => product.best_seller === true)
      : products;
  }

  // Function to filter products based on in stock only
  function inStock(products) {
    return state.onlyInStock
      ? products.filter((product) => product.in_stock === true)
      : products;
  }

  // Function to sort products based on the selected sort option
  function sort(products) {
    if (state.sortBy === "lowtohigh") {
      return products.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (state.sortBy === "highttolow") {
      return products.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return products;
  }

  // Function to filter products based on the selected ratings
  function rating(products) {
    if (state.ratings === "4STARTSABOVE") {
      return products.filter((product) => product.rating >= 4);
    }
    if (state.ratings === "3STARTSABOVE") {
      return products.filter((product) => product.rating >= 3);
    }
    if (state.ratings === "2STARTSABOVE") {
      return products.filter((product) => product.rating >= 2);
    }
    if (state.ratings === "1STARTSABOVE") {
      return products.filter((product) => product.rating >= 1);
    }

    return products;
  }

  // Apply the filtering and sorting functions to the product list
  const filteredProductList = rating(
    sort(inStock(bestSeller(state.productList)))
  );

  // Create a value object with the filter state, functions, and filtered product list
  const value = {
    state,
    dispatch,
    products: filteredProductList,
    initialProductList,
  };

  // Provide the value to the FilteredContext for the child components
  return (
    <FilteredContext.Provider value={value}>
      {children}
    </FilteredContext.Provider>
  );
};

export const useFilter = () => {
  // Consume the FilteredContext to access the filter state and functions
  const context = useContext(FilteredContext);
  return context;
};
