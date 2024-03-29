import RoomModel from "../models/room.model";
import BookingModel from "../models/booking.model";
import InvoiceModel from "../models/invoice.model";
import { startSession } from "mongoose";
import { Request, Response } from "express";

interface Room {
  _id: string;
  type: string;
}

interface Booking {
  _id: string;
  roomId: string;
  checkIn: Date;
  checkOut: Date;
  guestName: string;
  status: string;
}

// To get all rooms present in the database
export const getAllRooms = async (req: Request, res: Response) => {
  try {
    const rooms = await RoomModel.find({});
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch rooms" });
  }
};

// To check the availability of room in certain date - checks for conflicting bookings if the other user has already created the booking of that room
export const checkAvailability = async (req: Request, res: Response) => {
  try {
    const startDate = new Date(req.query.startDate as string);
    const endDate = new Date(req.query.endDate as string);
    const roomType = req.query.type as string;

    // Finding all rooms of the requested type
    const rooms = await RoomModel.find({ type: roomType });

    // Finding bookings that conflict with requested dates
    const conflictingBookings: Booking[] = await BookingModel.find({
      roomId: { $in: rooms.map((room) => room._id) },
      checkIn: { $lte: endDate },
      checkOut: { $gte: startDate },
    });

    // To Find available rooms by excluding booked rooms
    const conflictingRoomIds = conflictingBookings.map((booking) =>
      booking.roomId.toString()
    );

    const availableRooms: Room[] = rooms.filter(
      (room) => !conflictingRoomIds.includes(room._id.toString())
    );

    console.log("availableRooms", availableRooms);
    res.json(availableRooms);
  } catch (error) {
    res.status(500).json({ message: "Error checking availability" });
  }
};

// To get the single room details
export const roomDetails = async (req: Request, res: Response) => {
  try {
    const room = await RoomModel.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json(room);
  } catch (error) {
    res.status(500).json({ message: "Error getting room" });
  }
};
