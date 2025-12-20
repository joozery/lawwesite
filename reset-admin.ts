import { prisma } from './src/lib/prisma';
import bcrypt from 'bcryptjs';
import 'dotenv/config';

async function main() {
    const email = 'admin@lawwesite.com';
    const password = 'password123';
    const name = 'Admin User';

    const hashedPassword = await bcrypt.hash(password, 10);

    // Try to find existing user first
    const existingUser = await prisma.user.findUnique({
        where: { email },
    });

    if (existingUser) {
        // Update password
        await prisma.user.update({
            where: { email },
            data: { password: hashedPassword },
        });
        console.log(`Updated password for user: ${email} to '${password}'`);
    } else {
        // Create new user
        await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                role: 'admin',
            },
        });
        console.log(`Created new admin user: ${email} with password: '${password}'`);
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
