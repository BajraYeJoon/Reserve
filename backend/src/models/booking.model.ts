import mongoose, { Schema, Document } from "mongoose";

export interface Booking extends Document {
  roomId: string;
  checkIn: Date;
  checkOut: Date;
  guestName: string;
  status: string;
}

const bookingSchema = new Schema<Booking>(
  {
    // Reference to Room model
    roomId: {
      type: String,
      ref: "Room",
      required: true,
    },

    checkIn: {
      type: Date,
      required: true,
    },

    checkOut: {
      type: Date,
      required: true,
    },

    guestName: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "Pending",
    },
  },

  {
    timestamps: true,
  }
);

const BookingModel = mongoose.model<Booking>("Booking", bookingSchema);

export default BookingModel;
