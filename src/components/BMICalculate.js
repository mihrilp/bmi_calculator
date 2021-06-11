import React from "react";

function BMICalculate() {
  return (
    <div>
      <form action="">
        <label htmlFor="gender">Gender:</label>
        <input type="text" id="gender" />
        <label htmlFor="weight">Weight:</label>
        <input type="text" id="weight" />
        <label htmlFor="height">Height:</label>
        <input type="text" id="height" />
        <input type="submit" value="Calculate" />
      </form>
    </div>
  );
}

export default BMICalculate;
