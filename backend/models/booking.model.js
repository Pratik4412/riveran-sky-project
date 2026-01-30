import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    checkIn: Date,
    checkOut: Date,
    adults: Number,
    children: Number,
  },
  { timestamps: true },
);

export default mongoose.model("Booking", bookingSchema);
