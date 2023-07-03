export const CartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      // Update the state by replacing the cartList and total with the ones provided in the payload
      return { ...state, cartList: payload.products, total: payload.total };

    case "REMOVE_FROM_CART":
      // Update the state by replacing the cartList and total with the ones provided in the payload
      return { ...state, cartList: payload.products, total: payload.total };

    case "CLEAR_CART":
      // Update the state by replacing the cartList and total with the ones provided in the payload
      return { ...state, cartList: payload.products, total: payload.total };

    default:
      // Throw an error if the action type doesn't match any of the cases
      throw new Error("No Case Found!");
  }
};
