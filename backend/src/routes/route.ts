import {
  checkAvailability,
  roomDetails,
  getAllRooms,
  getBookingsForRoom,
} from "../controllers/controllers";
import { Router } from "express";

const getRoom: Router = Router();

getRoom.get("/allrooms", getAllRooms);

getRoom.get("/rooms", checkAvailability);

getRoom.get("/rooms/:id", roomDetails);

export default getRoom;
