'use client';

import { Bell, ChevronDown, Globe, LogOut, User, Settings } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function AdminHeader() {
    const { data: session } = useSession();
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8 sticky top-0 z-10 w-full">
            <div className="flex items-center gap-4">
                {/* Brand Icon or Breadcrumb Placeholder */}
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white font-bold">D</div>
                <div>
                    <h2 className="font-bold text-gray-900 leading-none">Dej-Udom & Associates</h2>
                    <p className="text-xs text-gray-500">{t('admin.sidebar.dashboard')}</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                {/* Notifications */}
                <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </button>

                {/* Language Switcher */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="flex items-center gap-1 text-sm font-medium text-gray-600 px-3 py-1.5 rounded-full hover:bg-gray-100 cursor-pointer">
                            <Globe className="w-4 h-4" />
                            <span className="uppercase">{i18n.language === 'th' ? 'TH' : 'EN'}</span>
                            <ChevronDown className="w-3 h-3" />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => changeLanguage('en')}>
                            🇬🇧 English
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => changeLanguage('th')}>
                            🇹🇭 ไทย
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="h-8 w-px bg-gray-200 mx-2"></div>

                {/* User Profile */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="flex items-center gap-3 pl-2 pr-0 hover:bg-transparent">
                            <Avatar className="h-9 w-9 border border-gray-200">
                                <AvatarImage src={session?.user?.image || ''} alt={session?.user?.name || 'Admin'} />
                                <AvatarFallback className="bg-gray-900 text-white">
                                    {session?.user?.name?.[0] || 'A'}
                                </AvatarFallback>
                            </Avatar>
                            <div className="text-left hidden md:block">
                                <p className="text-sm font-semibold text-gray-900 leading-none">{session?.user?.name || 'Admin'}</p>
                            </div>
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel>{t('admin.header.profile')}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            {t('admin.header.profile')}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            {t('admin.header.settings')}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600 focus:text-red-600" onClick={() => signOut({ callbackUrl: '/admin/login' })}>
                            <LogOut className="mr-2 h-4 w-4" />
                            {t('admin.header.logout')}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
