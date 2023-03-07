import React from "react";

import "./pok-detail.scss";

const PokDetail = ({ name, id, order, height, image }) => {
  return (
    <div className="wrapper">
      <div className="pok-detail">
        <img src={image} alt="pok-detail" />
        <div className="pok-detail__details">
          <h2>Pokemon details:</h2>
          <span>
            <strong> Name: </strong>
            {name}
          </span>
          <span>
            <strong> Order: </strong>
            {order}
          </span>
          <span>
            <strong> Height: </strong>
            {height}
          </span>
          <span>
            <strong> Id: </strong>
            {id}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PokDetail;
