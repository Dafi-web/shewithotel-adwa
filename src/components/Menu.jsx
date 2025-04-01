import React, { useState } from "react";
import Food from "./Food";
import Drinks from "./Drinks";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("food");

  return (
    <div className="menu">
      <h2>Our Menu</h2>

      {/* Tabs for Food & Drinks */}
      <div className="menu-buttons">
        <button onClick={() => setActiveTab("food")} className={activeTab === "food" ? "active" : ""}>Food</button>
        <button onClick={() => setActiveTab("drinks")} className={activeTab === "drinks" ? "active" : ""}>Drinks</button>
      </div>

      {/* Show Food or Drinks based on selected tab */}
      {activeTab === "food" ? <Food /> : <Drinks />}
    </div>
  );
};

export default Menu;
