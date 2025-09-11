import express from 'express';
import { PORT } from './config/env.js';


const app = express();


app.get('/', (req, res) => {
    return res.send('Welcome to the Subscription Tracker API');
});

app.listen(PORT,() => {
    console.log(`Server is listening on port ${PORT} at http://localhost:${PORT}`)
});

export default app;