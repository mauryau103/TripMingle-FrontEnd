import React from "react";
import "./Destination.css";
import DestinationData from "./DestinationData.jsx";
import Mountain1 from "../../assets/images/1.jpg";
import Mountain2 from "../../assets/images/2.jpg";
import Mountain3 from "../../assets/images/5.jpg";
import Mountain4 from "../../assets/images/8.jpg";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot,within a time frame.</p>
      </div>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Taal Volcano has had several violent eruptions in the past, causing
            deaths on the island and the populated areas surrounding the lake,
            with an overall death toll of about 6,000. Because of its proximity
            to populated areas and its eruptive history, the volcano was
            designated a Decade Volcano, worthy of close study to prevent future
            natural disasters."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="The start of the trek was easy.  The trails were wide, established, with the ascension being gradual.  My only complaint about this hike is that since it occurred in the middle of the summer season in the Philippines, it is a bit too hot with no wind even if the trails are mostly forested.  That is the one bad thing about hiking in the summer compared to hiking during the rainy season.  The heat of the sun would constantly beat up on you that you run into a risk of either heat stroke or dehydration even if the weather would stay calm most of the time.  Good thing here in Mount Daguldul there’s quite a lot of rest stops along the way that sells Buko Juice, soft drinks and even Halo-Halo because quite a number of local Batanguenos call this mountain their home."
        img1={Mountain3}
        img2={Mountain4}
      />
    </>
  );
};
export default Destination;
