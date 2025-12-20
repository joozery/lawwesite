'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MainFooter } from "@/components/main-footer";
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image - Absolute for this page only */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/1472277334.jpg"
                    alt="Background"
                    fill
                    className="object-cover object-top"
                    priority
                />
                {/* Green Overlay */}
                <div className="absolute inset-0 bg-[#0a2608]/90" />
            </div>

            {/* All Content */}
            <div className="relative z-10 min-h-screen">
                {/* Hero Section */}
                <section className="pt-32 pb-16 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-[29px] font-serif font-bold mb-6">
                            {t('about.title')}
                        </h1>

                        <p className="text-[12px] font-bold mb-4 max-w-4xl leading-relaxed">
                            {t('about.hero.intro')}
                        </p>

                        <p className="text-[12px] text-gray-200 max-w-4xl leading-relaxed">
                            {t('about.hero.description')}
                        </p>
                    </div>
                </section>

                {/* Our Commitment Section */}
                <section className="py-20 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                            {/* Left Column - Title */}
                            <div className="lg:col-span-5 flex items-center">
                                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#f9b400]">
                                    {t('about.commitment.title')}
                                </h2>
                            </div>

                            {/* Right Column - Content */}
                            <div className="lg:col-span-7 lg:border-l lg:border-white/30 lg:pl-16 space-y-8">
                                <div>
                                    <h3 className="text-[16px] font-bold text-[#f9b400] mb-3">{t('about.commitment.clientFocus.title')}</h3>
                                    <p className="text-[12px] leading-relaxed text-white">
                                        {t('about.commitment.clientFocus.desc')}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-[16px] font-bold text-[#f9b400] mb-3">{t('about.commitment.excellence.title')}</h3>
                                    <p className="text-[12px] leading-relaxed text-white">
                                        {t('about.commitment.excellence.desc')}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-[16px] font-bold text-[#f9b400] mb-3">{t('about.commitment.global.title')}</h3>
                                    <p className="text-[12px] leading-relaxed text-white">
                                        {t('about.commitment.global.desc')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Areas of Practice Section */}
                <section className="py-20 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-12 text-center">
                            {t('about.practiceAreas.title')}
                        </h2>

                        {/* First Row - 3 Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div className="border border-white/30 p-6 rounded hover:border-[#f9b400] transition-colors">
                                <h3 className="text-[16px] font-bold text-white mb-4">{t('about.practiceAreas.incorporation.title')}</h3>
                                <p className="text-[12px] text-gray-300 mb-4 leading-relaxed">
                                    {t('about.practiceAreas.incorporation.desc')}
                                </p>
                                <Link href="#" className="inline-flex items-center text-[#f9b400] hover:text-[#f9b400]/80 text-[12px] font-semibold">
                                    {t('about.practiceAreas.readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>

                            <div className="border border-white/30 p-6 rounded hover:border-[#f9b400] transition-colors">
                                <h3 className="text-[16px] font-bold text-white mb-4">{t('about.practiceAreas.litigation.title')}</h3>
                                <p className="text-[12px] text-gray-300 mb-4 leading-relaxed">
                                    {t('about.practiceAreas.litigation.desc')}
                                </p>
                                <Link href="#" className="inline-flex items-center text-[#f9b400] hover:text-[#f9b400]/80 text-[12px] font-semibold">
                                    {t('about.practiceAreas.readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>

                            <div className="border border-white/30 p-6 rounded hover:border-[#f9b400] transition-colors">
                                <h3 className="text-[16px] font-bold text-white mb-4">{t('about.practiceAreas.ip.title')}</h3>
                                <p className="text-[12px] text-gray-300 mb-4 leading-relaxed">
                                    {t('about.practiceAreas.ip.desc')}
                                </p>
                                <Link href="#" className="inline-flex items-center text-[#f9b400] hover:text-[#f9b400]/80 text-[12px] font-semibold">
                                    {t('about.practiceAreas.readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Second Row - 2 Cards Centered */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            <div className="border border-white/30 p-6 rounded hover:border-[#f9b400] transition-colors">
                                <h3 className="text-[16px] font-bold text-white mb-4">{t('about.practiceAreas.taxation.title')}</h3>
                                <p className="text-[12px] text-gray-300 mb-4 leading-relaxed">
                                    {t('about.practiceAreas.taxation.desc')}
                                </p>
                                <Link href="#" className="inline-flex items-center text-[#f9b400] hover:text-[#f9b400]/80 text-[12px] font-semibold">
                                    {t('about.practiceAreas.readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>

                            <div className="border border-white/30 p-6 rounded hover:border-[#f9b400] transition-colors">
                                <h3 className="text-[16px] font-bold text-white mb-4">{t('about.practiceAreas.immigration.title')}</h3>
                                <p className="text-[12px] text-gray-300 mb-4 leading-relaxed">
                                    {t('about.practiceAreas.immigration.desc')}
                                </p>
                                <Link href="#" className="inline-flex items-center text-[#f9b400] hover:text-[#f9b400]/80 text-[12px] font-semibold">
                                    {t('about.practiceAreas.readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-20 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                            {/* Left Column - Title */}
                            <div className="lg:col-span-5 flex items-center">
                                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#f9b400]">
                                    {t('about.mission.title')}
                                </h2>
                            </div>

                            {/* Right Column - Content */}
                            <div className="lg:col-span-7 lg:border-l lg:border-white/30 lg:pl-16 space-y-6">


                                <p className="text-[12px] leading-relaxed text-white">
                                    {t('about.mission.paragraph1')}
                                </p>

                                <p className="text-[12px] leading-relaxed text-white">
                                    {t('about.mission.paragraph2')}
                                </p>

                            </div>
                        </div>
                    </div>
                </section>

                {/* Custom Footer for About Page Only */}
                <div className="relative z-20">
                    <MainFooter />
                </div>
            </div>
        </div>
    );
}
