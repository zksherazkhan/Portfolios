import React from "react";

const Card = ({ img, name, description }) => {
  return (
    <>
      <div className="col-sm-12 col-md-4 col-lg-3 service-card">
        <div className="card">
          <img className="card-img-top " src={img} alt="img" height={240} />
          <div className="card-body text-center">
            <h5 className="card-title">{name}</h5>
            <p className="card-text ">{description}</p>
            <button className="cardbtn ">Enquire Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
