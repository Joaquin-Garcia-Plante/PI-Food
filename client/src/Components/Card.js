import React from "react";
import "../Styles/Card.css";
function Card({ title, image, diets, id }) {
  return (
    <div className="card-container">
      <div className="card u-clearfix">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <span className="card-description subtle">Diets: &nbsp; </span>
          {diets.map((d) => {
            return (
              <span className="card-description subtle" key={`${d}` + id}>
                {d}
                {","}
              </span>
            );
          })}
          <div className="card-read">Read</div>
          <span className="card-tag card-circle subtle">C</span>
        </div>
        <img src={image} alt="" className="card-media" />
      </div>
      <div className="card-shadow"></div>
    </div>
  );
}

export default Card;
