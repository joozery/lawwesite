'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
    const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
    const [careersMenuOpen, setCareersMenuOpen] = useState(false);
    const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileCareersOpen, setMobileCareersOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const navigation = [
        { name: t('nav.home'), href: '/' },
        { name: t('nav.about'), href: '/about', hasSubmenu: true, submenuKey: 'about' },
        { name: t('nav.insights'), href: '/insights' },
        { name: t('nav.services'), href: '/practice-areas', hasSubmenu: true, submenuKey: 'services' },
        { name: t('nav.careers'), href: '/careers', hasSubmenu: true, submenuKey: 'careers' },
        { name: t('nav.contact'), href: '/contact' },
    ];

    const aboutSubmenu = [
        { name: 'OUR FOUNDER', href: '/about/founder' },
        { name: 'OUR TEAM', href: '/about/team' },
    ];

    const servicesSubmenu = [
        { name: 'INCORPORATION & CORPORATE MATTERS', href: '/practice-areas/corporate' },
        { name: 'IMMIGRATION, RELOCATION & WORK PERMIT', href: '/practice-areas/immigration' },
        { name: 'INTELLECTUAL PROPERTY', href: '/practice-areas/ip' },
        { name: 'LITIGATION, MEDIATION & ADR', href: '/practice-areas/litigation' },
        { name: 'TAXATION', href: '/practice-areas/taxation' },
    ];

    const careersSubmenu = [
        { name: 'INTERNSHIP', href: '/careers/internship' },
    ];

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setLangMenuOpen(false);
    };

    return (
        <nav className="bg-transparent text-white absolute top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Desktop Menu - Centered */}
                    <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
                        {navigation.map((item) => {
                            const getSubmenuData = (key: string) => {
                                switch (key) {
                                    case 'about': return aboutSubmenu;
                                    case 'services': return servicesSubmenu;
                                    case 'careers': return careersSubmenu;
                                    default: return [];
                                }
                            };

                            const getMenuOpen = (key: string) => {
                                switch (key) {
                                    case 'about': return aboutMenuOpen;
                                    case 'services': return servicesMenuOpen;
                                    case 'careers': return careersMenuOpen;
                                    default: return false;
                                }
                            };

                            const setMenuOpen = (key: string, value: boolean) => {
                                switch (key) {
                                    case 'about': setAboutMenuOpen(value); break;
                                    case 'services': setServicesMenuOpen(value); break;
                                    case 'careers': setCareersMenuOpen(value); break;
                                }
                            };

                            return item.hasSubmenu ? (
                                <div
                                    key={item.name}
                                    className="relative group"
                                    onMouseEnter={() => setMenuOpen(item.submenuKey!, true)}
                                    onMouseLeave={() => setMenuOpen(item.submenuKey!, false)}
                                >
                                    <Link
                                        href={item.href}
                                        className="flex items-center gap-1 text-xs font-semibold hover:text-secondary transition-colors tracking-wider uppercase"
                                    >
                                        {item.name}
                                        <ChevronDown className="h-3 w-3" />
                                    </Link>

                                    {getMenuOpen(item.submenuKey!) && (
                                        <div className="absolute top-full left-0 pt-1 z-50">
                                            <div className="bg-black/90 backdrop-blur-md border border-white/10 rounded-md shadow-lg py-1 w-64">
                                                {getSubmenuData(item.submenuKey!).map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block px-4 py-2 text-xs font-semibold hover:bg-white/10 hover:text-secondary transition-colors tracking-wider"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-xs font-semibold hover:text-secondary transition-colors tracking-wider uppercase"
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Side - Language Selector */}
                    <div className="hidden md:flex items-center gap-4">
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
                        {navigation.map((item) => {
                            const getSubmenuData = (key: string) => {
                                switch (key) {
                                    case 'about': return aboutSubmenu;
                                    case 'services': return servicesSubmenu;
                                    case 'careers': return careersSubmenu;
                                    default: return [];
                                }
                            };

                            const getMobileMenuOpen = (key: string) => {
                                switch (key) {
                                    case 'about': return mobileAboutOpen;
                                    case 'services': return mobileServicesOpen;
                                    case 'careers': return mobileCareersOpen;
                                    default: return false;
                                }
                            };

                            const setMobileMenuOpen = (key: string, value: boolean) => {
                                switch (key) {
                                    case 'about': setMobileAboutOpen(value); break;
                                    case 'services': setMobileServicesOpen(value); break;
                                    case 'careers': setMobileCareersOpen(value); break;
                                }
                            };

                            return item.hasSubmenu ? (
                                <div key={item.name}>
                                    <div className="flex items-center border-b border-white/10">
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex-1 px-3 py-3 text-sm font-medium hover:text-secondary"
                                        >
                                            {item.name}
                                        </Link>
                                        <button
                                            onClick={() => setMobileMenuOpen(item.submenuKey!, !getMobileMenuOpen(item.submenuKey!))}
                                            className="px-3 py-3 hover:text-secondary"
                                        >
                                            <ChevronDown className={`h-4 w-4 transition-transform ${getMobileMenuOpen(item.submenuKey!) ? 'rotate-180' : ''}`} />
                                        </button>
                                    </div>
                                    {getMobileMenuOpen(item.submenuKey!) && (
                                        <div className="pl-4 space-y-1 mt-1 mb-2">
                                            {getSubmenuData(item.submenuKey!).map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    onClick={() => {
                                                        setIsOpen(false);
                                                        setMobileMenuOpen(item.submenuKey!, false);
                                                    }}
                                                    className="block px-3 py-2 text-xs font-medium hover:text-secondary"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-3 text-sm font-medium hover:text-secondary border-b border-white/10 last:border-0"
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
}
