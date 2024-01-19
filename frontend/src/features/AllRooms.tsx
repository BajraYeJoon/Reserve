import { useEffect, useState } from "react";
import apiService from "../utils/apiService";
import { Link } from "react-router-dom";

const AllRooms = () => {
  const [rooms, setRooms] = useState<any[]>([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const rooms = await apiService.fetchRooms();
        setRooms(rooms);
      } catch (error) {
        console.error("Failed to fetch rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div>
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
};

export default AllRooms;
