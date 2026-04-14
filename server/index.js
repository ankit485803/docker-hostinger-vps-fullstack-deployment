import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Load env variables
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// API routes
app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from chai aur code server" });
});

// Use PORT from .env
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});