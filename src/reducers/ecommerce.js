import {
  RETRIEVE_CART_DETAILS,
  RETRIEVE_CATEGORIES,
  RETRIEVE_PRODUCTS,
} from "../actions/types";

const initialState = { products: [] };

export function productReducer(products = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_PRODUCTS:
      return { products: payload };

    default:
      return products;
  }
}

export function categoryReducer(state = { categories: [] }, action) {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_CATEGORIES:
      return { categories: payload };

    default:
      return state;
  }
}

export function cartReducer(state = { cartDetails: [] }, action) {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_CART_DETAILS:
      return { cartDetails: payload };

    default:
      return state;
  }
}
