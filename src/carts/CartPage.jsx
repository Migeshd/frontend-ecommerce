import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import CartListView from '../components/carts/CartListView'

const CartPage = () => {
  return (
    <>
    <Navbar/>
    <CartListView/>
    <Footer/>
    </>
  )
}

export default CartPage