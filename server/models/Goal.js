import mongoose from 'mongoose';

const goalSchema = new mongoose.Schema({
  uid: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  points: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

export const Goal = mongoose.model('Goal', goalSchema);
