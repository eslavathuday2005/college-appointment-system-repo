import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import authRouter from './routes/authRoutes.js';
import professorRouter from './routes/professorRoutes.js';
import appointmentRouter from './routes/appointmentRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;  


dotenv.config();


await connectDB()

app.use(express.json());


console.log("auth called successfully");

app.use("/api/auth", authRouter);
app.use("/api/professor", professorRouter);
app.use("/api/appointments", appointmentRouter);


app.get('/', (req, res) => {
  res.send('Welcome to the College Appointment System API! 💕');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 


































