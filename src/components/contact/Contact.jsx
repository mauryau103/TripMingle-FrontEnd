import React from "react";
import "./Contact.css";
import Hero from "../hero/Hero";
import heroImg from "../../assets/images/2.jpg";

const Contact = () => {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={heroImg}
        title="Contact"
        btnClass="hide"
      />
      <div className="form-container">
        <h1>Send a message to us!</h1>
        <form action="">
          <input placeholder="Name" type="text" />
          <input placeholder="Enail" type="text" />
          <input placeholder="Subject" type="text" />
          <textarea placeholder="message" rows="4"></textarea>
          <button>Send message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
