import React from "react";

function Card({ title, image, diets }) {
  return (
    <div>
      <h3>{title}</h3>
      <h5>{diets}</h5>
      <img src={image} alt="img not found" width={"250px"} height="200px"></img>
    </div>
  );
}

export default Card;
