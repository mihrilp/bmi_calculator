import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Result() {
  //const [data, setData] = useState({ weight: "", height: "", bmi: 0 });
  const { state } = useLocation();

  return (
    <div className="result">
      <h3>Your bmi: {state.bmi}</h3>
      <h3>Weight Status: </h3>
    </div>
  );
}

export default Result;
