import React, { useEffect, useState } from "react";
import "./style.css";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Button = styled.button`
  color: "#fff";
  background: #c33126;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  margin-top: 20px;
`;

function BMICalculate() {
  const [data, setData] = useState({ weight: "", height: "", bmi: "" });
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const calculate = () => {
    const weight = data.weight;
    const height = data.height / 100;
    setData({ ...data, bmi: Math.round(weight / (height * height)) });
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
        <select name="gender" id="gender" className="gender">
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          id="weight"
          placeholder="Weight (in kg)"
          value={data.weight}
          onChange={handleWeight}
        />
      </div>
      <div>
        <input
          placeholder="Height (in cm)"
          type="text"
          id="height"
          value={data.height}
          onChange={handleHeight}
        />
      </div>
      <div className="button">
        <Button onClick={calculate}>Calculate</Button>
      </div>
      {data.bmi !== "" && showResult()}
    </div>
  );
}

export default BMICalculate;
