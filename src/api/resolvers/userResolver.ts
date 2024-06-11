import { getUserById, getAllUsers, createUser } from '../../models/userModel';

export const userResolver = {
  Query: {
    getUser: async (_: any, { id }: { id: string }) => {
      return await getUserById(id);
    },
    getUsers: async () => {
      return await getAllUsers();
    },
  },
  Mutation: {
    createUser: async (_: any, { name, email }: { name: string, email: string }) => {
      return await createUser(name, email);
    },
  },
};
