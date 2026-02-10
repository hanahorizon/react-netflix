import React from "react";
import Banner from "../components/Banner/Banner";
import Card from "../components/Cards/Card";
import CardData from "../data/home";
import Slider from "../components/Swiper/Slider";

const Home = () => {
  return (
    <>
      <Banner />
       <Slider data={CardData} />
    </>
  );
};

export default Home;
