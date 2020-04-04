import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import cors from 'cors';
import models, { sequelize } from '../models';

const app = express();
app.use(cors());
const port = process.env.PORT || 8000;

const schema = gql`
  type Query {
    me: User
  }
  type User {
    username: String!
  }
`;

const resolvers = {
  Query: {
    me: () => {
      return {
        username: 'Eric Madureira Argolo',
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

sequelize.sync().then(async () => {
  app.listen(port, () => console.log(`Apollo Server on http://localhost:${port}/graphql`));
});
