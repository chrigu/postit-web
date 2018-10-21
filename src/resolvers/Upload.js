import * as shortid from 'shortid'
import { createWriteStream } from 'fs' 
const uploadDir = './uploads'

const Mutation = {
    singleUpload: (obj, { file }, ctx, info) => processUpload(file, ctx, obj, info),
    multipleUpload: (obj, { files }) => Promise.all(files.map(processUpload)),
}

export default Mutation

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

const processUpload = async (upload, ctx, obj, info) => {
    const { stream, filename, mimetype, encoding } = await upload
    const { id, path } = await storeUpload({ stream, filename })
    // console.log({ id, filename, mimetype, encoding, path })
    ctx.prisma.createImage({ data: { url: path, detecedText: 'test',  createdAt: Date.now()} })
    return Promise.resolve({ id, filename, mimetype, encoding, path });
  }