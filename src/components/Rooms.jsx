import React from "react";

const Rooms = () => {
  const roomData = [
    { type: "Single Room", price: "$80/night", img: "https://github.com/Dafi-web/cssas1/blob/main/single%20bed.jpg?raw=true" },
    { type: "Double Room", price: "$120/night", img: "https://github.com/Dafi-web/cssas1/blob/main/double.jpg?raw=true" },
    { type: "Suite", price: "$200/night", img: "https://github.com/Dafi-web/cssas1/blob/main/suites.jpg?raw=true" },
    { type: "Villa", price: "$300/night", img: "https://raw.githubusercontent.com/Dafi-web/cssas1/8aa4df019b282f0f487e3ba02535e010fd87ac09/villa.jpg" },
  ];

  return (
    <div className="rooms">
      <h2 className="rooms-title">Our Rooms</h2>
      <div className="room-list">
        {roomData.map((room, index) => (
          <div key={index} className="room-card">
            <img src={room.img} alt={room.type} className="room-image" />
            <div className="room-info">
              <h3 className="room-type">{room.type}</h3>
              <p className="room-price">{room.price}</p>
              <button className="book-now">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
