import React from "react";
import BMICalculate from "../components/bmi_calculate/BMICalculate";

function Home() {
  return (
    <div className="bmi-calculate">
      <div className="logo" style={{ marginBottom: 50 }}>
        <img src="bmi2.png" alt="bmi" width="100" height="100" />
        <h3 style={{ color: "17283a" }}>CALCULATOR</h3>
      </div>
      <BMICalculate />
    </div>
  );
}

export default Home;
