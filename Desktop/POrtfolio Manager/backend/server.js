import express from 'express';
import './config/firebase.js';
import notesRoutes from './routes/notesRoutes.js';
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use('/api/portfolio', notesRoutes);

app.listen(5001 ,() => {
    console.log("Server is running on port 5001");
});
