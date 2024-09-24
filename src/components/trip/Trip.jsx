import React from "react";
import "./Trip.css";
import TripData from "./TripData";
import Trip1 from "../../assets/images/5.jpg";
import Trip2 from "../../assets/images/8.jpg";
import Trip3 from "../../assets/images/6.jpg";

const Trip = () => {
  return (
    <>
      <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can Discover Unique Destination Using Google Maps.</p>
        <div className="tripcard">
          <TripData
            image={Trip1}
            heading="Trip in Indonesia"
            text="From the idyllic beaches of Bali to the chaotic melting pot of Jakarta, Indonesia is a diverse Southeast Asian gem. West Java and Sumatra are home to some of the most beautiful tropical forests in the world – perfect for jungle trekking. The Prambanan collection of Hindu temples in Yogyakarta will astound you with their architecture and aura of spirituality. Capital city Jakarta is a cultural and political hub that’s jam-packed with museums, performing arts centers, and traditional food stalls."
          ></TripData>
          <TripData
            image={Trip2}
            heading="Trip in Malaysia"
            text="Our whirlwind trip to Malaysia was a spontaneous decision, planned meticulously within just three weeks. One of the perks that made our preparation stress-free was Malaysia’s newly acquired visa-free status for Indians. With the need for a visa eliminated, we only had to fill out a free entry form one day before departure, which was conveniently verified at the airport during boarding."
          ></TripData>
          <TripData
            image={Trip3}
            heading="Trip in France"
            text="The best times to visit France is from April to June and September to November. You'll benefit from thinner crowds and moderate temperatures outside of the sweltering summer period. If it's skiing you're after, hit the slopes anytime between December and early April."
          ></TripData>
        </div>
      </div>
    </>
  );
};
export default Trip;
