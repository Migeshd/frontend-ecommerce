import React from 'react';
import { useEffect } from 'react';
import {  } from '../../actions/ecommerce';
import { useDispatch ,useSelector} from 'react-redux';
import { GetCartItems,RemoveFromCart } from '../../actions/cartAction';
import './CartListView.css'

const CartListView = () => {

  const dispatch = useDispatch()

useEffect(()=>{
    dispatch(GetCartItems())
},[dispatch]);

const Cart = useSelector((state)=>state.Cart)
const {items}= Cart

const handleRemoveFromCart = (product)=>{
  dispatch(RemoveFromCart(product))
  }

  return (
    <>
    <table className="table mt-5 w-75 p-5 m-auto text-center table-bordered ">
      <thead>
        <tr>
          <td>S.No.</td>
          <td>Product Title </td>
          <td>Product Image</td>
          {/* <td>Quantity</td> */}
          <td>Action</td>
        </tr>
      </thead>

      <tbody>
      {items && items.map((item,index)=>{
        return <tr>
          <td>{index+1}</td>
          <td>{item.title}</td>
          <td><img src={item.image} style={{width:100}} alt="" /> </td>


          <div className="adddeletebutton">
            <button className='buttonadd' onClick={()=>handleRemoveFromCart(item)} >DELETE</button>
          </div>
        </tr>})}

      </tbody>
      <tfoot>
        <td>
          Total Amount = {items.reduce((total,product)=>total+product.price,0)}
        </td>
      </tfoot>
    </table>
  </>
  )
}

export default CartListView