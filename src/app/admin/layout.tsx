'use client';

import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminHeader } from "@/components/admin/admin-header";
import { usePathname } from 'next/navigation';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    // Check if current page is login page
    const isLoginPage = pathname === '/admin/login';

    // If it's the login page, render only the children (the login form) without layout wrapper
    if (isLoginPage) {
        return (
            <div className="min-h-screen bg-gray-50/50">
                {children}
            </div>
        );
    }

    // Otherwise, render the full admin dashboard layout
    return (
        <div className="min-h-screen bg-gray-50/50 flex">
            {/* Sidebar - Fixed Left */}
            <AdminSidebar />

            {/* Main Content Area - Pushed right by sidebar width */}
            <div className="flex-1 flex flex-col ml-72 transition-all duration-300 ease-in-out">
                {/* Header - Fixed Top */}
                <AdminHeader />

                {/* Page Content - Scrollable */}
                <main className="flex-1 p-8 overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}
