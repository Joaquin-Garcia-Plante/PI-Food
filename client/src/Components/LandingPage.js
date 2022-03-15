import React from "react";
import { Link } from "react-router-dom";
import "../Styles/LandingPage.css";
function LandingPage() {
  return (
    <div>
      <img
        alt="img-notfound"
        className="background"
        src="https://s1.1zoom.me/big0/618/Vegetables_Tomatoes_Potato_Pumpkin_Cucumbers_Wood_519246_1280x841.jpg"
      ></img>
      <h1>Food App</h1>
      <Link to={"/home"}>
        <button>Ingresar</button>
      </Link>
    </div>
  );
}

export default LandingPage;
