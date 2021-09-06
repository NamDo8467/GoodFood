import React, {useState} from "react";
import "./Category.css";
import "../FoodContainer/FoodContainer";
import FoodContainer from "../FoodContainer/FoodContainer";
function Category() {
  const [type, setType] = useState('all')
  const handleCategoryChange = (e) => {
      setType(e.target.dataset.type)
  };
  return (
    <div>
      <div className="category-container">
        <ul className="category food-category">
          <li data-type="all"      onClick={(e)=>{handleCategoryChange(e)}}>All</li>
          <li data-type="breakfast"    onClick={(e)=>{handleCategoryChange(e)}}>Breakfast</li>
          <li data-type="lunch"onClick={(e)=>{handleCategoryChange(e)}}>Lunch</li>
          <li data-type="dinner"   onClick={(e)=>{handleCategoryChange(e)}}>Dinner</li>
          <li data-type="drink"   onClick={(e)=>{handleCategoryChange(e)}}>Drinks</li>
        </ul>
      </div>
      <FoodContainer type={type} />
    </div>
  );
}

export default Category;
