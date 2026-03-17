import express from 'express';
import './config/firebase.js';
import notesRoutes from './routes/notesRoutes.js';
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173"
}));
app.use('/api/portfolio', notesRoutes);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
