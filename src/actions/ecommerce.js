import {
  RETRIEVE_CART_DETAILS,
  RETRIEVE_CATEGORIES,
    RETRIEVE_PRODUCTS,
  } from "./types";
  
import EcommerceService from "../services/ecommerce.service";
  export const RetrieveProductsAction = () => async (dispatch) => {
    try {

      const res = await EcommerceService.getAllProducts();
      dispatch({
        type: RETRIEVE_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };


  export const RetrieveCategoriesAction = () => async (dispatch) => {
    try {

      const res = await EcommerceService.getAllCategory();
      dispatch({
        type: RETRIEVE_CATEGORIES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  
  export const RetrieveCartDetails = () => async (dispatch) => {
    try {
      const res = await EcommerceService.getCartDetails();
      const result = await Promise.all(res.data.map(async (item) => {
        console.log(item);
        const object = {
          id: item.id,
          date: item.data,
          products: [],
        };
  
        object.products = await Promise.all(item.products.map(async (product) => {
          console.log("here...0");
          console.log(product);
          const productResponse = await EcommerceService.getProductById(product.productId);
          console.log(productResponse.data);
          return productResponse.data;
        }));
  
        return object;
      }));
  
      dispatch({
        type: RETRIEVE_CART_DETAILS,
        payload: result,
      });
    } catch (err) {
      console.log(err);
    }
  };
  