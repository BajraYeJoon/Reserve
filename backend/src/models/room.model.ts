import mongoose, { Schema, Document } from "mongoose";

export interface Room extends Document {
  name: string;
  type: string;
  price: number;
  available: boolean;
  image: string;
  description: string;
}

const roomSchema = new Schema<Room>({
  name: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  available: { type: Boolean, default: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

const RoomModel = mongoose.model<Room>("Room", roomSchema);

export default RoomModel;
