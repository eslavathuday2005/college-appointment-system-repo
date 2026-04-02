
import Availability from "../models/Availability.js";



// Add availability
export const addAvailability = async (req, res) => {

    try {

        const { date, slots } = req.body;

        if (!date || !slots || !Array.isArray(slots) || slots.length === 0) {
            return res.status(400).json({ message: "Date and slots are required" });
        }

        const availability = await Availability.create({
            professorId: req.user.id,
            date,
            slots
        });

        res.status(201).json({ message: "Availability added", availability });


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



// Get professor availability
export const getAvailability = async (req, res) => {

    try {

        const availability = await Availability.find({ professorId: req.params.professorId });

        res.status(200).json({ availability });

    } catch (error) {

        res.status(500).json({ message: error.message });

    }

}



















































