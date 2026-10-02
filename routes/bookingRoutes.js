import { Router } from "express";
import bookingController from "../controllers/bookingController.js";

const bookingRouter = Router();

bookingRouter.get('/getallbooking',bookingController.getAllBooking);
bookingRouter.delete('/deletebooking/:id',bookingController.deleteBooking);

export default bookingRouter;