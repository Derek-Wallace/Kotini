import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AchievementsSchema = new Schema(
  {
    picasso: { type: Boolean, default: false },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
