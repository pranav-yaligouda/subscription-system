import express from 'express';
import { PORT } from './config/env.js';
import connectToDatabase from './database/mongodb.js';
import userRouter from './routes/userroutes.js';
import authRouter from './routes/authroutes.js';
import subscriptionRouter from './routes/subscriptionroutes.js';

const app = express();

app.get('/', (req, res) => {
    return res.send('Welcome to the Subscription Tracker API');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);


app.listen(PORT, async () => {
    console.log(`Server is listening on port ${PORT} at http://localhost:${PORT}`);
    
    await connectToDatabase();
});

export default app;