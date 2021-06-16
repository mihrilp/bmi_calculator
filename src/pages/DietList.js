import React from "react";
import WeightStatus from "../components/weight-status/WeightStatus";
import Obese from "../components/icons/Obese";

const List = {
  obese: {
    Breakfast:
      "Seven-grain hot cereal with Greek yogurt, goat cheese and fig preserves",
    Lunch: "Grilled chicken pitas with sesame drizzle",
    Dinner: "Seared salmon salad with beets and blackberries",
    Snacks:
      "Beet chips, rosemary roasted almonds, vegetables with pesto yogurt dip",
  },
};

function DietList() {
  return (
    <div>
      <WeightStatus weightStatus="Obese" icon={<Obese />} />
      <p>Breakfast: {List.obese.Breakfast} </p>
      <p>Lunch: {List.obese.Lunch}</p>
    </div>
  );
}

export default DietList;
