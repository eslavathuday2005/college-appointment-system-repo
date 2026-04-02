
import Appointment from "../models/Appointment.js";


// Book appointment

export const bookAppointment = async (req, res) => {

    try {

        const { professorId, date, slot } = req.body;

      


        // checking if the slot is already booked
        const existingAppointment = await Appointment.findOne({ professorId, date, slot, status: "booked" });


        if (existingAppointment) {
            return res.status(400).json({ message: "Slot already booked" });
        }

        const appointment = await Appointment.create({
            studentId: req.user.id,
            professorId,
            date,
            slot
        });

        console.log("Appointment created:", appointment); // Debugging line 

        res.status(201).json({ message: "Appointment booked successfully", appointment });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}




// Cancel appointment

export const cancelAppointment = async (req, res) => {


    try {
        const appointment = await Appointment.findById(req.params.id); // expecting an appointment ID

        if (!appointment) { return res.status(404).json({ message: "Appointment not found" }); }

        appointment.status = "cancelled";

        await appointment.save();

        res.status(200).json({ message: "Appointment cancelled " });


    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}




// Student view appointments

export const viewStudentAppointments = async (req, res) => {

    try {
        const appointments = await Appointment.find({ studentId: req.user.id }).populate("professorId", "name email");

        res.status(200).json({ appointments });

    } catch (error) {
        res.status(500).json({ message: error.message  });
    }

}






















