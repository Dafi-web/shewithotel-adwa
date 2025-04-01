import React from "react";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <h1 className="hero-title">Welcome to Shewit International Hotel Adwa</h1>
        <p className="hero-subtitle">Experience luxury like never before</p>
      </div>

      {/* Image Carousel */}
      <div className="image-carousel">
        <div className="carousel-item">
          <img src="https://github.com/Dafi-web/cssas1/blob/main/shewitroom1.jpeg?raw=true" alt="Luxury Room" />
        </div>
        <div className="carousel-item">
          <img src="https://raw.githubusercontent.com/Dafi-web/cssas1/c52f1f4c973faf5edc5bffa85544256a9b5386a2/shewitroom.jpeg" alt="Hotel Lobby" />
        </div>
        <div className="carousel-item">
          <img src="https://github.com/Dafi-web/cssas1/blob/main/shewitroom3.jpeg?raw=true" alt="Restaurant" />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose">
        <h2>Why Choose Us?</h2>
        <div className="reasons">
          <div className="reason">
            <h3>Luxury Rooms</h3>
            <p>Our rooms offer comfort and modern amenities for a relaxing stay.</p>
          </div>
          <div className="reason">
            <h3>Gourmet Dining</h3>
            <p>Enjoy delicious dishes from around the world prepared by our chefs.</p>
          </div>
          <div className="reason">
            <h3>World-Class Service</h3>
            <p>Our staff is committed to providing the best service to ensure your comfort.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
