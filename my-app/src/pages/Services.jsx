import React from "react";
import Data from "./Data";
import Card from "./Card";
import "../style/card.css";
import "../style/services.css";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="container  services-container mt-5 py-5">
        <div className="text-center">
          <p>What I Do</p>
          <h1 className="about-heading">services</h1>
          <p>
            My services cover mobile damage, screen failures, software issues,
            and motherboard repairs etc.
          </p>
        </div>
        <div className="row gy-2 myrow">
          {Data.map((val, key) => {
            return (
              <Card
                img={val.img}
                name={val.name}
                description={val.text}
                key={key}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
