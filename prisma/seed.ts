const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const bouygues = await prisma.category.create({
    data: {
      name: 'Bouygues',
      slug: 'bouygues',
    },
  })
  const orange = await prisma.category.create({
    data: {
      name: 'Orange',
      slug: 'orange',
    },
  })
  const free = await prisma.category.create({
    data: {
      name: 'Free',
      slug: 'free',
    },
  })

  const sfr = await prisma.category.create({
    data: {
      name: 'Sfr',
      slug: 'sfr',
    },
  })

  console.log({ bouygues, orange, free, sfr })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })