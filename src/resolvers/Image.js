const fragment = `
  fragment ImageWithPostits on Image {
    id
    url
    height
    status
    width
    postits {
      id
      url
      height
      width
      x
      y
      detectedText
    }
  }
`

export const Image = {
    id: image => image.id,
    createdAt: image => image.createdAt,
    status: image => image.status,
    url: image => image.url,
    height: image => image.height,
    width: image => image.width,
    postits: image => image.postits
}

export const imageQueries = {
  postitsForImage: (root, args, ctx, info) => ctx.prisma.postits({ 
    where: {
      image: {
        id: args.id
      }
    }
  }, info),
  imageWithPostits: (root, args, ctx, info) => ctx.prisma.image({
    id: args.id
  }).$fragment(fragment),
  image: (root, args, ctx, info) => ctx.prisma.image({ 
    id: args.id
  }, info) 
}