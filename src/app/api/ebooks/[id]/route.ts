import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';

// PATCH: Update eBook details
export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await getServerSession();
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { id } = await params;
        const body = await request.json();
        const { title, description, category, fileUrl, coverImage } = body;

        const updatedEbook = await prisma.ebook.update({
            where: { id },
            data: {
                title,
                description,
                category,
                fileUrl,
                coverImage,
            },
        });

        return NextResponse.json(updatedEbook);
    } catch (error) {
        return NextResponse.json({ error: 'Error updating ebook' }, { status: 500 });
    }
}

// DELETE: Remove an eBook
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await getServerSession();
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { id } = await params;

        await prisma.ebook.delete({
            where: { id },
        });

        return NextResponse.json({ message: 'Ebook deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting ebook' }, { status: 500 });
    }
}
