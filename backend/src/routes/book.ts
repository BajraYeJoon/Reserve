import { createBooking, getBookingsForRoom } from "../controllers/controllers";
import { Router } from "express";

const bookRoom: Router = Router();

bookRoom.post("/book", createBooking);

bookRoom.get("/bookings/:id", getBookingsForRoom);

export default bookRoom;
