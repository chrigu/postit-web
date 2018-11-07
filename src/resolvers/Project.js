export const Project = {
    id: project => project.id,
    createdAt: project => project.createdAt,
    name: project => project.name,
    url: project => project.url,
}
  
export const projectQueries = {
  getProject: (root, args, ctx, info) => ctx.prisma.project({ id: args.id }, info),
}