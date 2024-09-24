import React from "react";
import Hero from "../hero/Hero";
import heroImg from "../../assets/images/1.jpg";

const Service = () => {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={heroImg}
        title="Service"
        btnClass="hide"
      />
    </>
  );
};
export default Service;
