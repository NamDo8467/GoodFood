import React, { useState } from "react";
import Title from "./Title/Title";
import Category from "./Category/Category.jsx";
import food from "./images/index";
import FoodContainer from "./FoodContainer/FoodContainer";

export const FoodContext = React.createContext("No food");
export const MealTypeContext = React.createContext("all");

function App() {
  const [mealType, setMealType] = useState("all");

  return (
    <FoodContext.Provider value={food}>
      <MealTypeContext.Provider value={mealType}>
        <Title />
        <Category setTypeFunction={setMealType} />
        <FoodContainer />
      </MealTypeContext.Provider>
    </FoodContext.Provider>
  );
}

export default App;
