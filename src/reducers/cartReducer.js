import { ADD_TO_CART, GET_CART_ITEMS, REMOVE_FROM_CART } from "../actions/types";

export function cartReducer(state = {items:[]}, action) {
    const { type, payload } = action;
  
    switch (type) {
      
      case ADD_TO_CART:
        return {items:[action.payload,...state.items]};

        case REMOVE_FROM_CART:
          const filteredList =  state.items.filter((item)=>item.id!==payload.id)
        return {items:filteredList};

        case GET_CART_ITEMS:
          return state;
  
  
      default:
        return state;
    }
  };
 