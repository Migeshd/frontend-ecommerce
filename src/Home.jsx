import React from "react";
import Navbar from "./layouts/Navbar";
import HomeCarousels from "./carousels/HomeCarousels";
import HomeCarts from "./carts/HomeCarts";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Typography } from "@mui/material/";
import Categories from "./carts/Categories";
import HomeProductsView from "./layouts/HomeProductsView";
import CardList from "./components/products/HomeProductList";
import Footer from "./layouts/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeCarousels />
      <Typography component="div">
        <Box
          sx={{
            textAlign: "center",
            m: 1,
            fontSize: "h6.fontSize",
            letterSpacing: 10,
          }}
        >
          <b>HOT DEALS</b>
        </Box>
      </Typography>
      <HomeCarts />
      <Typography component="div">
        <Box
          sx={{
            textAlign: "center",
            m: 1,
            fontSize: "h6.fontSize",
            letterSpacing: 10,
          }}
        >
          <b>CATEGORIES</b>
        </Box>
      </Typography>
      <Categories/>
      <Typography component="div">
        <Box
          sx={{
            textAlign: "center",
            m: 1,
            fontSize: "h6.fontSize",
            letterSpacing: 10,
          }}
        >
          <b>JUST FOR YOU</b>
        </Box>
      </Typography>
      {/* <ProductCard/> */}
      <CardList/>

      <HomeProductsView/>
      <Footer/>
    </>
  );
};

export default Home;
