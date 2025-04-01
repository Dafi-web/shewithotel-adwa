import React, { useState } from "react";

const Food = () => {
  // Food categories and subcategories
  const foodData = {
    Breakfast: [
      { name: "Enjera Firfr", price: "$8", img: "https://github.com/Dafi-web/cssas1/blob/main/breakfast1.jpeg?raw=true" },
      { name: "Chechebsa", price: "$10", img: "https://github.com/Dafi-web/cssas1/blob/main/beakefast2.jpeg?raw=true" },
      { name: "fata", price: "$6", img: "https://github.com/Dafi-web/cssas1/blob/main/breakfast3.jpeg?raw=true" },
      { name: "Egg", price: "$12", img: "https://github.com/Dafi-web/cssas1/blob/main/breakfast4.jpeg?raw=true" },
    ],
    Lunch: [
      { name: "Kitfo", price: "$14", img: "https://github.com/Dafi-web/cssas1/blob/main/l.jpeg?raw=true" },
      { name: "aynet", price: "$12", img: "https://github.com/Dafi-web/cssas1/blob/main/l1.jpg?raw=true" },
      { name: "special kitfo", price: "$12", img: "https://github.com/Dafi-web/cssas1/blob/main/l3.jpg?raw=true" },
      { name: "tire siga", price: "$12", img: "https://github.com/Dafi-web/cssas1/blob/main/l4.jpg?raw=true" },
      { name: "chekla", price: "$12", img: "https://raw.githubusercontent.com/Dafi-web/cssas1/refs/heads/main/shekla-tibs-savory-ethiopian-national-meal-sauted-meat-spices-shekla-tibs-savory-ethiopian-national-meal-326650834.webp" },
      { name: "shiro", price: "$12", img: "https://github.com/Dafi-web/cssas1/blob/main/l6.jpg?raw=true" },
      { name: "selata", price: "$12", img: "https://raw.githubusercontent.com/Dafi-web/cssas1/refs/heads/main/l7.webp" },
      { name: "Caesar Salad", price: "$12", img: "https://raw.githubusercontent.com/Dafi-web/cssas1/refs/heads/main/l8.webp" },
    ],
    Dinner: [
      { name: "derho", price: "$18", img: "https://github.com/Dafi-web/cssas1/blob/main/d.jpeg?raw=true" },
      { name: "Pasta", price: "$12", img: "https://github.com/Dafi-web/cssas1/blob/main/d2.jpeg?raw=true" },
      { name: "shiro", price: "$12", img: "https://github.com/Dafi-web/cssas1/blob/main/l6.jpg?raw=true" },
      { name: "tibsi", price: "$12", img: "https://github.com/Dafi-web/cssas1/blob/main/d3.jpg?raw=true" },
    ],
    Desserts: [
      { name: "sanbusa", price: "$7", img: "https://github.com/Dafi-web/cssas1/blob/main/d4.jpeg?raw=true" },
      { name: "Ice Cream", price: "$6", img: "https://github.com/Dafi-web/cssas1/blob/main/d5.jpg?raw=true" },
      { name: "cake", price: "$6", img: "https://github.com/Dafi-web/cssas1/blob/main/c.jpg?raw=true" },
      { name: "cake", price: "$6", img: "https://github.com/Dafi-web/cssas1/blob/main/c1.jpeg?raw=true" },
    ],
  };

  // State for selected category
  const [activeCategory, setActiveCategory] = useState("Breakfast");

  return (
    <div className="menu">
      <h2>Food Menu</h2>
      
      {/* Category Buttons */}
      <div className="menu-buttons">
        {Object.keys(foodData).map((category) => (
          <button 
            key={category} 
            onClick={() => setActiveCategory(category)}
            className={activeCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Food Items in Selected Category */}
      <div className="menu-grid">
        {foodData[activeCategory].map((food, index) => (
          <div key={index} className="menu-item">
            <img src={food.img} alt={food.name} />
            <h3>{food.name}</h3>
            <p>{food.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
