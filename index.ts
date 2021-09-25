import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.post.update({
    where: {
      id: 1,
    },
    data: {
      published: true,
      content: 'Ops! I forgot content, here is it',
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
