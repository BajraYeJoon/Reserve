import mongoose, { Schema, Document } from "mongoose";

interface Invoice extends Document {
  bookingId: string;
  customerName: string;
  totalCost: number;
  discount: number;
  checkInDate: Date;
  checkOutDate: Date;
  roomType: string;
  roomPrice: number;
  roomName: string;
  roomDescription: string;
  Status: string;
}

const invoiceSchema = new Schema<Invoice>({
  bookingId: { type: String, ref: "Booking", required: true },
  customerName: { type: String, required: true },
  totalCost: { type: Number, required: true },
  discount: { type: Number, required: false },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  roomType: { type: String, required: true },
  roomPrice: { type: Number, required: true },
  roomName: { type: String, required: true },
  roomDescription: { type: String, required: true },
  Status: {
    type: String,
    default: "Paid",
  },
});

const InvoiceModel = mongoose.model<Invoice>("Invoice", invoiceSchema);

export default InvoiceModel;
