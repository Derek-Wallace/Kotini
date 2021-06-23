import mongoose from 'mongoose'
import { Value as ValueSchema } from '../models/Value'
import { AccountSchema } from '../models/Account'
import { SessionSchema } from '../models/Session'
import { ReactionGameSchema } from '../models/reactionGame'

class DbContext {
  Session = mongoose.model('Session', SessionSchema);
  ReactionGame = mongoose.model('ReactionGame', ReactionGameSchema);
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
