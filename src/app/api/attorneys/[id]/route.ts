import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const attorney = await prisma.attorney.findFirst({
            where: {
                OR: [
                    { id: params.id },
                    { slug: params.id }
                ]
            }
        });

        if (!attorney) {
            return NextResponse.json({ error: 'Attorney not found' }, { status: 404 });
        }

        return NextResponse.json(attorney);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch attorney' }, { status: 500 });
    }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    try {
        const body = await req.json();
        const attorney = await prisma.attorney.update({
            where: { id: params.id },
            data: body,
        });
        return NextResponse.json(attorney);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update attorney' }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        await prisma.attorney.delete({
            where: { id: params.id },
        });
        return NextResponse.json({ message: 'Attorney deleted' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete attorney' }, { status: 500 });
    }
}
