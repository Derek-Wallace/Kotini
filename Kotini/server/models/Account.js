import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    wallet: { type: Number, default: 200 },
    gamesPlayed: { type: Number, default: 0 },
    currentSession: { type: String, default: null },
    currentGame: { type: String, default: null }
    // NOTE If you wish to add additional public properties for Accounts do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
