import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth'; // Optional: If you want to protect routes

// GET: List all insights
export async function GET() {
    try {
        const insights = await prisma.insight.findMany({
            orderBy: {
                publishedAt: 'desc',
            },
        });
        return NextResponse.json(insights);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching insights' }, { status: 500 });
    }
}

// POST: Create a new insight
export async function POST(request: Request) {
    try {
        // const session = await getServerSession();
        // if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const body = await request.json();
        const {
            title,
            slug,
            content,
            coverImage,
            category,
            author,
            authorRole,
            authorImage,
            readTime,
            tags
        } = body;

        // Simple slug check (primitive)
        const newInsight = await prisma.insight.create({
            data: {
                title,
                slug: slug || title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
                content,
                coverImage,
                category,
                author,
                authorRole,
                authorImage,
                readTime,
                tags, // Expected string "Tag1, Tag2"
            },
        });

        return NextResponse.json(newInsight, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error creating insight' }, { status: 500 });
    }
}
