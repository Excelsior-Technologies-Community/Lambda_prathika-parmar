import UserModel from '../model/UserModel';
import  bcrypt  from 'bcryptjs';

const userController = {
    register: async (req, res) => {
        const { name, email, password } = req.body;

        try {
            // Callback ki jagah Promise ka use karein
            UserModel.findByEmail(email, async (err, results) => {
                if (err) return res.status(500).json({ error: 'Database error' });
                if (results.length > 0) return res.status(400).json({ error: "Email already exists" });

                // Ab yeh code sahi chalega
                const salt = await bcrypt.genSalt(10);
                const hashedpassword = await bcrypt.hash(password, salt);

                UserModel.createUser(name, email, hashedpassword, (err, results) => {
                    if (err) return res.status(500).json({ error: "Failed to create user" });
                    res.status(201).json({ message: "Email Registered successfully" });
                });
            });
        } catch (error) {
            res.status(500).json({ error: "Server error" });
        }
    },

    login: async (req, res) => {
        const { email, password } = req.body;

        try {
            UserModel.findByEmail(email, async (err, results) => {
                if (err) return res.status(500).json({ error: "Database error" });
                if (results.length === 0) return res.status(404).json({ error: "User Not Found" });

                const user = results[0];

                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) return res.status(401).json({ error: "Incorrect Password" });
                
                res.status(200).json({
                    message: "Login successful",
                    user: { id: user.id, name: user.name, email: user.email }
                });
            });
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    }
};

module.exports = userController;