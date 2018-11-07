import * as shortid from 'shortid'
import { createWriteStream } from 'fs' 
import {processImage} from '../queue'

const uploadDir = './uploads'

const uploadMutations = {
    singleUpload: (obj, { file, projectId }, ctx, info) => processUpload(file, ctx, obj, info, projectId),
    createProject: (root, args, ctx, info) => {
      return ctx.prisma.createProject({ name: args.name, url: '/test'}, info)
    },
}

export default uploadMutations

const storeUpload = async ({ stream, filename }) => {
    const id = shortid.generate()
    const newFilename = `${id}-${filename}`
    const path = `${uploadDir}/${newFilename}`
    const url = `http://localhost:4000/${newFilename}`
  
    return new Promise((resolve, reject) =>
      stream
        .pipe(createWriteStream(path))
        .on('finish', () => resolve({ id, path, url }))
        .on('error', reject),
    )
  }

const processUpload = async (upload, ctx, obj, info, projectId) => {
    const { stream, filename, mimetype, encoding } = await upload
    const { id, path, url } = await storeUpload({ stream, filename })
    // console.log({ id, filename, mimetype, encoding, path })
    return ctx.prisma.createImage( { 
      url: url, 
      detectedText: '',  
      project: {
          connect: {
            id: projectId
          }
        },
        status: "Uploaded" 
      })
      .then((data) => {
        console.log("uploaded", data)
        processImage(data.id, url) // Todo: use url not path
        return data
      })
    // return Promise.resolve({ id, url: path });
  }