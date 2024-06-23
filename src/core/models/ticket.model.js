import mongoose from "mongoose";
const ticketSchema = new mongoose.Schema(
  {
    sector: String,
    number: Number,
    called: Boolean,
  },
  { timestamps: true }
);

export const Ticket = mongoose.model("Ticket", ticketSchema);
