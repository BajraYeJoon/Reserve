import { useState } from "react";
import apiService from "../utils/apiService";
import { Link } from "react-router-dom";

function RoomCheckAvailability() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("");
  const [rooms, setRooms] = useState<any[]>([]); // Add type annotation for rooms

  const checkAvailability = async () => {
    try {
      const availableRooms = await apiService.checkRoomAvailability(
        { startDate: checkIn, endDate: checkOut },
        roomType
      );
      console.log("Available rooms:", availableRooms);
      setRooms(availableRooms);
    } catch (error) {
      console.error("Failed to fetch available rooms:", error);
    }
  };

  return (
    <div>
      <h1>Check Room Availability</h1>
      <label>
        Check-in date:
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </label>
      <label>
        Check-out date:
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </label>
      <label>
        Room type:
        <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
          <option value="">Select room type</option>
          <option value="standard">standard</option>
          <option value="deluxe">deluxe</option>
          {/* Add more room types as needed */}
        </select>
      </label>
      <button onClick={checkAvailability}>Check Availability</button>

      <h1>Available Rooms</h1>
      {rooms?.map((room) => (
        <div key={room._id}>
          <p>{room.name}</p>
          <p>{room.price}</p>
          <span>{room.type}</span>
          <Link to={`/rooms/${room._id}`}>Select Room</Link>
        </div>
      ))}
    </div>
  );
}

export default RoomCheckAvailability;
