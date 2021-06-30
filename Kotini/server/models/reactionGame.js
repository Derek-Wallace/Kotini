import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ReactionGameSchema = new Schema(
  {
    results: { type: Array },
    players: { type: Array },
    ended: { type: Boolean, default: false },
    timeDelay: { type: Number, default: 1 },
    winnerId: { type: Schema.Types.ObjectId, default: null },
    winnerScore: { type: Number, default: null },
    sessionId: { type: String, required: true },
    title: { type: String, default: 'Quick Draw' },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

ReactionGameSchema.virtual('winner', {
  localField: 'winnerId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
