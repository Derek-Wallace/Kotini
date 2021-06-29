import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ReactionGameSchema = new Schema(
  {
    results: { type: Array },
    ended: { type: Boolean, default: false },
    timeDelay: { type: Number, default: 1 },
    sessionId: { type: String, required: true },
    title: { type: String, default: 'Quick Draw' },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
