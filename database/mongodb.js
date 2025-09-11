import mongoose from 'mongoose';
import { MONGODB_URI, NODE_ENV } from '../config/env.js';

if(!MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined in the environment variables inside .env.<development/production>.local');
}


const connectToDatabase = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log(`Connected to Database in ${NODE_ENV} mode`);
    } catch (error){
        console.error('Error connecting to Database:', error);
        process.exit(1); // Exit process with failure
    }
}

export default connectToDatabase;