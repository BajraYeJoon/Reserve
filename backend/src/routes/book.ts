import {
  createBooking,
  getBookingsForRoom,
} from "../controllers/booking.controller";
import { Router } from "express";

// All the routes for booking of the room

const bookRoom: Router = Router();

bookRoom.post("/book", createBooking);

bookRoom.get("/bookings/:id", getBookingsForRoom);

export default bookRoom;
