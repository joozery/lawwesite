'use client';

import Image from "next/image";
import { MainFooter } from "@/components/main-footer";

export default function FounderPage() {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image - Same as About page */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/city.png"
                    alt="City Background"
                    fill
                    className="object-cover"
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
                        {/* Top Links */}
                        <div className="flex justify-end gap-6 mb-8 text-xs text-gray-300">
                            <a href="#" className="hover:text-secondary transition-colors">
                                LITIGATION, MEDIATION & ADR
                            </a>
                            <a href="#" className="hover:text-secondary transition-colors">
                                TAXATION
                            </a>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-12">
                            Our Founder
                        </h1>

                        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-stretch">
                            {/* Left: Founder Image */}
                            <div className="flex justify-center lg:justify-start">
                                <div className="relative w-80">
                                    {/* Golden Border Frame */}
                                    <div className="border-4 border-secondary rounded-lg p-2 h-full">
                                        <div className="relative aspect-[3/4] rounded overflow-hidden">
                                            <Image
                                                src="/dej2.png"
                                                alt="Professor Dej-Udom Krairit"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Video */}
                            <div className="flex items-stretch">
                                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-xl flex items-center justify-center">
                                    <div className="text-center">
                                        {/* Play Button Icon */}
                                        <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/20">
                                            <svg className="w-12 h-12 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                        <p className="text-white text-lg font-semibold mb-2">Founder Video</p>
                                        <p className="text-gray-400 text-sm max-w-md">
                                            Replace the YouTube URL in the code<br />
                                            Line 66: src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Founder Bio Section */}
                <section className="pb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-white mb-2">
                                Professor (Dr.) Dej-Udom Krairit, Esq.
                            </h2>
                            <h3 className="text-lg font-semibold text-secondary mb-6">
                                Chief Executive Officer, Dej-Udom & Associates Limited
                            </h3>

                            <p className="text-gray-200 text-sm leading-relaxed">
                                With an unbroken legal career spanning more than 50 years, Professor Dej-Udom Krairit, Esq. has shaped Thai jurisprudence, international legal practice and public policy for more than five decades. As founder and CEO of Dej-Udom & Associates, he leads a multidisciplinary group of companies headquartered in Bangkok, renowned for pragmatic, business-focused legal solutions. Beyond the courtroom, he is an educator, legislator and international bar leader whose contributions have advanced the rule of law in Thailand and across the Asia-Pacific region.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Credentials Section */}
                <section className="pb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Column 1: Qualifications & Academic Distinction */}
                            <div>
                                <h3 className="text-xl font-bold text-secondary mb-4">
                                    Qualifications & Academic Distinction
                                </h3>
                                <ul className="space-y-2 text-gray-200 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span><span className="font-semibold">Barrister-at-Law,</span> The Thai Bar (1969)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span><span className="font-semibold">LL.B,</span> Faculty of Law, Thammasat University (1968)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span><span className="font-semibold">Professor of International Trade Law,</span> Thammasat University (from 2017)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span><span className="font-semibold">Honorary Doctor of Laws (LL.D),</span> Thammasat University (2009)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Council Member, Legal Education Institute, The Thai Bar (2020 – present)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Former Steering-Committee Chair, Institute of Advocacy Training, Lawyers Council of Thailand</span>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-bold text-secondary mb-4 mt-8">
                                    Professional Leadership
                                </h3>
                                <ul className="space-y-2 text-gray-200 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span><span className="font-semibold">President,</span> Lawyers Council of Thailand under the Royal Patronage (former)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span><span className="font-semibold">Council Member,</span> The Thai Bar under the Royal Patronage (2024 – present)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span><span className="font-semibold">President,</span> Inter-Pacific Bar Association (1999 – 2000)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Registered <span className="font-semibold">Mediator</span> (ADR Office, Office of the Judiciary)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Registered <span className="font-semibold">Arbitrator</span> with:</span>
                                    </li>
                                    <li className="ml-6 flex items-start gap-2">
                                        <span className="text-secondary mt-1">◦</span>
                                        <span>Arbitration Institute, Office of the Judiciary</span>
                                    </li>
                                    <li className="ml-6 flex items-start gap-2">
                                        <span className="text-secondary mt-1">◦</span>
                                        <span>Thai Arbitration Center (THAC), Ministry of Justice</span>
                                    </li>
                                    <li className="ml-6 flex items-start gap-2">
                                        <span className="text-secondary mt-1">◦</span>
                                        <span>Office of Insurance Commission (OIC)</span>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-bold text-secondary mb-4 mt-8">
                                    Major Awards
                                </h3>
                                <ul className="space-y-2 text-gray-200 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Rule of Law Award, American Bar Association (2007)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Best Lawyer Award, Lawyers Council of Thailand (2012)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Plaque of Distinction, Inter-Pacific Bar Association (2012)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Thai Ministry of Commerce Plaque for US–Thailand Trade Negotiations (1993)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Certificates of Appreciation, The White House Fellows (1999) & The World Bank Group (2019)</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 2: Legislative & Public Service, Honours, Human-Rights */}
                            <div>
                                <h3 className="text-xl font-bold text-secondary mb-4">
                                    Legislative & Public Service
                                </h3>
                                <ul className="space-y-2 text-gray-200 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span><span className="font-semibold">Senator of the Kingdom of Thailand</span> (2011 – 2014)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Member, Constitution Drafting Committee (2007)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Vice-President, Senate Committee on Finance, Banking & Financial Institutions</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Chair, Sub-Committee on Law Reform in Compliance with the Constitution (2007)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Second Vice-President, Committee for Reviewing Bills, National Assembly</span>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-bold text-secondary mb-4 mt-8">
                                    Honours & Decorations
                                </h3>
                                <ul className="space-y-2 text-gray-200 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span><span className="font-semibold">Knight Grand Cross (First Class),</span> Most Noble Order of the Crown of Thailand</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span><span className="font-semibold">Knight Commander (Second Class),</span> Most Exalted Order of the White Elephant</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span><span className="font-semibold">Companion (Fourth Class),</span> Most Admirable Order of the Direkgunabhorn</span>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-bold text-secondary mb-4 mt-8">
                                    Human-Rights & Community Engagement
                                </h3>
                                <ul className="space-y-2 text-gray-200 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Chairman, <span className="font-semibold">Foundation for Good Governance of Laws</span> (2017 – present)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Executive Board Member, <span className="font-semibold">International Chamber of Commerce Thailand</span> (2020 – 2023)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Board Member & Second Vice-President, <span className="font-semibold">Press Council of Thailand</span> (2004 – 2009)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Founding Member, World Association of Lawyers "World Peace Through Law" Centre (1979)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Browse Books & Articles */}
                        <div className="mt-12 text-center">
                            <div className="inline-block mb-4">
                                <div className="w-24 h-24 mx-auto mb-4 relative">
                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                        <path d="M20,30 L50,20 L80,30 L80,70 L50,80 L20,70 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-secondary" />
                                        <path d="M30,40 L50,35 L70,40 L70,65 L50,70 L30,65 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-secondary" />
                                        <line x1="50" y1="35" x2="50" y2="70" stroke="currentColor" strokeWidth="2" className="text-secondary" />
                                        <line x1="35" y1="45" x2="65" y2="45" stroke="currentColor" strokeWidth="1" className="text-white" />
                                        <line x1="35" y1="52" x2="65" y2="52" stroke="currentColor" strokeWidth="1" className="text-white" />
                                        <line x1="35" y1="59" x2="65" y2="59" stroke="currentColor" strokeWidth="1" className="text-white" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <a
                                    href="#"
                                    className="inline-block text-white hover:text-secondary transition-colors border-b-2 border-secondary pb-1 font-semibold"
                                >
                                    Browse Professor Dej-Udom Krairit<br />Books & Articles
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Custom Footer */}
                <div className="relative z-20">
                    <MainFooter />
                </div>
            </div>
        </div>
    );
}
