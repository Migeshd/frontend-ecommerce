import React from 'react';
import { useEffect } from 'react';
import { RetrieveCartDetails } from '../../actions/ecommerce';
import { useDispatch ,useSelector} from 'react-redux';


const CartCard = () => {


const dispatch = useDispatch()

useEffect(()=>{
    dispatch(RetrieveCartDetails())
},[dispatch]);

const Cart = useSelector((state)=>state.Cart)
const {cartDetails} = Cart;
  return (
    <div>{cartDetails.map((cartItem)=>{
        const products = cartItem.products;
        return  products.map((product)=><p>{product.title}</p>)//yesma halnu paryo
    })}</div>
  )
}

export default CartCard