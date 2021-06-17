import React from "react";
import "./style.css";

function WeightStatus({
  weightStatus,
  icon,
  breakfast,
  lunch,
  dinner,
  snacks,
}) {
  return (
    <div className="container">
      <div className="icon">{icon}</div>
      <p className="weightStatus">Weight Status: {weightStatus}</p>
      <div className="dietList">
        <p className="title">Diet list for you: </p>
        <ul>
          <li>Breakfast: {breakfast}</li>
          <li>Lunch: {lunch} </li>
          <li>Dinner: {dinner}</li>
          <li>Snacks: {snacks}</li>
        </ul>
      </div>
    </div>
  );
}

export default WeightStatus;
