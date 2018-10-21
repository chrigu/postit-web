'use strict'

import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import { resolvers, fragmentReplacements } from './resolvers'
import { mergeSchemas, makeExecutableSchema } from 'graphql-tools'
import prismaSchema from './generated/prisma/prisma.graphql' 
import mainSchema from './schema.graphql'
import express from 'express'
import http from 'http';
import SocketIO from 'socket.io';
import multer from 'multer'
import cors from 'cors'
import fs from 'fs'
import path from 'path'

// import FileHandler from './file-handler'
import {processImage, initQueue} from './queue'

// const fileHandler = new FileHandler()

// setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
  })
  
const upload = multer({storage: storage});

// app
const app = express();
// const httpServer = http.Server(app);
// const io = new SocketIO(httpServer);
// io.origins(['http://localhost:3000'])

// initQueue(clientuUpdate)

// let sockets = {};

// app.use(cors());
// app.use(express.static('uploads'))

// httpServer.listen(4000, function () {
//     console.log('listening on port 4000!');
// });

app.post('/upload', upload.single('file'), async (req, res) => {
// app.post('/recipe', async (req, res) => {
  // processImage(fileHandler.uploadFile(req.file.path), req.body.clientId)
  // io.to(req.body.clientId).emit('uploadState', 'hello')
  // res.sendStatus(200)
    // try {
    //   if (req.file) {
    //     const data = sendToApi(`./${req.file.path}`)
    //       .then( data => res.send(data) )
    //       .catch( () => res.sendStatus(401) )
    //   } else {
    //     res.sendStatus(401)
    //   }
    // } catch (err) {
    //     console.log(err)
    //     res.sendStatus(400)
    // }
})

// io.on('connection', function(socket) {
//   console.info(`Client connected [id=${socket.id}]`);
//   socket.emit('client_id', socket.id)
//   socket.send('socketId')
// });

// function clientuUpdate(message, clientId) {
//   console.log('sending to client', message)
//   io.to(clientId).emit('upload_state', message)
// }

// graphql
// const db = new Prisma({
//   fragmentReplacements,
//   endpoint: process.env.PRISMA_ENDPOINT,
//   secret: process.env.PRISMA_SECRET,
//   debug: true,
// })

const schema = mergeSchemas({
  schemas: [
    makeExecutableSchema({
      typeDefs: prismaSchema
    }),
    makeExecutableSchema({
      typeDefs: mainSchema,
      resolvers: resolvers
    })
  ]
})

const server = new GraphQLServer({
  schema,
  context: {prisma},
})

const options = { 
  port: 4000,
  playground: '/playground' 
}

server.start(options, ({ port }) =>
  console.log(`Server is running on http://localhost:${port}`),
)

// upload file
// notify client by status update subscription
// return id & redirect