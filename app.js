import express from 'express';
import cookieParser from 'cookie-parser';
import { PORT } from './config/env.js';
import connectToDatabase from './database/mongodb.js';
import userRouter from './routes/userroutes.js';
import authRouter from './routes/authroutes.js';
import subscriptionRouter from './routes/subscriptionroutes.js';
import errorMiddleware from './middlewares/error.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
    return res.send('Welcome to the Subscription Tracker API');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.use(errorMiddleware);

app.listen(PORT, async () => {
    console.log(`Server is listening on port ${PORT} at http://localhost:${PORT}`);
    
    await connectToDatabase();
});

export default app;