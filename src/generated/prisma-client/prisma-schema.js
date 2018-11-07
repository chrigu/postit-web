module.exports = {
        typeDefs: /* GraphQL */ `type AggregateImage {
  count: Int!
}

type AggregatePostit {
  count: Int!
}

type AggregateProject {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Image {
  id: ID!
  url: String!
  detectedText: String!
  createdAt: DateTime!
  project: Project
  status: String!
  width: Int
  height: Int
  postits(where: PostitWhereInput, orderBy: PostitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Postit!]
}

type ImageConnection {
  pageInfo: PageInfo!
  edges: [ImageEdge]!
  aggregate: AggregateImage!
}

input ImageCreateInput {
  url: String!
  detectedText: String!
  project: ProjectCreateOneInput
  status: String!
  width: Int
  height: Int
  postits: PostitCreateManyWithoutImageInput
}

input ImageCreateOneWithoutPostitsInput {
  create: ImageCreateWithoutPostitsInput
  connect: ImageWhereUniqueInput
}

input ImageCreateWithoutPostitsInput {
  url: String!
  detectedText: String!
  project: ProjectCreateOneInput
  status: String!
  width: Int
  height: Int
}

type ImageEdge {
  node: Image!
  cursor: String!
}

enum ImageOrderByInput {
  id_ASC
  id_DESC
  url_ASC
  url_DESC
  detectedText_ASC
  detectedText_DESC
  createdAt_ASC
  createdAt_DESC
  status_ASC
  status_DESC
  width_ASC
  width_DESC
  height_ASC
  height_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ImagePreviousValues {
  id: ID!
  url: String!
  detectedText: String!
  createdAt: DateTime!
  status: String!
  width: Int
  height: Int
}

type ImageSubscriptionPayload {
  mutation: MutationType!
  node: Image
  updatedFields: [String!]
  previousValues: ImagePreviousValues
}

input ImageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ImageWhereInput
  AND: [ImageSubscriptionWhereInput!]
  OR: [ImageSubscriptionWhereInput!]
  NOT: [ImageSubscriptionWhereInput!]
}

input ImageUpdateInput {
  url: String
  detectedText: String
  project: ProjectUpdateOneInput
  status: String
  width: Int
  height: Int
  postits: PostitUpdateManyWithoutImageInput
}

input ImageUpdateOneWithoutPostitsInput {
  create: ImageCreateWithoutPostitsInput
  update: ImageUpdateWithoutPostitsDataInput
  upsert: ImageUpsertWithoutPostitsInput
  delete: Boolean
  disconnect: Boolean
  connect: ImageWhereUniqueInput
}

input ImageUpdateWithoutPostitsDataInput {
  url: String
  detectedText: String
  project: ProjectUpdateOneInput
  status: String
  width: Int
  height: Int
}

input ImageUpsertWithoutPostitsInput {
  update: ImageUpdateWithoutPostitsDataInput!
  create: ImageCreateWithoutPostitsInput!
}

input ImageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  detectedText: String
  detectedText_not: String
  detectedText_in: [String!]
  detectedText_not_in: [String!]
  detectedText_lt: String
  detectedText_lte: String
  detectedText_gt: String
  detectedText_gte: String
  detectedText_contains: String
  detectedText_not_contains: String
  detectedText_starts_with: String
  detectedText_not_starts_with: String
  detectedText_ends_with: String
  detectedText_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  project: ProjectWhereInput
  status: String
  status_not: String
  status_in: [String!]
  status_not_in: [String!]
  status_lt: String
  status_lte: String
  status_gt: String
  status_gte: String
  status_contains: String
  status_not_contains: String
  status_starts_with: String
  status_not_starts_with: String
  status_ends_with: String
  status_not_ends_with: String
  width: Int
  width_not: Int
  width_in: [Int!]
  width_not_in: [Int!]
  width_lt: Int
  width_lte: Int
  width_gt: Int
  width_gte: Int
  height: Int
  height_not: Int
  height_in: [Int!]
  height_not_in: [Int!]
  height_lt: Int
  height_lte: Int
  height_gt: Int
  height_gte: Int
  postits_every: PostitWhereInput
  postits_some: PostitWhereInput
  postits_none: PostitWhereInput
  AND: [ImageWhereInput!]
  OR: [ImageWhereInput!]
  NOT: [ImageWhereInput!]
}

input ImageWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createImage(data: ImageCreateInput!): Image!
  updateImage(data: ImageUpdateInput!, where: ImageWhereUniqueInput!): Image
  updateManyImages(data: ImageUpdateInput!, where: ImageWhereInput): BatchPayload!
  upsertImage(where: ImageWhereUniqueInput!, create: ImageCreateInput!, update: ImageUpdateInput!): Image!
  deleteImage(where: ImageWhereUniqueInput!): Image
  deleteManyImages(where: ImageWhereInput): BatchPayload!
  createPostit(data: PostitCreateInput!): Postit!
  updatePostit(data: PostitUpdateInput!, where: PostitWhereUniqueInput!): Postit
  updateManyPostits(data: PostitUpdateInput!, where: PostitWhereInput): BatchPayload!
  upsertPostit(where: PostitWhereUniqueInput!, create: PostitCreateInput!, update: PostitUpdateInput!): Postit!
  deletePostit(where: PostitWhereUniqueInput!): Postit
  deleteManyPostits(where: PostitWhereInput): BatchPayload!
  createProject(data: ProjectCreateInput!): Project!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateManyProjects(data: ProjectUpdateInput!, where: ProjectWhereInput): BatchPayload!
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Postit {
  id: ID!
  image: Image
  url: String!
  detectedText: String
  x: Int!
  y: Int!
  width: Int!
  height: Int!
}

type PostitConnection {
  pageInfo: PageInfo!
  edges: [PostitEdge]!
  aggregate: AggregatePostit!
}

input PostitCreateInput {
  image: ImageCreateOneWithoutPostitsInput
  url: String!
  detectedText: String
  x: Int!
  y: Int!
  width: Int!
  height: Int!
}

input PostitCreateManyWithoutImageInput {
  create: [PostitCreateWithoutImageInput!]
  connect: [PostitWhereUniqueInput!]
}

input PostitCreateWithoutImageInput {
  url: String!
  detectedText: String
  x: Int!
  y: Int!
  width: Int!
  height: Int!
}

type PostitEdge {
  node: Postit!
  cursor: String!
}

enum PostitOrderByInput {
  id_ASC
  id_DESC
  url_ASC
  url_DESC
  detectedText_ASC
  detectedText_DESC
  x_ASC
  x_DESC
  y_ASC
  y_DESC
  width_ASC
  width_DESC
  height_ASC
  height_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostitPreviousValues {
  id: ID!
  url: String!
  detectedText: String
  x: Int!
  y: Int!
  width: Int!
  height: Int!
}

type PostitSubscriptionPayload {
  mutation: MutationType!
  node: Postit
  updatedFields: [String!]
  previousValues: PostitPreviousValues
}

input PostitSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostitWhereInput
  AND: [PostitSubscriptionWhereInput!]
  OR: [PostitSubscriptionWhereInput!]
  NOT: [PostitSubscriptionWhereInput!]
}

input PostitUpdateInput {
  image: ImageUpdateOneWithoutPostitsInput
  url: String
  detectedText: String
  x: Int
  y: Int
  width: Int
  height: Int
}

input PostitUpdateManyWithoutImageInput {
  create: [PostitCreateWithoutImageInput!]
  delete: [PostitWhereUniqueInput!]
  connect: [PostitWhereUniqueInput!]
  disconnect: [PostitWhereUniqueInput!]
  update: [PostitUpdateWithWhereUniqueWithoutImageInput!]
  upsert: [PostitUpsertWithWhereUniqueWithoutImageInput!]
}

input PostitUpdateWithoutImageDataInput {
  url: String
  detectedText: String
  x: Int
  y: Int
  width: Int
  height: Int
}

input PostitUpdateWithWhereUniqueWithoutImageInput {
  where: PostitWhereUniqueInput!
  data: PostitUpdateWithoutImageDataInput!
}

input PostitUpsertWithWhereUniqueWithoutImageInput {
  where: PostitWhereUniqueInput!
  update: PostitUpdateWithoutImageDataInput!
  create: PostitCreateWithoutImageInput!
}

input PostitWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  image: ImageWhereInput
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  detectedText: String
  detectedText_not: String
  detectedText_in: [String!]
  detectedText_not_in: [String!]
  detectedText_lt: String
  detectedText_lte: String
  detectedText_gt: String
  detectedText_gte: String
  detectedText_contains: String
  detectedText_not_contains: String
  detectedText_starts_with: String
  detectedText_not_starts_with: String
  detectedText_ends_with: String
  detectedText_not_ends_with: String
  x: Int
  x_not: Int
  x_in: [Int!]
  x_not_in: [Int!]
  x_lt: Int
  x_lte: Int
  x_gt: Int
  x_gte: Int
  y: Int
  y_not: Int
  y_in: [Int!]
  y_not_in: [Int!]
  y_lt: Int
  y_lte: Int
  y_gt: Int
  y_gte: Int
  width: Int
  width_not: Int
  width_in: [Int!]
  width_not_in: [Int!]
  width_lt: Int
  width_lte: Int
  width_gt: Int
  width_gte: Int
  height: Int
  height_not: Int
  height_in: [Int!]
  height_not_in: [Int!]
  height_lt: Int
  height_lte: Int
  height_gt: Int
  height_gte: Int
  AND: [PostitWhereInput!]
  OR: [PostitWhereInput!]
  NOT: [PostitWhereInput!]
}

input PostitWhereUniqueInput {
  id: ID
}

type Project {
  id: ID!
  name: String!
  url: String!
  createdAt: DateTime!
}

type ProjectConnection {
  pageInfo: PageInfo!
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  name: String!
  url: String!
}

input ProjectCreateOneInput {
  create: ProjectCreateInput
  connect: ProjectWhereUniqueInput
}

type ProjectEdge {
  node: Project!
  cursor: String!
}

enum ProjectOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProjectPreviousValues {
  id: ID!
  name: String!
  url: String!
  createdAt: DateTime!
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
  AND: [ProjectSubscriptionWhereInput!]
  OR: [ProjectSubscriptionWhereInput!]
  NOT: [ProjectSubscriptionWhereInput!]
}

input ProjectUpdateDataInput {
  name: String
  url: String
}

input ProjectUpdateInput {
  name: String
  url: String
}

input ProjectUpdateOneInput {
  create: ProjectCreateInput
  update: ProjectUpdateDataInput
  upsert: ProjectUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ProjectWhereUniqueInput
}

input ProjectUpsertNestedInput {
  update: ProjectUpdateDataInput!
  create: ProjectCreateInput!
}

input ProjectWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [ProjectWhereInput!]
  OR: [ProjectWhereInput!]
  NOT: [ProjectWhereInput!]
}

input ProjectWhereUniqueInput {
  id: ID
}

type Query {
  image(where: ImageWhereUniqueInput!): Image
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image]!
  imagesConnection(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImageConnection!
  postit(where: PostitWhereUniqueInput!): Postit
  postits(where: PostitWhereInput, orderBy: PostitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Postit]!
  postitsConnection(where: PostitWhereInput, orderBy: PostitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostitConnection!
  project(where: ProjectWhereUniqueInput!): Project
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  image(where: ImageSubscriptionWhereInput): ImageSubscriptionPayload
  postit(where: PostitSubscriptionWhereInput): PostitSubscriptionPayload
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    