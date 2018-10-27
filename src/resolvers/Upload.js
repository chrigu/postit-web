import * as shortid from 'shortid'
import { createWriteStream } from 'fs' 
const uploadDir = './uploads'

const uploadMutations = {
    singleUpload: (obj, { file, projectId }, ctx, info) => processUpload(file, ctx, obj, info, projectId),
    createProject: (root, args, ctx, info) => {
      console.log('some', args, ctx)
      return ctx.prisma.createProject({ name: args.name, url: '/test'}, info)
    },
}

export default uploadMutations

const storeUpload = async ({ stream, filename }) => {
    const id = shortid.generate()
    const path = `${uploadDir}/${id}-${filename}`
  
    return new Promise((resolve, reject) =>
      stream
        .pipe(createWriteStream(path))
        .on('finish', () => resolve({ id, path }))
        .on('error', reject),
    )
  }

const processUpload = async (upload, ctx, obj, info, projectId) => {
    const { stream, filename, mimetype, encoding } = await upload
    const { id, path } = await storeUpload({ stream, filename })
    // console.log({ id, filename, mimetype, encoding, path })
    return ctx.prisma.createImage( { 
      url: path, 
      detectedText: 'test',  
      project: {
          connect: {
            id: projectId
          }
        },
        status:"Uploaded" 
      })
    // return Promise.resolve({ id, url: path });
  }