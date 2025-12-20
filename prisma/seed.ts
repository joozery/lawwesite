import { PrismaClient } from '../src/generated/prisma/client'
import bcrypt from 'bcryptjs'
import 'dotenv/config'

const prisma = new PrismaClient()

async function main() {
    const email = 'admin@lawwesite.com'
    const password = 'password123'
    const name = 'Super Admin'

    const hashedPassword = await bcrypt.hash(password, 10)

    const existingUser = await prisma.user.findUnique({
        where: { email },
    })

    if (existingUser) {
        console.log('Admin user already exists.')
        return
    }

    const user = await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            name,
            role: 'admin',
        },
    })

    console.log(`Created admin user: ${user.email} with password: ${password}`)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
