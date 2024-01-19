import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbURI: string = process.env.DB_URI || "";

//connect to the database
export const connectDB = async () => {
  try {
    await mongoose.connect(dbURI).then((data: any) => {
      console.log(`MongoDB connected: ${data.connection.host}`);
    });
  } catch (error) {
    console.error(error);
    setTimeout(connectDB, 5000);
  }
};
