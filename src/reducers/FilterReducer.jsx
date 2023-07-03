export const FilterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "PRODUCT_LIST":
      // Update the state by setting the productList to the one provided in the payload
      return { productList: payload.products };

    case "SORT_BY":
      // Update the state by replacing the sortBy with the one provided in the payload
      return { ...state, sortBy: payload.sortBy };

    case "RATINGS":
      // Update the state by replacing the ratings with the one provided in the payload
      return { ...state, ratings: payload.ratings };

    case "BEST_SELLER":
      // Update the state by replacing the bestSellerOnly with the one provided in the payload
      return { ...state, bestSellerOnly: payload.bestSellerOnly };

    case "ONLY_IN_STOCK":
      // Update the state by replacing the onlyInStock with the one provided in the payload
      return { ...state, onlyInStock: payload.onlyInStock };

    case "CLEAR_FILTER":
      // Reset the filter state by setting all filter properties to their initial values
      return {
        ...state,
        onlyInStock: false,
        bestSellerOnly: false,
        sortBy: null,
        ratings: null,
      };

    default:
      // Throw an error if the action type doesn't match any of the cases
      throw new Error("No Case Found");
  }
};
