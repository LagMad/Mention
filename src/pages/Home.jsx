import React from "react";
import MainLayout from "../components/layout/MainLayout";
import SearchBar from "../components/ui/SearchBar";
import Button from "../components/ui/Button";
import HeroSection from "../components/home/HeroSection";
import HeatMap from "../components/home/HeatMap";
import Ready from "../components/home/Ready";
import Detail from "../components/home/Detail";

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <HeatMap />
      <Ready />
      <Detail />
    </MainLayout>
  );
};

export default Home;
