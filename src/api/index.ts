import { makeExecutableSchema } from '@graphql-tools/schema';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { userSchema } from './schemas/userSchema';
import { userResolver } from './resolvers/userResolver';

const typeDefs = mergeTypeDefs([userSchema]);
const resolvers = mergeResolvers([userResolver]);

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
