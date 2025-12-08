'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SearchBar } from './search-bar';
import { useTranslation } from 'react-i18next';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const navigation = [
        { name: t('nav.home'), href: '/' },
        { name: t('nav.about'), href: '/about' },
        { name: t('nav.insights'), href: '/insights' },
        { name: t('nav.services'), href: '/practice-areas' },
        { name: t('nav.careers'), href: '/careers' },
        { name: t('nav.contact'), href: '/contact' },
    ];

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setLangMenuOpen(false);
    };

    return (
        <nav className="bg-black/30 backdrop-blur-md text-white shadow-lg sticky top-0 z-50 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Desktop Menu - Centered */}
                    <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-xs font-medium hover:text-secondary transition-colors tracking-wider"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side - Language Selector */}
                    <div className="hidden md:flex items-center gap-4">
                        <SearchBar />
                        <div className="relative">
                            <button
                                onClick={() => setLangMenuOpen(!langMenuOpen)}
                                className="flex items-center gap-1 hover:text-secondary transition-colors"
                            >
                                <span className="text-xl">{i18n.language === 'en' ? '🇬🇧' : '🇹🇭'}</span>
                                <ChevronDown className="h-4 w-4" />
                            </button>

                            {langMenuOpen && (
                                <div className="absolute right-0 mt-2 w-32 bg-black/90 backdrop-blur-md border border-white/10 rounded-md shadow-lg py-1">
                                    <button
                                        onClick={() => changeLanguage('en')}
                                        className="w-full px-4 py-2 text-left text-sm hover:bg-white/10 flex items-center gap-2"
                                    >
                                        <span>🇬🇧</span> English
                                    </button>
                                    <button
                                        onClick={() => changeLanguage('th')}
                                        className="w-full px-4 py-2 text-left text-sm hover:bg-white/10 flex items-center gap-2"
                                    >
                                        <span>🇹🇭</span> ไทย
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center ml-auto">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white p-2 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-sm shadow-lg absolute w-full left-0 border-t border-white/10">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 text-sm font-medium hover:text-secondary border-b border-white/10 last:border-0"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
