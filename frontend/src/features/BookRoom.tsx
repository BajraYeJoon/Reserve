import { useEffect, useState } from "react";
import apiService from "../utils/apiService";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./cart/cartSlice";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

interface Room {
  id: string;
  name: string;
  price: number;
}

// ... (import statements)

const BookRoom = () => {
  const { id } = useParams<{ id: string }>();
  const [room, setRoom] = useState<Room | null>(null);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const [bookings, setBookings] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const roomDetails = await apiService.roomDetails(id!);
        setRoom(roomDetails);
      } catch (error) {
        console.error("Failed to fetch room details:", error);
      }
    };

    fetchRoomDetails();
  }, [id]);

  useEffect(() => {
    console.log("usefefect");
    // Fetch bookings from your API
    const fetchBookings = async () => {
      try {
        console.log("Bookings:");
        const bookings = await apiService.getBookingsForRoom(id!);
        setBookings(
          bookings.map((booking) => ({
            start: new Date(booking.checkIn),
            end: new Date(booking.checkOut),
            title: "booked",
          }))
        );
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      }
    };
    fetchBookings();
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...room, id: id! }));
    setIsAddedToCart(true);
  };

  if (!room) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>BookRoom</h2>
      <p>Room Name: {room?.name}</p>
      <p>Room Price: {room?.price}</p>

      <button onClick={handleAddToCart} disabled={isAddedToCart}>
        {isAddedToCart ? "Added to Cart" : "Add to Cart"}
      </button>

      {bookings && bookings.length > 0 && (
        <div style={{ height: 500 }}>
          <Calendar
            localizer={localizer}
            events={bookings}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: "50px" }}
          />
        </div>
      )}
    </div>
  );
};

export default BookRoom;
