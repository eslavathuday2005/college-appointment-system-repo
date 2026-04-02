

import express from 'express';
import { addAvailability, getAvailability } from '../controllers/availabilityController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const professorRouter = express.Router();


// Add availability (Professor)
professorRouter.post("/availability",verifyToken, addAvailability);


// Get professor availability
professorRouter.get("/availability/:professorId",verifyToken, getAvailability);






export default professorRouter;













