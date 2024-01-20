import { Request, Response } from "express";
import InvoiceModel from "../models/invoice.model";
import BookingModel from "../models/booking.model";
import RoomModel from "../models/room.model";

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
