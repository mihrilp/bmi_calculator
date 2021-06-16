import React from "react";
import "./style.css";

function WeightStatus({ weightStatus, icon }) {
  return (
    <div className="container">
      <div className="icon">{icon}</div>
      <p className="weightStatus">Weight Status: {weightStatus}</p>
    </div>
  );
}

export default WeightStatus;
