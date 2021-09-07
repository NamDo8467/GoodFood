import React, { useState, useContext } from "react";
import "./FoodContainer.css";
const FoodContext = React.createContext("No food");
const MealTypeContext = React.createContext("Unknown");

function FoodContainer(props) {
  const food = require("../images/index");
  const mealType = props.type;

  return (
    <FoodContext.Provider value={food}>
      <MealTypeContext.Provider value={mealType}>
        <Meal>
          <Food />
        </Meal>
      </MealTypeContext.Provider>
    </FoodContext.Provider>
  );
}

// const delay = (milliseconds) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve()
//     },milliseconds)
//   })
// }
const Meal = (props) => {
  return props.children;
};

const Food = () => {
  const foodInfo = useContext(FoodContext);
  const mealType = useContext(MealTypeContext);
  const [skeleton, setSkeleton] = useState(true);
  let names = [];
  let images = [];

  if (mealType === "all") {
    let allNames = foodInfo.map((food) => food.names);
    names = allNames.join().split(",");
    let allImages = [];
    foodInfo.forEach((food) => {
      allImages.push(food.images);
    });
    for (let i = 0; i < allImages.length; i++) {
      images = images.concat(allImages[i]);
    }
  } else {
    const food = foodInfo.filter((food) => {
      return food.type === mealType;
    });
    names = food[0].names;
    images = food[0].images;
  }
  setTimeout(() => {
    setSkeleton(false);
  }, 2500);

  if (skeleton) {
    return (
      <div className="food-container">
        {names.map((name) => (
          <div className="food">
            <div className="food-image-skeleton"></div>
            <div className="food-information food-information-skeleton">
              <div className="name name-skeleton"></div>
              <div className="price price-skeleton"></div>
              <div className="information information-skeleton"></div>
              <div className="information information-skeleton"></div>
              <div className="information information-skeleton"></div>
              <div className="information information-skeleton"></div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="food-container">
        {names.map((name) => (
          <div key={name} className="food">
            <img
              className="food-image"
              src={images[names.indexOf(name)].default}
              alt={mealType}
              height="150"
              width="170"
            />
            <div className="food-information">
              <h3 className="name">{name}</h3>
              <h3 className="price">Price: $15.99</h3>
              <div className="line"></div>
              <p className="information">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                id nobis voluptas, harum neque ipsam esse quaerat molestiae
                incidunt.
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default FoodContainer;
