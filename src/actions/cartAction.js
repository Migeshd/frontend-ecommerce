import { ADD_TO_CART, GET_CART_ITEMS, REMOVE_FROM_CART } from "./types";

export const AddToCartAction = (product) => async (dispatch) => {
  
      dispatch({
        type: ADD_TO_CART,
        payload: product,
      });
    
  };

  export const RemoveFromCart = (product) => async (dispatch) => {
  
    dispatch({
      type: REMOVE_FROM_CART,
      payload: product,
    });
  
};

export const GetCartItems = (product) => async (dispatch) => {
  
  dispatch({
    type: GET_CART_ITEMS,
    payload: product,
  });

};