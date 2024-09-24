import React from "react";
import Hero from "../hero/Hero";
import Destination from "../destination/Destination";
import Trip from "../trip/Trip";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1426543881949-cbd9a76740a4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        url="/"
        btnClass="show"
        buttonText="Travel Plan"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
};
export default Home;
