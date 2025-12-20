import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET: Fetch single insight (by ID - for admin Edit) 
// Note: Frontend public view might query by `slug`, need another endpoint or handle here.
// But for Admin, ID is safer.
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const insight = await prisma.insight.findUnique({
            where: { id },
        });

        if (!insight) return NextResponse.json({ error: 'Not found' }, { status: 404 });

        return NextResponse.json(insight);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching insight' }, { status: 500 });
    }
}

// PATCH: Update insight
export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await request.json();

        // Remove ID from body if present to avoid update errors
        delete body.id;
        delete body.createdAt;
        delete body.updatedAt;

        const updatedInsight = await prisma.insight.update({
            where: { id },
            data: body,
        });

        return NextResponse.json(updatedInsight);
    } catch (error) {
        return NextResponse.json({ error: 'Error updating insight' }, { status: 500 });
    }
}

// DELETE: Delete insight
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        await prisma.insight.delete({
            where: { id },
        });

        return NextResponse.json({ message: 'Deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting insight' }, { status: 500 });
    }
}
