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
  
  const recordFile = file =>
    db
      .get('uploads')
      .push(file)
      .last()
      .write()
  
  const processUpload = async upload => {
    console.log('upload')
    const { stream, filename, mimetype, encoding } = await upload
    const { id, path } = await storeUpload({ stream, filename })
    return recordFile({ id, filename, mimetype, encoding, path })
  }