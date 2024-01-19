import mongoose, { Schema, Document } from "mongoose";

export interface Room extends Document {
  name: string;
  type: string;
  price: number;
  available: boolean;
}

const roomSchema = new Schema<Room>({
  name: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  available: { type: Boolean, default: true },
});

const RoomModel = mongoose.model<Room>("Room", roomSchema);

export default RoomModel;
