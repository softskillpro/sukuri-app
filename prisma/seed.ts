import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
        data: {
            id: 'TESTUSERID', // your specific user id here
            name: 'Test User', // additional user fields here
            address: '0x1bf02AB7aA180A199F4712942912AFF1B45A4637',
            email: 'ic3nine8@proton.me'
        },
    });

    console.log({ user });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
