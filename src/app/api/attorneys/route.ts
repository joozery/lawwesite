import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const attorneys = await prisma.attorney.findMany({
            orderBy: { order: 'asc' },
        });
        return NextResponse.json(attorneys);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch attorneys' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, role, email, slug, ...rest } = body;

        // Check slug uniqueness
        const existing = await prisma.attorney.findUnique({
            where: { slug }
        });

        if (existing) {
            return NextResponse.json({ error: 'Slug already exists' }, { status: 400 });
        }

        const attorney = await prisma.attorney.create({
            data: {
                name,
                role,
                email,
                slug,
                ...rest
            },
        });
        return NextResponse.json(attorney, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create attorney' }, { status: 500 });
    }
}
