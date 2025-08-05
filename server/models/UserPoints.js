import mongoose from 'mongoose';

const userPointsSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  points: { type: Number, default: 0 }
});

export const UserPoints = mongoose.model('UserPoints', userPointsSchema);
