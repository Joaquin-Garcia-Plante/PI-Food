import React from "react";

function Card({ title, image, diets, id }) {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        {diets.map((d) => {
          return <h5 key={`${d}` + id}>{d} </h5>;
        })}
      </div>

      <img src={image} alt="img not found" width={"250px"} height="200px"></img>
    </div>
  );
}

export default Card;
