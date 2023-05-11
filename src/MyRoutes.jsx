import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './layouts/Navbar';
import HomeCarousels from './carousels/HomeCarousels';
import Home from './Home';
import HomeCarts from './carts/HomeCarts';
import Categories from './carts/Categories';
import Footer from './layouts/Footer';
import CartPage from './carts/CartPage';
import AddCartPage from './reducers/AddCartPage';

const MyRoutes = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
            <Route path="/nav" element={<Navbar/>}/>
            <Route path='/homecarousels' element={<HomeCarousels/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/homecarts" element={<HomeCarts/>}/>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/footer" element={<Footer/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/add" element={<AddCartPage/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default MyRoutes