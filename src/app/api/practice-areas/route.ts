import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const practiceAreas = await prisma.practiceArea.findMany({
            orderBy: { order: 'asc' },
            include: {
                attorneys: true
            }
        });
        return NextResponse.json(practiceAreas);
    } catch (error) {
        console.error('Failed to fetch practice areas:', error);
        return NextResponse.json({ error: 'Failed to fetch practice areas' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { attorneyIDs, features, overview, experience, ...rest } = body;

        // Prepare attorney connection
        const attorneyConnect = attorneyIDs && Array.isArray(attorneyIDs)
            ? attorneyIDs.map((id: string) => ({ id }))
            : [];

        const practiceArea = await prisma.practiceArea.create({
            data: {
                ...rest,
                features: JSON.stringify(features),
                overview: typeof overview === 'string' ? overview : JSON.stringify(overview),
                experience: typeof experience === 'string' ? experience : JSON.stringify(experience),
                attorneys: {
                    connect: attorneyConnect
                }
            },
            include: { attorneys: true }
        });

        return NextResponse.json(practiceArea, { status: 201 });
    } catch (error) {
        console.error('Failed to create practice area:', error);
        return NextResponse.json({ error: 'Failed to create practice area' }, { status: 500 });
    }
}
