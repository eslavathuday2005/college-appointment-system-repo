import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({

    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    professorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: Date, required: true },
    slot: { type: String, required: true },
    status: { type: String, enum: ["booked", "cancelled"], default: "booked" }

}, { timestamps: true });

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;