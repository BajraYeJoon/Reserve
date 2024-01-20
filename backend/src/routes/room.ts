import {
  checkAvailability,
  roomDetails,
  getAllRooms,
} from "../controllers/roomquery.controllers";
import { Router } from "express";

const getRoom: Router = Router();

// All the routes for querying of the room

getRoom.get("/allrooms", getAllRooms);

getRoom.get("/rooms", checkAvailability);

getRoom.get("/rooms/:id", roomDetails);

export default getRoom;
