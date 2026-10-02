import { ObjectId } from "bson";
import mongoose from "mongoose";
import Eventslot from "./eventSlotModel.js";

const bookingSchema = new mongoose.Schema({

    slotId: ObjectId.Eventslot,

    studentName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    rollNo: {
        type: String,
        require: true,
    },
    bookingStatus: 'Booked' | 'Cancelled',
    createdAt: {
        type: Date,
        require: true,
    },
    updatedAt: {
        type: Date,
        require: true,
    }
}
)

const Booking = mongoose.model('booking', bookingSchema);

export default Booking;