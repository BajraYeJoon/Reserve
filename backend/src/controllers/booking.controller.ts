import { startSession } from "mongoose";
import { Request, Response } from "express";
import BookingModel from "../models/booking.model";

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
  