
import express from 'express';
import { loginUser, registerUser } from '../controllers/authController.js';



const authRouter = express.Router();

console.log("registerUser called successfully");
authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);



export default authRouter;

















