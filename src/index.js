'use strict'

import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from './generated/prisma-client'
import { resolvers, fragmentReplacements } from './resolvers'
import { mergeSchemas, makeExecutableSchema } from 'graphql-tools'
import prismaSchema from './generated/prisma/prisma.graphql' 
import mainSchema from './schema.graphql'
import {initQueue} from './queue'

initQueue()

const prisma = new Prisma({ 
  debug: true 
})

// import FileHandler from './file-handler'



const schema = mergeSchemas({
  schemas: [
    // makeExecutableSchema({
    //   typeDefs: prismaSchema
    // }),
    makeExecutableSchema({
      typeDefs: mainSchema,
      resolvers: resolvers
    })
  ]
})

// how to expose only yoga stuff without copy & paste prisma stuff
const typeDefs = mainSchema; 
const server = new GraphQLServer({
  // schema,
  typeDefs: mainSchema,
  resolvers: resolvers,
  context: { prisma },
})

const options = { 
  port: 4100,
  playground: '/playground'
}

server.start(options, ({ port }) =>
  console.log(`Server is running on http://localhost:${port}`),
)

// upload file
// notify client by status update subscription
// return id & redirect