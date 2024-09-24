import React from "react";
import "./About.css";
import Hero from "../hero/Hero";
import heroImg from "../../assets/images/night.jpg";

const About = () => {
  return (
    <>
      <Hero cName="hero-mid" heroImg={heroImg} title="About" btnClass="hide" />
      <div className="about-container">
        <h1>Our History</h1>
        <p>
          TripMingle is owned and managed by tripmingle.In pvt.ltd , aleading
          brand in wen desingning services and e commerse solutions, TripMingle
          is counted for its expertise in web solutions and its top ranking
          business portals. our invincible expertise and rich experience has
          raised our spirit...
        </p>

        <h1>Our Mission</h1>
        <p>
          TripMingle is owned and managed by tripmingle.In pvt.ltd , aleading
          brand in wen desingning services and e commerse solutions, TripMingle
          is counted for its expertise in web solutions and its top ranking
          business portals. our invincible expertise and rich experience has
          raised our spirit...
        </p>

        <h1>Our Vision</h1>
        <p>
          TripMingle is owned and managed by tripmingle.In pvt.ltd , aleading
          brand in wen desingning services and e commerse solutions, TripMingle
          is counted for its expertise in web solutions and its top ranking
          business portals. our invincible expertise and rich experience has
          raised our spirit...
        </p>
      </div>
    </>
  );
};

export default About;
