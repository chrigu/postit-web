import { Project, projectQueries} from './Project'
import uploadMutations from './Upload'
import imageSubscriptions from './Subscriptions'
import { Image } from './Image'
import { ImageStatusReturnType } from './ImageStatusReturnType'

const Query = {
    ...projectQueries
}

const Mutation = {
  ...uploadMutations
}

const Subscription = {
  ...imageSubscriptions
}

const resolvers = {
  Project,
  Image,
  ImageStatusReturnType,
  Mutation,
  Query,
  Subscription
}

module.exports = {
  resolvers,
}