import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const practiceAreas = await prisma.practiceArea.findMany({
            orderBy: { order: 'asc' },
        });
        return NextResponse.json(practiceAreas);
    } catch (error) {
        console.error('Failed to fetch practice areas:', error);
        return NextResponse.json({ error: 'Failed to fetch practice areas' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, slug, subtitle, description, details, features, image } = body;

        const newPracticeArea = await prisma.practiceArea.create({
            data: {
                title,
                slug,
                subtitle,
                description,
                details,
                features: JSON.stringify(features), // Store as JSON string
                image,
            },
        });

        return NextResponse.json(newPracticeArea);
    } catch (error) {
        console.error('Failed to create practice area:', error);
        return NextResponse.json({ error: 'Failed to create practice area' }, { status: 500 });
    }
}
