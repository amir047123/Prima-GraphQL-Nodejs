import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { schema } from './api';
import { context } from './context';
import logger from './utils/logger';

const app = express();

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({
    ...context,
    token: req.headers.authorization,
  }),
});

server.start().then(() => {
  // Explicitly assert the type of `server.app` as `Express.Application`
  (server as any).applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    logger.info(`Server ready at http://localhost:4000${server.graphqlPath}`);
  });
}).catch(err => {
  logger.error('Error starting server:', err);
});
