
import express from 'express';
import { bookAppointment, cancelAppointment, viewStudentAppointments } from '../controllers/appointmentController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

//import { verifyToken } from "../middleware/authMiddleware.js";

const appointmentRouter = express.Router();

// Book appointment
appointmentRouter.post('/',verifyToken, bookAppointment);

// Cancel appointment (Professor)
appointmentRouter.delete('/:id', verifyToken, cancelAppointment);


// Student view appointments
appointmentRouter.get('/', verifyToken, viewStudentAppointments);




export default appointmentRouter;








