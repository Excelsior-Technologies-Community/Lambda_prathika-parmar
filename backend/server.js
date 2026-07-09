import cors from 'cors';

import express from 'express';
import authRoutes from './routes/authRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import contactRoutes from './routes/conatctRoutes.js';


const app = express();

app.use(cors());
app.use(express.json());



app.use('/api/users', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/contact', contactRoutes);

// server.js mein add karein
// console.log(authRoutes.stack.map(r => r.route.path));

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});