import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const MessageSchema = new Schema(
  {
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    sessionKey: { type: String, required: true },
    message: { type: String, required: true },
    botMessage: { type: Boolean, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
MessageSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
