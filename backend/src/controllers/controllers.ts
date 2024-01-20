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

    // Find all rooms of the requested type
    const rooms = await RoomModel.find({ type: roomType });

    // Find all bookings that conflict with the requested dates
    const conflictingBookings: Booking[] = await BookingModel.find({
      roomId: { $in: rooms.map((room) => room._id) },
      $or: [
        { checkIn: { $lte: endDate }, checkOut: { $gte: startDate } },
        { checkIn: { $lte: startDate }, checkOut: { $gte: endDate } },
      ],
    });

    // Find available rooms by excluding booked rooms
    const availableRooms: Room[] = rooms.filter(
      (room) =>
        !conflictingBookings.some(
          (booking) => booking.roomId.toString() === room._id.toString()
        )
    );

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

// To create a booking for a room - when multiple request for booking is sent, handling of request can be changed if user books the room twice, to mitigate it, startsession from mongodb used.
// Reference taken: https://mongoosejs.com/docs/transactions.html
export const createBooking = async (req: Request, res: Response) => {
  const session = await startSession();
  session.startTransaction();

  try {
    const { roomId, checkIn, checkOut, guestName } = req.body;

    // Check for existing bookings with the same room and overlapping dates
    const existingBooking = await BookingModel.exists({
      roomId,
      checkIn: { $lt: new Date(checkOut) },
      checkOut: { $gt: new Date(checkIn) },
    });

    if (existingBooking) {
      throw new Error("Booking conflict");
    }

    const newBooking = new BookingModel({
      roomId,
      checkIn: new Date(checkIn),
      checkOut: new Date(checkOut),
      guestName,
      status: "Success",
    });

    const savedBooking = await newBooking.save({ session });

    await session.commitTransaction();

    res.json(savedBooking);
  } catch (error) {
    await session.abortTransaction();
    res.status(400).json({ message: "Error creating booking" });
  } finally {
    session.endSession();
  }
};

//To create the invoice for the booked room to user
export const createInvoice = async (req: Request, res: Response) => {
  const { bookingId, totalCost } = req.body;

  // Check if an invoice already exists for this booking
  const existingInvoice = await InvoiceModel.findOne({ bookingId });
  if (existingInvoice) {
    throw new Error("An invoice already exists for this booking");
  }

  // Fetch the booking details
  const booking = await BookingModel.findById(bookingId);
  if (!booking) {
    return res.status(404).json({ message: "Booking not found" });
  }

  // Fetch the room details
  const room = await RoomModel.findById(booking.roomId);
  if (!room) {
    return res.status(404).json({ message: "Room not found" });
  }

  const newInvoice = {
    bookingId,
    customerName: booking.guestName,
    totalCost,
    checkInDate: booking.checkIn,
    checkOutDate: booking.checkOut,
    roomType: room.type,
    roomPrice: room.price,
    roomName: room.name,
    roomDescription: room.description,
    Status: "Paid",
    // discount: 0,
  };

  const invoice = new InvoiceModel(newInvoice);
  const savedInvoice = await invoice.save();

  res.json(savedInvoice);
};

//To get the bookings of room to show in the web page to make user for which date range the room has been booked.
export const getBookingsForRoom = async (req: Request, res: Response) => {
  try {
    const roomId = req.params.id;

    // Find all bookings for the room
    const bookings = await BookingModel.find({ roomId: roomId });

    // Return the bookings
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
};
