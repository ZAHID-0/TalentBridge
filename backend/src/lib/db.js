import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MONGODB CONNECTED: `,conn.connection.host);
    } catch (error) {
        console.error('Error Connecting to mongodb ', error);
        process.exit(1);
    }
}  