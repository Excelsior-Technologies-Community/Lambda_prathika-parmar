import express  from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

import userRoutes from './controller/userController';

app.use('/api/users', userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});