import { createContext, useContext, useReducer } from "react";
import {FilterReducer} from '../reducers'

const filterInitialState = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  ratings: null,
};

 const FilteredContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
  const [state,dispatch] = useReducer(FilterReducer,filterInitialState)

function initialProductList(products){
dispatch({
  type:"PRODUCT_LIST",
  payload:{
    products:products
  }
})
}

  const value = {
    products:state.productList,
    initialProductList
  };
  return (
    <FilteredContext.Provider value={value}>
      {children}
    </FilteredContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilteredContext);
  return context;
};
