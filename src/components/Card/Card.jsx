import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, detail, color, darkmode }) => {
  return (
    <div className="card" style={{ borderColor: { color }, backgroundColor: "white" }}>
      <img src={emoji} alt="" />
      <span style={{ color: "black" }}>{heading}</span>
    </div>
  );
};

export default Card;
