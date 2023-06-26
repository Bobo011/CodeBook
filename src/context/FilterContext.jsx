import { createContext, useContext } from "react";

const filterInitialState = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  ratings: null,
};

 const FilteredContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
  const value = {
    productList: [1, 2, 3],
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
