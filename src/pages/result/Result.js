import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Result() {
  //const [data, setData] = useState({ weight: "", height: "", bmi: 0 });
  const { state } = useLocation();

  return (
    <div className="result">
      <p>Your bmi: {state.bmi}</p>
    </div>
  );
}

export default Result;
