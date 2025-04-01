import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import './App.css';

const App = () => {
  const [activePage, setActivePage] = useState("home");

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div>
      <Navbar setActivePage={setActivePage} />
      
      {/* Conditionally render the active page */}
      {activePage === "home" && <Home />}
      {activePage === "rooms" && <Rooms />}
      {activePage === "menu" && <Menu />}
      {activePage === "aboutus" && <Aboutus />}
      {activePage === "contact" && <Contact />}
      
      <Footer />

      {/* Scroll to top button, only show on the Home page */}
      {activePage === "home" && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </div>
  );
};

export default App;
