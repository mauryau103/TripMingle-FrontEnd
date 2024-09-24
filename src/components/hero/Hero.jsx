import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img alt="HeroImg" src={props.heroImg}></img>
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <Link to={props.url} className={props.btnClass}>
            {props.buttonText}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
