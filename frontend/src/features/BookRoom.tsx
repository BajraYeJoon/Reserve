/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import apiService from "../utils/apiService";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "./cart/cartSlice";
import Button from "../components/Inputs/Button";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { MaxWidthWrapper } from "../screen/Layout/MaxWIdthWrapper";

const localizer = momentLocalizer(moment);

interface Room {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

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
          bookings.map(
            (booking: {
              checkIn: string | number | Date;
              checkOut: string | number | Date;
            }) => ({
              start: new Date(booking.checkIn),
              end: new Date(booking.checkOut),
              title: "booked",
            })
          )
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
    <MaxWidthWrapper>
      <div className="flex flex-col md:flex-row items-start justify-center mt-12">
        <div className="flex-1">
          <img
            className="h-auto max-w-lg rounded-lg"
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image description"
          />

          <div className="  pb-8 mb-4 flex flex-col my-2">
            <h1 className="text-2xl font-semibold my-2">Room Details</h1>
            <p className="mb-2">
              <span className="font-semibold">Room Name:</span> {room?.name}
            </p>
            <p className="font-semibold"> Price: ${room?.price}</p>
            <p className="max-w-md">Description:{room?.description}</p>
          </div>

          <Button
            label={isAddedToCart ? "Room Reserved" : "Reserve Room"}
            onClick={handleAddToCart}
            disabled={isAddedToCart}
          />
        </div>

        {/* {bookings && bookings.length > 0 && (
          <div
            className="flex-1 items-center justify-center flex flex-col"
            style={{ height: 500 }}
          >
            <h3 className="mx-auto text-base md:text-lg md:font-medium">
              Booked Rooms Date
            </h3>
            <Calendar
              localizer={localizer}
              events={bookings}
              startAccessor="start"
              endAccessor="end"
              style={{
                height: 400,
                width: "80%",
                margin: "auto",

                color: "blue",
              }}
              //reference from https://stackoverflow.com/questions/34587067/change-color-of-react-big-calendar-events
              eventPropGetter={() => {
                return {
                  className: "",
                  style: {
                    backgroundColor: "#3B82F6",
                    borderRadius: "10px",
                  },
                };
              }}
            />

            <p className="italic">
              Note: Please book the room which are not in the range.
            </p>
          </div>
        )} */}

        {/* Always render the calendar */}
        <div
          className="flex-1 items-center justify-center flex flex-col"
          style={{ height: 500 }}
        >
          <h3 className="mx-auto text-base md:text-lg md:font-medium">
            Booked Rooms Date
          </h3>
          <Calendar
            localizer={localizer}
            events={bookings}
            startAccessor="start"
            endAccessor="end"
            style={{
              height: 400,
              width: "80%",
              margin: "auto",
              color: "blue",
            }}
            //reference from https://stackoverflow.com/questions/34587067/change-color-of-react-big-calendar-events
            eventPropGetter={() => {
              return {
                className: "",
                style: {
                  backgroundColor: "#3B82F6",
                  borderRadius: "10px",
                },
              };
            }}
          />

          {/* Show a note only when there are bookings */}
          {bookings && bookings.length > 0 && (
            <p className="italic">
              Note: Please book the room which are not in the range.
            </p>
          )}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default BookRoom;
