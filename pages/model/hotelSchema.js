import { Schema, model, models } from "mongoose";
const hotelSchema = new Schema({
  userId: String,
  hotelName: String,
  finalPrice: Int16Array,
  checkIn: String,
  checkOut: String,
});
const Hotels = models.hotel || model("hotel", hotelSchema);
export default Hotels;
