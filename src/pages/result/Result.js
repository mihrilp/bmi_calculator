import React from "react";

function Result({ bmi }) {
  return (
    <div className="result">
      <p>Your bmi: {bmi}</p>
    </div>
  );
}

export default Result;
