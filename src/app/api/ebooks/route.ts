import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';

// GET: List all eBooks
export async function GET() {
    try {
        const ebooks = await prisma.ebook.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        return NextResponse.json(ebooks);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching ebooks' }, { status: 500 });
    }
}

// POST: Create a new eBook
export async function POST(request: Request) {
    try {
        const session = await getServerSession();
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { title, description, category, fileUrl, coverImage } = body;

        const newEbook = await prisma.ebook.create({
            data: {
                title,
                description,
                category,
                fileUrl,
                coverImage,
            },
        });

        return NextResponse.json(newEbook, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Error creating ebook' }, { status: 500 });
    }
}
