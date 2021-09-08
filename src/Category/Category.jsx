import React from "react";
import "./Category.css";
import "../FoodContainer/FoodContainer";

function Category(props) {
  const setType = props.setTypeFunction
  const handleCategoryChange = (e) => {
    setType(e.target.dataset.type)
  }
  return (
    <div>
      <div className="category-container">
        <ul className="category-list">
          <li data-type="all"      onClick={(e)=>{handleCategoryChange(e)}}>All</li>
          <li data-type="breakfast"    onClick={(e)=>{handleCategoryChange(e)}}>Breakfast</li>
          <li data-type="lunch"onClick={(e)=>{handleCategoryChange(e)}}>Lunch</li>
          <li data-type="dinner"   onClick={(e)=>{handleCategoryChange(e)}}>Dinner</li>
          <li data-type="drink"   onClick={(e)=>{handleCategoryChange(e)}}>Drinks</li>
        </ul>
      </div>
    </div>
  );
}

export default Category;
