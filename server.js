const { ApolloServer, gql } = require('apollo-server');
const fs = require("fs")

const schema = fs.readFileSync("./schema.graphql", 'utf8')

const server = new ApolloServer({
  typeDefs: schema,
  mocks: true,
});

const port = process.env.SERVER_PORT || 3005
server.listen(port).then(({
  url
}) => {
  console.log(`🚀 Server ready at ${url}`)
});
