import React, { useState } from "react";

const Drinks = () => {
  // Drink categories and subcategories
  const drinkData = {
    Hot: [
      { name: "Coffee", price: "$4", img: "https://raw.githubusercontent.com/Dafi-web/cssas1/refs/heads/main/a.webp" },
      { name: "chekolate", price: "$3", img: "https://github.com/Dafi-web/cssas1/blob/main/a1.jpg?raw=true" },
      { name: "Tea", price: "$3", img: "https://github.com/Dafi-web/cssas1/blob/main/a3.jpg?raw=true" },
    ],
    Cold: [
      { name: "Orange Juice", price: "$5", img: "https://github.com/Dafi-web/cssas1/blob/main/a4.jpeg?raw=true" },
      { name: "avovado", price: "$6", img: "https://github.com/Dafi-web/cssas1/blob/main/a5.jpg?raw=true" },
    ],
    Alcoholic: [
      { name: "wisky", price: "$18", img: "https://github.com/Dafi-web/cssas1/blob/main/al2.jpg?raw=true" },
      { name: "Bedele", price: "$10", img: "https://github.com/Dafi-web/cssas1/blob/main/al3.jpg?raw=true" },
      { name: "Habesha", price: "$12", img: "https://github.com/Dafi-web/cssas1/blob/main/al4.png?raw=true" },
      { name: "st.george", price: "$15", img: "https://github.com/Dafi-web/cssas1/blob/main/al5.jpg?raw=true" },
    ],
    SoftDrinks: [
      { name: "Mirinda", price: "$3", img: "https://github.com/Dafi-web/cssas1/blob/main/s.jpg?raw=true" },
      { name: "Sofi", price: "$3", img: "https://raw.githubusercontent.com/Dafi-web/cssas1/refs/heads/main/s.webp" },
    ],
  };

  // State for selected category
  const [activeCategory, setActiveCategory] = useState("Hot");

  return (
    <div className="menu">
      <h2>Drink Menu</h2>
      
      {/* Category Buttons */}
      <div className="menu-buttons">
        {Object.keys(drinkData).map((category) => (
          <button 
            key={category} 
            onClick={() => setActiveCategory(category)}
            className={activeCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Drink Items in Selected Category */}
      <div className="menu-grid">
        {drinkData[activeCategory].map((drink, index) => (
          <div key={index} className="menu-item">
            <img src={drink.img} alt={drink.name} />
            <h3>{drink.name}</h3>
            <p>{drink.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drinks;
