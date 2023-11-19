import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main()
{
    // User Types
    const user_types = [
        { 
            id: 1,
            name: 'Administrador'
        },
        {
            id: 2,
            name: 'Usuário'
        }
    ];
    for (const row of user_types)
    {
        await prisma.userType.upsert({
            where: { id: row.id },
            update: {},
            create: {
                id: row.id,
                name: row.name,
            },
        });
    }
    
    // Users
    await prisma.user.upsert({
        where: { email: 'adm@admin.com' },
        update: {},
        create: {
            email: 'adm@admin.com',
            password: '123456',
            userTypeId: 1,
        },
    });
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