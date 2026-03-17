import express from 'express';
import './config/firebase.js';
import notesRoutes from './routes/notesRoutes.js';
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors({
    origin: [
        "http://localhost:5174",
        "http://localhost:5173",                            // Local development
        "https://finance-portfolio-manager.onrender.com",        // Your future Render URL
        "https://finance-portfolio-manager.vercel.app"      // Or your Vercel URL
    ],
    credentials: true
}));

app.use('/api/portfolio', notesRoutes);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
