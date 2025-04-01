import React from "react";

const Navbar = ({ setActivePage }) => {
  return (
    <nav>
      <h1>Shewit International Hotel</h1>
      <div>
        <button onClick={() => setActivePage("home")}>Home</button>
        <button onClick={() => setActivePage("rooms")}>Rooms</button>
        <button onClick={() => setActivePage("menu")}>Menu</button>
        <button onClick={() => setActivePage("aboutus")}>About Us</button>
        <button onClick={() => setActivePage("contact")}>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
