import http from "../http-common";

class EcommerceService {
  getAllProducts() {
    return http.get("/products");
  }
  getProductById(id) {
    console.log("here...")
    console.log(id);
    return http.get(`/products/${id}`);
  }
  getAllCategory() {
    return http.get("products/categories");
  }


  getCartDetails() {
    return http.get("/carts");
  }


}


export default new EcommerceService();