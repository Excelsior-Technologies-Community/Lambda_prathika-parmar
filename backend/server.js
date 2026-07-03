import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import courseRoutes from './routes/courseRoutes.js';


const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/users', authRoutes);
app.use('/api/courses', courseRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});