'use strict'

import express from 'express'
import http from 'http';
import SocketIO from 'socket.io';
import multer from 'multer'
import cors from 'cors'
import fs from 'fs'
import path from 'path'

import FileHandler from './file-handler'
import {processImage, initQueue} from './queue'

const fileHandler = new FileHandler()

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
const server = http.Server(app);
const io = new SocketIO(server);
io.origins(['http://localhost:3000'])

initQueue(clientuUpdate)

let sockets = {};

app.use(cors());
app.use(express.static('uploads'))

server.listen(4000, function () {
    console.log('listening on port 4000!');
});

app.post('/upload', upload.single('file'), async (req, res) => {
// app.post('/recipe', async (req, res) => {
  processImage(fileHandler.uploadFile(req.file.path), req.body.clientId)
  io.to(req.body.clientId).emit('uploadState', 'hello')
  res.sendStatus(200)
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

io.on('connection', function(socket) {
  console.info(`Client connected [id=${socket.id}]`);
  socket.emit('client_id', socket.id)
  socket.send('socketId')
});

function clientuUpdate(message, clientId) {
  console.log('sending to client', message)
  io.to(clientId).emit('upload_state', message)
}