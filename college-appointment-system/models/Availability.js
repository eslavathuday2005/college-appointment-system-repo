import mongoose from "mongoose";

const availabilitySchema = new mongoose.Schema({

    professorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: Date, required: true },
    slots: [{ type: String, required: true }] 
   

}, { timestamps: true });

const Availability = mongoose.model("Availability", availabilitySchema);

export default Availability;