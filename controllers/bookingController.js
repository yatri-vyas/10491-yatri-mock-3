import Booking from "../models/bookingModel.js";

const bookingController = {

    deleteBooking: async (req, res) => {
        try {
            const { id } = req.params;
            const data = await Booking.findByIdAndDelete(id);
            return res.status(201).json({ message: "Booking Deleted Successfully." })
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },
    getAllBooking: async (req, res) => {
        try {
            const data = await Booking.find({});
            return res.status(201).json({message : "All the booking.",data});
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },
   
}

export default bookingController;