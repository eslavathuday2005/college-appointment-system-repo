import User from "../models/User.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//registerUser
export const registerUser = async (req, res) => {


    try {


        const { name, email, password, role } = req.body;

        const exists = await User.findOne({ email });


        if (exists) {
            return res.status(400).json({ message: "User already exists" });
        }


        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Please enter a valid email" });
        }

        if (password.length < 4) {
            return res.status(400).json({ message: "Please enter a strong password" });
        }


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const newUser = new User({ name, email, password: hashedPassword, role });

        const user = await newUser.save();


        //const token = GenToken(user._id);, token

        res.status(201).json({ message: "User registered successfully", user });


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }

}





//Login 
export const loginUser = async (req, res) => {

    try {

        //console.log("loginUser called successfully");     

        const { email, password } = req.body;

        //console.log("Email:", email);
        //console.log("Password:", password);



        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }


        const token = jwt.sign(
            { id: user._id, role: user.role }, process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({ message: "Login successful", token });


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }

}








































