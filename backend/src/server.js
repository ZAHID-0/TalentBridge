import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.route.js';
import jobRoutes from './routes/job.route.js'
import applicationRoutes from './routes/application.route.js'
import { connectDB } from './lib/db.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);


app.listen(PORT, ()=>{
    console.log(`Server Running on PORT: ${PORT}`);
    connectDB();
});