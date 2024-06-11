import prisma from '../config/prisma';

export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const createUser = async (name: string, email: string) => {
  return await prisma.user.create({
    data: { name, email },
  });
};
