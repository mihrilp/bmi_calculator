import React, { useState } from "react";
import BMICalculate from "../components/bmi_calculate/BMICalculate";

function Home() {
  return (
    <div className="bmi-calculate">
      <img src="bmi2.png" alt="bmi" width="150" height="150" />
      <h2>CALCULATOR</h2>
      <BMICalculate />
    </div>
  );
}

export default Home;
