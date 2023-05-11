import React from 'react'
import './categories.css'
import { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { RetrieveCategoriesAction } from '../actions/ecommerce';

const Categories = () => {
  const dispatch = useDispatch()

useEffect(()=>{
    dispatch(RetrieveCategoriesAction())
},[dispatch]);

const Category = useSelector((state)=>state.Category)
const {categories} = Category;
  return (
    <>
    <div className='categories'>
   
        <ul>
           
           {categories && categories.map((category)=> <li><button>{category}</button></li>)}
      
    </ul>
    </div>
    </>
  )
}

export default Categories