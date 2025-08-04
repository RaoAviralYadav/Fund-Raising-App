import express from 'express';
import { verifyToken } from './middleware/authMiddleware.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

app.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'You are verified', user: req.user });
});

app.get('/', (req, res) => {
  res.send('🚀 Server is running properly!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
