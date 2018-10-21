const Project = {
    id: project => project.id,
    createdAt: project => project.createdAt,
    name: project => project.name,
    url: parent => parent.url,
  }
  
export default Project