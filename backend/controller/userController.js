import * as UserModel from '../model/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; // NAYA: Token generate karne ke liye

const UserController = {
    register: async (req, res) => {
        const { username, email, password } = req.body;

        try {
            // Check if user already exists
            const existingUser = await UserModel.findUserByEmail(email);
            if (existingUser) return res.status(400).json({ error: "Email already exists" });

            const hashedpassword = await bcrypt.hash(password, 10);
            
            await UserModel.createUser(username, email, hashedpassword);
            res.status(201).json({ message: 'User registered successfully' });

        } catch (error) {
            console.error("Server Error:", error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    login: async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await UserModel.findUserByEmail(email);
            
            if (!user) return res.status(404).json({ error: 'User Not Found' });

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(401).json({ error: 'Incorrect password' });

            //jwt token

const token = jwt.sign(
    { id: user.id, role: user.role || 'user' }, // Agar role nahi hai toh default 'user' maan lega
    process.env.JWT_SECRET || 'your_secret_key', 
    { expiresIn: '1h' }
);

            //response including token and user details 

            res.status(200).json({
                message: 'Login Successful',
                token: token, 
                user: { id: user.id, username: user.username, email: user.email, role: user.role }
            });

        } catch (error) {
            console.error("Server Error:", error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    getAllUsers: async (req, res) => {
        try{
            const users = await UserModel.getAllUsers();
            res.status(200).json(users);
        }catch(error){
            console.error("Server Error:", error);
            res.status(500).json({ error: 'Server error' });
        }
    }
};

export default UserController;