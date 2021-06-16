import React, { useEffect, useState } from "react";
import "./style.css";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Button = styled.button`
  color: "#fff";
  background-color: "#18293a";
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  margin-top: 20px;
`;

function BMICalculate() {
  const [data, setData] = useState({ weight: "", height: "", bmi: 0 });
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const calculate = () => {
    const weight = data.weight;
    const height = data.height / 100;
    setData({ ...data, bmi: Math.round(weight / (height * height)) });
    showResult();
  };

  const handleWeight = (e) => {
    setData({ ...data, weight: e.target.value });
  };

  const handleHeight = (e) => {
    setData({ ...data, height: e.target.value });
  };

  const showResult = () => {
    history.push({
      pathname: "/result",
      state: {
        bmi: data.bmi,
      },
    });
  };

  return (
    <div className="form">
      <div>
        <label htmlFor="gender">Gender: </label>
        <select name="gender" id="gender">
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
      </div>
      <div>
        <label htmlFor="weight">Weight (in kg): </label>
        <input
          type="number"
          id="weight"
          value={data.weight}
          onChange={handleWeight}
        />
      </div>
      <div>
        <label htmlFor="height">Height (in cm): </label>
        <input
          type="number"
          id="height"
          value={data.height}
          onChange={handleHeight}
        />
      </div>
      <Button onClick={calculate}>Calculate</Button>
    </div>
  );
}

export default BMICalculate;
