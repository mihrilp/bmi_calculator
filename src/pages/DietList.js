import React from "react";
import WeightStatus from "../components/weight-status/WeightStatus";
import Obese from "../components/icons/Obese";
import Normal from "../components/icons/Normal";

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

function DietList() {
  return (
    <div>
      <WeightStatus
        weightStatus="Underweight"
        icon={<Normal />}
        breakfast={List.underweight.breakfast}
        lunch={List.underweight.lunch}
        dinner={List.underweight.dinner}
        snacks={List.underweight.snacks}
      />
      <WeightStatus
        weightStatus="Normal"
        icon={<Normal />}
        breakfast={List.normal.breakfast}
        lunch={List.normal.lunch}
        dinner={List.normal.dinner}
        snacks={List.normal.snacks}
      />
      <WeightStatus
        weightStatus="Overweight"
        icon={<Obese />}
        breakfast={List.overweight.breakfast}
        lunch={List.overweight.lunch}
        dinner={List.overweight.dinner}
        snacks={List.overweight.snacks}
      />
      <WeightStatus
        weightStatus="Obese"
        icon={<Obese />}
        breakfast={List.obese.breakfast}
        lunch={List.obese.lunch}
        dinner={List.obese.dinner}
        snacks={List.obese.snacks}
      />
    </div>
  );
}

export default DietList;
