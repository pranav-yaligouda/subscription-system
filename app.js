import express from 'express';
import { PORT } from './config/env.js';
import userRouter from './routes/userroutes.js';
import authRouter from './routes/authroutes.js';
import subscriptionRouter from './routes/subscriptionroutes.js';

const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.get('/', (req, res) => {
    return res.send('Welcome to the Subscription Tracker API');
});

app.listen(PORT,() => {
    console.log(`Server is listening on port ${PORT} at http://localhost:${PORT}`)
});

export default app;