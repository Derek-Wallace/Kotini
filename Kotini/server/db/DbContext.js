import mongoose from 'mongoose'
import { Value as ValueSchema } from '../models/Value'
import { AccountSchema } from '../models/Account'
import { SessionSchema } from '../models/Session'
import { ReactionGameSchema } from '../models/reactionGame'
import { AchievementsSchema } from '../models/Achievements'
import { MessageSchema } from '../models/Message'

class DbContext {
  Session = mongoose.model('Session', SessionSchema);

  Achievements = mongoose.model('Achievements', AchievementsSchema);

  ReactionGame = mongoose.model('ReactionGame', ReactionGameSchema);
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Message = mongoose.model('Message', MessageSchema);
}

export const dbContext = new DbContext()
