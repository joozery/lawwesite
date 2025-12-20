'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import {
    Users,
    BookOpen,
    FileText,
    Briefcase,
    GraduationCap,
    Mail,
    Settings,
    LayoutDashboard,
    LogOut,
    ChevronRight
} from 'lucide-react';
import { useSession } from 'next-auth/react';

export function AdminSidebar() {
    const pathname = usePathname();
    const { t } = useTranslation();
    const { data: session } = useSession();

    const menuItems = [
        {
            category: t('admin.sidebar.overview'),
            items: [
                { name: t('admin.sidebar.dashboard'), icon: LayoutDashboard, href: '/admin/dashboard' },
            ]
        },
        {
            category: t('admin.sidebar.contentManagement'),
            items: [
                { name: t('admin.sidebar.teamMembers'), icon: Users, href: '/admin/team', count: 4 },
                { name: t('admin.sidebar.booksArticles'), icon: BookOpen, href: '/admin/ebooks', count: 3 },
                { name: t('admin.sidebar.insightsNews'), icon: FileText, href: '/admin/insights', count: 3 },
                { name: t('admin.sidebar.practiceAreas'), icon: Briefcase, href: '/admin/practice-areas', count: 5 },
            ]
        },
        {
            category: t('admin.sidebar.operations'),
            items: [
                { name: t('admin.sidebar.careers'), icon: GraduationCap, href: '/admin/careers', count: 3 },
                { name: t('admin.sidebar.contactMessages'), icon: Mail, href: '/admin/messages', count: 3, alert: true },
            ]
        },
        {
            category: t('admin.sidebar.system'),
            items: [
                { name: t('admin.sidebar.adminUsers'), icon: Settings, href: '/admin/users', count: 4 },
            ]
        }
    ];

    return (
        <aside className="w-72 bg-[#1a1c20] text-gray-300 flex flex-col fixed left-0 top-0 h-screen border-r border-[#2a2d35] shadow-2xl z-50">
            {/* Brand Header */}
            <div className="h-20 flex items-center px-6 border-b border-[#2a2d35] bg-[#15171a]">
                <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#00A651] to-[#00703c] rounded-xl flex items-center justify-center text-white font-serif font-bold text-2xl shadow-lg shadow-green-900/20">
                        D
                    </div>
                    <div>
                        <h1 className="font-bold text-white text-base tracking-tight leading-none">Dej-Udom</h1>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 font-medium">Attorneys at Law</p>
                    </div>
                </div>
            </div>

            {/* Scrollable Menu Area */}
            <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8 scrollbar-hide">
                {menuItems.map((section, idx) => (
                    <div key={idx}>
                        <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 px-4">
                            {section.category}
                        </h3>
                        <div className="space-y-1">
                            {section.items.map((item) => {
                                const isActive = pathname === item.href || (item.href !== '/admin/dashboard' && pathname.startsWith(item.href));
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`group relative flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ease-in-out border border-transparent ${isActive
                                            ? 'bg-[#00A651]/10 text-[#00A651] border-[#00A651]/20 font-medium'
                                            : 'hover:bg-[#25282e] hover:text-white text-gray-400'
                                            }`}
                                    >
                                        {/* Active Indicator Bar */}
                                        {isActive && (
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#00A651] rounded-r-full" />
                                        )}

                                        <div className="flex items-center gap-3.5">
                                            <item.icon
                                                className={`w-5 h-5 transition-colors ${isActive ? 'text-[#00A651]' : 'text-gray-500 group-hover:text-white'
                                                    }`}
                                                strokeWidth={1.5}
                                            />
                                            <span className="text-sm tracking-wide">{item.name}</span>
                                        </div>

                                        {/* Badge / Count */}
                                        {item.count !== undefined && (
                                            <div className="flex items-center gap-2">
                                                {item.alert && <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>}
                                                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-md min-w-[20px] text-center transition-colors ${isActive
                                                    ? 'bg-[#00A651] text-white shadow-sm'
                                                    : 'bg-[#2a2d35] text-gray-500 group-hover:bg-[#343740] group-hover:text-gray-200'
                                                    }`}>
                                                    {item.count}
                                                </span>
                                            </div>
                                        )}

                                        {/* Hover Arrow (Subtle) */}
                                        {!isActive && (
                                            <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gray-600" />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* User Profile Footer */}
            <div className="p-4 border-t border-[#2a2d35] bg-[#15171a]">
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#25282e] cursor-pointer transition-colors group">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 border border-gray-600 flex items-center justify-center text-xs font-bold text-white shadow-sm">
                        {session?.user?.name?.[0] || 'A'}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">{session?.user?.name || 'Administrator'}</p>
                        <p className="text-xs text-gray-500 truncate group-hover:text-gray-400">{session?.user?.email}</p>
                    </div>
                    <LogOut className="w-4 h-4 text-gray-500 group-hover:text-red-400 transition-colors" />
                </div>
            </div>
        </aside>
    );
}
