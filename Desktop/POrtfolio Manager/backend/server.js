import express from 'express';
import { connectDb } from './config/db.js';

const app = express();

app.use(express.json());
app.use('/')

connectDb().then(() => {
    app.listen(5001 ,() => {
    console.log("Server is running on port 5001");
    });
});