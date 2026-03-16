import express from 'express';
import { connectDb } from './config/db.js';
import notesRoutes from './routes/notesRoutes.js'

const app = express();

app.use(express.json());
app.use('/api/portfolio', notesRoutes);

connectDb().then(() => {
    app.listen(5001 ,() => {
    console.log("Server is running on port 5001");
    });
});