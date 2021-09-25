import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: 'Guilhermo',
      email: 'guilhermo@gmail.com',
      posts: {
        create: { title: 'First one' },
      },
      profile: {
        create: { bio: 'Just a young developer' },
      },
    },
  });

  const users = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.dir(users, { depth: null });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => await prisma.$disconnect());
