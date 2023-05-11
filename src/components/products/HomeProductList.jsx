import React from 'react';
import { useEffect } from 'react';
import { RetrieveProductsAction } from '../../actions/ecommerce';
import { useDispatch ,useSelector} from 'react-redux';
import './HomeProductList.css';
import { AddToCartAction } from '../../actions/cartAction';

const ProductCardListGrid = ( ) => {
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(RetrieveProductsAction())
},[dispatch]);

const Product = useSelector((state)=>state.Product)
const {products} = Product;
const items = products;

const handleAddToCart = (product)=>{
dispatch(AddToCartAction(product))
}
  return (
    // <div className="product-card-list-grid" >
    //   {products.map((product) =>
    //     <div key={product.id} className="product-card">
    //       <img src={product.image} alt={product.name} className="product-image" />
    //       <h3 className="product-name">{product.name}</h3>
    //       <p className="product-description">{product.description}</p>

    //       <button className="add-to-cart-btn" onClick={(e)=>handleAddToCart(e,product)}>Add to Cart</button>

    //     </div>
    //   )}
    // </div>
    <div  className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 p-3 m-auto g-4 w-100 ">
       {items && items.map((item)=>{
          return <div className="col">
          <div className="card"
          >
            <img src={item.image} className="card-img-top-1" alt="..."/>
            <div className="card-body"
            >
              <h5 className="card-title">{item.title}</h5>
              <h6 className="card-title">$ {item.price}</h6>
              <p className="card-text">
                  {item.description}
              </p>
              <h6>Rating:
                  {item.rating && item.rating.rate &&
                  <>
                  {item.rating.rate}
                  </>}
              </h6>
              <h6>Count in Stock:
                  {item.rating.count}
              </h6>


              <button className='btn btn-warning w-100' onClick={()=>handleAddToCart(item)}>Add to Cart</button>
            </div>
          </div>
        </div>
      })}
    </div>
     
  
  );
};

export default ProductCardListGrid;
