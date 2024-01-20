/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import apiService from "../utils/apiService";
import SelectInput from "../components/Inputs/SelectInput";
import Button from "../components/Inputs/Button";
import RoomCard from "../components/RoomCard/RoomCard";
import CustomInput from "../components/Inputs/CustomInput";

function RoomCheckAvailability() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("");
  const [rooms, setRooms] = useState<any[]>([]);
  const [showMessage, setShowMessage] = useState(false);

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

  useEffect(() => {
    if (rooms?.length === 0) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [rooms]);

  return (
    <>
      <div className="flex  bg-blue-600 md:rounded-xl md:px-8 md:py-8 flex-col md:-mt-32 justify-center gap-4 items-center ">
        <h1 className="text-base md:text-xl text-white tracking-wide font-semibold">
          Reserve a Room
        </h1>

        <div className="flex flex-col sm:flex-row w-full bg-blue-800 px-8 py-2 rounded-xl text-white justify-center items-end gap-8">
          <CustomInput
            type="date"
            label="Check In date:"
            value={checkIn}
            onChange={setCheckIn}
          />

          <CustomInput
            type="date"
            label="Check Out date:"
            value={checkOut}
            onChange={setCheckOut}
          />

          <SelectInput
            label="Room Type:"
            value={roomType}
            onChange={setRoomType}
            options={[
              { value: "standard", label: "Standard" },
              { value: "deluxe", label: "Deluxe" },
            ]}
          />

          <Button
            label="Check Availability"
            onClick={checkAvailability}
            disabled={!checkIn || !checkOut || !roomType}
          />
        </div>
      </div>
      {rooms?.length > 0 ? (
        <div className="flex flex-col md:flex-row items-center gap-4 mt-12 justify-around">
          {rooms.map((room) => (
            <div key={room._id}>
              <RoomCard room={room} />
            </div>
          ))}
        </div>
      ) : (
        showMessage && (
          <p className="mt-6 md:mt-10 font-semibold tracking-wider">
            No rooms available.
          </p>
        )
      )}
    </>
  );
}

export default RoomCheckAvailability;
