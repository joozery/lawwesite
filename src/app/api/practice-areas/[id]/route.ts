import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const idOrSlug = params.id;

    try {
        let practiceArea = await prisma.practiceArea.findUnique({
            where: { id: idOrSlug },
        });

        if (!practiceArea) {
            practiceArea = await prisma.practiceArea.findUnique({
                where: { slug: idOrSlug },
            });
        }

        if (!practiceArea) {
            return NextResponse.json({ error: 'Practice area not found' }, { status: 404 });
        }

        return NextResponse.json(practiceArea);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch practice area' }, { status: 500 });
    }
}

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const body = await request.json();
        const { title, slug, subtitle, description, details, features, image, order } = body;

        const updatedPracticeArea = await prisma.practiceArea.update({
            where: { id: params.id },
            data: {
                title,
                slug,
                subtitle,
                description,
                details,
                features: Array.isArray(features) ? JSON.stringify(features) : features,
                image,
                order
            },
        });

        return NextResponse.json(updatedPracticeArea);
    } catch (error) {
        console.error('Failed to update practice area:', error);
        return NextResponse.json({ error: 'Failed to update practice area' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await prisma.practiceArea.delete({
            where: { id: params.id },
        });

        return NextResponse.json({ message: 'Practice area deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete practice area' }, { status: 500 });
    }
}
