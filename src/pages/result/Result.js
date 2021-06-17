import React from "react";
import "./style.css";
import { useLocation } from "react-router-dom";
import WeightStatus from "../../components/weight-status/WeightStatus";
import Obese from "../../components/icons/Obese";
import Normal from "../../components/icons/Normal";

const List = {
  underweight: {
    breakfast:
      "2 egg brown bread sandwich + green chutney + 1 cup milk + 3 cashews + 4 almonds + 2 walnuts",
    lunch:
      "1 cup arhar dal + 1 cup potato curry + 3 chapatti + 1/2 cup rice + 1/2 cup low fat curd + salad",
    dinner: "1.5 cup chicken curry + 3 chapatti + salad",
    snacks: "1 cup banana shake",
  },
  normal: {
    breakfast:
      "2 egg brown bread sandwich + green chutney + 1 cup milk + 3 cashews + 4 almonds + 2 walnuts",
    lunch:
      "1 cup arhar dal + 1 cup potato curry + 3 chapatti + 1/2 cup rice + 1/2 cup low fat curd + salad",
    dinner: "1.5 cup chicken curry + 3 chapatti + salad",
    snacks: "1 cup banana shake",
  },
  overweight: {
    breakfast:
      "Seven-grain hot cereal with Greek yogurt, goat cheese and fig preserves",
    lunch: "Grilled chicken pitas with sesame drizzle",
    dinner: "Seared salmon salad with beets and blackberries",
    snacks:
      "Beet chips, rosemary roasted almonds, vegetables with pesto yogurt dip",
  },
  obese: {
    breakfast:
      "Seven-grain hot cereal with Greek yogurt, goat cheese and fig preserves",
    lunch: "Grilled chicken pitas with sesame drizzle",
    dinner: "Seared salmon salad with beets and blackberries",
    snacks:
      "Beet chips, rosemary roasted almonds, vegetables with pesto yogurt dip",
  },
};

function Result() {
  const { state } = useLocation();

  const showDiet = () => {
    if (state.bmi < 18.5)
      return (
        <WeightStatus
          weightStatus="Underweight"
          icon={<Normal />}
          breakfast={List.underweight.breakfast}
          lunch={List.underweight.lunch}
          dinner={List.underweight.dinner}
          snacks={List.underweight.snacks}
        />
      );
    else if (state.bmi > 18.5 && state.bmi < 24.9)
      return (
        <WeightStatus
          weightStatus="Normal"
          icon={<Normal />}
          breakfast={List.normal.breakfast}
          lunch={List.normal.lunch}
          dinner={List.normal.dinner}
          snacks={List.normal.snacks}
        />
      );
    else
      return (
        <WeightStatus
          weightStatus="Obese"
          icon={<Obese />}
          breakfast={List.obese.breakfast}
          lunch={List.obese.lunch}
          dinner={List.obese.dinner}
          snacks={List.obese.snacks}
        />
      );
  };

  return (
    <div className="result">
      <h3 className="bmi">Your bmi: {state.bmi}</h3>
      {state.bmi !== "" && showDiet()}
    </div>
  );
}

export default Result;
