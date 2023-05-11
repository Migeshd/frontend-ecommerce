
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { RetrieveProductsAction} from "../actions/ecommerce";

const HomeProductsList = () => {

  const dispatch = useDispatch();
  const tutorials = useSelector((state) => state.tutorials);



  useEffect(() => {
    dispatch(RetrieveProductsAction);
  }, [dispatch]);


  return (
   <>
   {/* <h1>{tutorials[0]}</h1> */}
   </>
  );
};

export default HomeProductsList


