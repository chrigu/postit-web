import { Project, projectQueries} from './Project'
import uploadMutations from './Upload'
import imageSubscriptions from './Subscriptions'
import { Image, imageQueries } from './Image'
import { ImageStatusReturnType } from './ImageStatusReturnType'
import { Postit } from './Postit'

const Query = {
    ...projectQueries,
    ...imageQueries
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
  Postit,
  Mutation,
  Query,
  Subscription
}

module.exports = {
  resolvers,
}