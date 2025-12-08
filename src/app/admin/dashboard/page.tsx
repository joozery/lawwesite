'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { FileText, Users, BookOpen, LogOut, LayoutDashboard } from 'lucide-react';

export default function AdminDashboardPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/admin/login');
        }
    }, [status, router]);

    if (status === 'loading') {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!session) {
        return null;
    }

    const menuItems = [
        {
            title: 'News Management',
            description: 'Create, edit, and delete news articles',
            icon: FileText,
            href: '/admin/news',
            color: 'bg-blue-500',
        },
        {
            title: 'Team Management',
            description: 'Manage team members and attorneys',
            icon: Users,
            href: '/admin/team',
            color: 'bg-green-500',
        },
        {
            title: 'eBooks Management',
            description: 'Upload and manage eBooks',
            icon: BookOpen,
            href: '/admin/ebooks',
            color: 'bg-purple-500',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <div className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <LayoutDashboard className="h-6 w-6 text-primary" />
                        <h1 className="text-2xl font-serif font-bold text-primary">Admin Dashboard</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-600">Welcome, {session.user?.name}</span>
                        <button
                            onClick={() => signOut({ callbackUrl: '/admin/login' })}
                            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                        >
                            <LogOut className="h-4 w-4" />
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-8">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                        Content Management
                    </h2>
                    <p className="text-gray-600">
                        Manage your website content from this dashboard
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 group"
                        >
                            <div className={`${item.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <item.icon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link
                            href="/"
                            className="px-4 py-3 border border-gray-300 rounded hover:bg-gray-50 transition-colors text-center"
                        >
                            View Website
                        </Link>
                        <Link
                            href="/admin/news"
                            className="px-4 py-3 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-center"
                        >
                            Create New Article
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
