import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AchievementsSchema = new Schema(
  {
    picasso: { type: Boolean, default: false },
    gettingHorns: { type: Boolean, default: false },
    createGame: { type: Boolean, default: false },
    outOfShell: { type: Boolean, default: false },
    findingFeet: { type: Boolean, default: false },
    scout: { type: Boolean, default: false },
    soldier: { type: Boolean, default: false },
    raider: { type: Boolean, default: false },
    captain: { type: Boolean, default: false },
    warlord: { type: Boolean, default: false },
    climbingRanks: { type: Boolean, default: false },
    secondToNone: { type: Boolean, default: false },
    sharpshooter: { type: Boolean, default: false },
    bitw: { type: Boolean, default: false },
    completionist: { type: Boolean, default: false },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
