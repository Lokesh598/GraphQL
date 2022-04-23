const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/typedef");
const { resolvers } = require("./schema/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// server.listen().then(({ url }) => {
//   console.log(`YOUR API IS RUNNING AT: ${url} :)`);
// });

server.listen(process.env.PORT || 8080).then(({ url }) => {
    console.log(`YOUR API IS RUNNING AT: ${url} :)`);
});