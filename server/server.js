import express from 'express';
import { verifyToken } from './middleware/authMiddleware.js';
import dotenv from 'dotenv';
import { connectDB } from './db.js';
import { Goal } from './models/Goal.js';
import { UserPoints } from './models/UserPoints.js';
import cors from 'cors';

connectDB();

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'You are verified', user: req.user });
});

app.get('/', (req, res) => {
  res.send('🚀 Server is running properly!');
});

app.post('/submit-goal', verifyToken, async (req, res) => {
  const { title, description, points } = req.body;
  const uid = req.user.uid;

  if (!title || !description || !points) {
    return res.status(400).json({ error: 'All fields required' });
  }

  try {
    const goal = new Goal({ uid, title, description, points });
    await goal.save();

    let userPoints = await UserPoints.findOne({ uid });
    if (!userPoints) {
      userPoints = new UserPoints({ uid, points });
    } else {
      userPoints.points += points;
    }
    await userPoints.save();

    res.json({ message: 'Goal submitted & saved', totalPoints: userPoints.points });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

app.get('/leaderboard', async (req, res) => {
  try {
    const topUsers = await UserPoints.find()
      .sort({ points: -1 })
      .limit(20);

    res.json({ leaderboard: topUsers });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
