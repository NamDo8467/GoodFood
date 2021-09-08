import React, { useState, useContext, useEffect } from "react";
import "./FoodContainer.css";
import { FoodContext, MealTypeContext } from "../App";

function FoodContainer(props) {
  const mealType = useContext(MealTypeContext); //props.type;
  useEffect(() => {
    const category = document.querySelector(`[data-type=${mealType}]`);
    category.style.backgroundColor = "#c59d5f";
    category.style.color = "white";
    return () => {
      const category = document.querySelector(`[data-type=${mealType}]`);
      category.style.backgroundColor = "white";
      category.style.color = "#c59d5f";
    };
  }, [mealType]);

  return (
    <Meal>
      <Food />
    </Meal>
  );
}

const Meal = (props) => {
  return props.children;
};

const Food = () => {
  const foodInfo = useContext(FoodContext);
  const mealType = useContext(MealTypeContext);
  const [loading, setLoading] = useState(true);
  const foodCards = 12;
  const skeletons = new Array(foodCards);
  skeletons.fill(0);

  const skeletonCards = (
    <div className="food-container">
      {skeletons.map((skeleton, index) => (
        <div key={index} className="food food-skeleton">
          <div className="food-image-skeleton"></div>
          <div className="food-information food-information-skeleton">
            <div className="name name-skeleton"></div>
            <div className="price price-skeleton"></div>
            <div className="information information-skeleton"></div>
            <div className="information information-skeleton"></div>
            <div className="information information-skeleton"></div>
            <div className="information information-skeleton"></div>
            <div className="information information-skeleton"></div>
          </div>
        </div>
      ))}
    </div>
  );

  if (foodInfo) {
    let names = [];
    let images = [];
    if (mealType === "all") {
      names = foodInfo.map((food) => food.names);
      names = names.join().split(",");
      
      let allImages = [];
      //Get all the images from foodInfo
      foodInfo.forEach((food) => {
        allImages.push(food.images); // after the forEach loop, allImages = [[1,2,3],[4,5,6]]
      });

      for (let i = 0; i < allImages.length; i++) {
        images = images.concat(allImages[i]); // after the for loop, images = [1,2,3,4,5,6]
      }
    } else {
      const food = foodInfo.filter((food) => {
        return food.type === mealType;
      });
      //food = [{name:['Hamburger', 'Sandwich'], images:['breakfast1.jpg', 'breakfast2.jpg']}]
      names = food[0].names;
      images = food[0].images;
    }

    setTimeout(() => {
      setLoading(false);
    }, 2700);
    if (loading) {
      return skeletonCards;
    } else {
      return (
        <div className="food-container">
          {names.map((name) => (
            <div key={name} className="food">
              <img
                className="food-image"
                src={images[names.indexOf(name)].default} //images[0] = {default:"breakfast.jpg"}
                alt={mealType}
              />
              <div className="food-information">
                <h3 className="name">{name}</h3>
                <h3 className="price">Price: $15.99</h3>
                <div className="line"></div>
                <p className="information">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam id nobis voluptas, harum neque ipsam esse quaerat
                  molestiae incidunt.
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    }
  } else {
    return skeletonCards;
  }
};

export default FoodContainer;
