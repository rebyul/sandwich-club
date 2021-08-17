import { PrismaClient } from '@prisma/client';

export const createUser = async (
  id: string,
  firstname: string,
  lastname: string,
  prisma: PrismaClient
) => {
  if (!firstname) {
    throw new Error('Firstname must not be empty');
  }
  if (!lastname) {
    throw new Error('Lastname must not be empty');
  }
  return await prisma.user.create({ data: { id, firstname, lastname } });
};
