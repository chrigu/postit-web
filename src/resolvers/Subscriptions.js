
const imageSubscriptions = {
    imageStatus: {
        subscribe: async (parent, args, ctx) => {
          return ctx.prisma.$subscribe
            .image({
              where: {
                mutation_in: ['UPDATED'],
                updatedFields_contains: 'status',
                node: {
                    id: args.id
                }
              },
            }).node()
        },
        resolve: payload => {
          return {
            id: payload.id,
            status: payload.status
          }
        },
      },
}

export default imageSubscriptions