/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import apiService from "../utils/apiService";
import RoomCard from "../components/RoomCard/RoomCard";
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
    <div className="flex flex-col items-start gap-4 mt-6 md:mt-12 ">
      <h1 className="text-lg md:text-2xl font-medium ">
        Available Rooms &#11162;
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {rooms.map((room) => (
          <div key={room._id}>
            <RoomCard room={room} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRooms;
