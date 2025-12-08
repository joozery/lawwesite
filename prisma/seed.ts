import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10);

    await prisma.user.upsert({
        where: { email: 'admin@legalpartners.com' },
        update: {},
        create: {
            email: 'admin@legalpartners.com',
            password: hashedPassword,
            name: 'Admin User',
            role: 'admin',
        },
    });

    // Create sample news
    await prisma.news.createMany({
        data: [
            {
                title: 'New Corporate Law Updates for 2024',
                slug: 'corporate-law-updates-2024',
                excerpt: 'Important changes in corporate regulations that businesses need to know.',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Detailed analysis of the new corporate law changes...',
                category: 'Corporate Law',
                published: true,
                publishedAt: new Date(),
            },
            {
                title: 'Understanding Family Law Mediation',
                slug: 'family-law-mediation',
                excerpt: 'How mediation can help resolve family disputes effectively.',
                content: 'Mediation is an effective alternative to litigation in family law cases...',
                category: 'Family Law',
                published: true,
                publishedAt: new Date(),
            },
        ],
        skipDuplicates: true,
    });

    console.log('Database seeded successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
