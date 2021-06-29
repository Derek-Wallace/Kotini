import mongoose from 'mongoose'
import { Value as ValueSchema } from '../models/Value'
import { AccountSchema } from '../models/Account'
import { SessionSchema } from '../models/Session'
import { ReactionGameSchema } from '../models/reactionGame'
import { AchievementsSchema } from '../models/Achievements'

class DbContext {
  Session = mongoose.model('Session', SessionSchema);

  Achievements = mongoose.model('Achievements', AchievementsSchema);

  ReactionGame = mongoose.model('ReactionGame', ReactionGameSchema);
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
