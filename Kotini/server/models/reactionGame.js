import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ReactionGameSchema = new Schema(
  {
    results: { type: Array },
    title: { type: String, default: 'Quick Draw' },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
