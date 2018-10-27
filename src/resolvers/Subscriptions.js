// export const WEATHER_LOCATION = gql`
//     query ($id: ID!) {
//     image(where: {id: $id}) {
//         status
//     }
// }
// `


const imageSubscriptions = {
    imageStatus: {
        subscribe: async (parent, args, ctx) => {
          return ctx.prisma.$subscribe
            .image({
              where: {
                mutation_in: ['UPDATED'],
                node: {
                    id: args.id
                }
              },
            }).node().status() // why dows node not return an object with the status property?
        },
        resolve: (payload, args, context, info) => { // hackish solution as the above won't work
          return {
            id: args.where,
            status: payload
          }
        },
      },
}

export default imageSubscriptions