export const FilterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "PRODUCT_LIST":
      return {productList:payload.products};

    case "SORT_BY":
      return;

    case "RATINGS":
      return {...state, ratings:payload.ratings};

    case "BEST_SELLER":
      return {...state, bestSellerOnly:payload.bestSellerOnly};

      case "ONLY_IN_STOCK":
      return {...state, onlyInStock:payload.onlyInStock};

      case "CLEAR_FILTER":
        return;

        default :
        throw new Error('No Case Found')
  }
};
