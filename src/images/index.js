const breakfast1 = require("./breakfast/breakfast1.jpg");
const breakfast2 = require("./breakfast/breakfast2.jpg");
const breakfast3 = require("./breakfast/breakfast3.jpg");
const lunch1 = require("./lunch/lunch1.jpg");
const lunch2 = require("./lunch/lunch2.jpg");
const lunch3 = require("./lunch/lunch3.jpg");
const dinner1 = require("./dinner/dinner1.jpg");
const dinner2 = require("./dinner/dinner2.jpg");
const dinner3 = require("./dinner/dinner3.jpg");
const drink1 = require("./drink/drink1.jpg");
const drink2 = require("./drink/drink2.jpg");
const drink3 = require("./drink/drink3.jpg");
const food = [
  {
    type: "breakfast",
    images: [breakfast1, breakfast2, breakfast3],
    names: ["Breakfast sandwich", "English breakfast", "Pancake"],
  },
  {
    type: "lunch",
    images: [lunch1, lunch2, lunch3],
    names: ["Burger Big Combo", "Salad", "Burger and Salad"],
  },
  {
    type: "dinner",
    images: [dinner1, dinner2, dinner3],
    names: ["Spaghetti", "Steak and Fries", "Hawaii Pizza"],
  },
  {
    type: "drink",
    images: [drink1, drink2, drink3],
    names: ["Smoothie", "Pops", "Special Coffee"],
  },
];
module.exports = food;
